import "./footer.module.css";

const Footer = ({children, link}) => {
    return (
        <footer>
            <p>
                Feito com <ion-icon name="heart" /> por {" "}
                <a href={link} target="_blanck">{children}</a>
            </p>
        </footer>
    );
};

export default Footer;