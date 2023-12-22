import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
	const [basket, setBasket] = useState(null);
	const [basketContent, setBasketContent] = useState([]);
	const [price, setPrice] = useState(0);
	const [update, setUpdate] = useState(false);

	const totalPrice = () => {
		let tempPrice = 0;
		basketContent.map((elem) => {
			tempPrice += elem.price;
		});
		setPrice(tempPrice);
	};

	useEffect(() => {
		totalPrice();
	}, [basketContent, update]);

	const addDrinkToBasket = (prepareData) => {
		const obj = {
			id: uuidv4(),
			name: prepareData.drink.name,
			drinkId: prepareData.drink.id,
			price: prepareData.price,
			size: prepareData.size.value,
			sizeId: prepareData.size.id,
			milk: prepareData.milk.name,
			milkId: prepareData.milk.id,
		};

		const temp = basketContent;
		temp.push(obj);
		setBasketContent(temp);
		setUpdate(true);
	};

	const removeItemFromBasket = (id) => {
		const i = basketContent.findIndex((elem) => elem.id === id);
		const temp = basketContent;
		temp.splice(i, 1);
		setBasketContent(temp);
		setUpdate(true);
	};

	return (
		<BasketContext.Provider
			value={{
				basketContent,
				basket,
				addDrinkToBasket,
				removeItemFromBasket,
				price,
				update,
				setUpdate,
				setBasketContent,
			}}
		>
			{children}
		</BasketContext.Provider>
	);
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
