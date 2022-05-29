import React, { useState } from 'react';
import { 
  Text,
  View,
  Animated,
} from 'react-native';

import styles from './style'

export default function TextInfo(props) {

  const [largura, setLargura] = useState(new Animated.Value(0))

  Animated.timing(
    largura,
    {
      toValue: 380,
      duration:4000,
      useNativeDriver: false,
    }
  ).start();

  return (
    <Animated.View
      style={{
      width: largura
      }}>
        <Text style={styles.textInfo}>{props.information}</Text>
    </Animated.View>
  );
}
