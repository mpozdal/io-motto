import { View, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import PrevItem from './PrevItem';

const PrevOrders = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<CustomText style={styles.text}>
				PREVIOUSLY ORDERED ITEMS
			</CustomText>
			<View style={styles.items}>
				<PrevItem navigation={navigation} />
				<PrevItem navigation={navigation} />
				<PrevItem navigation={navigation} />
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
		justifyContent: 'space-between',
	},
});

export default PrevOrders;
