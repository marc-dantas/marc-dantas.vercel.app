export default function Button(props) {
    return (
        <a href={props.link} title={props.title} className={props.light ? "button is-family-monospace m-1 is-light" : "button is-family-monospace m-1 is-black"}>{props.children}</a>
    );
}