import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

const ManageButton = ({ text }) => {
	return (
		<TouchableOpacity>
			<View>
				<CustomText
					style={{
						opacity: 0.7,
						fontSize: typography.size.M,
						color:
							text === 'EDIT'
								? colors.common.DETAILS
								: colors.common.REMOVE,
					}}
				>
					{text}
				</CustomText>
			</View>
		</TouchableOpacity>
	);
};

const CartItem = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../assets/coffee1.png')} />

			<View style={styles.rightSide}>
				<CustomText style={{ fontSize: typography.size.L }}>
					CAPPUCCINO
				</CustomText>
				<View style={styles.desc}>
					<CustomText style={styles.opt}>300 ml</CustomText>
					<CustomText style={styles.opt}>2%</CustomText>
					<CustomText style={styles.opt}>carmel shot</CustomText>
				</View>
				<CustomText
					style={{
						fontSize: typography.size.L,
					}}
				>
					9,99 zł
				</CustomText>
				<View style={styles.manage}>
					<ManageButton text="EDIT" />
					<ManageButton text="REMOVE" />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: 200,
		borderBottomWidth: 1,
		alignSelf: 'center',
		borderColor: '#DBDBDB',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	rightSide: {
		display: 'flex',
		height: 160,
		justifyContent: 'space-around',
		flexDirection: 'column',
		width: '60%',
	},
	manage: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	opt: {
		fontSize: typography.size.S,
		color: colors.common.DETAILS,
	},
});
export default CartItem;
