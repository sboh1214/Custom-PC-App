import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import CustomPCApp from 'App';

LogBox.ignoreAllLogs();
AppRegistry.registerComponent('CustomPCApp', () => CustomPCApp);
