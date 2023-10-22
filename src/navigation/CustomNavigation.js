import { View, Text } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import OrderScreen from '../screens/OrderScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import StoresScreen from '../screens/StoresScreen';
import ItemScreen from '../screens/ItemScreen';

const Stack = createNativeStackNavigator();

const HomeScreenNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				navigation={navigation}
			/>
			<Stack.Screen name="Settings" component={SettingScreen} />
			<Stack.Screen name="Item" component={ItemScreen} />
		</Stack.Navigator>
	);
};

export { HomeScreenNavigator };

const CartScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Cart" component={CartScreen} />
			<Stack.Screen name="Order" component={OrderScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
			<Stack.Screen name="Item" component={ItemScreen} />
		</Stack.Navigator>
	);
};

export { CartScreenNavigator };

const OrderScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Order" component={OrderScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
			<Stack.Screen name="Item" component={ItemScreen} />
		</Stack.Navigator>
	);
};

export { OrderScreenNavigator };

const StoresScreenNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Stores" component={StoresScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
		</Stack.Navigator>
	);
};

export { StoresScreenNavigator };
