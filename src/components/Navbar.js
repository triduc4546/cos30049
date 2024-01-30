export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" class="site-title">Site Name</a>
        <ul>
            <li>
                <a href ="/items">Items</a>
            </li>

            <li>
                <a href ="/about">About Us</a>
            </li>
            <li>
                <a href ="/signup">Sign up</a>
            </li>
            <li>
                <a href ="/login">Login</a>
            </li>
        </ul>
    </nav>
    )
}