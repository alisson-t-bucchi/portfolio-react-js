// import BackgroundImg from "../assets/images/"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutMe() {
    return (
        <section id="about" className="text-center py-22">
        <h3 className="text-3xl font-bold py-6">About Me</h3>
        <div className="px-6 grid lg:grid-cols-2">
          <div className="flex justify-center mt-4">
          <DotLottieReact
            src="https://lottie.host/2a8f3e4b-9dec-4c33-8db0-ed4dbf40cc71/bGHxcEAP5g.lottie"
            loop
            autoplay
          />
            
            {/* <img className="h-60 rounded-xl" 
            src={BackgroundImg} 
            alt="backgroundd image" 
            /> */}

          </div>
          <div>
            <p className=" mt-4 text-lg lg:text-justify">
            👋🏻 Hi there, I am Alisson Bucchi. Dynamic IT professional holding a Computer Networking and Systems, 
            with expertise in Network Management and Programming (C, Python, Java). 
            I am currently QA Tester, and Data Integration Developer working with automated testing frameworks, data development to enhance software efficiency and scalability.
            I am in constant professional development to be a Full Stack Developer! 👨🏻‍💻🚀
            </p>
            <p className="mt-4 text-lg lg:text-justify">
            Fluent in English, French and Italian, I'm proactive, multitasking and work well in a team. 
            I am always up for new challenges that allow me to apply and ready to drive into tech sector forward with reliable, cutting-edge and innovative solutions.
            </p>
          </div>
        </div>
      </section>
    )
}