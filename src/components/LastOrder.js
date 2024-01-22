import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';
import { useHomeContext } from '../contexts/HomeContext';
import ListItem from './ListItem';
const LastOrder = ({ navigation }) => {
	const { lastOrder } = useHomeContext();

	return (
		<View>
			<CustomText style={styles.text}>LAST ORDER</CustomText>
			<ListItem
				key={lastOrder?.id}
				order={lastOrder}
				onPress={() =>
					navigation.navigate('OrderDetails', {
						orderID: lastOrder.id,
					})
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		marginTop: 15,
		alignSelf: 'center',
		height: 100,
		backgroundColor: colors.common.BUTTON,
		borderRadius: typography.size.RADIUS,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	banerImg: {},
	main: {
		width: '60%',
	},
	text: {
		color: colors.common.DETAILS,
		paddingLeft: 30,
	},
});

export default LastOrder;
