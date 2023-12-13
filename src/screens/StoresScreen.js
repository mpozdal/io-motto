import React, { useEffect, useState, useCallback, useContext } from 'react';
import {
	StyleSheet,
	View,
	Modal,
	Text,
	Pressable,
	Touchable,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import * as SplashScreen from 'expo-splash-screen';
import HeaderSecondary from '../components/HeaderSecondary';
import ModalView from '../components/Modal';
import MapView, { Marker } from 'react-native-maps';
import { MottoContext } from '../contexts/MottoContext';
import { API, graphqlOperation } from 'aws-amplify';
SplashScreen.preventAutoHideAsync();

import { listStores } from '../graphql/queries';

const StoresScreen = ({ navigation }) => {
	const { stores, setStores } = useContext(MottoContext);
	const [appIsReady, setAppIsReady] = useState(false);
	const [selected, setSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	const fetchStores = async () => {
		try {
			const response = await API.graphql(graphqlOperation(listStores));
			console.log(response.data.listStores.items);
			setStores(response.data.listStores.items);
		} catch (e) {
			console.warn(e);
		}
	};
	useEffect(() => {
		fetchStores();
	}, []);

	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text="STORES" />
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<ModalView
					selected={selected}
					setModalVisible={setModalVisible}
					modalVisible={modalVisible}
				/>
			</Modal>
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
				>
					{stores.map((store, index) => (
						<Marker
							onPress={() => {
								setModalVisible(true);
								setSelected(store);
							}}
							key={index}
							coordinate={{
								latitude: store.latitude,
								longitude: store.longitude,
							}}
							pinColor={colors.common.SECONDARY}
						/>
					))}
				</MapView>
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
