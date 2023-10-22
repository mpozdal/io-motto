import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import TopItem from './TopItem';

const TopSelling = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<CustomText style={styles.text}>TOP SELLING</CustomText>
			<ScrollView horizontal={true} style={styles.items}>
				<TopItem navigation={navigation} />
				<TopItem navigation={navigation} />
				<TopItem navigation={navigation} />
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {},
	text: {
		color: colors.common.DETAILS,
		paddingLeft: 30,
	},
	items: {
		flexDirection: 'row',
	},
});

export default TopSelling;
