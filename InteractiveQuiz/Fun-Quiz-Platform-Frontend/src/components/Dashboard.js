import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
// import QuestionList from './QuestionList';
import { useAuth } from '../AuthContext';
// import AddQuestion from './AddQuestion';
import Card from 'react-bootstrap/Card';
import '../styles.css';
// import QuestionListAdmin from './QuestionListAdmin';
// import Quiz from './Quiz';



function Dashboard() {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Use useAuth to access context values
  const history = useHistory();

  const handleLogout = () => {
    axios.get('http://localhost:5001/logout')
      .then(response => {
        console.log(response.data.message);
        setIsLoggedIn(false); // Clear user's login status
        history.push('/login');
      })
      .catch(error => {
        console.error('Logout error:', error.response ? error.response.data.message : error.message);
      });
  };

  // const handleAddQuestionClick = () => {
  //   history.push('/AddQuestion'); // Redirect to the AddQuestion component
  // };

  // const handleQuestionListClick = () => {
  //   history.push('/QuestionList'); // Redirect to the QuestionList component
  // };

  return (
    <div className="dashboard-bg">
      <div className="d-flex justify-content-end mb-3">
        <Button variant="outline-secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div>
        <h2>Welcome to the Dashboard</h2>
        <br />

        <div className="card-container">
          <br />

          <Link to="/add-question" className="dashboard-card-link">
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Add Question</Card.Title>
                <Card.Text>Add a new question to the quiz.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <br/>
          <Link to="/quiz-list" className="dashboard-card-link">
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Question List</Card.Title>
                <Card.Text>View the list of quiz questions.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <br/>
          <Link to="/admin-question-list" className="dashboard-card-link">
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Question List (Admin)</Card.Title>
                <Card.Text>View and delete quiz questions.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
      <br/>
          <Link to="/quiz" className="dashboard-card-link">
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Quiz</Card.Title>
                <Card.Text>Take a quiz and test your knowledge.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
          <br/>

        </div>

      </div>
    </div>
  );
}



export default Dashboard;



