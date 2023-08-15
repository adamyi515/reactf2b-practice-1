import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header />
      <div className='container'>
        <FeedbackStats />
        <FeedbackList />
      </div>
    </div>
  );
}

export default App;
