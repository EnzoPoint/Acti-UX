import React, { useEffect, useState } from "react";
import styles from '@styles/pages/article.module.scss'
import { useRouter } from 'next/router'; 
import { getOneArticle } from "@lib/sanity.services";
import { PortableText } from '@portabletext/react'; 
import MainPage from '@components/main-page'
import { PostData } from "@lib/types";
import sanityClient from '@lib/sanity.client'; 
import urlBuilder from '@sanity/image-url'
import { ImageComponentProps } from '@lib/types';
import {getImageDimensions} from '@sanity/asset-utils'
import Footer from "@components/layout/footer";

const ArticlePage = () => {
	const [postData, setPost] = useState<PostData | null>(null);
	const router = useRouter();
	const { slug } = router.query; 

	useEffect(() => {
		if (typeof slug === 'string') {
			getOneArticle(slug).then(data => {
				setPost(data);
			});
		}
	}, [slug]); 

	if (!postData) return <div>Patience mon loulou ça arrive...</div>;

	const imageComponent = ({value, isInline}: ImageComponentProps) => {
	const {width, height} = getImageDimensions(value)
	return (
		<img
		src={urlBuilder()
			.image(value)
			.width(isInline ? 100 : 800)
			.projectId(sanityClient.config().projectId as string)
			.dataset(sanityClient.config().dataset as string)
			.fit('max')
			.auto('format')
			.url()}
		alt={value.alt || ' '}
		loading="lazy"
		style={{
			display: isInline ? 'inline-block' : 'block',
			aspectRatio: width / height,
		}}
		/>
	)
	}

	const components = {
		types: {
			image: imageComponent,
		}
	};
  
	return (
		<main id={styles.main}>
			<MainPage 
				type='menu'
				title={postData.title}
				type_card='huge'
				card_contenu={[postData.description]}
				description={
					<>
						{postData.description}
					</>
				}
			/> 

			<article className={styles.article}>	
				<PortableText
					value={postData.body}
					components={components}
				/>
			</article>

			<Footer />
		</main>
	);
};

export default ArticlePage;