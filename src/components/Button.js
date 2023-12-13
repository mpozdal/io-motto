import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const Button = ({ text, onPress, log, secondary, add }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={{
					...styles.btn,
					marginTop: log ? 20 : 0,
					marginBottom: log ? 20 : 0,
					backgroundColor: secondary ? 'white' : colors.common.BUTTON,
					borderColor: secondary ? colors.common.PRIMARY : 'none',
					borderWidth: secondary ? 3 : 0,
					width: add ? '100%' : '90%',
				}}
			>
				<CustomText
					style={{ color: colors.common.PRIMARY, fontSize: 20 }}
				>
					{text}
				</CustomText>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: '90%',
		height: 60,
		backgroundColor: colors.common.BUTTON,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: typography.size.RADIUS,
		fontWeight: 'normal',
	},
});

export default Button;
