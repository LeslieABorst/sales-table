import React from 'react'

const Header = () => {
    return (
        <div>
            <span>Company</span>
            <nav>
                <ul>
                    <li key="projects" >Projects</li>
                    <li key="salesnav">Sales</li>
                    <li key="messages"><span>Messages</span><span>3</span></li>
                </ul>
            </nav>
            <button type="button">Sign Out</button>
        </div>
    )
}

export default Header
