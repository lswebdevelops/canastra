import '../styles/Button.css';
import React from 'react';
import { GiCard3Hearts,GiCard3Clubs } from "react-icons/gi";

class Button extends React.Component{
    render(){
        return(
            <div className='buttonSuits'>
                
            {/* red button  */}
                <button className='redButton'>
                    <GiCard3Hearts />
                    </button>

                    
            {/* black button  */}
             <button className='blackButton'>
                <GiCard3Clubs />
                </button>
            </div>
        )
    }
}
export default Button;
