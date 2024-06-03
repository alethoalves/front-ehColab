import Link from "next/link"

export function Button({className,colorIcon, children, type, iconLeft:IconLeft, iconRight:IconRight, onClick, linkTo, disabled}) {
    
    return (
        <>
        {linkTo &&
            <Link href={linkTo} className={`button ${className} ${disabled ? 'disabled-link' : ''}`}  type={type} onClick={onClick} disabled={disabled}>
                
            {IconLeft && 
            <IconLeft className={`btn-icon ${colorIcon}`}/>
            }
            <p className="p5">{children}</p>
            {IconRight && 
            <IconRight className={`btn-icon ${colorIcon}`}/>
            }
            </Link>
            
        }
        {!linkTo &&
        <button className={`button ${className}`}  type={type} onClick={onClick} disabled={disabled}>
            {IconLeft && 
            <IconLeft className={`btn-icon ${colorIcon}`}/>
            }
            <p className="p5">{children}</p>
            {IconRight && 
            <IconRight className={`btn-icon ${colorIcon}`}/>
            }
        </button>
        
        }
        
        
        
        </>
        
    )
  }

