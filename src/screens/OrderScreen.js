import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { useMenuContext } from '../contexts/MenuContext';
import HeaderSecondary from '../components/HeaderSecondary';
import MenuList from '../components/MenuList';

const OrderScreen = ({ navigation }) => {
	const { drinksMenu } = useMenuContext();
	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text="ORDER" store />
			<View style={styles.main}>
				<ScrollView style={{ flexGrow: 1 }}>
					<MenuList navigation={navigation} drinksMenu={drinksMenu} />
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	main: {
		flex: 1,
		marginBottom: 110,
	},
});

export default OrderScreen;
