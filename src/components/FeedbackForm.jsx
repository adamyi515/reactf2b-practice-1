import React from 'react'
import Card from './shared/Card'

const FeedbackForm = () => {


    const handleSubmit = ev => {
        ev.preventDefault();
        console.log('Submitted');
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your Service with us?</h2>
                <div className='input-group'>
                    <input type='text' placeholder='Write a review' />
                    <button>Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm