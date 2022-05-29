import React from 'react';
import { 
  View,
} from 'react-native';

import HomeImage from '../components/homeImage/HomeImage';
import ButtonTheme from '../components/buttonTheme/ButtonTheme';
import HomeStyle from '../styles/homeStyle/HomeStyle'


export default function Home({ navigation }) {
  return (
    <View style={HomeStyle.containerHome}>
      <HomeImage     
      
      />
      <View>
        <ButtonTheme
          screenDirection={() => navigation.navigate('AccountOpening')}
          nameButton="Account Opening"      
        />
        <ButtonTheme
          screenDirection={() => navigation.navigate('HelpClient')}
          nameButton="Help Client"              
        />
      </View>
    </View>
  );
}
