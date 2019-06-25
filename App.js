


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CounterApp from './src/CounterApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 *  - pure functions
 *  - only mandatory argument is the 'type'
 * Subscriber - listens for state change to update the ui
 */
const initialState={
  counter:0
}
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case "INCREASE_COUNTER":
      return { 
        counter: state.counter + 1 
      }
    case "DECREASE_COUNTER":
      return { 
        counter: state.counter - 1 
      }
  }
  return state;
}
const store=createStore(reducer);
export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});


// Normal React  Native App

// import React, {Component} from 'react';
// import {
//   Platform, 
//   StyleSheet, 
//   Text, 
//   View,
//   TouchableOpacity
// } from 'react-native';


// /**
//  * Store - holds our state - THERE IS ONLY ONE STATE
//  * Action - State can be modified using actions - SIMPLE OBJECTS
//  * Dispatcher - Action needs to be sent by someone - known as dispatching an action
//  * Reducer - receives the action and modifies the state to give us a new state
//  *  - pure functions
//  *  - only mandatory argument is the 'type'
//  * Subscriber - listens for state change to update the ui
//  */

// export default class App extends Component{
//   state={
//     counter:0
//   }
//   increaseCounter=()=>{
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   decreaseCounter=()=>{
//     this.setState({ counter: this.state.counter - 1 })
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//           <View style={{flexDirection:'row',width:200,justifyContent:'space-around'}}>
//             <TouchableOpacity onPress={()=>this.increaseCounter()}>
//               <Text style={{fontSize:20}}>Increase</Text>
//             </TouchableOpacity>
//               <Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
//           <TouchableOpacity onPress={() => this.decreaseCounter()}>
//               <Text style={{ fontSize: 20 }}>Decrease</Text>
//             </TouchableOpacity>
//           </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
  
// });
