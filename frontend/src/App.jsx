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

const queryClient = new QueryClient()

function App() {
  return (
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
      </Routes>
    </Router>
    <ReactQueryDevtools />
    </QueryClientProvider>
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
