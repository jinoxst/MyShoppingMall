import React from 'react';
import { 
  ActivityIndicator, 
  AppRegistry, 
  View, 
  ListView, 
  StyleSheet, 
  Text } from 'react-native';
import Row from './container/Row';
import Config from './container/Config';
import Header from './container/Header';
import Footer from './container/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(Config.LIST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // console.log(responseData);
        this.setState({
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          // renderHeader={() => <Header />}
          // renderFooter={() => <Footer />}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('MyShoppingMall', () => ListViewDemo);