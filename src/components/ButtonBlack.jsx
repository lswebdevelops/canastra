import '../styles/Button.css';
import React from 'react';
import { GiCard3Clubs } from "react-icons/gi";

class ButtonBlack extends React.Component{
    render(){
        return(
            <div>
                <button 
             className='blackButton'
             onClick={this.props.manegeBlackClick}>
                <GiCard3Clubs />
             </button>
            </div>
        )
    }
}
export default ButtonBlack;
