import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import TopItem from './TopItem';

const TopSelling = ({ navigation, drinks }) => {
	return (
		<View style={styles.container}>
			<CustomText style={styles.text}>TOP SELLING</CustomText>
			<ScrollView
				horizontal={true}
				style={styles.items}
				showsHorizontalScrollIndicator={false}
			>
				{drinks?.map((drink) => (
					<TopItem
						navigation={navigation}
						key={drink.id}
						drink={drink}
					/>
				))}
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	text: {
		color: colors.common.DETAILS,
		paddingLeft: 30,
	},
	items: {
		flexDirection: 'row',
	},
});

export default TopSelling;
