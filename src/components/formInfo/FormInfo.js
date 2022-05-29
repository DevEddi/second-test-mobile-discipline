import React from 'react';
import {
  View,
} from 'react-native';

import styles from './style'
import TextInfo from '../textInfo/TextInfo';
import InputInfo from '../inputInfo/InputInfo';
import ButtonSmall from '../buttonSmall/ButtonSmall'


export default function FormInfo(props) {

  return (
    <View>        
        <View style={styles.containerHelp}>
            <InputInfo                
                placeHolderName='Can I help you? '
                keyType='default'
            />
        </View>
        <View>
            <TextInfo
                information='Phone: +55 (71)3490-1234'
            />
            <TextInfo
                information='Locale: Brazil'
                
            />
            <TextInfo
                information='Street: 77 React'
            />

        </View>
    </View>
  );
}
