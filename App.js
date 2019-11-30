import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text, 
    View,
    Image,
    Dimensions,
    ScrollView,
    FlatList
  } from 'react-native';

import Post from './src/components/Post';

// API para pegar o tamanho da tela correto
const width = Dimensions.get('screen').width;

export default class InstaMobile extends Component {
  
  constructor() {
    super();
    this.state = {
     fotos: []
   }
 }  

componentDidMount() {
  fetch('http://instalura-api.herokuapp.com/api/public/fotos/rafael')
  .then(resposta => resposta.json())
  .then(json => this.setState({fotos: json})).catch((error)=>{
    console.log('Api call error');
    alert(error.message);
  });
}

  render() {

    return (
      <FlatList style={styles.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={ ({item}) =>
         <Post foto={item}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 20
  }
});

AppRegistry.registerComponent('InstaMobile', () => InstaMobile);