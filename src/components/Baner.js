import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import CustomText from './CustomText';

const Baner = () => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<CustomText>Attention Motto fans!</CustomText>
				<CustomText></CustomText>
				<CustomText style={styles.text}>
					TRY OUR MOTTO SECRET ITEMS
				</CustomText>
			</View>
			<View style={styles.banerImg}>
				<Image source={require('../assets/baner.png')} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		marginTop: 30,
		alignSelf: 'center',
		height: 150,
		backgroundColor: colors.common.BUTTON,
		borderRadius: typography.size.RADIUS,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	banerImg: {},
	main: {
		width: '60%',
	},
	text: {
		fontSize: typography.size.L,
	},
});

export default Baner;
