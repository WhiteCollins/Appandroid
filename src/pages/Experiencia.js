import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Experiencia() {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        <YouTubeIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
        Mi Experiencia
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2 }}>
       
      </Typography>
      
      <Box sx={{ 
        position: 'relative',
        paddingBottom: '56.25%', 
        height: 0,
        overflow: 'hidden',
        borderRadius: 2,
        backgroundColor: '#000',
        mb: 2
      }}>
        <iframe
          title="Video experiencia"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          src="https://youtu.be/Zi_XLOBDo_Y?si=1pQb2Rrbz1bLdbt1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
        
      </Typography>
    </Paper>
  );
}

export default Experiencia;