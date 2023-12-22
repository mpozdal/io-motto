import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { useBasketContext } from '../contexts/BasketContext';
import HeaderSecondary from '../components/HeaderSecondary';
import CustomText from '../components/CustomText';
import SizeOption from '../components/SizeOption';
import Button from '../components/Button';
const EditScreen = ({ navigation, route }) => {
	const { item } = route.params;
	console.log(item);
	const [milkValue, setMilkValue] = useState(item?.item?.milks?.items[0]);
	const [shotsValue, setShotsValue] = useState([]);
	const [size, setSize] = useState(item?.item?.sizes?.items[0]);
	const [price, setPrice] = useState(item?.item?.price);
	const [basePrice, setBasePrice] = useState(item?.item?.price);

	const [milks, setMilks] = useState([]);
	const [shots, setShots] = useState(item?.item?.flavorShots?.items);

	const { addDrinkToBasket } = useBasketContext();

	const updatePrice = () => {
		const shotsPrice = 0;

		const sizePrice = size.extraCost;
		let finalPrice = basePrice + sizePrice + shotsPrice;
		finalPrice = Math.round(finalPrice * 100) / 100;
		setPrice(finalPrice);
	};

	const prepareItem = () => {
		const obj = {
			drink: item.item,
			milk: milkValue,
			size: size,
			price: price,
		};
		return obj;
	};

	useEffect(() => {
		//updatePrice();
	}, [size, shotsValue]);

	const changeData = () => {
		const temp = [];
		const temp2 = [];
		item.item.milks.items.map((elem) => {
			const obj = {
				label: elem.name,
				name: elem.name,
				id: elem.id,
			};
			temp.push(obj);
		});
		item.item.flavorShots.items.map((elem) => {
			const obj = {
				label: elem.name,
				value: elem.name,
				cost: elem.extraCost,
			};
			temp2.push(obj);
		});
		setMilks(temp);
		setShots(temp2);
	};
	useEffect(() => {
		//changeData();
	}, []);

	return <CustomText>abcd</CustomText>;
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		width: '90%',

		justifyContent: 'space-between',
		alignItems: 'center',
	},
	scroll: {
		width: '100%',
		flex: 1,
	},
});

export default EditScreen;
