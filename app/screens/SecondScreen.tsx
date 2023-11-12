import { View, Text, StyleSheet } from 'react-native'

const SecondScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Second page</Text>
        </View>
    )
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    }
})
