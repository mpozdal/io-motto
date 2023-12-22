import {
	SafeAreaView,
	StyleSheet,
	TextInput,
	View,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button';
import { typography } from '../themes/typography';
import CustomText from '../components/CustomText';
import * as SplashScreen from 'expo-splash-screen';
import { useAuthContext } from '../contexts/AuthContext';
import Loading from './Loading';
import { Auth } from 'aws-amplify';

const LoginScreen = ({ navigation }) => {
	const { setAuthUser } = useAuthContext();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const logIn = async () => {
		if (email === '' || password === '') return;
		setLoading(true);
		try {
			await Auth.signIn(email, password);
		} catch (err) {
			alert(err.message);
			console.log(err);
		} finally {
			SplashScreen.hideAsync();
			setLoading(false);
		}
	};
	if (loading) {
		return <Loading />;
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
				<CustomText style={{ fontSize: 40 }}>Welcome</CustomText>
				<CustomText style={{ fontSize: 40 }}>Back</CustomText>
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
					autoComplete="email"
					placeholder="Email"
					autoCapitalize="none"
				/>

				<View style={styles.password}>
					<TextInput
						style={styles.inputPassword}
						value={password}
						onChangeText={setPassword}
						placeholder="Password"
						secureTextEntry={true}
					/>
					<TouchableOpacity
						style={{ width: '20%' }}
						onPress={() => navigation.navigate('Reset')}
					>
						<CustomText>Forgot?</CustomText>
					</TouchableOpacity>
				</View>

				<Button
					text={loading ? 'Loading..' : 'Sign in'}
					onPress={() => logIn()}
					log
				/>
				<TouchableOpacity
					onPress={() => navigation.navigate('Register')}
				>
					<CustomText style={{ color: 'rgba(169, 169, 172, .5)' }}>
						Create account? <CustomText> Sign up</CustomText>
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
