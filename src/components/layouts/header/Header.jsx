import LogoKasa from "./LogoKasa";
import Navbar from "./Navbar";

// Layout header avec le Logo et la navbar

const Header = () => {
    return (
        <div className="header">
            <LogoKasa />
            <Navbar />
        </div>
    );
};

export default Header;