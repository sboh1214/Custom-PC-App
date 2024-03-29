import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {
  PART,
  CPU,
  PART_TYPE,
  MB,
  RAM,
  VGA,
  SSD,
  HDD,
  CASE,
  PSU,
} from 'utils/parts';
import CpuDetail from './parts/CpuDetail';
import MbDetail from './parts/MbDetail';
import RamDetail from './parts/RamDetail';
import VgaDetail from './parts/VgaDetail';
import SsdDetail from './parts/SsdDetail';
import HddDetail from './parts/HddDetail';
import CaseDetail from './parts/CaseDetail';
import PsuDetail from './parts/PsuDetail';

type PartItemProps = {
  part?: PART;
  partType: PART_TYPE;
  isHighlight?: boolean;
  style: {
    textColor: string;
    highlightColor?: string;
  };
  onClick: () => any;
};

export default function PartItem({
  part,
  partType,
  isHighlight,
  style,
  onClick,
}: PartItemProps) {
  const styles = StyleSheet.create({
    card: {
      margin: 6,
      borderRadius: 10,
      borderColor: isHighlight ? style.highlightColor : '#909090',
      borderWidth: 1,
      backgroundColor: isHighlight ? style.highlightColor : '#00000000',
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      margin: 3,
    },
    image: {width: 80, height: 80, resizeMode: 'contain'},
    titleText: {fontWeight: 'bold', color: style.textColor},
    makerText: {color: style.textColor},
    price: {flex: 1, flexDirection: 'column'},
    priceText: {
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: style.textColor,
    },
    detail: {flex: 1, flexDirection: 'column'},
    detailText: {color: style.textColor},
  });

  let detail;
  switch (partType) {
    case PART_TYPE.CPU:
      detail = <CpuDetail textStyle={styles.detailText} cpu={part as CPU} />;
      break;
    case PART_TYPE.MB:
      detail = <MbDetail textStyle={styles.detailText} mb={part as MB} />;
      break;
    case PART_TYPE.RAM:
      detail = <RamDetail textStyle={styles.detailText} ram={part as RAM} />;
      break;
    case PART_TYPE.VGA:
      detail = <VgaDetail textStyle={styles.detailText} vga={part as VGA} />;
      break;
    case PART_TYPE.SSD:
      detail = <SsdDetail textStyle={styles.detailText} ssd={part as SSD} />;
      break;
    case PART_TYPE.HDD:
      detail = <HddDetail textStyle={styles.detailText} hdd={part as HDD} />;
      break;
    case PART_TYPE.CASE:
      detail = (
        <CaseDetail textStyle={styles.detailText} caseItem={part as CASE} />
      );
      break;
    case PART_TYPE.PSU:
      detail = <PsuDetail textStyle={styles.detailText} psu={part as PSU} />;
      break;
    default:
      detail = <Text>Error</Text>;
      break;
  }

  if (part) {
    return (
      <TouchableHighlight
        style={styles.card}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          onClick();
        }}>
        <View style={styles.content}>
          <Image style={styles.image} source={{uri: part.image}} />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View>
                <Text style={styles.titleText}>{part.name}</Text>
              </View>
              <View>{detail}</View>
            </View>
            <View style={{flex: 0, flexDirection: 'column'}}>
              <View>
                <Text style={styles.makerText}>{part.maker}</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>￦{part.price}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight style={styles.card}>
        <Text style={{...styles.titleText, margin: 6}}>존재하지 않습니다</Text>
      </TouchableHighlight>
    );
  }
}
