import logo from "../assets/SwaminiPimpaleLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import leetcodeLogo from "../assets/LeetCodeLogo.png"; // Import LeetCode logo

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-6 w-24" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <img src={leetcodeLogo} alt="LeetCode" className="w-8 h-8" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;