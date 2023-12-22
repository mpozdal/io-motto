import React, { useContext } from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
	Image,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import CustomText from '../components/CustomText';
import HeaderSecondary from '../components/HeaderSecondary';
import { Auth } from 'aws-amplify';
import { useAuthContext } from '../contexts/AuthContext';
import { useSettingsContext } from '../contexts/SettingsContext';
import ListItem from '../components/ListItem';

const SettingScreen = ({ navigation }) => {
	const { dbUser } = useAuthContext();
	const { handleLogout, handleShowOrders } = useSettingsContext();

	const settings = [
		{
			name: 'Orders',
			icon: 'coffee',
			fn: handleShowOrders,
			param: navigation,
		},
		{
			name: 'Edit account',
			icon: 'edit',
			fn: '',
			param: navigation,
		},

		{
			name: 'Rate us',
			icon: 'star',
			fn: '',
			param: navigation,
		},
		{
			name: 'Logout',
			icon: 'log-out',
			fn: handleLogout,
			param: navigation,
		},
	];
	return (
		<View style={{ flex: 1 }}>
			<HeaderSecondary text="Account" navigation={navigation} stack />
			<View style={styles.acc}>
				<CustomText
					style={{ fontSize: 25, color: colors.common.TEXT2 }}
				>
					{dbUser?.name}
				</CustomText>
				<CustomText
					style={{
						fontSize: 15,
						color: colors.common.DETAILS,
					}}
				>
					{dbUser?.email}
				</CustomText>
			</View>
			{settings.map((setting, index) => (
				<ListItem
					text={setting.name}
					icon={setting.icon}
					key={index}
					onPress={setting.fn}
					param={setting?.param}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		display: 'flex',
	},
	acc: {
		height: 150,
		gap: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},

	item: {
		alignSelf: 'center',
		height: 80,
		display: 'flex',
		marginTop: 10,
		padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '90%',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: colors.common.DETAILS,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	leftSide: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrow: {
		fontSize: 30,
		color: colors.common.TEXT2,
	},
	icon: {
		fontSize: 30,
		color: colors.common.TEXT2,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.common.TEXT2,
		marginLeft: 10,
	},
});

export default SettingScreen;
