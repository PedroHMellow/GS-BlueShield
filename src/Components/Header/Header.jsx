import { Link } from "react-router-dom";
function Header () {
    return (
    
    <>
        <nav className=" backdrop-blur-md bg-Azul_ODS14 border-b border-slate-900/10 absolute w-full">
            <ul className="flex items-center justify-around">
                <li>
                    <Link to="/" className="flex items-center">
                        <img className="w-14 h-14" src="/public/BlueShield_Logo.png" alt="" />
                        <samp className="text-white">BlueShield</samp>
                    </Link>
                </li>
                <ul className="flex items-center gap-4">
                    <li className="text-white hover:text-Azul_Fiap2">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="text-white hover:text-Azul_Fiap2">
                        <Link to="/Dashboard"> Dashboard </Link>
                    </li>
                    <li className="text-white hover:text-Azul_Fiap2">
                        <Link to="/Contatos"> Contatos </Link>
                    </li>
                </ul>
            </ul>
        </nav>
        
    </>
        

    )
}

export default Header