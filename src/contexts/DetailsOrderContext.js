import { createContext, useContext, useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getOrder } from '../graphql/queries';
import { updateOrder } from '../graphql/mutations';

const DetailsOrderContext = createContext({});

const DetailsOrderContextProvider = ({ children }) => {
	const [orderDetails, setOrderDetails] = useState(false);
	const [loading, setLoading] = useState(false);
	const [orderStatus, setOrderStatus] = useState(null);


	const fetchOrderDetails = async (id) => {
		setLoading(true);
		console.log(id);
		try {
			const data = await API.graphql(
				graphqlOperation(getOrder, {
					id: id,
				})
			);
			setOrderDetails(data.data.getOrder);
		} catch (e) {
			console.warn(e);
		} finally {
			setLoading(false);
		}
	};
	const fetchOrderStatus = async (id) => {
		try {
			const data = await API.graphql(
				graphqlOperation(getOrder, {
					id: id,
				})
			);
			setOrderStatus(data.data.getOrder.status);
		} catch (e) {
			console.warn(e);
		}
	};

	const cancelOrder = async (id) => {
		setLoading(true);
		fetchOrderStatus(id);
		if (orderStatus == 'paid') {
			try {
				await API.graphql(
					graphqlOperation(updateOrder, {
						input: {
							id: id,
							status: 'cancelled',
						},
					})
				);
			} catch (e) {
				console.warn(e);
			} finally {
				setLoading(false);
			}
		} else {
			setLoading(false);
		}
	};

	return (
		<DetailsOrderContext.Provider
			value={{ orderDetails, fetchOrderDetails, loading, cancelOrder }}
		>
			{children}
		</DetailsOrderContext.Provider>
	);
};

export default DetailsOrderContextProvider;

export const useDetailsOrderContext = () => useContext(DetailsOrderContext);
