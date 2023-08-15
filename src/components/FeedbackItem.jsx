import React from 'react'
import Card from './shared/Card'

const FeedbackItem = () => {
  return (
    <Card>
        <div className='feedback-item'>
            <p>This is feedback number 1</p>
            <div className='feedback-item__rating'>10</div>
            <div className='feedback-item__buttons'>
                <button>Edit</button>
                <button>X</button>
            </div>
        </div>
    </Card>
  )
}

export default FeedbackItem