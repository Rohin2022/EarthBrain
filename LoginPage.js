import LoginCard from "./LoginCard"
import logo from './Logo.png'

export default function LoginPage(props){
    return (
        <div style={{width:"100vw",height:"100vh"}}>
            <img src={logo} style={{height:"47vh",position:"absolute",zIndex:1,transform:"translate(-50%, -50%)",top:"50%",left:"50%"}}/>
            <LoginCard />
        </div>
    )
}