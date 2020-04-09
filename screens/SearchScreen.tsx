import * as React from 'react';
import {Container, Header, Content} from 'native-base';
import {WebView} from 'react-native-webview';

export default function SearchScreen(): JSX.Element {
  return (
    <Container>
      <Header />
      <Content contentContainerStyle={{flex: 1}}>
        <WebView source={{uri: 'http://m.danawa.com'}} />
      </Content>
    </Container>
  );
}
