import React from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';

function Inicio() {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 3
    }}>
      <Card sx={{ 
        width: '100%',
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: 3
      }}>
        <CardContent sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3
        }}>
          <Avatar
            src="/WhatsApp Image 2025-06-04 at 20.00.29_c33ae93e.jpg"
            alt="Foto personal"
            sx={{ 
              width: 150, 
              height: 150, 
              mb: 3,
              border: '4px solidrgb(80, 135, 164)'
            }}
          />
          <Typography variant="h5" component="div" gutterBottom align="center">
            Kelobel Tapia
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom align="center">
            Desarrollador de Software
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
            kelobeltapia25@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Matrícula: 2023-0596
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Inicio;