import React from 'react';
import { 
  ActivityIndicator, 
  View, 
  ListView, 
  StyleSheet, 
  Text,
  TouchableOpacity,
  RefreshControl
} from 'react-native';
import Row from './Row';
import Config from './Config';
import Header from './Header';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class MainItemList extends React.Component {
  static navigationOptions = {
    title: 'MyShoppingMall',
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      gobackRefreshing: false
    }
    this._renderRow = this._renderRow.bind(this);
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this._fetch();
  }

  _fetch() {
    fetch(Config.LIST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          refreshing: false,
          isLoading: false,
          dataSource: ds.cloneWithRows(responseData.list),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

  componentDidMount() {
    return this._fetch();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator style={{transform: [{scale: Config.ACTIVITYINDICATOR_SCALE}]}} color={Config.REFRESH_COLOR} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          refreshControl={
            <RefreshControl
              color={Config.REFRESH_COLOR}
              tintColor={Config.REFRESH_COLOR}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          // renderHeader={() => <Header />}
          // renderFooter={() => <Footer />}
        />
      </View>
    );
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity onPress={this._onPressRow.bind(this, rowData)}>
        <Row {...rowData} />
      </TouchableOpacity>
    );
  }

  _onPressRow(rowData) {
    this.props.navigation.navigate('ItemDetail', rowData);
  }
}