import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import ListItem from '@mui/material/ListItem';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { createUser } from './firebaseConfig';

export default function LoginCard(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [keyword, setKeyword] = useState("") // current keyword
    const [keywords, setKeywords] = useState([]) // all keywords
    const [dialog, setDialogVisible] = useState(false)
    const [value, setValue] = useState(20) // age


    const changeValue = (event, newValue) => {
        setValue(newValue)
    }

    const closeDialog = () => {
        setDialogVisible(false)
    }

    const editBio = () => {
        setDialogVisible(true)
    }
    const handleInputChange = (event) => {
        setValue(Number(event.target.value))
    }

    const addKeyword = () => {
        setKeywords([...keywords, keyword])
    }

    const handleDelete = (keyword) => {
        setKeywords(keywords.filter((key) => key !== keyword))
    }

    const createAccount = () => {
        createUser(username,password,keywords.join(" "),value)
    }

    return (
        <Box sx={{ boxShadow: 10 }} style={{ width: 375, height: 375, zIndex: 10, borderRadius: 5, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" style={{ paddingTop: "18px", color: "#005DAA" }}>
                    Create Account
                </Typography>
                <div style={{ width: "60%", marginTop: "auto", marginBottom: "auto" }}>
                    <TextField onChange={(event) => { setUsername(event.target.value) }} label="Username" variant="standard" size="small" style={{ borderRadius: 5, marginTop: 18, marginBottom: 8, width: "100%" }} />
                    <TextField onChange={(event) => { setPassword(event.target.value) }} label="Password" type="password" autoComplete="current-password" variant="standard" size="small" style={{ borderRadius: 5, marginTop: 8, marginBottom: 8, width: "100%" }} />
                    <Typography variant="caption">
                        <Button size="small" onClick={editBio} disableRipple style={{ textTransform: "none", background:"linear-gradient(45deg, #4EDEE5, #005DAA)",marginTop:"18px" }} variant="contained">
                            Edit Bio
                        </Button>
                    </Typography>
                </div>
                <Button onClick={createAccount} variant="contained" style={{ marginTop: "auto", marginBottom: "18px", width: "70%", textTransform: "none", background: "linear-gradient(45deg, #4EDEE5, #005DAA)" }}>
                    Create Your Account
                </Button>
                <Typography variant="caption" style={{ paddingBottom: "18px" }}>
                    Already have an account? <a style={{ color: "#4EDEE5" }} href="/login">Sign in now!</a>
                </Typography>
            </div>
            <Dialog open={dialog} onClose={closeDialog}>
                <DialogTitle>
                    Bio
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        By providing a some general information regarding your interests, activities, and job/grade,
                        our proprietary recommendation algorithm can match you with similar user
                        who may have had similar experiences and stresses. <b>All information is kept private and used solely
                        for recommendation purposes.</b>
                    </DialogContentText>
                    <Typography id="input-slider" style={{ paddingTop: "18px" }}>
                        Age
                    </Typography>
                    <div style={{ width: "100%", display: "flex" }}>
                        <Slider style={{ marginRight: 26 }} aria-labelledby="input-slider" value={value} step={10} marks min={0} max={100} onChange={changeValue} />
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number'
                            }}
                        />
                    </div>
                    <Typography id="input-slider" style={{ paddingTop: "18px" }}>
                        Keywords (activities, job, etc.)
                    </Typography>
                    <div style={{ display: "flex", marginTop: 8, marginBottom: 8 }}>

                        <TextField onChange={(event) => { setKeyword(event.target.value) }} label="Keyword" variant="standard" size="small" style={{ borderRadius: 5 }} />
                        <Button onClick={addKeyword} style={{textTransform:"none"}}>
                            Add keyword
                        </Button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            keywords.map((data, index) =>


                                <ListItem key={index} style={{ flex: "1 0 21%" }}>
                                    <Chip
                                        label={data}
                                        avatar={<Avatar>{data.charAt(0)}</Avatar>}
                                        color="primary"
                                        onDelete={() => handleDelete(data)}
                                    />
                                </ListItem>
                            )

                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}