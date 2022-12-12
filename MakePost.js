import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { persistPost } from './firebaseConfig'

export default function MakePost(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const publishPost = () => {
        const time = Date().toLocaleString()
        persistPost(title, description, time, props.user.uid)
    }

    return (
        <div style={{ marginLeft: "auto", height: "100vh", width: `calc(100vw - ${300}px)` }}>
            <Toolbar />
            <div style={{ margin: 72, marginTop: 54 }}>
                <Typography variant="h4" style={{ color: "#757575", marginBottom: 18 }}>
                    Create a Post
                </Typography>
                <div style={{ borderRadius: 5, marginTop: 36, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" style={{ color: "#757575" }}>
                        Title
                    </Typography>
                    <TextField onChange={(event) => { setTitle(event.target.value) }} label="Enter here..." variant="standard" style={{ borderRadius: 5, width: "100%" }} />
                    <Typography variant="h6" style={{ color: "#757575", marginTop: 36 }}>
                        Description
                    </Typography>
                    <ReactQuill theme="snow" style={{ marginTop: 18, borderRadius: 10, width: "100%" }} onChange={(data) => { setDescription(data) }} />
                    <Button onClick={publishPost} style={{ width: 300, alignSelf: "center", marginTop: 36, textTransform: "none", background: "linear-gradient(45deg, #4EDEE5, #005DAA)" }}>
                        Publish Post
                    </Button>

                </div>
            </div>
        </div>
    )
}