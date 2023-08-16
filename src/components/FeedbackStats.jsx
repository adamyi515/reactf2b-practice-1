import React, { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackStats = () => {
    const { feedbackData } = useContext(FeedbackContext);

    // Calculate the average rating from all feedback ratings
    const averageRating = feedbackData.reduce((acu, cur) => {
        return acu + cur.rating;
    }, 0) / feedbackData.length;

    return (  
        <div className='feedback-stats'>
            <h3>{feedbackData.length} Reviews</h3>
            <h3>Average rating: { isNaN(averageRating) ? 0 : averageRating.toFixed(2) }</h3>
        </div>
    )
}

export default FeedbackStats