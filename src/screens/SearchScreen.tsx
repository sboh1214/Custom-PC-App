import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {headerStyles} from 'utils/styles';
import {View} from 'react-native';

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
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'http://m.danawa.com'}}
        onNavigationStateChange={handleWebView}
        ref={(ref) => (webView = ref)}
      />
    </View>
  );
}
