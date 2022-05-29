import React from 'react';
import { 
  View,
  Image,

} from 'react-native';

import styles from './style'


export default function HomeImage() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.logoBank}
            source={require('/home/vicscov/Documents/workspace-github/testtwo/assets/vikiLogo.png')}
        />
    </View>
  );
}
