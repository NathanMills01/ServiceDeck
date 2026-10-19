import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBarElements(){
    return(
        <>
        <Router>
                    <nav className="navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/">Pizza</Link>
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

export default NavBarElements