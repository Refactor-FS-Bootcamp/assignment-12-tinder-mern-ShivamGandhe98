import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="header" className='header__logo' />
            </Link>
            <Link to="/add">
                <IconButton>
                    <ForumIcon fontSize='large' className='header__icon' />
                </IconButton>  
            </Link>
        </div>
    )
}
export default Header