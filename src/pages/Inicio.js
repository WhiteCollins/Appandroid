import React from 'react';
import { Box, Card, CardContent, Avatar, Typography, Fade } from '@mui/material';

function Inicio() {
  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 3
      }}>
        <Card sx={{ 
          width: '100%',
          maxWidth: 400,
          borderRadius: 6,
          boxShadow: '0 12px 24px rgba(77, 106, 154, 0.15)',
          overflow: 'visible',
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)'
        }}>
          <CardContent sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            position: 'relative',
            pt: 10
          }}>
            <Avatar
              src="Captura de pantalla 2025-05-28 214811.png"
              alt="Foto personal"
              sx={{ 
                width: 120, 
                height: 120, 
                position: 'absolute',
                top: -60,
                border: '5px solid white',
                boxShadow: '0 8px 16px rgba(255, 143, 0, 0.2)',
                background: 'linear-gradient(45deg, #ff8f00 30%, #ffb300 90%)'
              }}
            />
            <Typography 
              variant="h5" 
              component="div" 
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 600,
                color: '#ff8f00', 
                mb: 0.5 
              }}
            >
              Eric Jimenez
            </Typography>
            <Typography 
              variant="subtitle1" 
              gutterBottom 
              align="center"
              sx={{ 
                fontWeight: 500,
                color: 'rgba(0, 0, 0, 0.7)', 
                mb: 2,
                pb: 2,
                borderBottom: '1px solid rgba(255, 143, 0, 0.2)',
                width: '100%'
              }}
            >
              Desarrollador de Software
            </Typography>
            <Box sx={{ 
              mt: 1, 
              p: 2, 
              backgroundColor: 'rgba(255, 143, 0, 0.05)', 
              borderRadius: 3,
              width: '100%'
            }}>
              <Typography 
                variant="body2" 
                align="center" 
                sx={{ 
                  fontWeight: 500,
                  color: 'rgba(0, 0, 0, 0.7)',
                  mb: 1
                }}
              >
                Collinsjcwhite@gmail.com
              </Typography>
              <Typography 
                variant="body2" 
                align="center"
                sx={{ 
                  fontWeight: 500,
                  color: 'rgba(0, 0, 0, 0.7)' 
                }}
              >
                Matrícula: 2023-0966
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Fade>
  );
}

export default Inicio;