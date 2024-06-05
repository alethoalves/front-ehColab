"use client"
import { isLogged } from "@/api/clientReq";
import { logout } from "@/api/clientReq";
import { neueBold, neueRegular } from "@/app/ui/fonts";
import useAuth from "@/lib/useAuth";
import { RiHome3Line, RiServiceLine, RiShutDownLine, RiStore3Line, RiUser3Line, RiWechatLine } from "@remixicon/react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from "react";
const Layout = ({children}) => {
    const router = useRouter()

    const handleLogoutClick = async (event) => {
        event.preventDefault(); // Impede o redirecionamento

        
        const response = await logout();
        if(response){
          router.push('/auth')
        } 
    };
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
                            
                            <Link className={pathname === '/dashboard/chat' ? 'active':''} href='/dashboard/chat'><RiWechatLine/><p>Chat</p></Link>
                        </li>
                        <li>
                            
                            <Link className={pathname === '/dashboard/profile' ? 'active' :''} href='/dashboard/profile'><RiUser3Line/><p>Meu perfil</p></Link>
                        </li>
                        <li className="li-logout">
                            <Link onClick={handleLogoutClick} href='/'><RiShutDownLine/><p>Sair</p></Link>
                        </li>
                    </ul>
                </nav>
                <div className="space"></div>
                <div className="logout">
                    <ul>
                        <li>
                            <Link onClick={ handleLogoutClick} href='/'><RiShutDownLine/><p>Sair</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <main className="dashboard-pages">{children}</main>
        </div>
    )
}

export default Layout;