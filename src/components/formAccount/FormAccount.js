import React from 'react';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import { 
  Text,
  View,
  TextInput,
  Alert,
  Switch,
} from 'react-native';

import ButtonTheme from '../buttonTheme/ButtonTheme';
import styles from './style';

export default function FormAccount() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [limitAccount, setLimitAccount] = useState(0);  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const showAlert = (name, age, selectedGender, limitAccount, enable) =>
  Alert.alert(
    "Confirm your data",
        'Nome: ' + name + '\n' +
        'Age: ' + age + '\n' + 
        'Gender: ' + selectedGender + '\n' +
        'Limit: ' + parseFloat(limitAccount).toFixed(2) + '\n' +
        'Student: ' + enable,
    [
      {
        text: "Confirm",
        onPress: () => Alert.alert("Thanks Open Account"),
        style: "cancel",
      },
      {
        text: "Cancel",
        onPress: () =>  resetOpenAccount(),
        style: "cancel",
      },
    ]    
  );

  function validetionFormOpenAccount(){
      if (name != null && age != null &&  selectedGender != null && limitAccount != 0){
            showAlert(name, age, selectedGender, limitAccount, isEnabled)
      }else{
          Alert.alert('You must fill in all missing fields')
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
    <View style={styles.container}>    
          <View>
            <Text style={styles.titleInputs}>Name:</Text>
            <TextInput
              value={name}
              onChangeText={setName}            
              style={styles.inputText}
              placeholder="Digit your name"          
            />
            <Text style={styles.titleInputs}>Age:</Text>
            <TextInput
              value={age}
              maxLength={2}
              keyboardType="numeric"
              onChangeText={setAge}            
              style={styles.inputText}
              placeholder="Digit your age"          
            /> 
          </View>      
          
          <View>
            <Text style={styles.titleInputs}>Gender:</Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedGender}
              onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)              
            }>
              <Picker.Item
                style={styles.pickerItem}
                label="Man"
                value="Man" />
              <Picker.Item 
                style={styles.pickerItem}
                label="Woman"
                value="Woman" />
            </Picker>
          </View>

          <View >
              <Text style={styles.titleInputs}>Your Limit: R$ {parseFloat(limitAccount).toFixed(2)}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0.00}
                maximumValue={1000.00}
                onValueChange={setLimitAccount}
                minimumTrackTintColor="#f4511e"
                maximumTrackTintColor="#000000"
              />
          </View>

          <View>
            <Text style={styles.titleInputs}>Estudante:</Text>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#9CB4CC" }}
              thumbColor={isEnabled ? "#f4511e" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          
          <View>
            <ButtonTheme
              screenDirection={() => {validetionFormOpenAccount()}}
              nameButton="Open Account"      
            />
            <ButtonTheme
              screenDirection={() => {resetOpenAccount()}}
              nameButton="Reset Values"              
            />
          </View>                
    </View>
  );
}


