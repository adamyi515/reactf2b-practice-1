import { useEffect, useState } from 'react';
import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetchFeedbackData();
  }, []);


  // Functions /////////////////////////////////////////////////////////////
  const fetchFeedbackData = async () => {
    const response = await fetch(`http://localhost:5001/feedbacks`);
    const data = await response.json();

    setFeedbackData(data);

  }

  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedbackData={feedbackData} />
        <FeedbackList feedbackData={feedbackData} />
      </div>
    </div>
  );
}

export default App;
