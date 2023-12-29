import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const PrevItem = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate('Item', { name: 'CAPPUCCINO' })}
		>
			<Image
				source={require('../assets/coffee1.png')}
				style={{
					resizeMode: 'contain',
					width: 200,
				}}
			/>
			<CustomText style={styles.text}>Coffee 1</CustomText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginTop: 5,
		color: colors.common.DETAILS,
		fontSize: typography.size.M - 2,
	},
});

export default PrevItem;
