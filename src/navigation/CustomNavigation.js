import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import OrderScreen from '../screens/OrderScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import StoresScreen from '../screens/StoresScreen';
import ItemScreen from '../screens/ItemScreen';
import Loading from '../screens/Loading';
import EditScreen from '../screens/EditScreen';
import ProgressBarScreen from '../screens/ProgressBarScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();

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
			<Stack.Screen name="Edit" component={EditScreen} />
			<Stack.Screen name="Order" component={OrderScreen} />
			<Stack.Screen name="Menu" component={MenuScreen} />
			<Stack.Screen name="Loading" component={Loading} />
			<Stack.Screen name="Progress" component={ProgressBarScreen} />
			<Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
			<Stack.Screen name="Orders" component={OrdersScreen} />
		</Stack.Navigator>
	);
};
export { StackScreenNavigator };
