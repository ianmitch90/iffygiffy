import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import SignInForm from './SignInForm'
import GifList from './GifList'
import GifForm from './GifForm'
import Logout from './Logout'

class App extends Component {

  render() {
    return (

        <div className='appContainer'>

          {this.props.user.username &&
            <div className='dashboard'>
              <span>
                Hiya {this.props.user.username}
              </span>
              <Logout />
              <GifForm />
              <GifList />
              
            </div>

          }

          {!this.props.user.username &&
            <SignInForm />
          }

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
