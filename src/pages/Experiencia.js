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
        En este proyecto he utilizado diversas tecnologías modernas para el desarrollo de aplicaciones móviles. Principalmente, he trabajado con <b>React.js</b> como biblioteca frontend y <b>Material UI</b> para los componentes de interfaz de usuario. La aplicación se ha adaptado para dispositivos Android mediante <b>Capacitor</b>, que permite convertir aplicaciones web en aplicaciones móviles nativas.
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
          src="https://www.youtube.com/embed/vryjtpf8p-I"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
        El desarrollo de esta aplicación me ha permitido aplicar conocimientos de programación React y diseño de interfaces modernas. Ha sido un desafío integrar todas las funcionalidades manteniendo una interfaz amigable y adaptable a dispositivos móviles. Lo más interesante ha sido la implementación de la navegación entre páginas y la gestión de estados en los componentes.
      </Typography>
    </Paper>
  );
}

export default Experiencia;