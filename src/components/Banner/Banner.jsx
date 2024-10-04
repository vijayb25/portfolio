import SocialLinks from "../Socials/SocialLinks"
import Resume from "../Resume"

function Banner() {

    return(
        <>
        <div className="wrapper">
            <div className="banner_con mt-20 mb-5 pl-3 pr-3">
                <div className="bnr_intro w-full min-h-[500px] flex justify-center items-start flex-col gap-4">
                    <h2 className="leading-normal"><span className="text-3xl font-semibold">Greetings! I am</span> <span className="block text-5xl font-bold mt-2">Vijay Baclay</span></h2>
                    <div className="typwriter-container">
                    <span className="text-md w-max typewriter">Web Developer | Aspiring Software Engineer</span>
                    </div>
                    <p>A web developer and aspiring software engineer with a passion for creating dynamic and responsive web applications. Proficient in modern web technologies and committed to continuous learning.</p>
                   <Resume />
                    
                </div>
                    <SocialLinks/>
            </div>
        </div>
        </>
    )
}

export default Banner