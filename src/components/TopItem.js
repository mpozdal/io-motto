import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const TopItem = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate('Item', { name: 'CAPPUCCINO' })}
		>
			<Image source={require('../assets/coffee1.png')} />
			<CustomText style={styles.text}>Coffee 1</CustomText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: typography.size.RADIUS,
		width: 200,
		height: 170,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4.49,

		elevation: 12,
	},
	text: {
		marginTop: 5,
		color: colors.common.DETAILS,
		fontSize: typography.size.M - 2,
	},
});

export default TopItem;
