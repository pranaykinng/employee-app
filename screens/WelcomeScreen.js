import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
function AddEmployeeButton() {
  const navigation = useNavigation();

  const handleNavigateToAddEmployee = () => {
    navigation.navigate('AddEmployee');
  };

  return (
    <TouchableHighlight
        style={styles.buttonStyle}
        underlayColor="#eee"
        onPress={handleNavigateToAddEmployee}>
        <Text style={{color: '#010802', fontSize: 22}}>Add Employee</Text>
      </TouchableHighlight>
  );
}

function WelcomeScreen({navigation}) {
  
  return (
    <View style={styles.container}>
    <AddEmployeeButton />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25631b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  buttonStyle: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#053008',
    color: '#fff',
  },
});

export default WelcomeScreen;
