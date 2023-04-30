import React, { useState } from 'react';

import "../styles/Table.css";

const Table = () => {
  const [users, setUsers] = useState([
    { name: "User 1", scores: [0, 0, 0, 0, 0] },
    { name: "User 2", scores: [0, 0, 0, 0, 0] },
    { name: "User 3", scores: [0, 0, 0, 0, 0] },
  ]);

  const handleInputChange = (event, index, userIndex) => {
    const value = event.target.value;
    setUsers(prevState => {
      const newScores = [...prevState[userIndex].scores];
      newScores[index] = parseInt(value);
      const newUsers = [...prevState];
      newUsers[userIndex] = { ...prevState[userIndex], scores: newScores };
      return newUsers;
    });
  };

  const calculateTotal = (scores) => {
    return scores.reduce((total, score) => total + score, 0);
  };

  const resetScores = () => {
    setUsers(prevState => {
      return prevState.map(user => {
        return { ...user, scores: [0, 0, 0, 0, 0] };
      });
    });
  };

  const totalScores = users.map(user => calculateTotal(user.scores));
  
  return (
    <div className="table-container">
      <table>
       
        <tbody>
          {users[0].scores.map((_, index) => (
            <tr key={index}>
              <td className="indexTD">{index + 1}</td>
              {users.map((user, userIndex) => (
                <td key={userIndex}>
                  <input
                    type="number"
                    placeholder="0"
                    value={user.scores[index]}
                    onChange={(e) => handleInputChange(e, index, userIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="total">Total:</td>
            {totalScores.map((total, index) => (
              <td className={`total-user${index + 1}`} key={index}>{total}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <br/>
      <button className='buttonRestartPoints' onClick={resetScores}>Zerar pontos</button>
    </div>
  );
};

export default Table;
