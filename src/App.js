import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Post from './components/Post'
import AboutLink from './components/AboutLink'
import {FeedbackProvider} from './context/FeedbackContext'
import AboutPage from './pages/AboutPage'

function App(){
    return (
        <FeedbackProvider>
        <Router>
        <Header/>
        <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                <FeedbackForm/>
                <FeedbackStats/>
                <FeedbackList/>
                </>
            }>
            </Route>

            <Route path='/about' element={<AboutPage/>}/>
            {/* <Route path='/post/:id' element={<Post/>}/> */}
            <Route path='/post' element={<Post/>}/>
            </Routes>

            <AboutLink/>
        </div>
        </Router>
        </FeedbackProvider>
        
    )
}

export default App