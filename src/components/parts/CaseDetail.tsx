import React from 'react';
import {Text, View} from 'react-native';
import {CASE} from 'utils/parts';

type CaseDetailType = {
  caseItem: CASE;
};

export default function CaseDetail({caseItem}: CaseDetailType) {
  return (
    <View>
      <Text>{caseItem.size}</Text>
      <Text>{caseItem.atx ? 'ATX' : ''}</Text>
      <Text>{caseItem.m_atx ? 'Micro-ATX' : ''}</Text>
      <Text>{caseItem.m_itx ? 'Mini-ITX' : ''}</Text>
      <Text>그래픽카드 장착 가능 길이:{caseItem.vga_len}mm</Text>
    </View>
  );
}
