import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import type {DrawerScreen} from '@src/constants/types';

const LoginScreen = ({navigation}: DrawerScreen): JSX.Element => {
  return (
    <View style={styles.container}>
      <Button title="GoBack" onPress={() => navigation.goBack()} />
      <Text>Login Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
export default LoginScreen;
