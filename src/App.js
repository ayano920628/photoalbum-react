import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import Dashboard from './containers/Dashboard';
import Upload from './containers/Upload';
import Image from './containers/Image';
import Album from './containers/Album';
import Albumcopy from './containers/Albumcopy';

import { PrivateRoute } from './components/PrivateRoute';
import Registered from './components/Registered';

// import { PDFViewer } from '@react-pdf/renderer';

const styles = {
  root: {
    flexGrow: 1,
  },
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {/* <PDFViewer> */}
        {/* <MyDocument /> */}
        {/* </PDFViewer> */}
        <Router>
          <div className={classes.root}>
            <PrivateRoute path="/dashboard" exact={true} component={Dashboard}></PrivateRoute>
            <PrivateRoute path="/upload" exact={true} component={Upload}></PrivateRoute>
            <PrivateRoute path="/image/:id" component={Image}></PrivateRoute>
            <PrivateRoute path="/album" exact={true} component={Album}></PrivateRoute>
            <PrivateRoute path="/albumcopy" exact={true} component={Albumcopy}></PrivateRoute>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/register" exact={true} component={Signup}></Route>
            <Route path="/registered" exact={true} component={Registered}></Route>
            <Route path="/verify" component={Activate}></Route>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);