import React from 'react';
import { 
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import FormInfo from '../components/formInfo/FormInfo';

export default function HelpClient() {
  return (
    <View>
      <View>
        <Text>Vick will help you!!!</Text>
      </View>
      <View>
          <TextInput
            style={styles.input}
            placeholder="Digite sua dúvida"          
          />
      </View>
      <View>
        <Text>Info Bank</Text>
        <Text>Phone</Text>
        <Text>Map</Text>
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
});