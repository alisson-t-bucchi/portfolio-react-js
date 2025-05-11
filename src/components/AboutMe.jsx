// import BackgroundImg from "../assets/images/"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutMe() {
    return (
        <section id="about" className="text-center py-8 lg:px-12">
        <h3 className="text-3xl font-black py-8">About Me</h3>
        <div className="px-6 grid lg:grid-cols-2">
          <div className="flex justify-center items-center gap-4 mt-4 px-4">
          <DotLottieReact
            src="https://lottie.host/a2cfb722-fc1d-41c8-aa8c-7f01ec72fda5/cIm6M6yS5T.lottie"
            loop
            autoplay
          />
            {/* <img className="h-60 rounded-xl" 
            src={BackgroundImg} 
            alt="backgroundd image" 
            /> */}
          </div>
          <div>
            <p className="mt-4 text-xl lg:text-justify">
              👋🏻 Hi there, I am Alisson Bucchi. Dynamic IT professional holding a Computer Networking and Systems, 
              with expertise in Programming, Software QA Tester and Data Analyst. 
            </p>
            <p className="mt-4 text-xl lg:text-justify">
              I am currently QA Tester Engineer, and Data Specialist working with testing and, data development to enhance software efficiency.
              I am in constant professional development to be a Full Stack Developer and Data Scientist! 👨🏻‍💻🚀
            </p>
            <p className="mt-4 text-xl lg:text-justify">
            Fluent in English, French and Italian, I'm proactive, multitasking and work well in a team. 
            I am always up for new challenges that allow me to apply and ready to drive into tech sector forward with reliable, cutting-edge and innovative solutions.
            </p>
          </div>
        </div>
      </section>
    )
}