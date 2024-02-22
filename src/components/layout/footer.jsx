import Logo from '../../assets/logo.svg';
import '../../styles/layout.scss';

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__top">
                <h1 className="heading heading__dark">Ready to get started?</h1>
                <a className="btn btn--dark">Contact us</a>
            </div>

            <div className="footer__bottom">
                <section className="footer__navWrap">
                    <img src={Logo} alt="myteam logo" className="footer__logo" />
                    <ul className="footer__nav">
                        <li className="footer__item"><a href="/" className="u-link">Home</a></li>
                        <li className="footer__item"><a href="/about" className="u-link">About</a></li>
                    </ul>
                </section>

                <section className="footer__addressWrap">
                    <div className="footer__address">
                        <p>987 Hillcrest Lane</p>
                        <p>Irvine, CA</p>
                        <p>California 92714</p>
                        <p>Call Us : 949-833-7432</p>
                    </div>

                    <p className="footer__copyright"> Copyright 2024. All Rights Reserved.</p>
                </section>
            </div>
        </footer>
    );
    }
export default Footer;