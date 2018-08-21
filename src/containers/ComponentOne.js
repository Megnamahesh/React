import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComponentOne extends Component {
    render() {
      return (
          <div style={{backgroundColor:'grey',height:'150px',width:'100px'}} >
               
          </div>
      );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
