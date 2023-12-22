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

const OrderDetailsScreen = ({ navigation, route }) => {
	const { basketContent, price, setUpdate, update } = useBasketContext();
	const { handleCreateOrder, ordering } = useOrderContext();
	const { orderInfo } = route?.params;
	return (
		<>
			<View style={styles.container}>
				<HeaderSecondary
					navigation={navigation}
					text="Order details"
					stack
				/>
				<CustomText>{orderInfo.id}</CustomText>
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

export default OrderDetailsScreen;
