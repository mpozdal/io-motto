import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';

const drinks = [
	{ id: 1, name: 'Hot Coffees' },
	{ id: 2, name: 'Iced Coffees' },
	{ id: 3, name: 'Hot drinks' },
	{ id: 4, name: 'Cold drinks' },
];
const food = [
	{ id: 1, name: 'Snacks' },
	{ id: 2, name: 'Pastries' },
];

const MenuItem = ({ item, openMenu }) => {
	return (
		<TouchableOpacity onPress={() => openMenu(item.name)}>
			<View style={styles.item}>
				<View style={styles.img}></View>
				<CustomText style={styles.itemText}>{item.name}</CustomText>
			</View>
		</TouchableOpacity>
	);
};

const MenuList = ({ navigation }) => {
	function openMenu(name) {
		navigation.navigate('Menu', { name: name });
	}
	return (
		<View style={styles.container}>
			<CustomText style={styles.category}>DRINKS</CustomText>
			{drinks.map((item) => (
				<MenuItem item={item} openMenu={openMenu} />
			))}
			<CustomText style={styles.category}>FOOD</CustomText>
			{food.map((item) => (
				<MenuItem item={item} openMenu={openMenu} />
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

	category: {
		fontSize: 20,
		color: colors.common.DETAILS,
		marginTop: 20,
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
		width: 60,
		height: 60,
		borderRadius: 60,

		borderWidth: 2,
		borderColor: colors.common.DETAILS,
	},
	itemText: {
		color: colors.common.TEXT2,
	},
});

export default MenuList;
