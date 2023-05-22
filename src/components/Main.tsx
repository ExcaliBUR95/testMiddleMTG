import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div className="main">
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
      reviews: state.reviews, 
    };
  };
  

export default connect(mapStateToProps)(Main);
