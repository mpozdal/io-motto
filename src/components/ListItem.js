import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../themes/colors';
import CustomText from './CustomText';
import { typography } from '../themes/typography';

const ListItem = ({ text, param, onPress, icon, order }) => {
	let colorStatus = colors.common.DETAILS;
	if (order?.status === 'canceled') colorStatus = 'red';
	else if (order?.status === 'confirmed') colorStatus = 'orange';
	else if (order?.status === 'ready') colorStatus = 'green';

	if (order) {
		return (
			<TouchableOpacity onPress={() => onPress(param)}>
				<View
					style={{
						...styles.item,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								width: 10,
								height: 10,
								backgroundColor: colorStatus,
								borderRadius: 10,
							}}
						></View>
						<CustomText style={styles.text}>
							{' '}
							ul. {order.store.address}
						</CustomText>
					</View>

					<CustomText style={styles.text}>
						{order.total} zł
					</CustomText>
					<View
						style={{
							position: 'absolute',
							left: 20,
							bottom: 10,
						}}
					>
						<CustomText
							style={{
								fontSize: typography.size.S,
								color: colorStatus,
							}}
						>
							{order.status.toUpperCase()}
						</CustomText>
					</View>
					<View
						style={{
							position: 'absolute',
							right: 20,
							bottom: 10,
						}}
					>
						<CustomText
							style={{
								fontSize: typography.size.S,
								color: colors.common.DETAILS,
							}}
						>
							{order.createdAt.slice(0, 10) +
								' at ' +
								order.createdAt.slice(11, 16)}
						</CustomText>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
	return (
		<TouchableOpacity onPress={() => onPress(param)}>
			<View style={styles.item}>
				<View style={styles.leftSide}>
					{text === 'Logout' ? (
						<>
							<Feather
								name={icon}
								style={{
									...styles.icon,
									color: colors.common.REMOVE,
								}}
							/>
							<CustomText
								style={{
									...styles.text,
									color: colors.common.REMOVE,
								}}
							>
								{text}
							</CustomText>
						</>
					) : (
						<>
							<Feather name={icon} style={styles.icon} />
							<CustomText style={styles.text}>{text}</CustomText>
						</>
					)}
				</View>
				{text !== 'Logout' ? (
					<MaterialIcons
						name="arrow-forward-ios"
						style={styles.arrow}
					/>
				) : (
					<></>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default ListItem;
const styles = StyleSheet.create({
	main: {
		display: 'flex',
	},
	acc: {
		height: 150,
		gap: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},

	item: {
		alignSelf: 'center',
		height: 80,
		display: 'flex',
		marginTop: 10,
		padding: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '90%',
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: colors.common.DETAILS,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
	leftSide: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrow: {
		fontSize: 30,
		color: colors.common.TEXT2,
	},
	icon: {
		fontSize: 30,
		color: colors.common.TEXT2,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.common.TEXT2,
		marginLeft: 10,
	},
});
