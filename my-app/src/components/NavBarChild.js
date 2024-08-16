import React from 'react'

function NavBarChild(props) {
  return (
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
  )
}

export default NavBarChild
