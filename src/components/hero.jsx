import Image from "next/image";
import background from "@/assests/image/jpg/image-01.jpg"


const Hero = () =>{
    return(
        <>
<h1>Plan.<br/>Management.<br/>Build.</h1>
<div></div>
<h3>Our Difference Is In Finishing</h3>
<button>work</button>
<Image src={background} widht={3840} height={2160} alt="hero image" />
        </>
    );

}
export default Hero;