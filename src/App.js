import React,{useState} from 'react'
import Login from './screen/login_page';
import { Route, Link, Routes } from 'react-router-dom'
import UploadImg from './component/UploadImg'
import {
  Nav,
  Container,
  NavDropdown,
  FormControl,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Datab=()=>{
  return(
    <div  style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom:"10%",
      borderWidth: '10'
    }}>
      <h1>DATA BASE!!</h1>
    </div>
  )
}
const Sketchfab = () => {
  return (
    <div style={{ height: '100%', width: '100%', alignItems: 'center', flex: 1 }}>
      <div
        style={{
          height: 600 ,
          width: 750,
          marginLeft: 'auto',
          marginRight: 'auto',     
          marginTop: '10%',
          marginBottom:"10%",
          borderWidth: '10',
        }}>
        <iframe
          style={{ height: 600, width: 750 }}
          title="cartoon"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/c138707cd4bc45de8d7d05f2bcf98175/embed"></iframe>
      </div>
    </div>
  )
}



function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  console.log(userToken)
  return userToken?.token
}

function App() {
  const [token, setToken] = useState(getToken());
  if(!token) {
    return (
      <div style={{ alignItems: 'center', flex: 1 }}>
        <Login />
      </div>)
  }
  
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar expand="lg" className='navbar navbar-expand-md fixed-top ' style={{ backgroundColor: "#87b39f" }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <div className="d-flex flex-row ">
              <img
                src="vase.png"
                style={{ height: 40, width: 40 }}
                alt="logo"
              />
              <h2 style={{ marginLeft: "5%" }}>ระบบกู้คืนวัตถุโบราณ </h2>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="me-auto my-2 my-lg-0"></div>
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="/">Sketchfab</Nav.Link>
              <NavDropdown title="Option" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Screen3drender">
                  ค้นหาจากชิ้นส่วน
                </NavDropdown.Item>
                <NavDropdown.Item href="/Datab">
                  นำเข้าmodelสู่database
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  สถานะการนำเข้าmodel
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">เกี่ยวกับ</Nav.Link>
            </Nav>
              <Button variant="outline-danger" onClick={()=>{sessionStorage.removeItem("token");  window.location.reload(false);}} >Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      <Routes>
        <Route path="/" element={<Sketchfab />}></Route>
        <Route path="/Screen3drender" element={<UploadImg />}></Route>
        <Route path="/Datab" element={<Datab/>}></Route>
      </Routes>
      <footer className=' text-muted text-center mt-auto' style={{backgroundColor:"rgb(240,240,240)",padding:5}}>
          <p > Develop by <a href="https://github.com/ramune0144">ramune0144</a> and friend</p>
      </footer>
    </div>
  );
}

export default App;



