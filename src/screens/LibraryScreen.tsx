import * as React from 'react';
import * as NB from 'native-base';

export default function LibraryScreen() {
  const onPressAccount = () => {};

  return (
    <NB.Container>
      <NB.Header>
        <NB.Left />
        <NB.Body>
          <NB.Title>보관함</NB.Title>
        </NB.Body>
        <NB.Right>
          <NB.Button transparent onPress={onPressAccount}>
            <NB.Text>계정</NB.Text>
          </NB.Button>
        </NB.Right>
      </NB.Header>
      <NB.Content>
        <NB.List />
      </NB.Content>
    </NB.Container>
  );
}
