import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const StatusBarTop = () => {
  const insets = useSafeAreaInsets();

  return <View style={{...styles.container, paddingTop: insets.top}} />;
};
const styles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0,0,0,0.6)'},
});
export default StatusBarTop;
