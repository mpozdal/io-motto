import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const MenuItem = ({ navigation }) => {
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
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: '25%',
	},
	text: {
		marginTop: 5,
		color: colors.common.DETAILS,
		fontSize: typography.size.M - 2,
	},
});

export default MenuItem;
