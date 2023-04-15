import './App.css';
import Table from './components/Table';
import ButtonBlack from './components/ButtonBlack';
import ButtonRed from './components/ButtonRed';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedActive: false,
      isBlackActive: false,
    };
    this.handleRedClick = this.handleRedClick.bind(this);
    this.handleBlackClick = this.handleBlackClick.bind(this);
  }

  handleRedClick() {
    this.setState({
      isRedActive: true,
      isBlackActive: false,
    });
  }

  handleBlackClick() {
    this.setState({
      isRedActive: false,
      isBlackActive: true,
    });
  }

  render() {
    const hrClassName = this.state.isRedActive ? 'hrColorRed' : 'hrColorBlack';
    return (
      <div className="App">
        <div className='buttonSuits'>
          <ButtonRed manegeRedClick={this.handleRedClick} />
          <ButtonBlack manegeBlackClick={this.handleBlackClick} />
        </div>
        <h1>CANASTRA</h1>
        <hr className={hrClassName} />
        <Table />
        <hr className={hrClassName} />
      </div>
    );
  }
}

export default App;
