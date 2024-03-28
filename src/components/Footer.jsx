export default function Footer(props) {
    return (
        <div className="footer hero">
            <div className="hero-body has-text-centered">
                {props.children}
            </div>
        </div>
    );
}