import React, { Component } from 'react';
import Routes from './src/Routes';
import { Font, AppLoading } from "expo";
import { Root } from 'native-base';

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
        <Routes />
      </Root>
    );
  }
}
export default App;