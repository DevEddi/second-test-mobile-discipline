import React, { useState } from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';

import styles from './style'

export default function ButtonTheme(props) { 
  
  const [largura, setLargura] = useState(new Animated.Value(100))

  Animated.timing(
    largura,
    {
      toValue: 410,
      duration:4000,
      useNativeDriver: false,
    }
  ).start();

  return (
    <Animated.View
    style={{
      width: largura
    }}>
      <TouchableOpacity 
        style={styles.buttonTouch}       
        onPress={props.screenDirection}      
      >
        <Text>{props.nameButton}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
