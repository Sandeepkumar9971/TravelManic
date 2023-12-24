import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const ServiceSection = () => {
    const additionalServices = [
        {
          id: 1,
          name: 'Affordable Hotels',
          description: 'Find budget-friendly accommodations for your travels.',
          price: 'Varies',
          image: 'Hotel4.jpg', 
        },
        {
          id: 2,
          name: 'Foods',
          description: 'Explore delicious dining options for every palate.',
          price: 'Varies',
          image: 'Foood.jpg',
        },
        {
          id: 3,
          name: 'Drinks',
          description: 'Discover refreshing beverages and drink options.',
          price: 'Varies',
          image: 'Drink.jpg', 
        },
      
        {
          id: 4,
          name: 'Safety Guides',
          description: 'Stay informed with essential safety tips for your journey.',
          price: 'Free',
          image: 'Safety.jpg', 
        },
      ];

  return (
    <div>
        <div style={{width:'100%',textAlign:'center'}}>
            <h3>Service Availability</h3>
        </div>
      <Grid container spacing={3}>
        {additionalServices.map(service => (
          <Grid key={service.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  <img src={process.env.PUBLIC_URL + '/' + service.image} alt={service.name} style={{ width: '100%', height: 'auto' }} />
                </Typography>
                <Typography variant="h6" component="div">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <label style={{ fontWeight: '700', fontSize: 16 }}>Price:</label>{service.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


export default ServiceSection;