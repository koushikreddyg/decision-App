import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import IndecisionApp from './components/IndecisionApp';
import Forms from './components/Forms';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import Formsparent from './components/Formsparent'
import LifeCycleParent from './components/LifeCycleParent';
import './styles/styles.scss';
// import Sws from './components/Sws';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
