import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateEmail } from '../../ducks/reducer';

class WizardTen extends Component {
    render(){
        const { dispatch } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => dispatch(updateFirstName(e.target.value))}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => dispatch(updateLastName(e.target.value))}/>
                    <input type="text" placeholder="email" onChange={(e) => dispatch(updateEmail(e.target.value))}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
export default connect()(WizardTen);