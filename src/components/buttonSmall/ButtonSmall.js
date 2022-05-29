import React from 'react';
import { 
  View,
  Button,
} from 'react-native';

import styles from './style'

export default function ButtonSmall(props) {
  return (
    <View>
        <Button
            title={props.nameButtonSmall}
            onPress={props.pressButtonSmall}            
        />
    </View>
  );
}
