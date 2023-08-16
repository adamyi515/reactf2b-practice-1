import React from 'react'
import Card from './shared/Card'

const FeedbackItem = ({ item }) => {
  return (
    <Card>
        <div className='feedback-item'>
            <p>{ item.text }</p>
            <div className='feedback-item__rating'>{ item.rating }</div>
            <div className='feedback-item__buttons'>
                <button>Edit</button>
                <button>X</button>
            </div>
        </div>
    </Card>
  )
}

export default FeedbackItem