import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

export default function (props) {
  const [dialog, setDialog] = useState(false)

  const drawerWidth = 300

  const displayHelpDialog = () => {
    setDialog(!dialog)
  }
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>

        <ListItem key="Home" disablePadding style={{ paddingLeft: 18, paddingRight: 18, paddingBottom: 18, paddingTop: 8, borderRadius: 5 }}>
          <ListItemButton href="/main" style={{ borderRadius: 5 }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Resources" disablePadding style={{ paddingLeft: 18, paddingRight: 18, paddingBottom: 18, paddingTop: 8, borderRadius: 5 }}>
          <ListItemButton onClick={displayHelpDialog} style={{ borderRadius: 5 }}>
            <ListItemIcon>
              <PsychologyAltIcon />
            </ListItemIcon>
            <ListItemText primary="Additional Resources" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding style={{ padding: 18, paddingTop: 18 }}>
          <TextField label="Search" variant="outlined" size="small" InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
          }} style={{ borderRadius: 5, outline: "none", width: "100%" }} />
        </ListItem>
      </List>
      <Button href="/post" variant="contained" style={{ margin: 18, marginTop: "auto", textTransform: "none", background: "linear-gradient(45deg, #4EDEE5, #005DAA)" }}>
        Make a Post
      </Button>
      <Dialog open={dialog} onClose={displayHelpDialog}>
        <DialogTitle>
          Additional Resources
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here are some additional resources and services that are quite useful, make sure to check them out!
            <ul style={{color:"#4EDEE5"}}>
              <li>
                <a style={{color:"#4EDEE5"}} href="https://www.betterhelp.com/get-started/?go=true&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=PerformanceMax&utm_content=&network=x&placement=&target=&matchtype=&utm_campaign=19080252225&ad_type=responsive_pmax&adposition=&kwd_id=&gclid=Cj0KCQiAnNacBhDvARIsABnDa6-0kl_lywdvzq7II0RkBaUvh0roLo8I3_tfFjanE55pmh_Jv8ZtUU8aAqHiEALw_wcB&not_found=1&gor=start" target="_blank">
                BetterHelp
                </a>
              </li>
              <li>
                <a style={{color:"#4EDEE5"}} href="https://www.nimh.nih.gov/health/find-help" target="_blank">
                  National Institute of Mental Health
                </a>
              </li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={displayHelpDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  )
}