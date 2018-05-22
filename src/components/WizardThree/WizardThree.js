import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateProp } from '../../ducks/reducer';
import { connect } from 'react-redux';

class WizardThree extends Component {
    render(){
        const { dispatch } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={() => dispatch(updateProp('primaryHome'))}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={() => dispatch(updateProp('rentalProperty'))}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={() => dispatch(updateProp('secondaryHome'))}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        propToBeUsedOn: state.propToBeUsedOn
    }
}
export default connect(mapStateToProps)(WizardThree); 
