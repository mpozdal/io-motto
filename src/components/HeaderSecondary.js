import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';

import CustomText from './CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
const HeaderSecondary = ({ navigation, text, stack }) => {
	function goBack() {
		navigation.goBack();
	}
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					width: '90%',
					gap: 20,

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
