import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';
import MenuList from '../components/MenuList';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CustomText from '../components/CustomText';

const Summary = () => {
	return (
		<View style={styles.summary}>
			<View>
				<CustomText style={{ fontSize: 12 }}>ORDER SUMMARY</CustomText>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<CustomText style={{ fontSize: 25 }}>Total</CustomText>
				<CustomText style={{ fontSize: 25 }}>9,99 zł</CustomText>
			</View>
		</View>
	);
};

const CartScreen = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text="CART" />
			<View style={styles.main}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</ScrollView>
			</View>
			<View style={styles.checkoutContainer}>
				<Summary />
				<Button text="PAY NOW" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		marginBottom: 110,
		display: 'flex',
	},
	main: {
		flex: 1,
		display: 'flex',
	},
	checkoutContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		gap: 10,
	},
	summary: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		height: 70,
		borderRadius: typography.size.RADIUS,
		backgroundColor: colors.common.TEXT1,
		shadowColor: colors.common.DETAILS,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.22,
		shadowRadius: 3.22,

		elevation: 0,
	},
});

export default CartScreen;
