import {View, Text,FlatList,TouchableHighlight} from 'react-native';
import Avatar from 'react-native-elements/dist/avatar/Avatar';
import { useState,useEffect } from 'react';
const EmployeeListScreen = (props) => {
const [employees, setEmployees] = useState([]);
useEffect(() => {
  setEmployees(...employees,[props.route.params]);
},[props.route.params]);
  return (
    employees.length > 0 && (
     <View>
      <FlatList 
      data={employees}
      renderItem={({item}) => (
        <View style={{flexDirection: 'row'}}>
        <Avatar rounded size={68} title={`${(item.firstName[0]+item.lastName[0]).toUpperCase()}`} />
       <Text>{item.firstName}</Text>
      </View>
      )
    }
    />
          <TouchableHighlight
        underlayColor="#eee"
        onPress={() => props.navigation.navigate("AddEmployee")}
      >
        <Text style={{ color: '#010802', fontSize: 22 }}>Add Employee</Text>
      </TouchableHighlight>

  </View>
  )
  )
};

export default EmployeeListScreen;
