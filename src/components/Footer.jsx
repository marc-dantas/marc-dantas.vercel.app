export default function Footer(props) {
    return (
        <div className="footer hero is-black">
            <div className="hero-body has-text-centered">
                {props.children}
            </div>
        </div>
    );
}