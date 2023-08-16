import React, { useContext } from 'react'
import Card from './shared/Card'
import { FeedbackContext } from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
    const { onDeleteFeedbackItem } = useContext(FeedbackContext)

    const handleDeleteFeedbackItem = () => {
        onDeleteFeedbackItem(item.id)
    }

    return (
        <Card>
            <div className='feedback-item'>
                <p>{ item.text }</p>
                <div className='feedback-item__rating'>{ item.rating }</div>
                <div className='feedback-item__buttons'>
                    <button>Edit</button>
                    <button onClick={handleDeleteFeedbackItem}>X</button>
                </div>
            </div>
        </Card>
    )
}

export default FeedbackItem