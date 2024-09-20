export default function Nav({ title, children }) {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p>{title}</p>
        </div>
      </div>
      <div className="navbar-menu">
        {children}
      </div>
    </nav>
  )
}