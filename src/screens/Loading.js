import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageUrl from '../assets/logo.png';
const Loading = () => {
	return (
		<SafeAreaView
			style={{
                flex: 1,
				backgroundColor: '#915B2F',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image source={ImageUrl} resizeMode="contain" />
		</SafeAreaView>
	);
};

export default Loading;

const styles = StyleSheet.create({});
