import React from 'react';
import {Text, View, StyleProp, TextStyle} from 'react-native';
import {CASE} from 'utils/parts';

type CaseDetailType = {
  caseItem: CASE;
  textStyle: StyleProp<TextStyle>;
};

export default function CaseDetail({caseItem, textStyle}: CaseDetailType) {
  return (
    <View>
      <Text style={textStyle}>{caseItem.size}</Text>
      <Text style={textStyle}>{caseItem.atx ? 'ATX' : ''}</Text>
      <Text style={textStyle}>{caseItem.m_atx ? 'Micro-ATX' : ''}</Text>
      <Text style={textStyle}>{caseItem.m_itx ? 'Mini-ITX' : ''}</Text>
      <Text style={textStyle}>
        그래픽카드 장착 가능 길이:{caseItem.vga_len}mm
      </Text>
    </View>
  );
}
