import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';

import MapView from 'react-native-maps';

const StoresScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text="STORES" />
			<View style={styles.main}>
				<MapView
					style={styles.map}
					provider="google"
					showsUserLocation="true"
					region={{
						latitude: 50.057,
						longitude: 19.94,
						latitudeDelta: 0.05,
						longitudeDelta: 0.03,
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	main: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '100%',
	},
});

export default StoresScreen;
