import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState, useEffect, } from 'react'
import axios from 'axios'
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { retrievePost, updateResponse } from './firebaseConfig'

export default function CreateResponse(props) {
    const [data, setData] = useState([])

    let { id } = useParams()


    useEffect(() => {
        retrievePost(id).then(
            items => setData(items)
        )
        console.log(data)
    }, [])

    const [response, setResponse] = useState("")
    const [ui, setUI] = useState(false)

    const publishResponse = () => {
        axios.get("http://127.0.0.1:5000/", { params: { input: response }, mode: 'no-cors' }).then((x) => {
            if (x.data.canPost === "True") {
                updateResponse(data.title, response)
                console.log("truueee")
                alert("Your respones has been posted")
            }
            else{
                alert("That wasn't very nice")
            }
        })
    }

    const displayI = () => {
        setUI(!ui)
    }


    if (id === "") {
        return <Navigate to="/main" />
    }

    return (
        <div style={{ marginLeft: "auto", height: "100vh", width: `calc(100vw - ${300}px)` }}>
            <Toolbar />
            <div style={{ margin: 72, marginTop: 54 }}>
                <div style={{ borderRadius: 5, marginTop: 36, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h5" style={{ textTransform: "capitalize" }}>
                        {data.title}
                    </Typography>
                    <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
                    {data.response != "" && !ui ?
                        <div>
                            <Typography variant="h6" style={{ color: "#757575" }}>
                                Response
                            </Typography>
                            <div dangerouslySetInnerHTML={{ __html: data.response }}></div>
                        </div> : null}

                    {
                        ui ?
                            (<React.Fragment>
                                <ReactQuill theme="snow" style={{ marginTop: 18, borderRadius: 10, width: "100%" }} onChange={(data) => { setResponse(data) }} />
                                <Button onClick={publishResponse} style={{ width: 300, alignSelf: "center", marginTop: 36, textTransform: "none", background: "linear-gradient(45deg, #4EDEE5, #005DAA)" }}>
                                    Publish Response
                                </Button>
                            </React.Fragment>) : null
                    }
                    <Button onClick={displayI} style={{ marginTop: 18 }}>
                        {ui ? "Cancel" : "Create Response"}
                    </Button>
                </div>
            </div>
        </div>
    )
}