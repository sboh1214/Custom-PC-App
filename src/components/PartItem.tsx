import React from 'react';
import {View, Text, Image} from 'react-native';

export default function PartItem({picture, title, price, children}) {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        style={{flex: 0, width: 80, height: 80, resizeMode: 'contain'}}
        source={picture}
      />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text>{title}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text>{price}</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>{children}</View>
      </View>
    </View>
  );
}
