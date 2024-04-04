import styles from "@styles/components/layout/footer.module.scss"
import { useEffect, useState } from "react";

const Footer = () => {

    const [showMouseImage, setShowMouseImage] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
	const handleMouseMove = (event: any) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const handleParagraphClick = () => {
		if(showMouseImage) setShowMouseImage(false);
		setShowMouseImage(true);
	};
    
    useEffect(() => {
        if (showMouseImage) {
			window.addEventListener('mousemove', handleMouseMove);
		}
	
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [0, showMouseImage]); 

    // render

    return (
        <div className={styles.footer} onClick={handleParagraphClick}>

        <p className={styles.copyright}>
            © TEAM BG -- Dispeloid -- EnzoPoint -- Mathy -- Gui -- 2024
        </p>
        {showMouseImage && (
            <img
                src="assets/easter.jpeg" 
                className={styles.mouseImage}
                alt="Easter egg"
                style={{ left: mousePosition.x, top: mousePosition.y }}
            />
        )}
        </div>
    )
}

export default Footer;