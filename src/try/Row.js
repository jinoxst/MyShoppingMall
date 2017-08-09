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
  desc: {
    marginLeft: 12,
    fontSize: 12,
  },
  price: {
    marginLeft: 12,
    marginTop: 5,
    fontSize: 16,
    color: '#ff0000'
  },
  user: {
    marginLeft: 12,
    marginTop: 5,
    fontSize: 12,
    color: '#848484'
  },
  txt_container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{uri:Config.IMAGE_URL + props.item.image}} style={styles.photo} />
    <View style={styles.txt_container}>
      <Text style={styles.desc} numberOfLines={3}>
        {props.item.desc}
      </Text>
      <Text style={styles.price}>
        ¥{Util.numberWithCommas(props.item.price)}
      </Text>
      <Text style={styles.user}>
        {`${props.item.open_date} ${props.user.nickname}`}
      </Text>
    </View>
  </View>
);

export default Row;