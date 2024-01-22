import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import images from '../themes/images';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const MenuItem = ({ navigation, item }) => {
	let imgSrc = String(item.item.name);
	imgSrc = imgSrc.toLowerCase();
	imgSrc = imgSrc.replaceAll(' ', '');
	console.log(item);

	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() =>
				navigation.navigate('Item', { item: item, imgSrc: imgSrc })
			}
		>
			<Image source={images[imgSrc]} style={styles.img} />
			<CustomText style={styles.text}>{item.item.name}</CustomText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1 / 3,
		height: 130,
		flexDirection: 'column',
		margin: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: '80%',
		height: '60%',
		resizeMode: 'contain',
	},
	text: {
		fontSize: typography.size.M,
		textAlign: 'center',
		color: colors.common.DETAILS,
	},
});

export default MenuItem;
