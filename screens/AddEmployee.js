import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import * as Yup from 'yup';

function AddEmployee(props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    salary: '',
  });
  
  const schema = Yup.object().shape({
    firstName: Yup.string().optional(),
    lastName: Yup.string().optional(),
    email: Yup.string().required().email(),
    jobTitle: Yup.string().optional(),
    salary: Yup.number().required(),
  });

  
  const validateSubmit = () => {
    form.salary = Number(form.salary);
    schema
      .validate(form)
      .then(() => {
       props.navigation.navigate("EmployeeList", form);
      })
      .catch((err) => {
        console.warn(err)
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Employee</Text>
      <TextInput
         style={styles.input}
        placeholder="First Name"
        onChangeText={(value) => setForm({ ...form, firstName: value })}
        value={form.firstName}
      />
      <TextInput
        name="lastName"
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(value) => setForm({ ...form, lastName: value })}
        value={form.lastName}
      />
      <TextInput
        name="email"
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => setForm({ ...form, email: value.trim() })}
        value={form.email}
      />
      <TextInput
        name="jobTitle"
        style={styles.input}
        onChangeText={(value) => setForm({ ...form, jobTitle: value })}
        placeholder="Job Title"
        value={form.jobTitle}
        
      />
      <TextInput
        name="salary"
        style={styles.input}
        placeholder="Salary"
        onChangeText={(value) => setForm({ ...form, salary: value })}
        value={form.salary}
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
