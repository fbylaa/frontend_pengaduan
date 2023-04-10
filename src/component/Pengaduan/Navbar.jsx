import React from "react"

const Navbar = () => {
    return (
        <header className="bg-gray-400 w-full py-3">
            <nav className="container mx-auto">
                <ul>
                    <li className="flex justify-end">
                        <a href="#history">History Pengaduan</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar