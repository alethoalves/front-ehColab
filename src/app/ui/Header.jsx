'use client'
import { RiArrowDownSLine, RiMenu5Fill, RiMenuUnfold4Line, RiUserLine } from "@remixicon/react";
import { MenuProfile } from "./MenuProfile";
import {  useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";

export function Header({handleHamburgerClick, isHamburgerMenuOpen}) {
    const { user } = useContext(UserContext);

    // Variáveis de estado e funções para o menu do perfil
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [profileMenuOpacity, setProfileMenuOpacity] = useState(0);
    const [profileMenuDisplay, setProfileMenuDisplay] = useState('none');

    const handleProfileClick = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
        if (!isProfileMenuOpen) {
            setProfileMenuDisplay('block');
            setTimeout(() => {
                setProfileMenuOpacity(1);
            }, 70);
        } else {
            setProfileMenuOpacity(0);
            setTimeout(() => {
                setProfileMenuDisplay('none');
            }, 300);
        }
    };



    // Função para fechar o menu do perfil quando o mouse sair
    const handleMouseLeave = () => {
        if (isProfileMenuOpen) {
            setIsProfileMenuOpen(false);
            setProfileMenuOpacity(0);
            setTimeout(() => {
                setProfileMenuDisplay('none');
            }, 300);
        }
    };

    return (
        <div className={`app-header ${isHamburgerMenuOpen&&'app-header-slim'}`}>
            
            <div className="btn-menu" >
                <div onClick={handleHamburgerClick}>
                    <RiMenuUnfold4Line className={`btn-menu-icon `} style={{ transform: `scaleX(${isHamburgerMenuOpen ? -1 : 1})` }}/>  
                </div>
                
                <RiMenu5Fill className={`btn-menu2-icon `}></RiMenu5Fill>
            </div>
            
            <div onMouseLeave={handleMouseLeave}>
                <div className="profile" onClick={handleProfileClick}>
                    <div className="profile-circle">
                        <RiUserLine className="profile-icon"/>
                    </div>
                    <p className="p2">Olá, {user?.split(' ')[0]}</p>
                    <div className="icon-arrow">
                        <RiArrowDownSLine/>
                    </div>
                </div>
                <MenuProfile display={profileMenuDisplay} opacity={profileMenuOpacity}/>
            </div>
            
        </div>
    )
}
