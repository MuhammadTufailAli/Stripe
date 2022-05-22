import React from 'react';
import { View, Text , TextInput, Pressable} from 'react-native';

export default function Stripe() {
    const [name, setName] = React.useState('');
  return (
    <View>
      <TextInput placeholder='Enter Name' name = "name" onChangeText={setName}/>
      <Pressable>
          <Text>Submit</Text>
      </Pressable>
     </View>
  );
}
