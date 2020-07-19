import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {SCREEN} from 'utils/navigation';
import {Header, useThemeColors, useContentStyles} from 'utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

type WebViewState = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

export default function SearchScreen(): JSX.Element {
  const colors = useThemeColors();
  const [headerTitle, setHeaderTitle] = useState('검색');
  const contentStyles = useContentStyles();

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
    <View style={contentStyles.content}>
      <Header
        title={headerTitle ?? SCREEN.Search}
        left={
          <View style={{flexDirection: 'row'}}>
            <Icon.Button
              name="arrow-back"
              backgroundColor="rgba(0, 0, 0, 0)"
              color={colors.primary}
              onPress={onPressBack}
            />
            <Icon.Button
              name="arrow-forward"
              backgroundColor="rgba(0, 0, 0, 0)"
              color={colors.primary}
              onPress={onPressForward}
            />
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
