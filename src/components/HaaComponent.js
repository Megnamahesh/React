import React, { Component } from 'react';

class HaaComponent extends Component {
    render() {
      return (
        <div style={{backgroundColor:'lightgray',height:'160px',width:'400px',marginTop:'20px',marginLeft:'50px'}} >
            <p style={{color:'Blue',textAlign:'center'}}>Have an Account?</p>
            <div>
            <button type="button" class="btn btn-outline-primary waves-effect" style={{width:'200px',marginLeft:'100px'}}>Merchant Login</button>
            <button type="button" class="btn btn-outline-primary waves-effect" style={{width:'230px',marginLeft:'85px'}}>Non-Merchant Login</button>
            </div>
        </div>
      );
    }
}

export default HaaComponent;
