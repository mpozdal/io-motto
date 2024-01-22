import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackScreenNavigator } from './CustomNavigation';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ConfirmEmail from '../screens/ConfirmEmailScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useAuthContext } from '../contexts/AuthContext';

import { useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	const { authUser, setAuthUser } = useAuthContext();

	useEffect(() => {
		Hub.listen('auth', (data) => {
			switch (data.payload.event) {
				case 'signIn':
					checkUser();
					break;
				case 'signOut':
					setAuthUser(null);
					break;
				default:
					break;
			}
		});
		return () => {
			Hub.remove('auth');
		};
	}, [authUser]);

	const checkUser = async () => {
		try {
			await Auth.currentAuthenticatedUser().then(setAuthUser);
		} catch (e) {
			setAuthUser(null);
		}
	};
	useEffect(() => {
		checkUser();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{authUser ? (
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

const Tab = createBottomTabNavigator();

const CustomTabNavigation = ({ route }) => {
	const getTabBarVisibility = (route) => {
		const routeName = getFocusedRouteNameFromRoute(route);

		const hideOnScreens = [
			'Loading',
			'Settings',
			'Item',
			'Menu',
			'Progress',
			'OrderDetails',
			'Orders',
		];
		return hideOnScreens.indexOf(routeName) <= -1;
	};

	return (
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
						display: getTabBarVisibility(route) ? 'block' : 'none',
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
						display: getTabBarVisibility(route) ? 'block' : 'none',
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
						display: getTabBarVisibility(route) ? 'block' : 'none',
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
	);
};

export default RootNavigation;
