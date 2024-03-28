export default function Block(props) {
    let title = props.title;
    return (
        <div className="notification is-black">
            <a href={props.link} title={`Click here to redirect to the github repository of ${title}.`} className="is-link is-family-monospace"><strong>{props.title}</strong></a>
            <p className="is-family-monospace">{props.children}</p>
        </div>
    );
}