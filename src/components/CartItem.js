import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { useBasketContext } from '../contexts/BasketContext';
import { useNavigation } from '@react-navigation/native';
import images from '../themes/images';
const ManageButton = ({ text, id, item, edit }) => {
	const { removeItemFromBasket } = useBasketContext();
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				text === 'REMOVE'
					? removeItemFromBasket(id)
					: console.log('edit');
			}}
		>
			<View>
				<CustomText
					style={{
						opacity: 0.7,
						fontSize: typography.size.M,
						color:
							text === 'EDIT'
								? colors.common.DETAILS
								: colors.common.REMOVE,
					}}
				>
					{text}
				</CustomText>
			</View>
		</TouchableOpacity>
	);
};

const CartItem = ({ item, details }) => {
	let imgSrc = String(item.name);
	imgSrc = imgSrc.toLowerCase();
	imgSrc = imgSrc.replaceAll(' ', '');

	return (
		<View style={styles.container}>
			<Image
				source={images[imgSrc]}
				style={{
					resizeMode: 'contain',
					width: '20%',
					height: '100%',
				}}
			/>

			<View style={styles.rightSide}>
				<CustomText style={{ fontSize: typography.size.L }}>
					{item.name}
				</CustomText>
				<View style={styles.desc}>
					<CustomText style={styles.opt}>{item.size} ml</CustomText>
					<CustomText style={styles.opt}>{item.milk}</CustomText>
				</View>
				<CustomText
					style={{
						fontSize: typography.size.L,
					}}
				>
					{item.price} zł
				</CustomText>
				{!details && (
					<View style={styles.manage}>
						{/* <ManageButton text="EDIT" edit item={item} /> */}
						<ManageButton text="REMOVE" id={item.id} />
					</View>
				)}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: 200,
		borderBottomWidth: 1,
		alignSelf: 'center',
		borderColor: '#DBDBDB',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	rightSide: {
		display: 'flex',
		height: 160,
		justifyContent: 'space-around',
		flexDirection: 'column',
		width: '60%',
	},
	manage: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	opt: {
		fontSize: typography.size.S,
		color: colors.common.DETAILS,
	},
});
export default CartItem;
