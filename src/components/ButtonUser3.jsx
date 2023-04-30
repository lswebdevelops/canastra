import '../styles/Counter.css';
import React from 'react';

class ButtonUser3 extends React.Component{
    render(){
        return(
            <>
            <button className='button-wins-user3'
               onClick={this.props.manageClickUser3}>
                {this.props.text}

            </button>
            </>
        );
    }
}

export default ButtonUser3;
