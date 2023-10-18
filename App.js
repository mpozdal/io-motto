import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors } from './src/themes/colors';
import { typography } from './src/themes/typography';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
	const Tab = createBottomTabNavigator();
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: colors.common.PRIMARY,
					tabBarStyle: {
						height: 110,
						paddingTop: 5,
						borderTopLeftRadius: typography.size.RADIUS,
						borderTopRightRadius: typography.size.RADIUS,
						position: 'absolute',
						overflow: 'hidden',
					},
				}}
			>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<FontAwesome
								name="home"
								color={color}
								size={typography.size.ICON}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Cart"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Cart',
						tabBarIcon: ({ color, size }) => (
							<FontAwesome
								name="shopping-cart"
								color={color}
								size={typography.size.ICON}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Order"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Order',
						tabBarIcon: ({ color, size }) => (
							<FontAwesome
								name="coffee"
								color={color}
								size={typography.size.ICON}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Stores"
					component={HomeScreen}
					options={{
						tabBarLabel: 'Stores',
						tabBarIcon: ({ color }) => (
							<FontAwesome
								name="map-marker"
								color={color}
								size={typography.size.ICON}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
