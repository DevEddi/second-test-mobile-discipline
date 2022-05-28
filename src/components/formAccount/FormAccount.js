import React from 'react';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import { 
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';


export default function FormAccount() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [limitAccount, setLimitAccount] = useState(0);  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const showAlert = (name, age, selectedGender, limitAccount, enable) =>
  Alert.alert(
    "Criar conta",
        'Nome: ' + name + '\n' +
        'Age: ' + age + '\n' + 
        'Gender: ' + selectedGender + '\n' +
        'Limit: ' + limitAccount + '\n' +
        'Student: ' + enable,
    [
      {
        text: "Open Account",
        onPress: () => Alert.alert("Thanks Open Account"),
        style: "cancel",
      },
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Open Account"),
        style: "cancel",
      },
    ]    
  );

  function validetionFormOpenAccount(){
      if (name != null && age != null &&  selectedGender != null && limitAccount != 0){
            showAlert(name, age, selectedGender, limitAccount, isEnabled)
      }else{
          Alert.alert('Você deve preencher todos os campos ausentes')
      }

  }

  function resetOpenAccount(){
      setName(null)
      setAge(null)
      setSelectedGender(null)
      setLimitAccount(0)
      setIsEnabled(false)
  }

  return (    
    <View>
      <Text>Open Account</Text>
      <View>
          <Text>Name:</Text>
          <TextInput
            value={name}
            onChangeText={setName}            
            style={styles.input}
            placeholder="Digit your name"          
          />
          <Text>Age:</Text>
          <TextInput
            value={age}
            onChangeText={setAge}            
            style={styles.input}
            placeholder="Digit your age"          
          />          
          
          <View>
            <Text>Gender:</Text>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)
            }>
              <Picker.Item label="Man" value="Man" />
              <Picker.Item label="Woman" value="Woman" />
            </Picker>
          </View>

          <View>
              <Text>Your Limit: {limitAccount}</Text>
              <Slider                  
                style={{width: '100%', height: 40}}
                minimumValue={0.00}
                maximumValue={1000.00}
                onValueChange={setLimitAccount}
                minimumTrackTintColor="#F1A4"
                maximumTrackTintColor="#000000"
              />
          </View>

          <View>
            <Text>Estudante:</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <TouchableOpacity
              style={styles.button}
              onPress={() => {validetionFormOpenAccount()}}>
            <Text>Open Account</Text>  
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {resetOpenAccount()}}>
            <Text>Reset Values</Text>  
          </TouchableOpacity>
      </View>          
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});