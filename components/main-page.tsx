
import Button from '@components/button'
import styles from '@styles/components/main-page.module.scss'
import { ReactNode } from 'react';
import router from 'next/router';
import Card from './card';
import GroupCard from './groupcard';

interface Props {
    type:'home' | 'menu';
    title: string;
    description?: ReactNode;
    id?: string;
    type_card?: "small" | "big" | "huge";
    card_title?: string[] | undefined;
	card_contenu?: string[] | undefined;
    className?: string;
}

const SectionHeader = (
    {
        type,
        title,
        description,
        id,
        type_card,
        card_title,
        card_contenu,
        className
    }: Props
) => {


    const getClassNames = () => {
        let classNames = styles.header
        classNames += ' ' + (type ? styles[type] : styles.home)
        classNames += className ? ' ' + className : ''
        return classNames
    }

    return (
        <section id={id} className={getClassNames()}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.descr}>
                    {description}
                </p>
                <div className={styles.group}>
                    { type === 'home' ?
                        <Button 
                            onClick={() => router.push('/get-started')}
                            type='button'
                            role='white'
                        >
                            Get Started
                        </Button>
                        : 
                        <>
                            {card_title && card_contenu && card_title.map((title, index) => (
                                <Card
                                    key={index}
                                    type={type_card}
                                    title={title}
                                    description={card_contenu[index]}
                                />
                            ))}
                        </>
                    }
                </div>
            </div>
        </section>
    )

}

export default SectionHeader