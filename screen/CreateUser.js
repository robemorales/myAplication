import React, {useState} from 'react'
import {View, TextInput, Button, ScrollView, StyleSheet} from 'react-native'

const CreateUserScreen=()=>{

    const [state, setState] = useState({
        name:'',
        lastname: '',
        phone: '',
        address: '',

    });
    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    }
    return(
        <ScrollView style={style.container}>
        <View>
            <TextInput placeholder = 'First Name' 
            onChangeText = {(value) => handleChangeText('name', value)}
            />   
        </View>
        <View>
            <TextInput placeholder = 'Last Name'
            onChangeText = {(value) => handleChangeText('lastname', value)}
             />
               
        </View>
        <View>
            <TextInput placeholder = 'Phone' 
            onChangeText = {(value) => handleChangeText('phone', value)}
            />   
        </View>
        <View>
            <TextInput placeholder = 'Address' 
            onChangeText = {(value) => handleChangeText('address', value)}
            />   
        </View>
        <View>
            <Button title = 'Add User' onPress = {()=> alert(state.name +' '+ state.lastname +' '+ state.address)}/>   
        </View>
    </ScrollView>
    )
    
}
const style =  StyleSheet.create({
    container:{
        flex: 1,
        padding: 35,
    },
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,


})
export default CreateUserScreen;