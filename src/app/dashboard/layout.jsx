"use client"
import { neueBold, neueRegular } from "@/app/ui/fonts";
import { RiHome3Line, RiServiceLine, RiShutDownLine, RiStore3Line, RiUser3Line } from "@remixicon/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Layout = ({children}) => {
    const pathname = usePathname();
    return(
        
        <div className="container-dashboard">
            <div className="nav-bar">
                <div className="logo">
                    <h4 className={`${neueBold.className}`}>eh<span className={`${neueRegular.className}`}>colab</span></h4>
                </div>
                <nav>
                    <ul>
                        <li>
                            
                            <Link className={pathname === '/dashboard' ? 'active':''} href='/dashboard'><RiHome3Line/><p>Home</p></Link>
                        </li>
                        <li>
                            
                            <Link className={pathname === '/dashboard/business' ? 'active' :''} href='/dashboard/business'><RiStore3Line/><p>Negócios</p></Link>
                        </li>
                        <li>
                            
                            <Link className={pathname === '/dashboard/influencers' ? 'active':''} href='/dashboard/influencers'><RiServiceLine/><p>Influenciadores</p></Link>
                        </li>
                        <li>
                            
                            <Link className={pathname === '/dashboard/profile' ? 'active' :''} href='/dashboard/profile'><RiUser3Line/><p>Meu perfil</p></Link>
                        </li>
                        <li className="li-logout">
                            <Link href='/'><RiShutDownLine/><p>Sair</p></Link>
                        </li>
                    </ul>
                </nav>
                <div className="space"></div>
                <div className="logout">
                    <ul>
                        <li>
                            <Link href='/'><RiShutDownLine/><p>Sair</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="dashboard-pages">{children}</main>
        </div>
    )
}

export default Layout;