import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateRealEstateAgent } from '../../ducks/reducer';

class WizardFive extends Component {
    render(){
        const { dispatch } = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => dispatch(updateRealEstateAgent(true))}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => dispatch(updateRealEstateAgent(false))}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(WizardFive);