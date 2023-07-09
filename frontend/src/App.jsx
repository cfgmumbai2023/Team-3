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
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Course from "./components/Course";

import{
    AiFillFacebook,
    // AiFillTwitter,
    AiFillInstagram,
    
} from "react-icons/ai";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Instructor from "./components/Instructor";
import AddCourse from "./components/AddCourse";

const queryClient = new QueryClient()
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
    <QueryClientProvider client={queryClient}>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forget-password" element={<ForgetPasswordPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/quiz" element={<Assessment/>} />
        <Route path="/course/:id" element={<Course/>} />
        <Route path="/instructor" element={<Instructor/>} />
        <Route path="/addcourse" element={<AddCourse/>} />
      </Routes>
    </Router>
    <ReactQueryDevtools />
    </QueryClientProvider>
    <footer class="page-footer text-dark font-small " id="foot">
        <footer class="bg-light text-center text-lg-start">
            <div class="container p-4">
              <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-success"> Project description  </h5>
                  <p>
                    It is a dashboard which will allow users to analyze the exchange rates between two currencies over a period of time. It provides user an option  to select duration for which they would prefer to see the data and graphs(weekly, monthly, quarterly, and yearly).The dashboard will also display the date on which the rate was at its peak (highest) and the date on which it was at its lowest.
                  </p>
                </div>
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 class="text-uppercase  text-success">Social Media Platform</h5>
                  <ul class="list-group list-group-light list-group-small">
                    <li class="list-group-item text-warning"><AiFillInstagram />Instagram</li>
                    <li class="list-group-item text-warning">Twitter</li>
                    <li class="list-group-item text-warning"> Facebook</li>
                    {/* <li class="list-group-item text-warning">Sai Nikhileswarareddy</li> */}
                  </ul>
                </div>
              </div>
              
            </div>
            <div class="text-center p-3">
              © 2023 Copyright:
              <a class="text-dark" href="/">team-3-jpmc-cfg</a>
            </div>
          </footer>
    </footer>
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

// const Footer = () => {
//   return (
    
    
//     <p className="text-center" style={ FooterStyle }>Designed & coded by Team: 3 <a href="#" target="_blank"></a></p>
//   )
// }

// const FooterStyle = {
//   background: "#222",
//   fontSize: ".8rem",
//   color: "#fff",
//   position: "absolute",
//   bottom: 0,
//   padding: "1rem",
//   margin: 0,
//   width: "100%",
//   opacity: ".5"
// }

export default App;
