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

  const addFeedbackItem = (newItem) => {
    console.log(newItem);
  }

  const deleteFeedbackItem = (id) => {
    console.log(id);
  }


  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackForm onAddFeedbackItem={addFeedbackItem} />
        <FeedbackStats feedbackData={feedbackData} />
        <FeedbackList feedbackData={feedbackData} onDeleteFeedbackItem={deleteFeedbackItem} />
      </div>
    </div>
  );
}

export default App;
