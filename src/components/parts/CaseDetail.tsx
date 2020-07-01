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
      <Text>{caseItem.board}</Text>
      <Text>{caseItem.vgalen}mm</Text>
    </View>
  );
}
