import React from 'react';
import './style/menu.css';

const Menu = () => {
    return (
        <React.Fragment>
        <tr className="menu">
            <td className="menu-items">Higher Education</td>
            <td className="menu-items">Professional Courses</td>
            <td className="menu-items">Competitive Exams</td>
            <td className="menu-items">School</td>
            <td className="menu-items">Study Packages</td>
            <td className="menu-items">General</td>
            <td className="menu-items">Free eBooks</td>
            <td className="menu-items">Mock Test Series</td>
            <td className="menu-items">Videos</td>
            <td className="menu-items">Blog</td>
        </tr>
        <tr className="bottom-menu">
            <td><i className="fas fa-tablet-alt" />e-Reader</td>
            <td><i className="fas fa-file" />Chapter Buy</td>
            <td><i className="fas fa-hand-holding" />Rent e-Book</td>
            <td><i className="fas fa-lock" />Secure Payment</td>
        </tr>
        </React.Fragment>
    )
}

export default Menu;