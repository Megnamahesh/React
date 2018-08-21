import React, { Component } from 'react';

class CaaComponent extends Component {
    render() {
      return (
        <div style={{backgroundColor:'lightgray',height:'160px',width:'400px',marginLeft:'500px',marginTop:'-160px'}} >
         <p style={{color:'Blue',textAlign:'center'}}>Create an Account?</p>   
         <button type="button" class="btn btn-outline-primary waves-effect" style={{width:'200px',marginLeft:'100px'}}>ENROLL</button>   
        </div>
      );
    }
}

export default CaaComponent;