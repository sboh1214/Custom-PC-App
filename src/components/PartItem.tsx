import React from 'react';
import {View, Text, Image, ImageSourcePropType, StyleSheet} from 'react-native';

type PartItemProps = {
  picture: ImageSourcePropType;
  title: string;
  price: string;
  children: any;
};

export default function PartItem({
  picture,
  title,
  price,
  children,
}: PartItemProps) {
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      flexDirection: 'row',
      margin: 6,
      borderRadius: 10,
      borderColor: '#909090',
      borderWidth: 1,
    },
    title: {flex: 1, flexDirection: 'column'},
    titleText: {fontWeight: 'bold'},
  });

  return (
    <View style={styles.card}>
      <Image
        style={{flex: 0, width: 80, height: 80, resizeMode: 'contain'}}
        source={picture}
      />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
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
