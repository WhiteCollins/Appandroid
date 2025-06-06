import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  Grid,
  Divider,
  Zoom,
  Fade
} from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PlusOneIcon from '@mui/icons-material/PlusOne';

function TablaMultiplicar() {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const num = parseFloat(numero);
    if (isNaN(num)) {
      setTabla([]);
      return;
    }
    
    const nuevaTabla = Array.from({ length: 13 }, (_, i) => ({
      multiplicador: i + 1,
      resultado: num * (i + 1)
    }));
    setTabla(nuevaTabla);
  };

  return (
    <Fade in={true} timeout={800}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          borderRadius: 4,
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)',
          boxShadow: '0 10px 30px rgba(77, 106, 154, 0.1)',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <ListAltIcon 
            sx={{ 
              mr: 2, 
              fontSize: 36, 
              color: 'primary.main',
              backgroundColor: 'rgba(77, 106, 154, 0.1)',
              p: 1,
              borderRadius: 2
            }} 
          />
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#4d6a9a' }}>
            Tabla de Multiplicar
          </Typography>
        </Box>
        
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 1, 
            mb: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            p: 2,
            borderRadius: 3
          }}
        >
          <TextField
            label="Ingrese un número"
            variant="outlined"
            fullWidth
            type="number"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            size="medium"
            InputProps={{ 
              sx: { borderRadius: 3 }
            }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(77, 106, 154, 0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(77, 106, 154, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4d6a9a',
                },
              }
            }}
          />
          <Button
            variant="contained"
            onClick={generarTabla}
            sx={{ 
              px: 3, 
              borderRadius: 3,
              background: 'linear-gradient(45deg, #4d6a9a 30%, #7d97c1 90%)'
            }}
            startIcon={<PlusOneIcon />}
          >
            Generar
          </Button>
        </Box>

        {tabla.length > 0 && (
          <Fade in={true} timeout={500}>
            <Box>
              <Divider sx={{ my: 2, borderColor: 'rgba(77, 106, 154, 0.2)' }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2, 
                  textAlign: 'center', 
                  color: '#4d6a9a', 
                  fontWeight: 600 
                }}
              >
                TABLA DEL {numero}
              </Typography>
              <Grid container spacing={1.5}>
                {tabla.map((item, index) => (
                  <Grid item xs={4} sm={3} key={index}>
                    <Zoom in={true} style={{ transitionDelay: `${index * 50}ms` }}>
                      <Box sx={{ 
                        p: 1.5, 
                        textAlign: 'center',
                        backgroundColor: 'rgba(77, 106, 154, 0.1)',
                        borderRadius: 3,
                        border: '1px solid rgba(77, 106, 154, 0.2)',
                        transition: 'all 0.3s',
                        '&:hover': {
                          backgroundColor: 'rgba(77, 106, 154, 0.2)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 12px rgba(77, 106, 154, 0.15)'
                        }
                      }}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 500,
                            color: '#4d6a9a' 
                          }}
                        >
                          {numero} × {item.multiplicador} = {item.resultado}
                        </Typography>
                      </Box>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        )}
      </Paper>
    </Fade>
  );
}

export default TablaMultiplicar;