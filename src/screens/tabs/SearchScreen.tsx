import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, StyleSheet} from 'react-native';
import {SCREEN} from 'utils/navigation';
import {Header, useThemeColors} from 'utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

type WebViewState = {
  url?: string;
  title?: string;
  loading?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
};

const SearchScreen = (): JSX.Element => {
  const colors = useThemeColors();
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
    console.log('pressback');
    if (webViewState?.canGoBack === true) {
      webView.goBack();
    }
  };

  const onPressForward = () => {
    if (webViewState?.canGoForward === true) {
      webView.goForward();
    }
  };

  const styles = StyleSheet.create({left: {flexDirection: 'row'}});

  return (
    <>
      <Header
        title={headerTitle ?? SCREEN.Search}
        left={
          <View style={styles.left}>
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
    </>
  );
};

export default SearchScreen;
