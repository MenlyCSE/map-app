import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

function PageHeader({ header }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="arrow-left" size={40} style={styles.backButton}/>
      <Text style={styles.header}>{header}</Text>
    </View>
  );
}

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    flex: 1,
  },
  backButton: {
    flex: 1,
    alignSelf: 'center',
  }
});
