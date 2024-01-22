import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { useBasketContext } from '../contexts/BasketContext';
import HeaderSecondary from '../components/HeaderSecondary';
import CustomText from '../components/CustomText';
import SizeOption from '../components/SizeOption';
import Button from '../components/Button';
import { LogBox } from 'react-native';
import images from '../themes/images';
LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
]);

const ItemScreen = ({ navigation, route }) => {
	const { item, imgSrc } = route.params;
	const [milkValue, setMilkValue] = useState(
		item?.item?.milks?.items[0].milk
	);
	//const [shotsValue, setShotsValue] = useState([]);
	const [size, setSize] = useState(item?.item?.sizes?.items[0].size);
	const [price, setPrice] = useState(item?.item?.price);
	const [basePrice, setBasePrice] = useState(item?.item?.price);

	const { addDrinkToBasket } = useBasketContext();

	const updatePrice = () => {
		const shotsPrice = 0;
		const sizePrice = size?.extraCost;
		let finalPrice = basePrice + sizePrice + shotsPrice;
		finalPrice = Math.round(finalPrice * 100) / 100;
		setPrice(finalPrice);
	};

	const prepareItem = () => {
		const obj = {
			drink: item?.item,
			milk: milkValue,
			size: size,
			price: price,
		};
		return obj;
	};

	useEffect(() => {
		updatePrice();
		console.log(imgSrc);
	}, [size]);

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
						<Image
							source={images[imgSrc]}
							style={{
								width: 250,
								height: 180,
								resizeMode: 'contain',
							}}
						/>
						<CustomText
							style={{
								fontSize: typography.size.XL,
								color: colors.common.TEXT2,
							}}
						>
							{item?.item?.name}
						</CustomText>
						<CustomText
							style={{
								textAlign: 'center',
								fontSize: typography.size.M,
								color: colors.common.DETAILS,
							}}
						>
							{item?.item?.description}
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
								{item?.item?.sizes?.items
									?.sort(
										(a, b) => a.size.value - b.size.value
									)
									.map((obj, index) => (
										<SizeOption
											setSize={setSize}
											size={size}
											value={obj.size}
											key={index}
										/>
									))}
							</View>
						</View>

						{item?.item?.milks?.items.length !== 1 ? (
							<>
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
										{item?.item?.milks?.items
											?.sort(
												(a, b) =>
													a.milk.name - b.milk.name
											)
											.map((obj, index) => (
												<SizeOption
													milks
													setSize={setMilkValue}
													size={milkValue}
													value={obj.milk}
													key={index}
												/>
											))}
									</View>
								</View>
							</>
						) : (
							<></>
						)}
					</View>
				</ScrollView>
				<View
					style={{
						alignItems: 'center',

						width: '100%',
					}}
				>
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
