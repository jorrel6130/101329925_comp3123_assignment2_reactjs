export default function Navbar() {
    return <nav className='navbar'>
        <h2 className='title'>Employee Management System</h2>
        <ul>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/employees'>Employees</a>
            </li>
        </ul>
        <a href='/home' className='login'>Logout</a>
    </nav>
}