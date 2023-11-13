import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabSettingsScreen() {
  const settingsData = [
    {
      id: 1,
      name: 'Profile',
      icon: 'user-circle'
    },
    {
      id: 2,
      name: 'Saved Message',
      icon: 'bookmark'
    },
    {
      id: 3,
      name: 'Privacy and Security',
      icon: 'lock'
    },

  ]
  return (
    <View style={styles.container}>
      {
        settingsData.map(item => (
          <View key={item.id} style={styles.content}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name={item.icon} color="white" size={20} />
            </View>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12
  },
  content: {
    borderRadius: 12,
    backgroundColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    width: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'unset',
    backgroundColor: 'grey'
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 5
  }
});
