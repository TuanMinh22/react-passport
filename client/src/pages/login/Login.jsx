import './login.css'
import Google from '../../img/google.png'
import Github from '../../img/github.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'

export default function Login() {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    }

    const github = () => {
        window.open("http://localhost:5000/auth/github", "_self")
    }

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self")
    }

    const twitter = () => {
        window.open("http://localhost:5000/auth/twitter", "_self")
    }

    const instagram = () => {
        window.open("http://localhost:5000/auth/instagram", "_self")
    }

    return (
        <div className="login">
            <h1 className="loginTile">Choosen a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" /> Goole
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="" className="icon" /> Github
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        <img src={Facebook} alt="" className="icon" /> Facebook
                    </div>
                    <div className="loginButton twitter" onClick={twitter}>
                        <img src={Twitter} alt="" className="icon" /> Twitter
                    </div>
                    <div className="loginButton instagram" onClick={instagram}>
                        <img src={Instagram} alt="" className="icon" /> Instagram
                    </div>
                </div>
                <div className="center">
                    <div className="line"></div>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}
