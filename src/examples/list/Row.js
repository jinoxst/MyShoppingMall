import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Util from './Util';
import Config from './Config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{uri:Config.IMAGE_URL + props.item.image}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.user.name}(${props.user.id})`}
    </Text>
    <Text style={styles.text}>
      ¥{Util.numberWithCommas(props.item.price)}
    </Text>
  </View>
);

export default Row;