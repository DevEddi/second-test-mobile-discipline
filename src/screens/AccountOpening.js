import React from 'react';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import { 
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';




export default function AccountOpening() {
  
  const [selectedGender, setSelectedGender] = useState();
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (    
    <View>
      <Text>Open Account</Text>
      <View>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"          
          />
          <Text>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"          
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
              <Text>Your Limit:</Text>
              <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
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
          >
            <Text>Open Account</Text>  
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
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