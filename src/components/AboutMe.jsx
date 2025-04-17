// import BackgroundImg from "../assets/images/"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutMe() {
    return (
        <section id="about" className="text-center py-8">
        <h3 className="text-3xl font-bold py-8">About Me</h3>
        <div className="px-6 grid lg:grid-cols-2">
          <div className="flex justify-center items-center gap-4 mt-4 px-4">
          <DotLottieReact
            src="https://lottie.host/729f57c3-9789-4a82-bf57-16b255b32fcf/tYCKJ4OcoA.lottie"
            loop
            autoplay
          />
          <DotLottieReact
            src="https://lottie.host/156b7934-4d85-4543-8896-62257afb0f6e/7hdW5Af13M.lottie"
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