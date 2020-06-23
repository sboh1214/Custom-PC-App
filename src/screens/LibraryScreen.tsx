import React, {useEffect, useState} from 'react';
import * as NB from 'native-base';

type User = {
  email: string;
  password: string;
};

export default function LibraryScreen() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(undefined);
  }, [user]);

  const onPressAccount = () => {};

  return (
    <NB.Container>
      <NB.Header>
        <NB.Left />
        <NB.Body>
          <NB.Title>보관함</NB.Title>
        </NB.Body>
        <NB.Right>
          {user === undefined ? (
            <NB.Button transparent onPress={onPressAccount}>
              <NB.Text>로그인</NB.Text>
            </NB.Button>
          ) : (
            <NB.Button transparent onPress={onPressAccount}>
              <NB.Text>로그아웃</NB.Text>
            </NB.Button>
          )}
        </NB.Right>
      </NB.Header>
      <NB.Content>
        <NB.List />
      </NB.Content>
    </NB.Container>
  );
}
