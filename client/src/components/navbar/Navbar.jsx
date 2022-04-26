import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({ user }) {
    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self")
    }

    return (
        <div className="navbar">
            <Link to="/" className="logo" style={{ color: 'white', textDecoration: 'none' }}>
                Passport App
            </Link>
            {
                user ? (
                    <ul className="list">
                        <li className="listItem">
                            <img src={user.photos[0].value} alt="" className="listImg" />
                        </li>
                        <li className="listItem">
                            {user.displayName}
                        </li>
                        <li className="listItem" onClick={logout}>
                            Logout
                        </li>
                    </ul>
                ) : (
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }} >Login</Link>
                )
            }
        </div>
    )
}
