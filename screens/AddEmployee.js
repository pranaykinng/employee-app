import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
function AddEmployee({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async () => {
    const employeeData = {
      firstName,
      lastName,
      email,
      jobTitle,
      salary,
    };

    try {
      await AsyncStorage.setItem('employees', JSON.stringify([employeeData]));
      console.log('Employee saved successfully');
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  const _handleInputChange = (type, text) => {
    switch (type) {
      case 'firstName':
        setFirstName(text);
        break;
      case 'lastName':
        setLastName(text);
        break;
      case 'email':
        setEmail(text);
        break;
      case 'jobTitle':
        setJobTitle(text);
        break;
      case 'salary':
        setSalary(text);
        break;

      default:
        console.error(`Unknown input type: ${type}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={text => _handleInputChange('firstName', text)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={text => _handleInputChange('lastName', text)}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => _handleInputChange('email', text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        onChangeText={text => _handleInputChange('jobTitle', text)}
        value={jobTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Salary"
        onChangeText={text => _handleInputChange('jobTitle', text)}
        value={salary}
      />

      <TouchableHighlight
        style={styles.buttonStyle}
        underlayColor="#eee"
        onPress={handleSubmit}>
        <Text style={{color: '#010802', fontSize: 22}}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#25631b',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#b8d13b',
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

export default AddEmployee;
