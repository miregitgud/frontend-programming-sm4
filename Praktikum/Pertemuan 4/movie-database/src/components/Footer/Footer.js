import StyledFooter from "./StyledFooter";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container">
                <footer className="footer">
                    <h2 className="footer__title"> Movie App</h2>
                    <p className="footer__author"> @miregitgud 2023</p>
                    <p>&copy; Made with love and a big ass mug of plain water</p>
                </footer>
            </div>
        </StyledFooter>
    )
}

export default Footer;