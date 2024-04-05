import { NavItemType } from "@lib/types"

import styles from "@styles/components/layout/nav-item.module.scss"

interface Props {
    item: NavItemType
    isCurrent?: boolean
    onClick: () => void
}

const NavItem = (
    {
        item,
        isCurrent,
        onClick
    }: Props
) => {


    const getClassNames = () => {
        let classNames = styles.navItem
        classNames += isCurrent ? ` ${styles.current}` : ""
        return classNames
    }

    // render

    return (
        <li 
            onClick={onClick}
            className={getClassNames()}>
                { item.icon ? 
                    <div className={styles.iconContainer}>
                        <img src={item.icon} alt={item.name} />
                    </div>
                    : <></>
                }
                { item.path ? 
                        <span>{item.name}</span>
                    : 
                    <span>{item.name}</span>
                }    
        </li>
    )
}

export default NavItem