// Menu.js
import { RiArrowDownSLine, RiDashboardLine, RiHomeLine, RiUserLine } from "@remixicon/react";
import Image from 'next/image';
import logoWhite from "../../public/logoWhite.svg";
import Link from "next/link";

export function Menu({ isHamburgerMenuOpen, currentRoute, setCurrentRoute}) {
    const handleCurrentRoute = (route) => {
        setCurrentRoute(route)
    }
    return (
        <div className={`app-menu ${isHamburgerMenuOpen && 'app-menu-slim'}`}>
            <div className="logo">
                <div className="img-logo">
                    <Image
                        priority
                        src={logoWhite}
                        alt="Logo"
                    />
                </div>
                <p className='text-logo'>PLIC | eventos</p>
            </div>
            <div className="content">
                <ul>
                    <li >
                        <Link className={currentRoute === "/home" ? 'active' : ''} href="/home" onClick={() => handleCurrentRoute('/home')}>
                            
                                <RiHomeLine className="icon" />
                                <p className="h7">Home</p>
                            
                        </Link>
                    </li>
                    <li >
                        <Link className={currentRoute === "/" ? 'active' : ''} href="/usuarios" onClick={() => handleCurrentRoute('/usuarios')}><RiUserLine className="icon" /><p className="h7">Usuários</p></Link>
                    </li>
                    <li >
                        <Link className={currentRoute === "/submissoes" ? 'active' : ''} href="/submissoes" onClick={() => handleCurrentRoute('/submissoes')}><RiDashboardLine className="icon" /><p className="h7">Submissões</p></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
