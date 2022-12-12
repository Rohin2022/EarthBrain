import { Button, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { logout } from './firebaseConfig';
import websiteLogo from './Logo.png';


export default function NavBar() {




    return (
        <AppBar position="fixed" color="primary" sx={{
            zIndex: theme => theme.zIndex.drawer + 1
        }} style={{
            background: "linear-gradient(0deg, #4EDEE5, #005DAA)"
        }}>
            <Toolbar style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Typography variant="h4" style={{color:"#757575"}}>
                    <b>EarthBrain</b>
                </Typography>
                <Tooltip title="Sign out">
                    <Button onClick={logout} href="/login" style={{ borderRadius: 20, padding: 0, maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px' }}>
                        <img src={websiteLogo} style={{
                            width: 50
                        }} />
                    </Button>
                </Tooltip>
            </Toolbar>
        </AppBar>);
}