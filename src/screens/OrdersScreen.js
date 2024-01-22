import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import HeaderSecondary from '../components/HeaderSecondary';
import { useAuthContext } from '../contexts/AuthContext';
import CustomText from '../components/CustomText';
import ListItem from '../components/ListItem';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const OrdersScreen = ({ navigation }) => {
	const { orders, pastOrders } = useAuthContext();
	useEffect(() => {}, [orders, pastOrders]);
	return (
		<>
			<View style={styles.container}>
				<HeaderSecondary
					navigation={navigation}
					text="My orders"
					stack
				/>
				<Tab.Navigator
					screenOptions={{
						tabBarActiveTintColor: 'white',
						tabBarIndicatorStyle: {
							backgroundColor: 'white',
						},
						tabBarLabelStyle: {
							fontSize: 15,
							fontFamily: 'Montserrat',
						},
						tabBarStyle: { backgroundColor: colors.common.PRIMARY },
					}}
				>
					<Tab.Screen name="New" component={OngoingOrdersView} />
					<Tab.Screen name="History" component={PastOrdersView} />
				</Tab.Navigator>
			</View>
		</>
	);
};

const OngoingOrdersView = ({ navigation }) => {
	const { orders, fetchUserOrders, refreshing } = useAuthContext();

	const onRefresh = useCallback(() => {
		fetchUserOrders();
	}, []);

	return (
		<ScrollView
			style={{ flex: 1 }}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			{orders.length !== 0 ? (
				orders.map((order, index) => (
					<ListItem
						key={order.id}
						order={order}
						onPress={() =>
							navigation.navigate('OrderDetails', {
								orderID: order.id,
							})
						}
					/>
				))
			) : (
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height: 100,
						flex: 1,
					}}
				>
					<CustomText style={{ fontSize: 20 }}>
						Nothing here...
					</CustomText>
				</View>
			)}
		</ScrollView>
	);
};
const PastOrdersView = ({ navigation }) => {
	const { pastOrders, refreshing, fetchUserOrders } = useAuthContext();
	const onRefresh = useCallback(() => {
		fetchUserOrders();
	}, []);
	return (
		<ScrollView
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			{pastOrders.length !== 0 ? (
				pastOrders.map((order, index) => (
					<ListItem
						key={order.id}
						order={order}
						onPress={() =>
							navigation.navigate('OrderDetails', {
								orderID: order.id,
							})
						}
					/>
				))
			) : (
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height: 100,
					}}
				>
					<CustomText style={{ fontSize: 20 }}>
						Nothing here...
					</CustomText>
				</View>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',

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

export default OrdersScreen;
