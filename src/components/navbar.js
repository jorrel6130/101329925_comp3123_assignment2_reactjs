export default function Navbar() {
    return <nav className='navbar'>
        <h2 className='title'>Employee Management System</h2>
        <ul>
            <li>
                <a href='/employees'>Home</a>
            </li>
        </ul>
        <a href='/home' className='login'>Logout</a>
    </nav>
}