import React, { useState } from 'react';
import { 
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';

import styles from './style'

export default function ButtonTheme(props) { 
  
  const [largura, setLargura] = useState(new Animated.Value(0))

  Animated.timing(
    largura,
    {
      toValue: 1,
      duration:3000,
      useNativeDriver: false,
    }
  ).start();

  return (
    <Animated.View
    style={{
      opacity: largura
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
