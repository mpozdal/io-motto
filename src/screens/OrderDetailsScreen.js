import React, { useEffect, useCallback } from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	RefreshControl,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { API, graphqlOperation } from 'aws-amplify';
import HeaderSecondary from '../components/HeaderSecondary';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import { useAuthContext } from '../contexts/AuthContext';
import { useDetailsOrderContext } from '../contexts/DetailsOrderContext';
import Loading from './Loading';
const OrderDetailsScreen = ({ navigation, route }) => {
	const { orderID } = route?.params;

	const { fetchOrderDetails, orderDetails, loading, cancelOrder } =
		useDetailsOrderContext();

	useEffect(() => {
		fetchOrderDetails(orderID);
	}, []);
	const onRefresh = useCallback(() => {
		fetchOrderDetails(orderID);
	}, []);
	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<View style={styles.container}>
				<HeaderSecondary
					navigation={navigation}
					text="Order details"
					stack
				/>
				<ScrollView
					style={{
						flex: 1,
						alignSelf: 'center',
					}}
					//refreshControl={<RefreshControl onRefresh={onRefresh} />}
				>
					<View style={{ alignItems: 'center' }}>
						{orderDetails?.items?.items.map((elem) => (
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
					</View>
				</ScrollView>
				<View
					style={{
						alignSelf: 'center',
						width: '100%',
						alignItems: 'center',
					}}
				>
					<CustomText style={styles.text}>
						Status: {orderDetails?.status.toUpperCase()}
					</CustomText>
					<CustomText style={styles.text}>
						ul. {orderDetails?.store?.address}
					</CustomText>
					<CustomText style={styles.text}>
						Total: {orderDetails?.total} zł
					</CustomText>
					{orderDetails.status == 'paid' && (
						<Button
							text="Cancel"
							onPress={() => cancelOrder(orderID)}
						/>
					)}
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',

		marginBottom: 30,
	},
	text: {
		fontSize: typography.size.L,
		margin: 5,
	},
});

export default OrderDetailsScreen;
