// import BackgroundImg from "../assets/images/"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutMe() {
  return (
    <section id="about" className="px-4 lg:px-5 py-7">
      <h3 className="text-3xl font-bold text-center text-white mb-12">
        About Me
      </h3>
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <DotLottieReact
            src="https://lottie.host/e27b8e85-6476-4ff8-955c-e681beffa455/ii4uA4xPmk.lottie"
            className="w-full max-h-full max-w-full h-auto"
            autoplay
            loop
          />
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg">
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              👋🏻 <span className="font-semibold text-white">Hi, I’m Alisson Bucchi.</span>
            </p>
            <p>
              Dynamic <span className="font-semibold text-blue-600">QA Engineer & Data Analyst</span> transitioning into Data Science, driven by a passion for building reliable and data-driven solutions.
            </p>
            <p>
              Experienced in <span className="font-semibold text-white">automated testing, full-stack development, and applied data technologies</span>.
            </p>
            <p>
              Fluent in <span className="font-semibold text-white">English, French, and Italian</span>. 🌍
            </p>
            <p>
              Continuously learning, exploring, and improving through technology. 🚀
            </p>
            <p className="text-white">
              Let’s connect and build something meaningful!
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://issuu.com/alisson-tech-dev/docs/professional_skills_documents_alisson"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 font-bold text-center px-5 py-3 rounded-lg 
               transition-all duration-300 transform hover:scale-105
               hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg"
              >
              Download Resume ⬇️
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}