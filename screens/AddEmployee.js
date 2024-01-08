import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';

function AddEmployee(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');

  // const schema = Joi.object({
  //   firstName: Joi.string().required().min(3),
  //   lastName: Joi.string().required().min(3),
  //   email: Joi.string().email().required(),
  //   jobTitle: Joi.string().required().min(5),
  //   salary: Joi.number().required().positive(),
  // });
  const validateSubmit  = () => {
    const data = { firstName, lastName, email, jobTitle, salary };
    props.navigation.navigate("EmployeeList", data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Title"
        onChangeText={text => setJobTitle(text)}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Salary"
        onChangeText={text => setSalary(text)}
      
      />

      <TouchableHighlight
        style={styles.buttonStyle}
        underlayColor="#eee"
        onPress={ validateSubmit}>
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
