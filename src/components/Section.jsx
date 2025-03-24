export default function Section(props) {
    return (
        <div className="container">
            <p style={{ color: "white" }}className="title has-text-centered is-3">{props.title}</p>
            {props.children}
        </div>
    );
}