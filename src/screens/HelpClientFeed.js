import React from 'react';

import { 
  Text,
  View,
} from 'react-native';

import FormInfo from '../components/formInfo/FormInfo'
import HelpClientStyle from '../styles/helpClientStyle/HelpClientStyle'

export default function HelpClientFeed(){
  return (
    <View style={HelpClientStyle.containerHelp}>
      <View>
        <Text style={HelpClientStyle.titleHelp}>I'm <Text style={HelpClientStyle.titleVick}>Vick</Text>, how can I help you?</Text>         
      </View>           
      <FormInfo/>      
    </View>
  );
}
