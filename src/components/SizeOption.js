import { TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
const SizeOption = ({ value, setSize, size, milks }) => {
	return milks ? (
		<TouchableOpacity
			style={{
				backgroundColor:
					size.name === value.name
						? colors.common.PRIMARY
						: 'transparent',
				padding: 10,
				borderRadius: typography.size.RADIUS,
			}}
			onPress={() => {
				setSize(value);
			}}
		>
			<CustomText
				style={{
					fontSize: typography.size.M,
					color:
						size.name === value.name
							? colors.common.BUTTON
							: colors.common.PRIMARY,
				}}
			>
				{value.name}
			</CustomText>
		</TouchableOpacity>
	) : (
		<TouchableOpacity
			style={{
				backgroundColor:
					size.value === value.value
						? colors.common.PRIMARY
						: colors.common.BUTTON,
				padding: 10,
				borderRadius: typography.size.RADIUS,
			}}
			onPress={() => {
				setSize(value);
			}}
		>
			<CustomText
				style={{
					fontSize: typography.size.M,
					color:
						size.value === value.value
							? colors.common.BUTTON
							: colors.common.PRIMARY,
				}}
			>
				{value.value} ml
			</CustomText>
		</TouchableOpacity>
	);
};

export default SizeOption;
