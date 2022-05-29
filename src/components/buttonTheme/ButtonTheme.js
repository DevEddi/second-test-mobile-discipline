import React from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './style'

export default function ButtonTheme(props) {
  return (
    <View>
      <TouchableOpacity 
        style={styles.buttonTouch}       
        onPress={props.screenDirection}      
      >
        <Text>{props.nameButton}</Text>
      </TouchableOpacity>
    </View>
  );
}
