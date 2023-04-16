import React from "react";
import "../styles/Table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1Scores: [0, 0, 0, 0, 0], // array to store user1 scores for each round
      user2Scores: [0, 0, 0, 0, 0], // array to store user2 scores for each round
    };
  }

  handleInputChange = (event, index, user) => {
    const value = event.target.value;
    const scores = user === "user1" ? [...this.state.user1Scores] : [...this.state.user2Scores];
    scores[index] = value ? parseInt(value) : 0;
    user === "user1"
      ? this.setState({ user1Scores: scores })
      : this.setState({ user2Scores: scores });
  };

  calculateTotal = (scores) => {
    return scores.reduce((total, score) => total + score, 0);
  };

  render() {
    const { user1Scores, user2Scores } = this.state;
    const user1Total = this.calculateTotal(user1Scores);
    const user2Total = this.calculateTotal(user2Scores);

    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rodada </th>
              <th>
                <input className="input-user1" type="text" placeholder="Jogador 1" />
              </th>
              <th>
                <input className="input-user2" type="text" placeholder="Jogador 2" />
              </th>
            </tr>
          </thead>
          <tbody>
            {user1Scores.map((score, index) => (
              <tr key={index}>
                <td className="indexTD">{index + 1}</td>
                <td>
                  <input
                    type="number"
                    placeholder="0"
                    value={score}
                    onChange={(e) => this.handleInputChange(e, index, "user1")}
                    
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="0"
                    value={user2Scores[index]}
                    onChange={(e) => this.handleInputChange(e, index, "user2")}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td className="total">Total:</td>
              <td className="total-user1">{user1Total}</td>
              <td className="total-user2">{user2Total}</td>
            </tr>
          </tbody>
        </table>
      
      </div>
    );
  }
}

export default Table;
