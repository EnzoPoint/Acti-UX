import styles from "@styles/components/groupcard.module.scss"
import React from "react";

interface Props {
    linkImage?: string;
    children?: any;
    direction?: "row" | "column";
}

const GroupCard = ( 
    { 
        children,
        direction,
        linkImage
    }: Props
) => {

    const getClassNames = () => {
        let classNames = styles.container
        classNames += ' ' + (direction ? styles[direction] : styles.row)
        return classNames
    }

    return ( 
        <div className={getClassNames()}>
            {children}
        </div>
    )
}
export default GroupCard;