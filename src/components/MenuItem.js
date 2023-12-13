import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const MenuItem = ({ navigation, item }) => {
	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => navigation.navigate('Item', { item: item })}
		>
			<Image
				source={require('../assets/coffee1.png')}
				style={styles.img}
			/>
			<CustomText style={styles.text}>{item.item.name}</CustomText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1 / 3,
		flexDirection: 'column',
		margin: 1,

		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: 30,
		resizeMode: 'contain',
	},
	text: {
		fontSize: typography.size.S + 2,
		textAlign: 'center',
		color: colors.common.DETAILS,
	},
});

export default MenuItem;
