import {
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Pressable,
} from 'react-native';
import React, { useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import CustomText from './CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { useBasketContext } from '../contexts/BasketContext';
const HeaderSecondary = ({ navigation, text, stack, cart, store }) => {
	const { basketContent } = useBasketContext();
	const { dbUser } = useAuthContext();
	function goBack() {
		navigation.goBack();
	}
	useEffect(() => {
		console.log('updated');
	}, [basketContent]);
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					width: '90%',
					gap: 20,
					justifyContent: store && 'space-between',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				{stack ? (
					<TouchableOpacity onPress={goBack}>
						<MaterialIcons
							name="arrow-back-ios"
							style={styles.arrow}
						/>
					</TouchableOpacity>
				) : (
					<></>
				)}
				<CustomText style={styles.text}>{text}</CustomText>
				{cart ? (
					<Pressable
						style={{
							position: 'absolute',
							right: 0,
						}}
						onPress={() => {
							navigation.reset({
								index: 0,
								routes: [{ name: 'Cart2' }],
							});
						}}
					>
						<View
							style={{
								flexDirection: 'row',
							}}
						>
							<CustomText
								style={{
									fontSize: 15,
									color: colors.common.TEXT1,
								}}
							>
								{basketContent.length}
							</CustomText>
							<MaterialIcons
								name="shopping-cart"
								style={styles.cart}
							/>
						</View>
					</Pressable>
				) : store ? (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<MaterialIcons name="store" color={'white'} size={30} />
						<CustomText
							style={{
								color: 'white',
							}}
						>
							{' '}
							ul. {dbUser?.defaultStore?.address}
						</CustomText>
					</View>
				) : (
					<></>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.common.PRIMARY,
		height: 120,
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrow: {
		fontSize: 30,
		color: colors.common.TEXT1,
	},
	cart: {
		fontSize: 30,
		color: colors.common.TEXT1,
	},
	text: {
		color: colors.common.TEXT1,
		fontSize: typography.size.XL,
	},

	store: {
		color: colors.common.TEXT1,
		fontSize: typography.size.S,
		textAlign: 'center',
	},
	store2: {
		color: colors.common.TEXT1,
		fontSize: typography.size.M,
		textAlign: 'center',
	},
});

export default HeaderSecondary;
