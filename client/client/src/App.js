import './App.css';
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { StreamChat } from 'stream-chat';

function App() {
  const api_key = process.env.APIKEY
  
  const client = StreamChat.getInstance()

  return (
    <div className="App">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
