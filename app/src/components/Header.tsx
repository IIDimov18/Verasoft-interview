import { FaRegStar } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <FaRegStar  className="header-star"/>
            <text className="header-name">Joseph Smith</text>
            <button className="header-button">New Order</button>
        </div>
    )
}

export default Header
