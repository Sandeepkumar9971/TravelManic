import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

export const Package = () => {
    const packagesData = [
        // Your package data here
        // Example:
        { id: 1, name: 'London', img: '/Hotel1.webp', description: 'Effortlessly book diverse services with ease, managing schedules and preferences conveniently on-the-go', price: '30$',Rating:'4.5' },
        { id: 2, name: 'Paris', img: '/Hotel2.webp', description: 'Streamlined bookings, personalized experiences—your go-to platform for seamless, tailored service reservations', price: '20$',Rating:'4.2' },
        { id: 3, name: 'UK', img: '/Hotel3.webp', description: 'Instantly book tailored services, ensuring convenience and customization at your fingertips.', price: '70$',Rating:'3.9' },
        // Add more package objects as needed
    ];

    return (
        <Grid container spacing={3}>
            <div style={{width:'100%',textAlign:'center',marginTop:15}}>
<h3>Package Details</h3>
            </div>
            {packagesData.map((packageItem) => (
                <Grid key={packageItem.id} item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent style={{width:'contant'}}>
                            <Typography variant="h6" component="div">
                             <img src={process.env.PUBLIC_URL + `/Hotel1.webp`} alt='London'  style={{ width: '100%', height: 'auto' }}/>
                            </Typography>
                            <Typography variant="h6" component="div">
                                {packageItem.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <label style={{ fontWeight: '700', fontSize: 16 }}>Price:</label>{packageItem.price}<span style={{marginLeft:60}}>Rating</span><span style={{background:'yellow',marginLeft:10,fontSize:20,borderRadius:10}}>{packageItem.Rating}</span>   
                                </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {packageItem.description}
                            </Typography>
                        </CardContent>
                    </Card><br />
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                <img src={process.env.PUBLIC_URL + `/Hotel2.webp`} alt='London'  style={{ width: '100%', height: 'auto' }}/>
                           </Typography>
                            <Typography variant="h6" component="div">
                                {packageItem.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <label style={{ fontWeight: '700', fontSize: 16 }}>Price:</label>{packageItem.price}<span style={{marginLeft:60}}>Rating</span><span style={{background:'yellow',marginLeft:10,fontSize:20,borderRadius:10}}>{packageItem.Rating}</span>   
                                </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {packageItem.description}
                            </Typography>
                        </CardContent>
                    </Card><br />
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                            <img src={process.env.PUBLIC_URL + `/Hotel3.webp`} alt='London'  style={{ width: '100%', height: 'auto' }}/>
                            </Typography>
                            <Typography variant="h6" component="div">
                                {packageItem.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <label style={{ fontWeight: '700', fontSize: 16 }}>Price:</label>{packageItem.price}<span style={{marginLeft:60}}>Rating</span><span style={{background:'yellow',marginLeft:10,fontSize:20,borderRadius:10}}>{packageItem.Rating}</span>   
                                </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {packageItem.description}
                            </Typography>
                        </CardContent>
                    </Card><br />
                </Grid>
            ))}
        </Grid>
    )
}
