import { Text, View, StyleSheet } from "react-native"

const Navbar = () => {
	return(
		<View style={styles.container}>
			<Text style={styles.mainText}>Text</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: '100%',
		height: 90,
		justifyContent: 'flex-end',
		paddingHorizontal: 15,
		backgroundColor: '#15366b',
		paddingBottom: 22
	},
	mainText: {
		color: 'white',
		fontSize: 22
	}
})

export default Navbar