import React from 'react'
import './Footer.css'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function Footer() {
    return (
        <div className="footer">
            <h3>Questions? Call <span>1-866-579-7172</span></h3>
            <div className="footer__cols">
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
                <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Netflix Originals</li>
                </ul>
                <ul>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer__select">
            <select name="languages" id="lang">
                <option value="Русский">Русский</option>
                <option value="English">English</option>
            </select>
            </div>
            <p>Neflix Russia</p>
        </div>
    )
}

export default Footer
