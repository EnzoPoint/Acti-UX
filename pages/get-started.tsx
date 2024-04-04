import styles from '@styles/pages/get-started.module.scss'
import MainPage from '@components/main-page'
import TemplateSection from '@components/template-section'
import Footer from '@components/layout/footer'

const GetStarted = () => {     
	
	// render

	return (
		<>
			<main id={styles.main}>
				<MainPage 
					type='menu'
					title='Get Started'
					type_card='huge'
					card_title={["1987 ?", "Qu’est ce que le Design Thinking", "Qui est Ideo ?", "Convergence et divergence ?"]}
					card_contenu={["Les origines du design thinking remontent aux années 1960-1970", "Le Design Thinking est une méthode inspirée de la façon de penser du designer.", "IDEO a été l'un des premiers acteurs à formaliser et à promouvoir cette approche innovante du design.", "La divergence et la convergence sont deux concepts clés dans le processus de design thinking"]}
				/> 
				
				<TemplateSection
					id='1987 ?'
					section_title="1987 ?"
					section_description={`Le design thinking trouve ses racines dans les années 1960-1970, grâce aux travaux d'une première génération de chercheurs qui se sont attelés à comprendre et à décrire l'activité des designers, jetant ainsi les bases d'un nouveau domaine de recherche : la recherche en design. Herbert Simon, un éminent chercheur en sciences cognitives et lauréat du Prix Nobel d'économie en 1978, est largement crédité pour avoir donné naissance à ce concept. Dans son ouvrage intitulé \"Les Sciences de l'artificiel", Simon définit le design comme une manière de penser, se distinguant de ceux pour qui le design se résume essentiellement à la création d'objets physiques. Selon lui, le travail des designers est principalement abstrait, consistant à résoudre des problèmes complexes, terme emprunté à un autre grand théoricien du design, Horst Rittel.`}
					direction='column'
					image="/assets/test_img.png"
				/>

				<hr className={styles.space} />

				<TemplateSection
					id='Qu’est ce que le Design Thinking'
					section_title="Le Design Thinking ?"
					section_description={`Le Design Thinking est une approche créative et centrée sur l'utilisateur pour résoudre les problèmes et stimuler l'innovation. Cette approche met l'accent sur la compréhension profonde des besoins des utilisateurs, la génération d'idées créatives, la création de prototypes et le test itératif. Le Design Thinking favorise l'empathie, la collaboration multidisciplinaire et l'expérimentation pour développer des solutions qui répondent véritablement aux besoins des utilisateurs. Il s’agit donc d’une méthode d’intelligence collective encourage également à remettre en question les hypothèses, à repenser les problèmes de manière holistique et à adopter une approche itérative pour parvenir à des résultats efficaces.`}
					direction='column'
					image="/assets/test_img.png"

				/>
				<hr className={styles.space} />
				
				<TemplateSection
					id='Qui est Ideo ?'
					section_title="Qui est Ideo ?"
					section_description={`Acteur Majeur \n IDEO a joué un rôle majeur dans le développement et la popularisation du concept de design thinking. En tant que société de design et de consulting basée en Californie, IDEO a été l'un des premiers acteurs à formaliser et à promouvoir cette approche innovante du design.
					Voici quelques-uns des rôles clés d'IDEO dans le design thinking :
					
					Pionnier du concept : IDEO est souvent crédité d'avoir popularisé le terme "design thinking" et d'avoir été parmi les premiers à l'appliquer systématiquement dans ses projets de conception. 
					
					Méthodologie et processus : IDEO a développé une méthodologie de design thinking qui met l'accent sur l'empathie, la définition, l'idéation, le prototypage et les tests rapides.
					
					L’impact dans divers domaines : Les projets d'IDEO ont eu un impact significatif dans une variété de domaines, notamment les produits de consommation, les services, les espaces physiques et numériques, la santé, l'éducation, etc. Leur approche centrée sur l'utilisateur a permis de créer des solutions innovantes pour répondre à des besoins réels.`}
					direction='column'
					image="/assets/test_img.png"

				/>
				<hr className={styles.space} />

				<TemplateSection
					id='Convergence et divergence ?'
					section_title="Convergence et divergence ?"
					section_description={`La divergence et la convergence sont deux concepts clés dans le processus de design thinking, qui se réfèrent à des modes de pensée et d'action différents utilisés à différentes étapes du processus de conception.

					Divergence :
					La divergence fait référence à l'exploration et à la génération d'un large éventail d'idées, de concepts et de solutions créatives.
					Pendant la phase de divergence, l'objectif est de rechercher activement la diversité et la quantité d'options possibles sans jugement précoce. Il s'agit d'élargir les horizons et de considérer toutes les perspectives imaginables.
					Les méthodes de divergence peuvent inclure des techniques telles que le brainstorming, le mind mapping, les jeux de rôle, les ateliers collaboratifs, etc.
					L'accent est mis sur la créativité, l'ouverture d'esprit et l'exploration de nouvelles idées sans restrictions.
					
					Convergence :
					La convergence intervient après la phase de divergence et consiste à sélectionner, à filtrer et à affiner les idées générées lors de cette phase.
					Pendant la phase de convergence, l'objectif est de trier les idées en fonction de leur pertinence, de leur faisabilité et de leur capacité à résoudre le problème ou à répondre au besoin identifié.
					Les méthodes de convergence peuvent inclure des techniques telles que le vote, la matrice de décision, le tri par critères, l'analyse de priorisation, etc.
					L'accent est mis sur la rationalisation, la prise de décision et la transformation des idées brutes en solutions concrètes et réalisables.
					 `}
					direction='column'
					image="/assets/test_img.png"

				/>
				<hr className={styles.space} />

				<Footer />
			</main>
		</>		
	)
}

export default GetStarted
