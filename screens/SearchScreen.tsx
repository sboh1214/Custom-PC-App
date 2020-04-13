import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
} from 'native-base';
import {WebView} from 'react-native-webview';

type WebViewState = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

export default function SearchScreen(): JSX.Element {
  const [webViewState, setWebViewState] = useState<WebViewState>();
  let webView: any = null;
  const [headerTitle, setHeaderTitle] = useState('검색');

  const handleWebView = (state: WebViewState) => {
    setWebViewState(state);
  };

  useEffect(() => {
    setHeaderTitle(webViewState?.title ?? '검색');
  }, [webViewState]);

  const handleBack = () => {
    if (webViewState?.canGoBack === true) {
      webView.goBack();
    }
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={handleBack}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text>{headerTitle}</Text>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={{flex: 1}}>
        <WebView
          source={{uri: 'http://m.danawa.com'}}
          onNavigationStateChange={handleWebView}
          ref={(ref) => (webView = ref)}
        />
      </Content>
    </Container>
  );
}
