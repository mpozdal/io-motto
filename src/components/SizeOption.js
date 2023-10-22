import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
const SizeOption = ({ value }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.common.BUTTON,
				padding: 10,
				borderRadius: typography.size.RADIUS,
			}}
		>
			<CustomText style={{ fontSize: typography.size.M }}>
				{value}
			</CustomText>
		</TouchableOpacity>
	);
};

export default SizeOption;
