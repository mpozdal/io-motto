import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const Button = ({ text }) => {
	return (
		<TouchableWithoutFeedback>
			<View style={styles.btn}>
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
		height: 70,
		backgroundColor: colors.common.BUTTON,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: typography.size.RADIUS,
		fontWeight: 'normal',
	},
});

export default Button;
