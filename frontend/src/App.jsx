import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './styles/App.css';
// import '../../App.css';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import ForgetPasswordPage from "./components/ForgetPasswordPage.jsx";
import Dashboard from "./components/Dashboard";
import Assessment from "./components/Assessment";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Hey Rookie!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your fieldname',
      trigger: '2'
  }, {
      id: '2',

      // Here we want the user
      // to enter input
      user: true,
      trigger: '3',
  }, {
      id: '3',
      message: " Hi {previousValue}, how can I help you?",
      trigger: 4
  }, {
      id: '4',
      options: [
           
          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 1, label: 'View Courses' },
          { value: 2, label: 'Read Articles' },

      ],
      end: true
  }
];

// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "img.png",
  floating: true,
};

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forget-password" element={<ForgetPasswordPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/quiz" element={<Assessment/>} />
      </Routes>
    </Router>
    <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Foot-Bot"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    </>
  );
}

const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by Team: 3 <a href="#" target="_blank"></a></p>
  )
}

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}

export default App;
