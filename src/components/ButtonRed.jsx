import '../styles/Button.css';
import React from 'react';
import { GiCard3Hearts } from "react-icons/gi";

class ButtonRed extends React.Component{
    render(){
        return(
            <div>   
             <button 
            className='redButton'
            onClick={this.props.manegeRedClick}>
                <GiCard3Hearts />
            </button>

            </div>
        )
    }
}
export default ButtonRed;
