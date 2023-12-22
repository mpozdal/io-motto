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
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import ImageBG from '../assets/background-mobile.png';
import Logo from '../assets/logo.png';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import CustomText from '../components/CustomText';
import { createBasket, createUser } from '../graphql/mutations';
import { Auth, API, graphqlOperation } from 'aws-amplify';

const ROLE = '99347c14-839f-4fc9-976e-6f8dad2c7a3d';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const signUp = async () => {
		if (email === '' || password === '' || name === '') return;
		try {
			await Auth.signUp({
				username: email,
				email,
				password,
				attributes: {
					preferred_username: name,
				},
			});
			createUserDB();

			navigation.navigate('ConfirmEmail', { email: email });
		} catch (error) {
			alert(error.message);
			console.log('err:' + error);
		}
	};

	const createUserDB = async () => {
		try {
			await API.graphql(
				graphqlOperation(createUser, {
					input: {
						name: name,
						email: email,
						userRoleId: ROLE,
					},
				})
			);
			
		} catch (e) {
			console.log(e);
		}
	};

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
				<CustomText style={{ fontSize: 40 }}>Create</CustomText>
				<CustomText style={{ fontSize: 40 }}>Account</CustomText>
			</View>
			<View
				style={{
					alignItems: 'center',
					gap: 15,
				}}
			>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={setEmail}
					inputMode="email"
					autoComplete="email"
					placeholder="Your email"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					value={name}
					onChangeText={setName}
					inputMode="text"
					autoComplete="username"
					placeholder="Your name"
				/>

				<TextInput
					style={styles.input}
					value={password}
					onChangeText={setPassword}
					placeholder="Password"
					secureTextEntry={true}
				/>

				<Button text="Sign up" onPress={() => signUp()} log />
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
});
