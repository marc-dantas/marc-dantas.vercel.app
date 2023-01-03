export default function LinkButton(props) {
    return (
        <a href={props.link} title={props.title} className="button is-family-monospace m-1 is-black">{props.children}</a>
    );
}