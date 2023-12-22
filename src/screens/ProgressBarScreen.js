import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, SafeAreaView } from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { API, graphqlOperation } from 'aws-amplify';
import HeaderSecondary from '../components/HeaderSecondary';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import CustomText from '../components/CustomText';
import { useOrderContext } from '../contexts/OrderContext';
import * as Progress from 'react-native-progress';
const ProgressBarScreen = ({ navigation }) => {
	const { ordering } = useOrderContext();
	const [value, setValue] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setValue((prevProgress) => {
				const newProgress = prevProgress + 0.01;
				return newProgress >= 1 ? 1 : newProgress;
			});
		}, 30);
		setTimeout(() => {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Cart2' }],
			});
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{value === 1 ? (
				<CustomText
					style={{
						fontSize: typography.size.XL,
					}}
				>
					Order created
				</CustomText>
			) : (
				<CustomText
					style={{
						fontSize: typography.size.XL,
					}}
				>
					Creating order...
				</CustomText>
			)}

			<Progress.Bar
				progress={value}
				width={300}
				height={40}
				color={colors.common.PRIMARY}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		gap: 50,
	},
	main: {
		flex: 1,
		display: 'flex',
	},
	checkoutContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		gap: 10,
	},
	summary: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		height: 70,
		borderRadius: typography.size.RADIUS,
		backgroundColor: colors.common.TEXT1,
		shadowColor: colors.common.DETAILS,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.22,
		shadowRadius: 3.22,

		elevation: 0,
	},
});

export default ProgressBarScreen;
