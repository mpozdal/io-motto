import { Text, StyleSheet } from 'react-native';
import React from 'react';

import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const CustomText = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: typography.size.M,
		color: colors.common.PRIMARY,
		fontWeight: 'bold',
		fontFamily: 'Montserrat',
	},
});

export default CustomText;
