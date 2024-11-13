import { Navbar, NavbarLink } from "flowbite-react";

const Header = () => {
    return (
    <Navbar fluid rounded>
        <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Curriculum vite</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="#" active>
            2024
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Header
