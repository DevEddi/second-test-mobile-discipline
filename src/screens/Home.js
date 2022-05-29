import React from 'react';
import { 
  Text,
  View,
  Button
} from 'react-native';

import HomeImage from '../components/homeImage/HomeImage';

export default function Home({ navigation }) {
  return (
    <View>
      <HomeImage      
      
      />
      <Button
        title="Account Opening"
        onPress={() => navigation.navigate('AccountOpening')}
      />
      <Button
        title="Help Client"
        onPress={() => navigation.navigate('HelpClient')}
      />
    </View>
  );
}
