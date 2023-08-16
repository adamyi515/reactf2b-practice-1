import React, { useEffect } from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedbackData, onDeleteFeedbackItem }) => {

    return (
        <div className='feedback-list'>
            {feedbackData.length > 0 ? (
                <>
                    {feedbackData.map(item => {
                        return(
                            <>
                                <FeedbackItem 
                                    onDeleteFeedbackItem={onDeleteFeedbackItem} 
                                    item={item} key={item.id} />
                            </>
                        )
                    })}
                </>
            ): (
                <>
                    <h1 style={{ color: '#fff'}}>No feedback items in the List.</h1>
                </>
            )}
            
        </div>
    )
}

export default FeedbackList