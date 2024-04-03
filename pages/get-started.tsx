import styles from '@styles/pages/get-started.module.scss'
import MainPage from '@components/main-page'
import TemplateSection from '@components/template-section'

const GetStarted = () => {     
	
	// render

	return (

		<>
			<main id={styles.main}>
				<MainPage 
                    type='menu'
                    title='Get Started'
                    type_card='huge'
                    card_title={["Question 1 ?", "Question 2 ?", "Question 3 ?", "Question 4 ?"]}
    				card_contenu={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}
                /> 

				<TemplateSection
					id='question1'
					section_title="Question 1 ?"
					section_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					direction='column'
					image="/assets/test_img.png"
					card_title={["Réponse 1", "Réponse 2", "Réponse 3"]}
    				card_contenu={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}
					card_type='huge'
				/>

				<hr className={styles.space} />

				<TemplateSection
					id='question2'
					section_title="Question 2 ?"
					section_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					direction='column'
					image="/assets/test_img.png"

					card_title={["Réponse 1", "Réponse 2", "Réponse 3"]}
    				card_contenu={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}
					card_type='huge'
				/>

				<hr className={styles.space} />
				
			</main>
		</>
		
	)
}

export default GetStarted
