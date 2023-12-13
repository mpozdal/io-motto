import {
	ImageBackground,
	KeyboardAvoidingView,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	Image,
	View,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import ImageBG from '../assets/background-mobile.png';
import Logo from '../assets/logo.png';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import CustomText from '../components/CustomText';
import * as SplashScreen from 'expo-splash-screen';
import { Auth } from 'aws-amplify';
const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const resetPassword = async () => {
		if (email === '') return;

		try {
			await Auth.forgotPassword(email);
			alert('Confirm', 'Check your email!');
			navigation.navigate('NewPassword', { email: email });
		} catch (err) {
			alert(err);
			console.log(err);
		}
	};
	if (loading) {
		setTimeout(SplashScreen.hideAsync, 2000);
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					width: '90%',
					justifyContent: 'center',
					height: '30%',
					alignSelf: 'center',
				}}
			>
				<CustomText style={{ fontSize: 40 }}>Forgot</CustomText>
				<CustomText style={{ fontSize: 40 }}>Password</CustomText>
			</View>

			<View
				style={{
					gap: 15,
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={setEmail}
					inputMode="email"
					placeholder="Email"
					autoCapitalize="none"
				/>

				<Button
					text="Reset password"
					onPress={() => resetPassword()}
					log
				/>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<CustomText style={{ color: 'rgba(169, 169, 172, .5)' }}>
						Back to <CustomText> Sign in</CustomText>
					</CustomText>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	input: {
		width: '90%',
		height: 50,
		paddingLeft: 10,
		backgroundColor: 'white',
		fontSize: typography.size.M,
		fontFamily: 'Montserrat',
		backgroundColor: 'transparent',
		borderBottomColor: 'rgba(169, 169, 172, .5)',
		borderBottomWidth: 1,
	},
	inputPassword: {
		fontSize: typography.size.M,
		fontFamily: 'Montserrat',
		paddingLeft: 10,
		width: '80%',
	},
	password: {
		width: '90%',
		height: 50,
		backgroundColor: 'transparent',
		borderBottomColor: 'rgba(169, 169, 172, .5)',
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
