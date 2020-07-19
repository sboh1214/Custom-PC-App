import React, {useState, useEffect} from 'react';
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import {QuoteResponse} from 'utils/server';
import {getQuoteById} from 'utils/storage';

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

  const [quote, setQuote] = useState<QuoteResponse>();

  useEffect(() => {
    getQuoteById(id).then((newQuote) => {
      setQuote(newQuote);
    });
  }, []);

  return (
    <TouchableHighlight
      style={styles.card}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => {
        click();
      }}>
      <View style={styles.content}>
        <Text style={titleStyle}>{quote?.name}</Text>
      </View>
    </TouchableHighlight>
  );
}
