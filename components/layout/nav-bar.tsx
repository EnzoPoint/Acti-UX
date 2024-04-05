import styles from "@styles/components/layout/nav-bar.module.scss"
import NavItem from "./nav-item";
import { NavItemType } from "@lib/types";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBar = () => {

    const router = useRouter();

    const navItems: NavItemType[] = [
        {
            icon: '/assets/home.svg',
            name: "Home",
            path: "/#home",
        },
        {
            icon: '/assets/book.svg',
            name: "Culture",
            path: "/#Culture",
        },
        {
            icon: '/assets/outils.svg',
            name: "Les outils",
            path: '/#Outils',
        },
        {
            icon: '/assets/designthinking.svg',
            name: "Design Thinking",
            path: '/#Design Thinking',
        },
        {
            icon: '/assets/ressources.svg',
            name: "Ressources",
            path: '/#Ressources',
        }
    ]

    // state

    const getInitialId = () => {
        const path = router.pathname
        const navItem = navItems.find(item => item.path === path)
        if (navItem) return navItems.indexOf(navItem)
        return 0
    }

    const [currentId, setCurrentId] = useState<number>(getInitialId())
    const [prevCurrentId, setPrevCurrentId] = useState<number>(currentId)

    // utils

    const getNavItems = () => {
        return navItems
    }

    // handlers 

   const handleClick = (item: NavItemType, id: number) => {
        if (item.action) item.action()
        else if(item.path) router.push(item.path)
        setPrevCurrentId(currentId)
        setCurrentId(id)
    }

    // render

    return (
        <>
            <nav className={styles.navBar}>
                <ul> 
                    {
                        getNavItems().map((item: NavItemType, index: number) => (
                            <NavItem 
                                key={index} 
                                item={item}
                                isCurrent={index === currentId}
                                onClick={() => handleClick(item, index) }
                            />
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
