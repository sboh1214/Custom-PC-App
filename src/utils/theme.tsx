import {StyleSheet, useColorScheme, Text} from 'react-native';
import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import {useNavigation} from '@react-navigation/native';

type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
};

export const LightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(224, 224, 224)',
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
  },
};

export const ThemeContext = createContext({
  theme: LightTheme,
});

export const ThemeContextProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<any>(LightTheme);

  const restoreTheme = () => {
    if (colorScheme === 'dark') {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  };

  useEffect(() => {
    restoreTheme();
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export function useIsDark() {
  const navTheme = useContext(ThemeContext);
  return navTheme.theme.dark;
}

export function useThemeColors() {
  const navTheme = useContext(ThemeContext);
  return navTheme.theme.colors;
}

export function useContentStyles() {
  const appTheme = useThemeColors();

  return StyleSheet.create({
    content: {
      backgroundColor: appTheme.background,
    },
  });
}

export function useListStyles() {
  const appTheme = useThemeColors();

  return StyleSheet.create({
    header: {
      backgroundColor: appTheme.card,
    },
    body: {
      backgroundColor: appTheme.background,
    },
    text: {
      color: appTheme.text,
    },
  });
}

type HeaderProps = {
  left?: JSX.Element;
  title: string;
  right?: JSX.Element;
};

export function Header({left, title, right}: HeaderProps) {
  const navigation = useNavigation();
  const appTheme = useThemeColors();
  const isDark = useIsDark();

  const styles = StyleSheet.create({
    title: {
      color: appTheme.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  useLayoutEffect(() => {
    navigation.addListener('focus', setHeaderOptions);
  }, [navigation]);

  useLayoutEffect(() => {
    if (navigation.isFocused()) {
      setHeaderOptions();
    }
  }, [isDark]);

  const setHeaderOptions = () => {
    navigation?.dangerouslyGetParent()?.setOptions({
      headerLeft: () => left,
      headerTitle: () => <Text style={styles.title}>{title}</Text>,
      headerRight: () => right,
    });
  };
  return null;
}
