import Image from 'next/image';
import logo from "../../public/logo.svg";

export function Logo({center=false}) {
    return (
        <div className={`logo ${center?'center-logo':''}`}>
            <div className='img-logo'>
                <Image
                    priority
                    src={logo}
                    alt="Logo"
                />
            </div>
            <p className='text-logo'>PLIC | eventos</p>
        </div>
    )
  }

