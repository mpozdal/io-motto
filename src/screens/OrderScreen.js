import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';
import Baner from '../components/Baner';
import PrevOrders from '../components/PrevOrders';
import TopSelling from '../components/TopSelling';
import MenuList from '../components/MenuList';

const OrderScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text="ORDER" />
			<View style={styles.main}>
				<ScrollView style={{ flexGrow: 1 }}>
					<MenuList navigation={navigation} />
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
