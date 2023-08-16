import { createContext, useState, useEffect } from "react";

export const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
    const [feedbackData, setFeedbackData] = useState([]);
    const [editFeedbackItem, setEditFeedbackItem] = useState({
        item: {},
        isEditing: false
    })


    useEffect(() => {
        fetchFeedbackData();
    }, []);
    
    
    // Functions /////////////////////////////////////////////////////////////
    const fetchFeedbackData = async () => {
        const response = await fetch(`http://localhost:5001/feedbacks`);
        const data = await response.json();

        setFeedbackData(data);
    }

    const addFeedbackItem = async (newItem) => {
        const response = await fetch(`http://localhost:5001/feedbacks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });

        const data = await response.json();

        setFeedbackData([...feedbackData, data]);
    }

    const deleteFeedbackItem = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            await fetch(`http://localhost:5001/feedbacks/${id}`, {
                method: 'DELETE',
            });

            setFeedbackData(feedbackData.filter(item => item.id !== id));
        }
    }

    const updateFeedbackItem = async (id, editedItem) => {
        const res = await fetch(`http://localhost:5001/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(editedItem)
        });

        const data = await res.json();
        setFeedbackData(feedbackData.map(item => item.id === id ? { ...item, ...data } : item ));

    }

    const getFeedbackItemToEdit = async (itemToEdit) => {
        setEditFeedbackItem({
            item: itemToEdit,
            isEditing: true
        })
    }



    return(
        <FeedbackContext.Provider value={{
            feedbackData,
            editFeedbackItem,
            onDeleteFeedbackItem: deleteFeedbackItem,
            onAddFeedbackItem: addFeedbackItem,
            onEditFeedbackItem: getFeedbackItemToEdit,
            onUpdateFeedbackItem: updateFeedbackItem
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider;