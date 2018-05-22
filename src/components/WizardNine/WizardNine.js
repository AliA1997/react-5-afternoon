import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddressOne, updateAddressTwo, updateAddressThree } from '../../ducks/reducer';

class WizardNine extends Component {

    render(){
        const { dispatch } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => dispatch(updateAddressOne(e.target.value))}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => dispatch(updateAddressTwo(e.target.value))}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => dispatch(updateAddressThree(e.target.value))}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

export default connect()(WizardNine);