import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Util from './Util';
import Config from './Config';
import TimeAgo from './TimeAgo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    marginLeft: 7,
    fontSize: 12,
  },
  price: {
    marginLeft: 7,
    fontSize: 18,
    color: '#ff0000'
  },
  user: {
    marginLeft: 7,
    fontSize: 12,
    color: '#848484',
  },
  timeago: {
    marginLeft: 7,
    fontSize: 12,
    color: '#848484',
  },
  price_time_user: {
    flex:1,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  time_user: {
    flex:1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  txt_container: {
    flex: 1,
    padding: 7,
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
      <Text style={styles.desc} numberOfLines={4}>
        {props.item.desc}
      </Text>
      <View style={styles.price_time_user}>
        <Text style={styles.price}>¥{Util.numberWithCommas(props.item.price)}</Text>
        <View style={styles.time_user}>
          <TimeAgo language='jp' time={props.item.createtime} style={styles.timeago} />
          <Text style={styles.user}>{props.user.nickname}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Row;