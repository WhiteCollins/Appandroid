import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  Grid,
  Divider
} from '@mui/material';
import TableChartIcon from '@mui/icons-material/TableChart';

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
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        borderRadius: 3,
        background: 'linear-gradient(145deg,rgb(255, 255, 255) 0%, #e6f0fb 100%)', // Gradiente moderno azul claro
        // Alternativas modernas:
        // background: '#f5f7fa', // Gris azulado muy claro
        // background: '#faf8f8', // Blanco hueso moderno
        // background: '#f0fff4', // Verde menta muy suave
        // background: '#fff5f5', // Rosa pálido elegante
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        <TableChartIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
        Tabla de Multiplicar
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="Ingrese un número"
          variant="outlined"
          fullWidth
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          size="small"
        />
        <Button
          variant="contained"
          onClick={generarTabla}
        >
          Generar
        </Button>
      </Box>

      {tabla.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1" sx={{ mb: 1, textAlign: 'center' }}>
            TABLA DEL {numero}
          </Typography>
          <Grid container spacing={1}>
            {tabla.map((item, index) => (
              <Grid item xs={4} sm={3} key={index}>
                <Box sx={{ 
                  p: 1, 
                  textAlign: 'center',
                  backgroundColor: '#f0f7ff', // Azul muy claro moderno
                  borderRadius: 2,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#e1efff',
                    transform: 'translateY(-2px)',
                    boxShadow: 2
                  }
                }}>
                  <Typography variant="body2">
                    {numero} × {item.multiplicador} = {item.resultado}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Paper>
  );
}

export default TablaMultiplicar;