import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';

import HeaderSecondary from '../components/HeaderSecondary';
import MenuItem from '../components/MenuItem';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const MenuScreen = ({ navigation, route }) => {
	const { menu } = route.params;
	return (
		<View style={styles.container}>
			<HeaderSecondary
				navigation={navigation}
				text={menu.name}
				stack
				cart
			/>

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
