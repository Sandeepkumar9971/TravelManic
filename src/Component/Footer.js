import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor:'black',alignItems:'center',height:'60px', padding:'0px 20px' }}>
                <div style={{ fontSize: '1.5rem', color: 'white' }}>
                    <span><b style={{ color: '#d19411' }}>T</b>ravel<b style={{ color: '#d19411' }}> M</b>anic</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
                    <span style={{color:'white'}}><InstagramIcon/></span>
                    <span style={{color:'white'}}><FacebookIcon/></span>
                    <span style={{color:'white'}}><LinkedInIcon/></span>
                    <span style={{color:'white'}}><TwitterIcon/></span>
                </div>
                <div style={{textAlign:'center'}}>
                    <span style={{
                        fontFamily: 'CodecProWarm, TVHPro, Roboto, Arial, sans-serif',
                        textTransform: 'uppercase',
                        color: 'rgb(249, 177, 1)',
                        fontSize: '1.1rem'
                    }}>Lets Start Today!</span></div>
            </div>
                <div style={{textAlign: 'center',backgroundColor:'black',}}>
                    <span style={{color: 'white', fontSize: '0.8rem'}}>© 1989 - 2023 Travel Manic- All rights reserved</span></div>
        </>
    )
}

export default Footer