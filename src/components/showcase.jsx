import Image from "next/image"
import Disney from "@/assests/logos/png/disney_logo.png"
import Dropbox from "@/assests/logos/png/dropbox.png"
import Monday from "@/assests/logos/png/monday_logo.png"
import Ncr from "@/assests/logos/png/ncr.png"
import Rakuten from "@/assests/logos/png/rakuten_logo.png"
import User1 from "@/assests/image/jpg/user-01.jpg"
import User2 from "@/assests/image/jpg/user-02.jpg"
import User3 from "@/assests/image/jpg/user-03.jpg"
import User4 from "@/assests/image/jpg/user-04.jpg"











const Showcase = () => {
    return(
        <>
        <div>
        <Image src={Disney} width={56} height={36} alt="" />
                <Image src={Dropbox} width={56} height={36} alt="" />
                <Image src={Monday} width={56} height={36} alt="" />
                <Image src={Ncr} width={56} height={36} alt="" />
                <Image src={Rakuten} width={56} height={36} alt="" />
        </div>


<h1>To enhance the growth of your website, it{"'"}s essential to expedite the release of new pages.</h1>
            <div>
                <Image src={User1} width={156} height={136} alt="" />
                <Image src={User2} width={156} height={136} alt="" />
                <Image src={User3} width={156} height={136} alt="" />
                <Image src={User4} width={156} height={136} alt="" />
            </div>
            <h1>/</h1>
            <div>
                <h3>We Received A Great Amoun Of Work in Just 2 Weeks Timeline!</h3>
                <span>Daniel, Design lead @Google</span>
            </div>
              </>
            );
        }
export default Showcase;