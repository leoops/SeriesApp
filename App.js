import React, { Component } from 'react';
import { Font, AppLoading } from "expo";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import { Root } from 'native-base';

import { composeWithDevTools } from "remote-redux-devtools";

import Routes from './src/Routes';
import rootReducer from './src/store';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(reduxThunk)
))

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoading : true,  
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({fontLoading : false});
  }
  render() {
    if (this.state.fontLoading){
      return <AppLoading/>
    }
    return (
      <Root>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Root>
    );
  }
}
export default App;