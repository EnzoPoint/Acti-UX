import styles from "@styles/components/card.module.scss"
import Link from 'next/link'; 
import React from "react";
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from "@lib/sanity.client"

interface Props {
    children?: any;
    slug?: string;
    title: string | undefined;
    description: string | undefined;
    linkImage?: string;
    type?: "small" | "big" | "huge";
    action?: () => void;
}

const Card = ( 
    { 
        slug,
        title,
        description,
        linkImage,
        type,
        action
    }: Props
) => {

    const getClassNames = () => {
        let classNames = styles.card
        classNames += ' ' + (type ? styles[type] : styles.small)
        return classNames
    }

    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source: any) {
        return builder.image(source)
    }      
    
    return ( 
        <Link className={getClassNames()} href={`/article/${slug}`} passHref> 
            {linkImage && <img className={styles.image} src={urlFor(linkImage).url()} alt={title || 'Image'} />}
            <div className={styles.texte}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}
export default Card;