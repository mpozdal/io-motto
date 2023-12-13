import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';

import CustomText from './CustomText';
import { MottoContext } from '../contexts/MottoContext';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ navigation }) => {
	function openSettings() {
		navigation.navigate('Settings');
	}
	const { user, stores } = useContext(MottoContext);

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={openSettings}>
				{/* <View style={styles.avatar}>
					<CustomText style={styles.textAvatar}>
						{user?.name[0]}
					</CustomText>
				</View> */}
				<Icon
					name="account-circle"
					size={40}
					color={colors.common.TEXT1}
				/>
			</TouchableOpacity>
			<CustomText style={styles.text}>Hi, {user.name}</CustomText>
			<View>
				<CustomText style={styles.store2}>Your store:</CustomText>
				<CustomText style={styles.store}>
					ul.{' '}
					{
						stores[
							stores.findIndex((elem) => elem.id === user.store)
						]?.address
					}
				</CustomText>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.common.PRIMARY,
		height: 150,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	text: {
		color: colors.common.TEXT1,
		fontSize: typography.size.XL,
	},
	textAvatar: {
		fontSize: typography.size.L,
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
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 70,
		backgroundColor: colors.common.TEXT1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Header;
