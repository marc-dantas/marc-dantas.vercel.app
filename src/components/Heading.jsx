export default function Heading(props) {
    return (
        <div className="hero is-fullheight is-black">
            <div className="hero-body">
                <div className="columns is-multiline">
                    <div className="column is-full">
                        <p className="title is-family-monospace is-1">{props.title}</p>
                        <p className="title is-family-monospace is-2">{props.subtitle}</p>
                    </div>
                    <div className="column">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}