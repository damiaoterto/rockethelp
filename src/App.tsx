import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './styles/theme';
import { Loading } from './components/Loading';
import SigIn from './screens/SignIn';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      {fontLoaded ? (<SigIn />) : (<Loading />) }
    </NativeBaseProvider>
  );
}

export default App;
