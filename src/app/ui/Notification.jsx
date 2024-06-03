import { RiCloseLine} from "@remixicon/react";
import { useEffect, useState } from "react";

export function Notification({className, children}) {
    const [visible, setVisible] = useState(false);
    const [parentDisplay, setParentDisplay] = useState('block');

    useEffect(() => {
        setTimeout(() => {
          setVisible(true);
        
        }, 200); // 7 segundos de atraso
      }, []);
    
      const handleDismiss = () => {
        setVisible(false);
        setTimeout(() => {
          setParentDisplay('none');
        }, 400); // Tempo de espera após o desaparecimento da notificação antes de ocultar a div pai
      };
    return (
        <div className={`notification ${className} ${visible ? 'visible' : ''} ${parentDisplay}`}>
            <p className="p5">{children}</p>
            <a onClick={handleDismiss}><RiCloseLine/></a>
        </div>
    )
  }

