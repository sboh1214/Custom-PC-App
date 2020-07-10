import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import PartItem from 'components/PartItem';
import {PART_TYPE, CPU, RAM, VGA, HDD, SSD, MB, PSU, CASE} from 'utils/parts';
import {QuoteResponse, getPartById} from 'utils/server';
import {getQuoteById} from 'utils/storage';

export default function DetailQuoteScreen(): JSX.Element {
  const route = useRoute();
  const [quote, setQuote] = useState<QuoteResponse>();

  const [cpu, setCpu] = useState<CPU>();
  const [ram, setRam] = useState<RAM>();
  const [vga, setVga] = useState<VGA>();
  const [ssd, setSsd] = useState<SSD>();
  const [hdd, setHdd] = useState<HDD>();
  const [mb, setMb] = useState<MB>();
  const [psu, setPsu] = useState<PSU>();
  const [caseItem, setCaseItem] = useState<CASE>();

  useEffect(() => {
    getQuoteById(route.params.id).then((newQuote) => {
      setQuote(newQuote);
    });
  }, []);

  useEffect(() => {
    if (quote) {
      getPartById(PART_TYPE.CPU, quote.cpu).then((newCpu) => {
        setCpu(newCpu);
      });
      getPartById(PART_TYPE.RAM, quote.ram).then((newRam) => {
        setRam(newRam);
      });
      getPartById(PART_TYPE.VGA, quote.vga).then((newVga) => {
        setVga(newVga);
      });
      getPartById(PART_TYPE.SSD, quote.ssd).then((newSsd) => {
        setSsd(newSsd);
      });
      getPartById(PART_TYPE.HDD, quote.hdd).then((newHdd) => {
        setHdd(newHdd);
      });
      getPartById(PART_TYPE.MB, quote.mb).then((newMb) => {
        setMb(newMb);
      });
      getPartById(PART_TYPE.PSU, quote.psu).then((newPSU) => {
        setPsu(newPSU);
      });
      getPartById(PART_TYPE.CASE, quote.case).then((newCase) => {
        setCaseItem(newCase);
      });
    }
  }, [quote]);

  return (
    <ScrollView style={{flex: 1}}>
      <Text>{route.params.id}</Text>
      <Text>{`CPU : ${quote?.cpu_count} 개`}</Text>
      <PartItem part={cpu} partType={PART_TYPE.CPU} onClick={() => {}} />
      <Text>{`RAM : ${quote?.ram_count} 개`}</Text>
      <PartItem part={ram} partType={PART_TYPE.RAM} onClick={() => {}} />
      <Text>{`VGA : ${quote?.vga_count} 개`}</Text>
      <PartItem part={vga} partType={PART_TYPE.VGA} onClick={() => {}} />
      <Text>{`SSD : ${quote?.ssd_count} 개`}</Text>
      <PartItem part={ssd} partType={PART_TYPE.SSD} onClick={() => {}} />
      <Text>{`HDD : ${quote?.hdd_count} 개`}</Text>
      <PartItem part={hdd} partType={PART_TYPE.HDD} onClick={() => {}} />
      <Text>{`MainBoard : ${quote?.mb_count} 개`}</Text>
      <PartItem part={mb} partType={PART_TYPE.MB} onClick={() => {}} />
      <Text>{`Power Supply Unit : ${quote?.psu_count} 개`}</Text>
      <PartItem part={psu} partType={PART_TYPE.PSU} onClick={() => {}} />
      <Text>{`Case : ${quote?.case_count} 개`}</Text>
      <PartItem part={caseItem} partType={PART_TYPE.CASE} onClick={() => {}} />
    </ScrollView>
  );
}
