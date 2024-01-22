import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return <div>
        <section id="footer">
            <h4>&copy; {currentYear} Jacob Kirn</h4>
        </section>
    </div>;
}

export default Footer;