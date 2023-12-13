import React, { useEffect, useState } from 'react';
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
import * as SplashScreen from 'expo-splash-screen';
import CustomText from '../components/CustomText';
SplashScreen.preventAutoHideAsync();
const MenuScreen = ({ navigation, route }) => {
	const { menu } = route.params;
	console.log(menu);
	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text={menu.name} stack />

			<FlatList
				style={{
					flex: 1,
				}}
				numColumns={3}
				data={menu.drinks.items}
				keyExtractor={(item) => item.id}
				renderItem={(item) => (
					<MenuItem navigation={navigation} item={item} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center' },
});

export default MenuScreen;
