import styles from "@styles/components/layout/footer-action.module.scss"


interface Props {
    children: any;
    onClick: () => void;
}

const FooterAction = (
    { children, onClick }: Props
) => {

    // render

    return (
        <div className={styles.container} onClick={onClick}>
            <hr/>
            <span>
                { children }
            </span>
            <hr/>
        </div>
    )
}

export default FooterAction