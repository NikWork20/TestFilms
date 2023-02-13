import React from 'react';

import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import CustomDrawer from '@src/components/CustomDrawer/CustomDrawer';
import {configDrawer} from '@src/constants/configDrawer';
import HomeNavigation from '@src/navigation/HomeNavigation';
import store, {persisted} from '@src/store';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persisted}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={configDrawer}
            initialRouteName="HOME"
            drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Screen" component={HomeNavigation} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
