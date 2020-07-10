import React from 'react';
import {TouchableHighlight, View, StyleSheet, Text} from 'react-native';

type QuoteItemProps = {
  id: string;
  click: () => any;
};

export default function QuoteItem({id, onClick}: QuoteItemProps) {
  const styles = StyleSheet.create({
    card: {
      margin: 6,
      borderRadius: 10,
      borderColor: '#909090',
      borderWidth: 1,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      margin: 3,
    },
  });

  return (
    <TouchableHighlight
      style={styles.card}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {
        onClick();
      }}>
      <View style={styles.content}>
        <Text>{id}</Text>
      </View>
    </TouchableHighlight>
  );
}
