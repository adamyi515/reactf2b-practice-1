import React, { useState } from 'react'

const FeedbackRating = ({ onSelectedRating }) => {
    const [rating, setRating] = useState(10);


    const handleChange = ev => {
        setRating(+ev.target.value)
        onSelectedRating(+ev.target.value);
    }


    return (
        <ul className='feedback-rating'>
            <li>
                <input type='radio' name='rating' value={1} checked={rating === 1} onChange={handleChange} /> 1
            </li>
            <li>
                <input type='radio' name='rating' value={2} checked={rating === 2} onChange={handleChange} /> 2
            </li>
            <li>
                <input type='radio' name='rating' value={3} checked={rating === 3} onChange={handleChange} /> 3
            </li>
            <li>
                <input type='radio' name='rating' value={4} checked={rating === 4} onChange={handleChange} /> 4
            </li>
            <li>
                <input type='radio' name='rating' value={5} checked={rating === 5} onChange={handleChange} /> 5
            </li>
            <li>
                <input type='radio' name='rating' value={6}  checked={rating === 6} onChange={handleChange}/> 6
            </li>
            <li>
                <input type='radio' name='rating' value={7} checked={rating === 7} onChange={handleChange} /> 7
            </li>
            <li>
                <input type='radio' name='rating' value={8} checked={rating === 8} onChange={handleChange} /> 8
            </li>
            <li>
                <input type='radio' name='rating' value={9} checked={rating === 9} onChange={handleChange} /> 9
            </li>
            <li>
                <input type='radio' name='rating' value={10} checked={rating === 10} onChange={handleChange} /> 10
            </li>
        </ul>
    )
}

export default FeedbackRating