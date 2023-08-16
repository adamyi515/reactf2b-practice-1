import React, { useState } from 'react'
import Card from './shared/Card'
import FeedbackRating from './FeedbackRating';

const FeedbackForm = ({ onAddFeedbackItem }) => {
    const [text, setText] = useState('');
    const [selectedRating, setSelectedRating] = useState(10);


    // Functions ////////////////////////////////////////////////////////////////
    const handleSubmit = ev => {
        ev.preventDefault();

        if(text.trim().length >= 10){
            const newItem = {
                text,
                rating: selectedRating
            }

            onAddFeedbackItem(newItem);
        }
    }

    const handleTextChange = ev => {
        setText(ev.target.value);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your Service with us?</h2>
                <FeedbackRating onSelectedRating={setSelectedRating} />
                <div className='input-group'>
                    <input type='text' placeholder='Write a review' onChange={handleTextChange} value={text} />
                    <button>Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm