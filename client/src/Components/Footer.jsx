import { SocialIcon } from 'react-social-icons';

function Footer(){
    return(
        <footer>
            <h6>Contact Us<br/>
                <small>
                    <SocialIcon bgColor="white" className='SocialIcon' url="https://twitter.com/Trevornoah" />
                    <SocialIcon bgColor="white" className='SocialIcon' url="https://www.instagram.com/trevornoah/" />
                    <SocialIcon bgColor="white" className='SocialIcon' url="https://www.youtube.com/channel/UCwBcvtd0BJO8svT64-ZuyaQ" />
                    <SocialIcon bgColor="white" className='SocialIcon' url="https://www.facebook.com/TrevorNoah" />
                </small>
            </h6>
        </footer>
    );
}

export default Footer;