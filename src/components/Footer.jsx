export default function Footer(props) {
    return (
        <div className="footer hero is-black">
            <div className="hero-body has-text-centered">
                <p class="title is-4">&copy; {props.author} - 2023</p>
            </div>
        </div>
    );
}