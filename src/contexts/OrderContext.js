import { createContext, useContext, useEffect, useState } from 'react';
import { useBasketContext } from './BasketContext';
import { useAuthContext } from './AuthContext';
import { API, graphqlOperation } from 'aws-amplify';
import { createOrder, createOrderItem } from '../graphql/mutations';

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
	const { basketContent, price, setBasketContent } = useBasketContext();
	const { sub, dbUser, fetchUserOrders } = useAuthContext();
	const [ordering, setOrdering] = useState(false);

	const handleCreateOrder = async () => {
		try {
			setOrdering(true);
			if (basketContent.length > 0 && basketContent.length < 10) {
				await API.graphql(
					graphqlOperation(createOrder, {
						input: {
							orderStoreId: dbUser.userDefaultStoreId,
							userOrdersId: sub,
							status: 'paid',
							total: price,
							userID: sub,
						},
					})
				).then((response) => {
					const orderId = response.data.createOrder.id;

					try {
						basketContent.map(async (elem) => {
							await API.graphql(
								graphqlOperation(createOrderItem, {
									input: {
										orderID: orderId,
										orderItemDrinkId: elem.drinkId,
										orderItemSizeId: elem.sizeId,
										orderItemMilkId: elem.milkId,
										price: elem.price,
									},
								})
							);
						});
					} catch (e) {
						console.warn(e);
					}
				});
			}
		} catch (e) {
			console.warn(e);
		} finally {
			setBasketContent([]);
			setTimeout(() => {
				setOrdering(false);
				fetchUserOrders();
			}, 3000);
		}
	};

	return (
		<OrderContext.Provider value={{ handleCreateOrder, ordering }}>
			{children}
		</OrderContext.Provider>
	);
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
