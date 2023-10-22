import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import {
	HomeScreenNavigator,
	CartScreenNavigator,
	OrderScreenNavigator,
	StoresScreenNavigator,
} from './src/navigation/CustomNavigation';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors } from './src/themes/colors';
import { typography } from './src/themes/typography';
import * as SplashScreen from 'expo-splash-screen';
import CustomText from './src/components/CustomText';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat: require('./src/assets/fonts/ttf/Montserrat-Bold.ttf'),
	});
	if (!fontsLoaded) {
		return null;
	}

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
					component={HomeScreenNavigator}
					options={{
						tabBarIcon: ({ color, size }) => (
							<FontAwesome
								name="home"
								color={color}
								size={typography.size.ICON}
							/>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									fontFamily: 'Montserrat',
									color: focused
										? colors.common.PRIMARY
										: colors.common.DETAILS,
								}}
							>
								Home
							</Text>
						),
					}}
				/>
				<Tab.Screen
					name="Cart"
					component={CartScreenNavigator}
					options={{
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									fontFamily: 'Montserrat',
									color: focused
										? colors.common.PRIMARY
										: colors.common.DETAILS,
								}}
							>
								Cart
							</Text>
						),
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
					component={OrderScreenNavigator}
					options={{
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									fontFamily: 'Montserrat',
									color: focused
										? colors.common.PRIMARY
										: colors.common.DETAILS,
								}}
							>
								Order
							</Text>
						),
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
					component={StoresScreenNavigator}
					options={{
						tabBarLabel: ({ focused }) => (
							<Text
								style={{
									fontFamily: 'Montserrat',
									color: focused
										? colors.common.PRIMARY
										: colors.common.DETAILS,
								}}
							>
								Stores
							</Text>
						),
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
