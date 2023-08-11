import "./link.module.css";

const Links = ({children,link}) => {
    return(
<li>
    <a href={link} target="_blanck">{children}</a>
</li>
    );
};

export default Links;