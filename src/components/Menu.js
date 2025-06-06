import { Link, useLocation } from 'react-router-dom';
import { 
  Box,
  Drawer, 
  SwipeableDrawer,
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Typography, 
  useTheme,
  useMediaQuery 
} from '@mui/material';
import {
  Home as HomeIcon,
  Calculate as CalculateIcon,
  GTranslate as GTranslateIcon,
  TableChart as TableChartIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';

const menuItems = [
  { text: 'Inicio', icon: <HomeIcon />, path: '/' },
  { text: 'Sumadora', icon: <CalculateIcon />, path: '/sumadora' },
  { text: 'Traductor', icon: <GTranslateIcon />, path: '/traductor' },
  { text: 'Tablas', icon: <TableChartIcon />, path: '/tabla-multiplicar' },
  { text: 'Experiencia', icon: <YouTubeIcon />, path: '/experiencia' },
];

function Menu({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');

  const drawerContent = (
    <>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
          Menú de Opciones
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={Link} 
            to={item.path}
            selected={location.pathname === item.path}
            onClick={isMobile ? handleDrawerToggle : undefined}
            sx={{
              borderRadius: '12px',
              mx: 1,
              my: 0.5,
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: 'medium',
                color: 'black' // Cambia 'blue' por el color que desees
              }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );

  if (isMobile) {
    return (
      <SwipeableDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            background: 'linear-gradient(145deg,rgb(110, 133, 197) 0%, #e6f0fb 100%)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)', // Sombra sutil
            borderRight: '1px solid rgba(0, 0, 0, 0.08)', // Borde sutil
          },
        }}
      >
        {drawerContent}
      </SwipeableDrawer>
    );
  }

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          background: 'linear-gradient(145deg,rgb(110, 133, 197) 0%, #e6f0fb 100%)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)', // Sombra sutil
          borderRight: '1px solid rgba(0, 0, 0, 0.08)', // Borde sutil
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {drawerContent}
    </Drawer>
  );
}

export default Menu;