import React from 'react'
import { Footerstyle } from './Footer.style';

function Footer() {
    return (
        <Footerstyle>
            <article>
                <h4>Provide By Derb</h4>
            </article>
            <article className="links">
                <h4>FAQ</h4>
                <h4>Privacy Policy</h4>
                <h4>Term&Condition</h4>
            </article>

        </Footerstyle>
    )
}

export default Footer;
