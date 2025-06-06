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
  useMediaQuery,
  Avatar
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import TranslateIcon from '@mui/icons-material/Translate';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

const menuItems = [
  { text: 'Inicio', icon: <HouseIcon />, path: '/' },
  { text: 'Sumadora', icon: <PlusOneIcon />, path: '/sumadora' },
  { text: 'Traductor', icon: <TranslateIcon />, path: '/traductor' },
  { text: 'Tablas', icon: <ListAltIcon />, path: '/tabla-multiplicar' },
  { text: 'Experiencia', icon: <MusicVideoIcon />, path: '/experiencia' },
];

function Menu({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');

  const drawerContent = (
    <>
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: theme.palette.primary.main,
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}
        >
          Mi Aplicación
        </Typography>
      </Box>
      <Divider sx={{ mx: 2, borderColor: 'rgba(77, 106, 154, 0.2)' }} />
      <List sx={{ px: 1, py: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={Link} 
            to={item.path}
            selected={location.pathname === item.path}
            onClick={isMobile ? handleDrawerToggle : undefined}
            sx={{
              borderRadius: '16px',
              mx: 1,
              my: 1,
              transition: 'all 0.25s ease-in-out',
              '&.Mui-selected': {
                backgroundColor: 'rgba(77, 106, 154, 0.15)',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '12px',
                  padding: '8px',
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 8px rgba(77, 106, 154, 0.2)',
                },
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }
              },
              '&:hover': {
                backgroundColor: 'rgba(77, 106, 154, 0.08)',
                '& .MuiListItemIcon-root': {
                  transform: 'scale(1.1)',
                },
              }
            }}
          >
            <ListItemIcon 
              sx={{ 
                minWidth: '52px',
                color: location.pathname === item.path ? 'white' : theme.palette.primary.main,
                backgroundColor: location.pathname === item.path ? 
                  theme.palette.primary.main : 
                  'rgba(77, 106, 154, 0.12)',
                borderRadius: '12px',
                padding: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: location.pathname === item.path ? 700 : 500,
                color: location.pathname === item.path ? 
                  theme.palette.primary.main : 
                  'rgba(0, 0, 0, 0.7)',
                ml: 1
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2, textAlign: 'center' }}>
        <Avatar
          alt="User"
          src="Captura de pantalla 2025-05-28 214811.png"
          sx={{ 
            width: 60, 
            height: 60, 
            mx: 'auto', 
            border: `3px solid ${theme.palette.primary.main}`,
            mb: 1
          }}
        />
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          Eric Jimenez
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Matrícula: 2023-0966
        </Typography>
      </Box>
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
            width: 280,
            boxSizing: 'border-box',
            background: 'linear-gradient(145deg, #5d7ebc 0%, #f5f7fa 100%)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
            borderRight: 'none',
            display: 'flex',
            flexDirection: 'column'
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
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          background: 'linear-gradient(145deg, #5d7ebc 0%, #f5f7fa 100%)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,
          borderRight: 'none',
          display: 'flex',
          flexDirection: 'column'
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