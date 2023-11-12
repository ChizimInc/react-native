import Navbar from '../components/Navbar';
import ClickButton from '../components/ClickButton';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react'

interface Prop {
    navigate: any;
  }  

export default function HomeScreen({navigation}: {navigation: Prop}) {
  const [color, setColor] = useState<string>('#fff')

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
  
    const hexColor = `#${redHex}${greenHex}${blueHex}`;
    return hexColor;
  };

  const changeColor = () => {
    setColor(generateRandomColor)
  }

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color,
      alignItems: 'center',
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.mainText}>Main</Text>

        <View style={styles.buttonContainer}>
          <ClickButton changeColor={changeColor} />
          <Button
            title="Go to Second Screen"
            onPress={() => navigation.navigate('Second')}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  mainText: {
    fontSize: 22
  },
  buttonContainer: {
    marginTop: 50
  }
});
