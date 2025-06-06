import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Inicio from '../pages/Inicio';
import Sumadora from '../pages/Sumadora';
import Traductor from '../pages/Traductor';
import TablaMultiplicar from '../pages/TablaMultiplicar';
import Experiencia from '../pages/Experiencia';
import { Box, CssBaseline, IconButton, useMediaQuery } from '@mui/material';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const eyeFriendlyTheme = createTheme({
  shape: {
    borderRadius: 16 // Mantenemos el radio de borde para todas las formas
  },
  palette: {
    primary: { main: '#4d6a9a' }, // Azul medio suave
    secondary: { main: '#6d9886' }, // Verde suave
    background: { 
      default: '#f5f7fa', // Gris muy claro azulado
      paper: '#ffffff' // Blanco para contraste
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none' 
    },
    h5: {
      fontWeight: 600
    },
    subtitle1: {
      fontWeight: 500
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          overflow: 'hidden'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 8px rgba(77, 106, 154, 0.15)',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(77, 106, 154, 0.25)',
          }
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#f5f7fa', // Gris muy claro azulado
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(77, 106, 154, 0.2)'
        }
      }
    }
  }
});

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={eyeFriendlyTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        
        <Menu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              position: 'fixed',
              top: 16,
              left: 16,
              zIndex: 1300,
              color: 'primary.main',
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(77, 106, 154, 0.2)',
              borderRadius: '50%',
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: 'white',
                boxShadow: '0 6px 16px rgba(77, 106, 154, 0.3)',
              }
            }}
          >
            <MusicVideoIcon />
          </IconButton>
        )}
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: isMobile ? 2 : 3,
            width: '100%',
            marginLeft: isMobile ? 0 : '240px',
            transition: 'margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            maxWidth: isMobile ? '100%' : 'calc(100% - 240px)'
          }}
        >
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sumadora" element={<Sumadora />} />
            <Route path="/traductor" element={<Traductor />} />
            <Route path="/tabla-multiplicar" element={<TablaMultiplicar />} />
            <Route path="/experiencia" element={<Experiencia />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;