import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Config from './Config';
import TimeAgo from './TimeAgo';
import * as Util from './Util';

let {height, width} = Dimensions.get('window');
let photoSize = (height > width) ? width : height;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 7,
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    marginTop: 5,
    marginLeft: 7,
    fontSize: 12,
    width: width,
    alignItems: 'flex-start',
  },
  photo: {
    height: photoSize,
    width: photoSize,
  },
  time_user: {
    marginTop: 5,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: width
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
  price: {
    fontSize: 24,
    color: '#ff0000'
  },
  button: {
    marginTop: 5,
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#0000FF',
  },
});

export default class ItemDeatil extends React.Component {
  static navigationOptions = {
    title: null,
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{uri:Config.IMAGE_URL + params.item.image}} style={styles.photo} />
        <Text style={styles.desc}>{params.item.desc}</Text>
        <View style={styles.time_user}>
          <TimeAgo language='jp' time={params.item.createtime} style={styles.timeago} />
          <Text style={styles.user}>{params.user.nickname}</Text>
        </View>
        <Text style={styles.price}>¥{Util.numberWithCommas(params.item.price)}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack(null)}>
          <Text style={styles.text}>購入する</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}