import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text:'This item if from context',
            rating:10,
        },
        {
            id: 2,
            text:'This item if from context',
            rating:4,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false,
    })

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem} : item))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure? you bitch')){
             setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext