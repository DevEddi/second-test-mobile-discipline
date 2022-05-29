import React from 'react';
import { 
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import FormInfo from '../components/formInfo/FormInfo';
import TextInfo from '../components/textInfo/TextInfo';
import HelpClientStyle from '../styles/helpClientStyle/HelpClientStyle';

export default function HelpClient() {
  return (
    <View style={HelpClientStyle.containerHelp}>
      <View>
        <Text style={HelpClientStyle.titleHelp}>I'm <Text style={HelpClientStyle.titleVick}>Vick</Text>, how can I help you?</Text>         
      </View>           
      <FormInfo/>
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