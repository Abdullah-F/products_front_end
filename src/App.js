import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import SignUp from "./containers/Auth/SignUp/SignUp";
import SignIn from "./containers/Auth/SignIn/SignIn";
import SignOut from "./containers/Auth/SignOut/SignOut";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import * as actionCreators from "./store/actions/index";
import Products from "./containers/Products/Products";

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStatus();
  }
  onSignedInRoutes() {
    return (
      <Switch>
        <Route path="/signout" exact component={SignOut} />
        <Redirect exact from="/signin" to="/" />
        <Route path="/products" component={Products} />
        <Redirect from="/" to="/products" />
      </Switch>
    );
  }

  onSignedOutRoutes() {
    return (
      <Switch>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" component={SignIn} />
      </Switch>
    );
  }

  routes() {
    return this.props.isSignedIn
      ? this.onSignedInRoutes()
      : this.onSignedOutRoutes();
  }

  render() {
    return <Layout isSignedIn={this.props.isSignedIn}>{this.routes()}</Layout>;
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.signIn.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthStatus: () => dispatch(actionCreators.checkAuthStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
