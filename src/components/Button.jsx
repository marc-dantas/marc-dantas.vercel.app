export default function Button(props) {
    return (
        <a href={props.link} className="button is-family-monospace m-1 is-white">{props.children}</a>
    );
}