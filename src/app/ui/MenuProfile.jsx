import { RiLogoutBoxLine, RiLogoutBoxRLine, RiQuestionLine, RiUserLine } from "@remixicon/react";
import { deleteCookie } from "cookies-next";
import Link from 'next/link';


export function MenuProfile({ display, opacity }) {
    const handleLogout = async (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        deleteCookie('authToken');
        window.location.href = '/signin';
      };
    return (
        <>
        <div className={`menu-profile`} style={{ opacity: opacity,display:display }}>
            <ul>
                <li>
                    <Link href="/"><RiUserLine className="icon"/><h6>Meu perfil</h6></Link>
                </li>
                <li>
                    <Link href="/"><RiQuestionLine className="icon"/><h6>Central de ajuda</h6></Link>
                </li>
                <li>
                    <a href="/" onClick={handleLogout}><RiLogoutBoxRLine className="icon"/><h6>Sair</h6></a>
                </li>
            </ul>
            
        </div>
        
        </>
    )
  }

