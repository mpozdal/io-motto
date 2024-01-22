import { createContext, useContext, useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listDrinks, listOrders } from '../graphql/queries';
import { useAuthContext } from './AuthContext';
const HomeContext = createContext({});

const HomeContextProvider = ({ children }) => {
	const { orders, pastOrders } = useAuthContext();
	const [drinks, setDrinks] = useState(null);
	const [lastOrder, setLastOrder] = useState(null);
	useEffect(() => {
		fetchDrinks();
	}, []);
	useEffect(() => {
		if (orders) fetchLastOrder();
	}, [orders, pastOrders]);
	const fetchDrinks = async () => {
		const data = await API.graphql(
			graphqlOperation(listDrinks, {
				limit: 4,
			})
		);
		setDrinks(data.data.listDrinks.items);
	};
	const fetchLastOrder = () => {
		if (orders.length == 0 && pastOrders.length == 0) {
		} else if (orders.length > 0) {
			setLastOrder(orders[0]);
		} else if (pastOrders.length > 0) {
			setLastOrder(pastOrders[0]);
		}
	};

	return (
		<HomeContext.Provider value={{ drinks, lastOrder }}>
			{children}
		</HomeContext.Provider>
	);
};

export default HomeContextProvider;

export const useHomeContext = () => useContext(HomeContext);
