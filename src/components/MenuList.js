import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ item }) => {
	const navigation = useNavigation();
	const openMenu = () => {
		navigation.navigate('Menu', { menu: item });
	};
	console.log(item);
	return (
		<TouchableOpacity onPress={openMenu}>
			<View style={styles.item}>
				{/* <Image
					source={require('../assets/flat-white.png')}
					style={styles.img}
				/> */}
				<CustomText style={styles.itemText}>{item.name}</CustomText>
			</View>
		</TouchableOpacity>
	);
};

const MenuList = ({ drinksMenu }) => {
	return (
		<View style={styles.container}>
			{drinksMenu &&
				drinksMenu.map((element, index) => (
					<MenuItem item={element} key={index} />
				))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		display: 'flex',
		alignSelf: 'center',
	},
	item: {
		height: 80,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		gap: 20,
	},
	img: {
		width: 30,

		resizeMode: 'contain',
	},
	itemText: {
		color: colors.common.PRIMARY,
		fontSize: 25,
	},
});

export default MenuList;
