import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import PrevItem from './PrevItem';

const PrevOrders = () => {
	return (
		<View style={styles.container}>
			<CustomText style={styles.text}>
				PREVIOUSLY ORDERED ITEMS
			</CustomText>
			<View style={styles.items}>
				<PrevItem />
				<PrevItem />
				<PrevItem />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		padding: 30,
	},
	text: {
		color: colors.common.DETAILS,
	},
	items: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});

export default PrevOrders;
