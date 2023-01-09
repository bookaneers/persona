import { useNavigate } from "react-router-dom"
import './phoneView.css'

const PhonePanel = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div className="text-center">
                            <ul>
                                <li onClick={() => navigate('/')}>
                                    Dashboard
                                </li>
                                <li onClick={() => navigate('/add-employee')}>
                                    Add Employee
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PhonePanel