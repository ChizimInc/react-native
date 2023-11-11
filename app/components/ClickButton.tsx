import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

interface ButtonProps {
    changeColor: () => void
}

const ClickButton = (props: ButtonProps) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.changeColor}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    button: {
        width: 290,
        height: 60,
        borderRadius: 30,
        color: 'white',
        backgroundColor: '#218f42',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    }
})

export default ClickButton