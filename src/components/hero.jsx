import Image from "next/image";
import background from "@/assests/image/jpg/image-01.jpg"
import styles from "@/styles/components/hero.module.css"

const Hero = () =>{
    return(
        <>
          <div className={styles.wrapper}>
<h1 className={styles.heroText}>Plan.<br/>Manage.<br/>Build.</h1>
<div></div>
<h3>Our Difference Is In Finishing</h3>
<button>work</button>
</div>
<Image className={styles.heroImage} src={background} widht={3840} height={2160} alt="hero image" />
        </>
    );

}
export default Hero;