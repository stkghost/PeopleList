import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

//import Header from '../components/Header.js';
import PeopleList from '../components/PeopleList.js';

import axios from 'axios';

export default class PeoplePage extends React.Component {
    constructor(props){
      super(props);

      this.state ={
        peoples:[],
        loading: false,
        error: false,

      };
    }
    componentDidMount(){
      this.setState({ loading: true});
      setTimeout(() => {
        axios
          .get('https://randomuser.me/api/?nat=br&results=12')
          .then(response => {
            const {results} = response.data;
            this.setState({
                peoples: results,
                loading: false
            });
          }).catch(error => {
              this.setState({
                loading: false,
                error: true})
          })
      }, 3500)
        
    } 
  // renderLoading() {
  //   if (this.state.loading){
  //     return <ActivityIndicator size='large' color='black'/>;
  //   } 
  //   return null;
    
  // }
  render (){
    
    return (
    
      <View style={styles.container}>
        {/* {this.renderLoading()} */}
        {
          this.state.loading 
          ?   <ActivityIndicator size='large' color='black'/>
          :   this.state.error
            ?   <Text style={styles.textError}>Ops... Algo deu errado :(( </Text>
            :   <PeopleList
                  peoples={this.state.peoples}
                  onPressItem={pageParams => {
                    this.props.navigation.navigate('PeopleDetail', pageParams);
                  }}
                  />
        }
      </View>
    
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  textError: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18
  }
})