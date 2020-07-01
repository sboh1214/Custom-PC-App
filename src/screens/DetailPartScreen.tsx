import React, {useState, useEffect} from 'react';
import * as NB from 'native-base';
import {WebView} from 'react-native-webview';
import {headerStyles} from 'utils/styles';

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

  const onPressBack = () => {
    if (webViewState?.canGoBack === true) {
      webView.goBack();
    }
  };

  const onPressForward = () => {
    if (webViewState?.canGoForward === true) {
      webView.goForward();
    }
  };

  return (
    <NB.Container>
      <NB.Header>
        <NB.Left style={headerStyles.left}>
          <NB.Button transparent onPress={onPressBack}>
            <NB.Icon name="arrow-back" />
          </NB.Button>
        </NB.Left>
        <NB.Body style={headerStyles.body}>
          <NB.Text>{headerTitle}</NB.Text>
        </NB.Body>
        <NB.Right style={headerStyles.right}>
          <NB.Button transparent onPress={onPressForward}>
            <NB.Icon name="arrow-forward" />
          </NB.Button>
        </NB.Right>
      </NB.Header>
      <NB.Content contentContainerStyle={{flex: 1}}>
        <WebView
          source={{uri: 'http://m.danawa.com'}}
          onNavigationStateChange={handleWebView}
          ref={(ref) => (webView = ref)}
        />
      </NB.Content>
    </NB.Container>
  );
}
