import { LinkContainer } from 'react-router-bootstrap'
import { Image } from "react-bootstrap";
import { FaAddressCard } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import logo from "../images/Inventive-Group-Logo-White.png"


const SidePanel = () => {
    return (
        <>
            <div className="mt-5">
                <LinkContainer to="/">
                    <h5 className="text-start ms-2"><FaHouseUser size={22} /> Dashboard</h5>
                </LinkContainer>
            </div>
            <div>

                <LinkContainer to="/add-employee">
                    <h5 className="text-start ms-2"><FaAddressCard size={22} /> Add Employee</h5>
                </LinkContainer>
            </div>
            <div className="fix">
                <Image className='company-logo' alt="One Company, 4 Brands" src={logo} fluid />
            </div>
        </>

    )
}




export default SidePanel;