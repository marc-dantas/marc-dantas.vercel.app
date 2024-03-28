export default function Section(props) {
    return (
        <div className="box">
            <p className="title is-4">{props.title}</p>
            {props.children}
        </div>
    );
}