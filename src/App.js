import { useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {auth} from './firebase.js'

function App() {
  const [user]=useAuthState(auth)
  return (
    <Router>
      <div className="content">
        
        {user ? 
        <Chat /> : <SignIn />}
      
    
    
      </div>
    </Router>
      
  )
}

export default App;
