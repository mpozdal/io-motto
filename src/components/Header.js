import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';

import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
const Header = ({ navigation }) => {
	function openSettings() {
		navigation.navigate('Settings');
	}

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={openSettings}>
				<View style={styles.avatar}>
					<CustomText style={styles.textAvatar}>MP</CustomText>
				</View>
			</TouchableOpacity>
			<CustomText style={styles.text}>Hi, Michal</CustomText>
			<View>
				<CustomText style={styles.store2}>Your store:</CustomText>
				<CustomText style={styles.store}>ul. Warszawska 24</CustomText>
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
		fontSize: typography.size.L,
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
