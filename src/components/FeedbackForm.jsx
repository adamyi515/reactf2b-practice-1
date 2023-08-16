import React, { useContext, useState, useEffect } from 'react'
import Card from './shared/Card'
import FeedbackRating from './FeedbackRating';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [selectedRating, setSelectedRating] = useState(10);
    const { onAddFeedbackItem, editFeedbackItem, onUpdateFeedbackItem } = useContext(FeedbackContext);

    useEffect(() => {
        if(editFeedbackItem.isEditing){
            setText(editFeedbackItem.item.text);
            setSelectedRating(editFeedbackItem.item.rating);
        }
    }, [editFeedbackItem])


    // Functions ////////////////////////////////////////////////////////////////
    const handleSubmit = ev => {
        ev.preventDefault();

        if(text.trim().length >= 10){
            const newItem = {
                text,
                rating: selectedRating
            }

            if(editFeedbackItem.isEditing) {
                onUpdateFeedbackItem(editFeedbackItem.item.id, newItem)
            } else {
                onAddFeedbackItem(newItem);
            }


        } else {
            window.alert('Text must be at least 10 characters.');
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