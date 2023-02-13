import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const StatusBarBottom = () => {
  const insets = useSafeAreaInsets();
  return <View style={{...styles.container, paddingTop: insets.bottom}} />;
};
const styles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0,0,0,0.6)'},
});
export default StatusBarBottom;
