import React, {useState, useEffect, useLayoutEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'utils/navigation';

type WebViewState = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

export default function SearchScreen(): JSX.Element {
  const navigation = useNavigation();
  const [headerTitle, setHeaderTitle] = useState('검색');

  useLayoutEffect(() => {
    navigation.addListener('focus', () => {
      setHeaderOptions(headerTitle);
    });
  }, [navigation, headerTitle]);

  const setHeaderOptions = (title: string) => {
    navigation?.dangerouslyGetParent()?.setOptions({
      headerTitle: () => <Text>{title ?? SCREEN.Search}</Text>,
      headerRight: () => {},
    });
  };

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
      <WebView
        source={{uri: 'http://m.danawa.com'}}
        onNavigationStateChange={handleWebView}
        ref={(ref) => (webView = ref)}
      />
    </View>
  );
}
