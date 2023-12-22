import { createContext, useContext, useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { getUser, listOrders } from '../graphql/queries';
import { updateUser } from '../graphql/mutations';
import { onCreateBasket, onCreateOrder } from '../graphql/subscriptions';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [dbUser, setDbUser] = useState(null);
	const [sub, setSub] = useState(null);
	const [store, setStore] = useState(null);
	const [orders, setOrders] = useState([]);
	const [pastOrders, setPastOrders] = useState([]);
	useEffect(() => {
		if (authUser) {
			setSub(authUser?.attributes?.sub);
			fetchDbUser();
			fetchUserOrders();
		}
	}, [authUser, store]);

	const setDefaultStore = async (id) => {
		try {
			const res = await API.graphql(
				graphqlOperation(updateUser, {
					input: {
						id: sub,
						userDefaultStoreId: id,
					},
				})
			);
			setStore(res.data.updateUser.userDefaultStoreId);
		} catch (e) {
			console.warn(e);
		}
	};

	const fetchDbUser = async () => {
		const result = await API.graphql(
			graphqlOperation(getUser, { id: authUser?.attributes?.sub })
		);
		setDbUser(result?.data?.getUser);
		setStore(result?.data?.getUser?.userDefaultStoreId);
	};

	const fetchUserOrders = async () => {
		try {
			await API.graphql(
				graphqlOperation(listOrders, {
					input: {
						userOrdersId: sub,
					},
				})
			).then((response) => {
				const tempOrders = [];
				const tempPastOrders = [];
				response?.data?.listOrders?.items.map((elem) => {
					if (
						elem.status === 'completed' ||
						elem.status === 'canceled'
					) {
						tempPastOrders.push(elem);
					} else tempOrders.push(elem);
				});
				const compareDates = (a, b) =>
					new Date(b.createdAt) - new Date(a.createdAt);

				tempOrders.sort(compareDates);
				tempPastOrders.sort(compareDates);
				setOrders(tempOrders);
				setPastOrders(tempPastOrders);
			});
		} catch (e) {
			console.warn(e);
		}
	};

	
	return (
		<AuthContext.Provider
			value={{
				authUser,
				dbUser,
				sub,
				setAuthUser,
				setDefaultStore,
				orders,
				pastOrders,
				fetchUserOrders,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
