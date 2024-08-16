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
          <div className='frmContainer'>
          <form>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username'/>
            <span>     </span>
            <label htmlFor='password'>Password: </label>
            <input type='text' id='password'/>
            <span>    </span>
            <button onClick={props.handleLogin}>Submit</button>
          </form>
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

