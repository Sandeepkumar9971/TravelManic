import React, { useEffect, useState, useSyncExternalStore } from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Modal} from "react-bootstrap";
// import { Registerform } from "./Registerform";
import  Registerform_2 from './Registerform_2';
import LoginPage from './LoginPage';
import { Email } from '@mui/icons-material';

const Header = () => {
    const [openregform,setopenregform]=useState(false);
    const [openloginform,setopenlogin]=useState(false);
    const[registeddata,setregisteddata]=useState()
    const[check,setcheck]=useState(sessionStorage.getItem('Email'))
//  setInterval(() => {
//    setcheck()
//  }, 500);
function Clearsession(){

    sessionStorage.removeItem('Email')
    window.location.reload();
} 

const onshow =(data)=>{
    setopenregform(false)
    setopenlogin(true)
console.log(data)
setregisteddata(data)
}
const onclose = ()=>{
    setopenregform(true)
    setopenlogin(false)
}
// console.log(registeddata)
// console.log(check)
    return (
        <>
            <div className='Navbar' >
                <div style={{ fontSize: '1.5rem', color: 'white' }}>
                    <span><b style={{ color: '#d19411' }}>T</b>ravel<b style={{ color: '#d19411' }}> M</b>anic</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <nav style={{ color: 'white', cursor: 'pointer' }}>
                        <ul className="menu">
                            <li className='menuitems' >
                                <span >Home</span>
                            </li>
                            <li className='menuitems'>
                                <span >Book</span>
                            </li>
                            <li className='menuitems'>
                                <span >Packages</span>
                            </li>
                            {/* <div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Packages
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div> */}
                            <li className='menuitems'>
                                <span >Services</span>
                            </li>
                            <li className='menuitems' >
                                <span >Gallery</span>
                            </li>
                            <li className='menuitems' >
                                <span >About</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div>
                        {check ===null || check ===''?
                        <AccountCircleIcon style={{ color: 'white', cursor: 'pointer' }} onClick={()=>{setopenlogin(true)}}/>:<h6 style={{color:'white'}}>{check.split('@')[0]}</h6>
                        }
                        
                    </div>
                    <div>
                        <button style={{ padding: '5px 20px', background: 'red', color: 'white', borderRadius: '20px', cursor: 'pointer' }} onClick={()=>{setopenregform(true)}}>Register</button>
                    </div>
                    <div>
                       {check ===null || check ===''?'':<ExitToAppIcon  style={{ color: 'white', cursor: 'pointer' }} onClick={()=>{Clearsession()}}/>
                  } 
                      </div>

                </div>
            </div>
            <Modal
            size={"ml"}
            centered
            animation={true}
            show={openregform}
            onHide={()=>{setopenregform(false)}}
            style={{ background: "rgba(0,0,0,0.9)" }}
          >
            <Modal.Body>
              <Registerform_2 onshow={(data)=>onshow(data)}/>
            </Modal.Body>
          </Modal>
            <Modal
            size={"sm"}
            centered
            animation={true}
            show={openloginform}
            onHide={()=>{setopenlogin(false)}}
            style={{ background: "rgba(0,0,0,0.9)" }}
          >
             {/* <Modasl.Header closed>User Login</Modal.Header> */}
            <Modal.Body>
              <LoginPage data={registeddata}
              onclose = {()=>{onclose()}}
              />
            </Modal.Body>
          </Modal>
        </>
    )
}

export default Header