import { createContext, useState, useEffect } from "react";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState([]);


    useEffect(() => {
        fetchFeedbackData();
    }, []);
    
    
    // Functions /////////////////////////////////////////////////////////////
    const fetchFeedbackData = async () => {
        const response = await fetch(`http://localhost:5001/feedbacks`);
        const data = await response.json();

        setFeedbackData(data);
    }

    const addFeedbackItem = (newItem) => {
        console.log(newItem);
    }

    const deleteFeedbackItem = (id) => {
        console.log(id);
    }



    return(
        <FeedbackContext.Provider value={{
            feedbackData,
            onDeleteFeedbackItem: deleteFeedbackItem,
            onAddFeedbackItem: addFeedbackItem
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider;