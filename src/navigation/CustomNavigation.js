import { View, Text } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import OrderScreen from '../screens/OrderScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import StoresScreen from '../screens/StoresScreen';
import ItemScreen from '../screens/ItemScreen';
import LoginScreen from '../screens/LoginScreen';
import { FIREBASE_DB, FIREBASE_AUTH } from '../../FireBaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
const Stack = createNativeStackNavigator();
import { MottoContext } from '../contexts/MottoContext';
import Loading from '../screens/Loading';
const StackScreenNavigator = ({ route }) => {
	const { name } = route.params;

	return (
		<Stack.Navigator
			initialRouteName={name}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Settings" component={SettingScreen} />
			<Stack.Screen name="Item" component={ItemScreen} />
			<Stack.Screen name="Stores" component={StoresScreen} />
			<Stack.Screen name="Cart" component={CartScreen} />
			<Stack.Screen name="Order" component={OrderScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
			<Stack.Screen name="Loading" component={Loading} />
		</Stack.Navigator>
	);
};
export { StackScreenNavigator };
