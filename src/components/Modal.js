import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Linking,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../themes/colors';
import Button from './Button';
import ShopImage from '../assets/shop.jpeg';
import { typography } from '../themes/typography';

import { useAuthContext } from '../contexts/AuthContext';

const Modal = ({ selected, setModalVisible }) => {
	const { setDefaultStore } = useAuthContext();
	return (
		<View style={styles.centeredView}>
			<View style={styles.modalView}>
				<View
					style={{
						position: 'absolute',
						left: 10,
						top: 10,
					}}
				>
					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Icon
							name="close-thick"
							size={35}
							color={colors.common.PRIMARY}
						/>
					</TouchableOpacity>
				</View>

				<View>
					<CustomText style={{ fontSize: 20 }}>
						ul. {selected.address}
					</CustomText>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<View style={{}}>
						<CustomText>Mon 7:00 - 18:00</CustomText>
						<CustomText>Tue 7:00 - 18:00</CustomText>
						<CustomText>Wen 7:00 - 18:00</CustomText>
						<CustomText>Thu 7:00 - 18:00</CustomText>
						<CustomText>Fr 7:00 - 18:00</CustomText>
						<CustomText>Sat 7:00 - 18:00</CustomText>
						<CustomText>Sun 7:00 - 18:00</CustomText>
					</View>
					<TouchableOpacity
						onPress={() =>
							Linking.openURL(
								'https://maps.app.goo.gl/i8teyFkirAcNeGLC7'
							)
						}
					>
						<Image
							source={ShopImage}
							style={{
								width: 170,
								height: 120,
								overflow: 'hidden',
								borderRadius: typography.size.RADIUS,
							}}
							resizeMode="cover"
						/>
					</TouchableOpacity>
				</View>
				<Button
					text="Set as default store"
					onPress={() => {
						setDefaultStore(selected.id);
						setModalVisible(false);
					}}
				/>
			</View>
		</View>
	);
};

export default Modal;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	modalView: {
		height: '40%',
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 15,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
});
