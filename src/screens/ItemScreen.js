import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
	StyleSheet,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';
import CustomText from '../components/CustomText';
import SizeOption from '../components/SizeOption';
import Button from '../components/Button';
const ItemScreen = ({ navigation, route }) => {
	const { item } = route.params;

	const [milkOpen, setMilkOpen] = useState(false);
	const [milkValue, setMilkValue] = useState('2%');
	const [shotsOpen, setShotsOpen] = useState(false);
	const [shotsValue, setShotsValue] = useState([]);
	const [size, setSize] = useState(item?.item?.sizes?.items[0]);

	const [milks, setMilks] = useState([]);
	const [shots, setShots] = useState(item?.item?.flavorShots?.items);

	const changeData = () => {
		const temp = [];
		const temp2 = [];
		item.item.milks.items.map((elem) => {
			const obj = {
				label: elem.name,
				value: elem.name,
			};
			temp.push(obj);
		});
		item.item.flavorShots.items.map((elem) => {
			const obj = {
				label: elem.name,
				value: elem.name,
			};
			temp2.push(obj);
		});
		setMilks(temp);
		setShots(temp2);
	};
	useEffect(() => {
		changeData();
	}, []);

	const addItemToCart = () => {
		console.log('added to cart');
	};
	const handleSetSize = () => {
		console.log('size');
	};

	return (
		<View style={{ flex: 1 }}>
			<HeaderSecondary text="ADD TO CART" stack navigation={navigation} />
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
							{item.item.price} zł
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
								{item.item.sizes.items.map((size, index) => (
									<SizeOption
										value={size.value + ' ml'}
										key={size.id}
									/>
								))}
							</View>
						</View>

						<View style={{ width: '100%' }}>
							<CustomText
								style={{ fontSize: typography.size.XL }}
							>
								What's included
							</CustomText>
							<View
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: 10,
									marginTop: 20,
								}}
							>
								<CustomText>Milk</CustomText>
								<DropDownPicker
									open={milkOpen}
									value={milkValue}
									items={milks}
									setOpen={setMilkOpen}
									setValue={setMilkValue}
									z-index={6000}
								/>
								<CustomText>Flavor shots</CustomText>
								<DropDownPicker
									open={shotsOpen}
									value={shotsValue}
									items={shots}
									setOpen={setShotsOpen}
									setValue={setShotsValue}
									setItems={setMilks}
								/>
							</View>
						</View>
					</View>
					<View style={{ alignItems: 'center' }}>
						<Button text="Add" add log onPress={addItemToCart} />
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
