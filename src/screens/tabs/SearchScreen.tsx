import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, Button} from 'react-native';
import {SCREEN} from 'utils/navigation';
import {Header} from 'utils/theme';

type WebViewState = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

export default function SearchScreen(): JSX.Element {
  const [headerTitle, setHeaderTitle] = useState('검색');

  const [webViewState, setWebViewState] = useState<WebViewState>();
  let webView: any = null;

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
      <Header
        title={headerTitle ?? SCREEN.Search}
        left={
          <View style={{flexDirection: 'row'}}>
            <Button title="Back" onPress={onPressBack} />
            <Button title="Forward" onPress={onPressForward} />
          </View>
        }
      />
      <WebView
        source={{uri: 'http://m.danawa.com'}}
        onNavigationStateChange={handleWebView}
        ref={(ref) => (webView = ref)}
      />
    </View>
  );
}
