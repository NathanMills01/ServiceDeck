import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

//This is the Navbar component
import Navbar from "./components/NavBarElements.jsx";

//These are the pages for the Navbar 
//import Home from "./pages";
import About from "./pages/Create.jsx";
import Blogs from "./pages/Edit.jsx";

const Home = () => <h1>This Page Shows Jobs</h1>;
const Create = () => <h1>Create forms here</h1>;
const Edit = () => <h1>Edit jobs here</h1>;





function App() {

  return(
    <>
    <Router>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Create">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Edit">Edit</Link>
                    </li>
                </ul>
            </nav>

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Create" element={<Create />} />
                    <Route path="/Edit" element={<Edit />} />
                </Routes>
            </div>
        </Router>
    

    </>

  )
}

export default App
