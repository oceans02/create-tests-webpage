import './header.styles.scss';

import {Link} from 'react-router-dom';

export const Header = ({children, ...otherProps}) => (
    <div className="header">
        <Link to="/" className="logo">
            <p className="header-text">AES</p>
        </Link>

        <div className="header-sections">
            <Link to="/" className="header-section">Dashboard</Link>
            <Link to="/course" className="header-section">Course Modules</Link>
            <Link to="/tests" className="header-section">Test Questions</Link>
            <Link to="/" className="header-section">Reviewers</Link>
        </div>
    </div>
);