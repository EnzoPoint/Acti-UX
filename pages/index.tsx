import styles from '@styles/pages/home.module.scss'
import { useEffect, useState } from 'react'
import MainPage from '@components/main-page'
import TemplateSection from '@components/template-section'
import { getAllArticleWithCategories } from '@lib/sanity.services'
import Footer from '@components/layout/footer'

const Home = () => {     

	const [articlesByCategory, setArticlesByCategory] = useState<any>({});

	useEffect(() => {
		getAllArticleWithCategories().then((articles: any) => {
			const groupedByCategory: any = {};
			articles.forEach((article: any) => {
				console.log("article", article)
				let categories = article.categories[0];
				if (!groupedByCategory[categories.title]) {
					groupedByCategory[categories.title] = [];
				}
				groupedByCategory[categories.title].push(article);
			});

			setArticlesByCategory(groupedByCategory);
		});

	}, [0]);

	let category = ["Culture", "Outils", "Design Thinking"];

	// render

	return (

		<>
			<main id={styles.main}>
				<MainPage
					id="home"
					type='home'
					title='ACTIUX'
					description={
						<>
						  Bienvenue sur votre kit starter pack UX.<br />
						  Découvrez tout ce qu’il faut savoir pour que vos projets soient centrés Utilisateurs.
						</>
					}
				/> 
				
				{category.map((category: any) => {
					  const articles = articlesByCategory[category] || [];
					  const cardSlugs = articles.map((article: any) => article.slug.current);
					  const cardTitles = articles.map((article: any) => article.title);
					  const cardContents = articles.map((article: any) => article.description);
					  const cardImages = articles.map((article: any) => article.mainImage.asset._ref);

					  let card_type: "small" | "big" | "huge"
					  switch (category) {
						case "Culture":
						  card_type = "huge";
						  break;
						case "Outils":
						  card_type = "small";
						  break;
						case "Design Thinking":
						  card_type = "big";
						  break;
						default:
						  card_type = "small"; 
					  }

					  return (
						<TemplateSection
							key={category} 
							id={category} 
							section_title={category}
							card_slug={cardSlugs}
							card_type={card_type}
							card_title={cardTitles}
							card_contenu={cardContents}
							card_image={cardImages}
						/>
					  );		
					}
				)}
							
				<TemplateSection
					key="Ressources" 
					id="Ressources"
					section_title="Ressources"
					card_slug={["1.pdf", "2.pdf", "3.pdf", "4.pdf"]}
					card_image={["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]}
					card_type="small"
					card_title={["Le Guide", "Le QQQOCP", "La méthode", "Empaty Map"]}
					card_contenu={["Le guide complet pour débuter en UX", "Le fameux Quoi, Qui, Ou, Quand, Comment, Pourquoi ?", "Étape majeur du Design Thinking", "Le seul et l'unique l'Empaty Map !'"]}
				/>
				<Footer />
			</main>
		</>
		
	)
}

export default Home
