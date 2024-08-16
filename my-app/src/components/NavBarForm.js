import React, { Component } from 'react'
import './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: this.state.isLoggedIn ? 'false' : 'true'
        })
    }
    
  render() {
    return (
      <div className='NavBar'>
        {this.state.isLoggedIn ? (
          <div>
              <NavBarChild isLoggedIn={this.state.isLoggedIn} />
          </div>
        ) : (
          <div>
            <h1>My Gallery</h1>
            <button className='btn' onClick={this.handleLogin}>Login</button>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

export default NavBarForm

