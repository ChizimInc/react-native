import { Text, View, StyleSheet, Image } from "react-native"

const Navbar = () => {
	return(
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.mainText}>Home</Text>
				<Image source={require("../assets/icons/menu.png")} />
			</View>
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
		paddingBottom: 17
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between'
	},
	mainText: {
		color: 'white',
		fontSize: 22
	},
	menuImage: {
		width: 32,
		height: 32
	}
})

export default Navbar