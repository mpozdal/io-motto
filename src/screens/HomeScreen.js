import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import Header from '../components/Header';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';

const HomeScreen = () => {
	return (
		<View>
			<Header />
			<ScrollView style={styles.main}>
				<Baner />
				<PrevOrders />
				<TopSelling />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {},
});

export default HomeScreen;
