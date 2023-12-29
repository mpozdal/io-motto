import React, { useEffect, useState, useCallback, useContext } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { colors } from '../themes/colors';
import * as SplashScreen from 'expo-splash-screen';
import HeaderSecondary from '../components/HeaderSecondary';
import ModalView from '../components/Modal';
import MapView, { Marker } from 'react-native-maps';
import { useStoresContext } from '../contexts/StoresContext';

SplashScreen.preventAutoHideAsync();

const StoresScreen = ({ navigation }) => {
	const { stores } = useStoresContext();

	const [appIsReady, setAppIsReady] = useState(false);
	const [selected, setSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.container}>
			<HeaderSecondary navigation={navigation} text="STORES" store />
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
								longitude: store.longtitude,
							}}
							pinColor={colors.common.SECONDARY}
						></Marker>
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
