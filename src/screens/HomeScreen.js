import React, { useEffect, useState, useContext, useCallback } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Header from '../components/Header';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';
SplashScreen.preventAutoHideAsync();
const HomeScreen = ({ navigation, route }) => {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<Header navigation={navigation} />
			<ScrollView
				style={styles.main}
				showsVerticalScrollIndicator={false}
			>
				{/* <Baner /> */}
				{/* <PrevOrders navigation={navigation} /> */}
				{/* <TopSelling navigation={navigation} /> */}
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
