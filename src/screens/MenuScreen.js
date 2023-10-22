import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';
import MenuList from '../components/MenuList';
import TopItem from '../components/TopItem';
import PrevItem from '../components/PrevItem';
import MenuItem from '../components/MenuItem';
const MenuScreen = ({ navigation, route }) => {
	const { name } = route.params;

	const coffees = [
		'coffee1',
		'coffee2',
		'coffee1',
		'coffee2',
		'coffee1',
		'coffee2',
	];

	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text={name} stack />

			<FlatList
				style={{
					display: 'flex',
					alignSelf: 'center',
				}}
				numColumns={4}
				data={coffees}
				renderItem={() => <MenuItem navigation={navigation} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, width: '100%' },
});

export default MenuScreen;
