import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';
import MenuList from '../components/MenuList';
import { listCategories2 } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
const OrderScreen = ({ navigation }) => {
	const [drinksMenu, setDrinksMenu] = useState([]);

	const [appIsReady, setAppIsReady] = useState(true);
	useEffect(() => {
		fetchMenu();
	}, []);
	const fetchMenu = async () => {
		try {
			const response = await API.graphql(
				graphqlOperation(listCategories2)
			);
			setDrinksMenu(response?.data?.listCategories?.items);
		} catch (e) {
			console.warn(e);
		}
	};

	if (!setAppIsReady) {
		return null;
	}
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
