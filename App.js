import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import AddEmployee from './screens/AddEmployee';
import EmployeeListScreen from './screens/EmployeeListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();
function App(){
    return(<NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="EmployeeList" component={EmployeeListScreen} options={{headerShown:false}}/>
    <Stack.Screen name="AddEmployee" component={AddEmployee} options={{headerShown:false}}/>
    
    </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
