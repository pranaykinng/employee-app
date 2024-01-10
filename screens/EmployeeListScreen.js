import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';

const EmployeeListScreen = (props) => {
const{firstName,lastName,email,salary,jobTitle}=props.route.params;
const EmployeeList=[firstName,lastName,email,salary,jobTitle];
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <FlatList 
      data={EmployeeList}
      renderItem={({item}) => <Text style>{item}</Text> } />
    </View>
  );
};

export default EmployeeListScreen;
