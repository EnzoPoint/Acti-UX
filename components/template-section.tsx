import styles from "@styles/components/template-section.module.scss"
import React from "react";
import GroupCard from "./groupcard";
import Card from "./card";

interface Props {
    id?: string;
    direction?: "row" | "column";
    section_title: string
    section_description?: string;
    image?: string;
    card_slug?: string[];
	card_title?: string[];
	card_contenu?: string[];
    card_image?: string[];
    card_type?: "small" | "big" | "huge";
}

const TemplateSection = ( 
    { 
        id,
        direction,
        section_title,
        section_description,
        image,
        card_slug,
        card_image,
		card_contenu,
		card_title,
        card_type
    }: Props
) => {

    const getClassNames = () => {
        let classNames = styles.section
        if(image) classNames += ' ' + styles.withImage
        // classNames += ' ' + (type ? styles[type] : styles.home)
        return classNames
    }

    return ( 
        <section className={getClassNames()} id={id}>
            <div className={styles.subsection}>
                <h1>{section_title}</h1>
                <p>{section_description}</p>
                <GroupCard direction={direction}>
                    {card_title && card_contenu && card_slug && card_title.map((title, index) => (
                        <Card
                            key={index}
                            slug={card_slug[index]}
                            type={card_type}
                            title={title}
                            description={card_contenu[index]}
                            linkImage={card_image ? card_image[index] : undefined}
                        />
                    ))}
                </GroupCard>
            </div>
            {image && <img className={styles.img} src={image} alt="illustration" />}
        </section>
    )
}
export default TemplateSection;