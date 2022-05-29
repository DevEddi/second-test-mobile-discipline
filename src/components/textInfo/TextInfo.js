import React from 'react';
import { 
  Text,
  View,
} from 'react-native';

import styles from './style'

export default function TextInfo(props) {
  return (
    <View>
        <Text style={styles.textInfo}>{props.information}</Text>
    </View>
  );
}
