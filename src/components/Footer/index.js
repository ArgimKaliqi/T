import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer,FooterLink,FooterLinkTitle,FooterWrap,FooterLinksContainer,FooterLinkItems,FooterLinksWrapper,} from './FooterElements';
import { SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink  } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {


    const toggleHome = () =>{
        scroll.scrollToTop()
    };


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/home">How it works</FooterLink>
                        <FooterLink to="/home">Testimonials</FooterLink>
                        <FooterLink to="/home">Careers</FooterLink>
                        <FooterLink to="/home">Investors</FooterLink>
                        <FooterLink to="/home">Terms of Services</FooterLink>
                    
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/home">Submit Video</FooterLink>
                        <FooterLink to="/home">Testtes</FooterLink>
                        <FooterLink to="/home">Careers</FooterLink>
                        <FooterLink to="/home">Investors</FooterLink>
                        <FooterLink to="/home">Terms of Services</FooterLink>
                    
                </FooterLinkItems>

            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/home">How it works</FooterLink>
                        <FooterLink to="/home">Testimonials</FooterLink>
                        <FooterLink to="/home">Careers</FooterLink>
                        <FooterLink to="/home">Investors</FooterLink>
                        <FooterLink to="/home">Terms of Services</FooterLink>
                    
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/home">How it works</FooterLink>
                        <FooterLink to="/home">Testimonials</FooterLink>
                        <FooterLink to="/home">Careers</FooterLink>
                        <FooterLink to="/home">Investors</FooterLink>
                        <FooterLink to="/home">Terms of Services</FooterLink>
                    
                </FooterLinkItems>

            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    KALIQI IT 
                </SocialLogo>
                <WebsiteRights>KALIQI IT - SOLUTIONS  © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="https://twitter.com/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com" target="_blank" aria-label="Linkedin">
                        <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
