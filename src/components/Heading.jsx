export default function Heading(props) {
    return (
        <div className="hero is-black">
            <div className="hero-body has-text-centered">
                <div className="title is-1">{props.title}</div>
                <div className="subtitle is-family-monospace">{props.subtitle}</div>
            </div>
        </div>
    );
}