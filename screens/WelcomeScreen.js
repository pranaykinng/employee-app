import React, { useState } from 'react';
import { View,Text,StyleSheet ,Button} from 'react-native';
//const [employees,hasEmployees]=useState(false);
function WelcomeScreen(){

    return(
        <View style={styles.container}>
        <Text style={styles.title}>Employee App</Text>
        <Button 
        title="Add Employee"
        style={styles.button}/>
        </View>
    )


}

const styles=StyleSheet.create({
    container:{
        flex :1,
        justifyContent: 'center',
        alignItems:'center'},
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        padding: 10,
        borderRadius: 5,
    }
});

export default WelcomeScreen;