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
import Config, {Constant} from './Config';
import TimeAgo from './TimeAgo';
import * as Util from './Util';

let {height, width} = Dimensions.get('window');
let photoSize = (height > width) ? width : height;

const styles = StyleSheet.create({
  scrollviewContainer: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewContainer: {
    flex: 1,
    padding: 0,
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
    marginBottom: 5,
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
  constructor(props) {
    super(props);
    this._soldOut = this._soldOut.bind(this);
  }

  static navigationOptions = {
    title: null,
  };

  _soldOut(item_id) {
    var datas = {
      item_id: item_id
    };
    var formBody = [];
    for (var property in datas) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(datas[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(Config.SOLDOUT_URL, {
      method: 'POST',
      headers: Constant.json.headers,
      body: formBody
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      if(responseData.status == '00'){
        const { navigation } = this.props;
        navigation.goBack(null);
        navigation.state.params._gotoBackReload();
      }else{
        alert(responseData.message);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .done();
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView scrollviewContainerStyle={styles.scrollviewContainer}>
        <View style={styles.viewContainer}>
          <Image source={{uri:Config.IMAGE_URL + params.rowData.item.image}} style={styles.photo} />
          <Text style={styles.desc}>{params.rowData.item.desc}</Text>
          <View style={styles.time_user}>
            <TimeAgo language='jp' time={params.rowData.item.createtime} style={styles.timeago} />
            <Text style={styles.user}>{params.rowData.user.nickname}</Text>
          </View>
          <Text style={styles.price}>¥{Util.numberWithCommas(params.rowData.item.price)}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this._soldOut(params.rowData.item.id)}>
            <Text style={styles.text}>購入する</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}