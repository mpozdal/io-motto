import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { API, graphqlOperation } from 'aws-amplify';
import HeaderSecondary from '../components/HeaderSecondary';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import { onCreateBasketItem } from '../graphql/subscriptions';
import { useBasketContext } from '../contexts/BasketContext';
import { useOrderContext } from '../contexts/OrderContext';

const Summary = ({ price }) => {
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
				<CustomText style={{ fontSize: 25 }}>{price} zł</CustomText>
			</View>
		</View>
	);
};

const CartScreen = ({ navigation }) => {
	const { basketContent, price, setUpdate, update } = useBasketContext();
	const { handleCreateOrder, ordering } = useOrderContext();

	useEffect(() => {
		setUpdate(false);
	}, [basketContent, update]);

	if (ordering) {
		navigation.navigate('Progress');
	}

	return (
		<>
			<View style={styles.container}>
				<HeaderSecondary navigation={navigation} text="CART" store />
				{basketContent.length > 0 ? (
					<>
						<View style={styles.main}>
							<ScrollView showsVerticalScrollIndicator={false}>
								{basketContent.map((item, index) => (
									<CartItem item={item} key={index} />
								))}
							</ScrollView>
						</View>
						<View style={styles.checkoutContainer}>
							<Summary price={price} />
							<Button
								text="PAY NOW"
								onPress={() => {
									handleCreateOrder();
								}}
							/>
						</View>
					</>
				) : (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							gap: 50,
						}}
					>
						<CustomText
							style={{
								fontSize: typography.size.XL,
							}}
						>
							Nothing here...
						</CustomText>
					</View>
				)}
			</View>
		</>
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
