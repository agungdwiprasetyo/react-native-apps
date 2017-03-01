import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Router, Scene, Route, Schema } from 'react-native-router-flux';

import PageOne from './components/Page1';
import PageTwo from './components/Page2';

export default class MainApplication extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: "Agung Dwi Prasetyo",
            company: "Bogor Agricultural University"
        }
    }
    
    render() {
        return (
          <Router>
            <Scene key="root">
              <Scene key="pageOne" component={PageOne} title="Page One" initial={true} />
              <Scene key="pageTwo" component={PageTwo} title="Page Two" />
            </Scene>
          </Router>
        )
    }
}
