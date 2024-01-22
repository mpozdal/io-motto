import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import images from '../themes/images';
const TopItem = ({ navigation, drink }) => {
	let imgSrc = drink.name;
	let drinkName = drink.name;
	imgSrc = imgSrc.toLowerCase();
	imgSrc = imgSrc.replaceAll(' ', '');
	drink = {
		item: drink,
	};

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				navigation.navigate('Item', { item: drink, imgSrc: imgSrc })
			}
		>
			<Image
				source={images[imgSrc]}
				style={{
					resizeMode: 'contain',
					width: '50%',
					height: '50%',
				}}
			/>
			<CustomText style={styles.text}>{drinkName}</CustomText>
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
