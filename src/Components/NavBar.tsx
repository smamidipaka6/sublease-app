import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import Logout from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import {Link} from "react-router-dom"

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          width: '100%',
          position: 'fixed',
          top: 10,
          left: 0,
          zIndex: 1000,
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          alignContent: 'center',
          pl:3
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h4" component="div" sx={{ color: '#BBBBBB' }}>
              HoneyComb
            </Typography>
          </Link>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
        }}>
          <Link to="/map">
            <Tooltip title="Map">
                  <IconButton sx={{ mr: 2 }}>
                      <MapOutlinedIcon fontSize="large" sx={{ color: '#BBBBBB' }} />
                  </IconButton>
            </Tooltip>
          </Link>

          <Tooltip title="Bookmark">
            <IconButton sx={{ mr: 2 }}>
                <BookmarkBorderIcon fontSize="large" sx={{ color: '#BBBBBB' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Chat">
            <IconButton sx={{ mr: 2 }}>
                <ChatBubbleOutlineOutlinedIcon fontSize="large" sx={{ color: '#BBBBBB' }} />
            </IconButton>
          </Tooltip>        

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ mr: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleOutlinedIcon fontSize="large" sx={{ color: '#BBBBBB' }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}