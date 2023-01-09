import React from 'react';
import './Footer.css';

function Footer () {

    return(
        <section className='footer'>
            <hr className='footer-seperator'/>
            <section className='footer-social-media'>
                <a href='https://twitter.com/' target='blank' rel='noopener noreferrer'>Twitter</a>
                <a href='https://www.facebook.com/' target='blank' rel='noopener noreferrer'>Facebook</a>
                <a href='https://www.instagram.com/' target='blank' rel='noopener noreferrer'>Instagram</a>
                <a href='https://www.tiktok.com/en/' target='blank' rel='noopener noreferrer'>TikTok</a>
            </section>
            <section className='footer-info'>
                <section className='footer-info-left'>
                    <section className='footer-info-details'>
                        <a href='/'>Infinite Collectibles</a>
                    </section>
                    <section className='footer-info-returns'>
                        Return Policy
                    </section>
                    <section className='footer-info-faq'>
                        FAQ
                    </section>
                </section>
                <section className='footer-info-center'>
                <section className='footer-info-products'>
                        <a href='/products'>Shop Now</a>
                    </section>
                    <section className='footer-info-terms'>
                        Terms & Conditions
                        <br/>
                        Copyright
                    </section>
                </section>
                <section className='footer-info-right'>
                <section className='footer-info-contact'>
                        <a href='/contact'>Contact</a>
                    </section>
                    <section className='footer-info-ambass'>
                        Careers
                        <br/>
                        Ambassador Program
                    </section>
                </section>
            </section>
            <hr className='footer-seperator'/>
        </section>
    )
}

export default Footer;