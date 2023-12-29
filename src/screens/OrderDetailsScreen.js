import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { API, graphqlOperation } from 'aws-amplify';
import HeaderSecondary from '../components/HeaderSecondary';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import { useAuthContext } from '../contexts/AuthContext';

const OrderDetailsScreen = ({ navigation, route }) => {
	const { orderInfo } = route?.params;
	console.log(orderInfo.items.items);

	const { fetchOrderData } = useAuthContext();

	return (
		<>
			<View style={styles.container}>
				<HeaderSecondary
					navigation={navigation}
					text="Order details"
					stack
				/>
				<View
					style={{
						flex: 1,

						alignItems: 'center',
					}}
				>
					<CustomText>Status: {orderInfo.status}</CustomText>
					<CustomText>Total: {orderInfo.total}</CustomText>
					{orderInfo?.items?.items.map((elem) => (
						<CartItem
							details
							item={{
								name: elem.drink.name,
								size: elem.size.value,
								milk: elem.milk.name,
								price: elem.price,
							}}
							key={elem.id}
						/>
					))}
					<Button text="Cancel" />
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});

export default OrderDetailsScreen;
