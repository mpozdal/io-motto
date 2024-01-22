import React, { useEffect, useState, useContext, useCallback } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Header from '../components/Header';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';
import { useHomeContext } from '../contexts/HomeContext';
import LastOrder from '../components/LastOrder';
SplashScreen.preventAutoHideAsync();
const HomeScreen = ({ navigation, route }) => {
	const { drinks } = useHomeContext();

	return (
		<View style={{ flex: 1 }}>
			<Header navigation={navigation} />
			<ScrollView
				style={styles.main}
				showsVerticalScrollIndicator={false}
			>
				<Baner />
				{/* <PrevOrders navigation={navigation} /> */}
				<TopSelling navigation={navigation} drinks={drinks} />
				<LastOrder navigation={navigation} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginBottom: 110,
	},
});

export default HomeScreen;
