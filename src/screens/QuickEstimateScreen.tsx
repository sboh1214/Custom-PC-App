import * as React from 'react';
import * as NB from 'native-base';

export default function QuickEstimateScreen() {
  const onPressReset = () => {};
  const onPressComplete = () => {};

  return (
    <NB.Container>
      <NB.Header>
        <NB.Left>
          <NB.Button transparent onPress={onPressReset}>
            <NB.Text>초기화</NB.Text>
          </NB.Button>
        </NB.Left>
        <NB.Body>
          <NB.Title>빠른 견적</NB.Title>
        </NB.Body>
        <NB.Right>
          <NB.Button transparent onPress={onPressComplete}>
            <NB.Text>완료</NB.Text>
          </NB.Button>
        </NB.Right>
      </NB.Header>
      <NB.Content>
        <NB.Form>
          <NB.Item>
            <NB.Input placeholder="Username" />
          </NB.Item>
          <NB.Item last>
            <NB.Input placeholder="Password" />
          </NB.Item>
        </NB.Form>
      </NB.Content>
    </NB.Container>
  );
}
