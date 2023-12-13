import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { StackScreenNavigator } from './src/navigation/CustomNavigation';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState, useContext } from 'react';
import { colors } from './src/themes/colors';
import { typography } from './src/themes/typography';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ConfirmEmail from './src/screens/ConfirmEmailScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import { MottoProvider, MottoContext } from './src/contexts/MottoContext';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Auth, Hub } from 'aws-amplify';
import Amplify from 'aws-amplify';
import amplifyconfig from './src/aws-exports';
Amplify.configure(amplifyconfig);

SplashScreen.preventAutoHideAsync();

const App = () => {
	const [appIsReady, setAppIsReady] = useState(false);
	const [user, setUser] = useState(undefined);
	const Stack = createNativeStackNavigator();

	const [fontsLoaded] = useFonts({
		Montserrat: require('./src/assets/fonts/ttf/Montserrat-Bold.ttf'),
		Montserrat2: require('./src/assets/fonts/ttf/Montserrat-Medium.ttf'),
	});
	const handleRememberDevice = async () => {
		try {
			
			console.log(data);
		} catch (e) {
			console.warn(e);
		}
	};
	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}
	};
	useEffect(() => {
		checkUser();
		
	}, []);

	useEffect(() => {
		const listener = (data) => {
			if (
				data.payload.event === 'signIn' ||
				data.payload.event === 'signOut'
			) {
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, appIsReady]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{user ? (
					<Stack.Screen name="Home" component={CustomTabNavigation} />
				) : (
					<>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen
							name="NewPassword"
							component={NewPasswordScreen}
						/>
						<Stack.Screen
							name="ConfirmEmail"
							component={ConfirmEmail}
						/>

						<Stack.Screen
							name="Register"
							component={RegisterScreen}
						/>
						<Stack.Screen
							name="Reset"
							component={ForgotPasswordScreen}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const CustomTabNavigation = ({ route }) => {
	const Tab = createBottomTabNavigator();
	const getTabBarVisibility = (route) => {
		const routeName = getFocusedRouteNameFromRoute(route);

		const hideOnScreens = ['Loading', 'Settings', 'Item', 'Menu'];
		return hideOnScreens.indexOf(routeName) <= -1;
	};
	return (
		<MottoProvider>
			<Tab.Navigator
				initialRouteName="Home2"
				screenOptions={({ route }) => ({
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
				})}
			>
				<Tab.Screen
					name="Home2"
					component={StackScreenNavigator}
					initialParams={{ name: 'Home' }}
					options={({ route }) => ({
						tabBarStyle: {
							display: getTabBarVisibility(route)
								? 'block'
								: 'none',
							height: 110,
							paddingTop: 5,
							borderTopLeftRadius: typography.size.RADIUS,
							borderTopRightRadius: typography.size.RADIUS,
							position: 'absolute',
							overflow: 'hidden',
						},
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
					})}
				/>
				<Tab.Screen
					name="Cart2"
					component={StackScreenNavigator}
					initialParams={{ name: 'Cart' }}
					options={({ route }) => ({
						tabBarStyle: {
							display: getTabBarVisibility(route)
								? 'block'
								: 'none',
							height: 110,
							paddingTop: 5,
							borderTopLeftRadius: typography.size.RADIUS,
							borderTopRightRadius: typography.size.RADIUS,
							position: 'absolute',
							overflow: 'hidden',
						},
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
					})}
				/>
				<Tab.Screen
					name="Order2"
					component={StackScreenNavigator}
					initialParams={{ name: 'Order' }}
					options={({ route }) => ({
						tabBarStyle: {
							display: getTabBarVisibility(route)
								? 'block'
								: 'none',
							height: 110,
							paddingTop: 5,
							borderTopLeftRadius: typography.size.RADIUS,
							borderTopRightRadius: typography.size.RADIUS,
							position: 'absolute',
							overflow: 'hidden',
						},
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
					})}
				/>
				<Tab.Screen
					name="Stores2"
					component={StackScreenNavigator}
					initialParams={{ name: 'Stores' }}
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
		</MottoProvider>
	);
};

export default App;
