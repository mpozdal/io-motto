import React from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { colors } from '../themes/colors';
import { typography } from '../themes/typography';

import HeaderSecondary from '../components/HeaderSecondary';
import CustomText from '../components/CustomText';
import SizeOption from '../components/SizeOption';

const ItemScreen = ({ navigation, route }) => {
	const { name } = route.params;
	return (
		<View style={{ flex: 1 }}>
			<HeaderSecondary text="ADD TO CART" stack navigation={navigation} />
			<View style={styles.container}>
				<ScrollView
					style={styles.scroll}
					showsVerticalScrollIndicator={false}
				>
					<View
						style={{
							display: 'flex',
							alignItems: 'center',
							paddingTop: 50,
							gap: 15,
						}}
					>
						<Image source={require('../assets/coffee1.png')} />
						<CustomText
							style={{
								fontSize: typography.size.XL,
								color: colors.common.TEXT2,
							}}
						>
							{name}
						</CustomText>
						<CustomText
							style={{
								textAlign: 'center',
								fontSize: typography.size.M,
								color: colors.common.DETAILS,
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer condimentum purus nec varius tempor.
						</CustomText>
						<CustomText style={{ fontSize: typography.size.XL }}>
							9,99 zł
						</CustomText>
						<View style={{ width: '100%' }}>
							<CustomText
								style={{ fontSize: typography.size.XL }}
							>
								Size options
							</CustomText>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									gap: 10,
									marginTop: 20,
								}}
							>
								<SizeOption value="200 ml" />
								<SizeOption value="300 ml" />
								<SizeOption value="400 ml" />
							</View>
						</View>

						<View style={{ width: '100%' }}>
							<CustomText
								style={{ fontSize: typography.size.XL }}
							>
								What's included
							</CustomText>
							<View
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									gap: 10,
									marginTop: 20,
								}}
							>
								<SizeOption value="200 ml" />
								<SizeOption value="300 ml" />
								<SizeOption value="400 ml" />
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		width: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 110,
	},
	scroll: {
		flex: 1,
		width: '100%',
	},
});

export default ItemScreen;
