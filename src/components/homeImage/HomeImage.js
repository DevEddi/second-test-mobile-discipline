import React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  Image,

} from 'react-native';

import styles from './style'


export default function HomeImage() {
  return (
    <View style={styles.container}>
        <Text style={styles.titleBank}>Bank Viki</Text>
        <Image
            style={styles.logoBank}
            source={require('/home/vicscov/Documents/workspace-github/testtwo/assets/vikiLogo.png')}
        />
    </View>
  );
}
