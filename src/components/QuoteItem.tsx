import React from 'react';
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';

type QuoteItemProps = {
  id: string;
  titleStyle: StyleProp<TextStyle>;
  click: () => any;
};

export default function QuoteItem({id, titleStyle, click}: QuoteItemProps) {
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
        click();
      }}>
      <View style={styles.content}>
        <Text style={titleStyle}>{id}</Text>
      </View>
    </TouchableHighlight>
  );
}
