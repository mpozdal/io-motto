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
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
]);

const ItemScreen = ({ navigation, route }) => {
	const { item } = route.params;

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
		updatePrice();
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
		changeData();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<HeaderSecondary
				text="ADD TO CART"
				stack
				navigation={navigation}
				cart
			/>
			<View style={styles.container}>
				<ScrollView
					style={styles.scroll}
					showsVerticalScrollIndicator={false}
				>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							paddingTop: 50,
							gap: 15,
						}}
					>
						<Image source={require('../assets/coffee1.png')} />
						<CustomText
							style={{
								fontSize: typography.size.XL,
								color: colors.common.TEXT2,
							}}
						>
							{item.item.name}
						</CustomText>
						<CustomText
							style={{
								textAlign: 'center',
								fontSize: typography.size.M,
								color: colors.common.DETAILS,
							}}
						>
							{item.item.description}
						</CustomText>
						<CustomText style={{ fontSize: typography.size.XL }}>
							{price} zł
						</CustomText>
						<View style={{ width: '100%' }}>
							<CustomText
								style={{ fontSize: typography.size.XL }}
							>
								Size options
							</CustomText>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-around',
									gap: 10,
									marginTop: 20,
								}}
							>
								{item.item.sizes.items.map((obj) => (
									<SizeOption
										setSize={setSize}
										size={size}
										value={obj}
										key={obj.id}
									/>
								))}
							</View>
						</View>

						<View style={{ width: '100%', flex: 1 }}>
							<CustomText
								style={{ fontSize: typography.size.XL }}
							>
								Select milk
							</CustomText>
							<View
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: 10,
									marginTop: 20,
								}}
							>
								{item.item.milks.items.map((obj) => (
									<SizeOption
										milks
										setSize={setMilkValue}
										size={milkValue}
										value={obj}
										key={obj.id}
									/>
								))}
								{/* <DropDownPicker
									open={milkOpen}
									value={milkValue}
									items={milks}
									setOpen={setMilkOpen}
									setValue={setMilkValue}
								/> */}
								{/* <CustomText>Flavor shots</CustomText>
								<DropDownPicker
									open={shotsOpen}
									value={shotsValue}
									items={shots}
									setOpen={setShotsOpen}
									setValue={setShotsValue}
									setItems={setMilks}
								/> */}
							</View>
						</View>
					</View>
					<View style={{ alignItems: 'center' }}>
						<Button
							text="Add"
							add
							log
							onPress={() => {
								const prepareData = prepareItem();
								navigation.navigate('Item', { item: item });

								addDrinkToBasket(prepareData, item);
							}}
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
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

export default ItemScreen;
