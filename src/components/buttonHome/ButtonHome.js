import React from 'react';
import { 
  Text,
  View,
  Button
} from 'react-native';



export default function ButtonHome(props) {
  return (
    <View>
      <Button        
        onPress={props.}
        title={props.nameButton}
      />
    </View>
  );
}
