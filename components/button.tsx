
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "@styles/components/button.module.scss"
import React, { LegacyRef } from "react";
import { MouseEventHandler } from "react";

interface Props {
    children?: any;
    onClick: (event?: any) => void;
    onMouseOver?: (event?: any) => void;
    onMouseLeave?: (event?: any) => void;
    type?: "button" | "submit" | "reset" | undefined;
    role?: "primary" | "secondary" | "white";
    icon?: IconProp;
    active?: boolean;
    fullWidth?: boolean;
    action?: "small" | "big";
    error?: boolean;
    dark?: boolean;
    hidden?: boolean;
    className?: string;
}

export type buttonStatus = "success" | "danger" | "discouraged" | undefined;

const Button = ({ 
        children, 
        onClick, 
        onMouseOver,
        onMouseLeave,
        type, 
        role, 
        icon, 
        active = true, 
        fullWidth,
        action,
        error,
        dark,
        hidden,
        className
    }: Props, ref: LegacyRef<HTMLButtonElement>) => {

    const getClassNames = () => {
        let classNames = styles.button
        classNames += ' ' + (role ? styles[role] : styles.primary)
        classNames += (active ? ' ' + styles.active : '') 
        classNames += (fullWidth ? ' ' + styles.fullWidth : '')
        classNames += (action ? ' ' + styles[`${action}Action`] : '')
        classNames += (dark ? ' ' + styles.dark : '')
        classNames += (error ? ' ' + styles.error : '')
        classNames += className ? ' ' + className : ''
        return classNames
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault()
        if(active) onClick(event)
    }

    return hidden ? <></> : (
        <button
            ref={ref}
            className={getClassNames()}
            onClick={handleClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            type={type}>
            { 
                icon ? 
                <FontAwesomeIcon icon={icon}/> 
                :
                <></>
            }
            { children ? children : <></> }
        </button>
    )
}

export default React.forwardRef<HTMLButtonElement, Props>(Button)