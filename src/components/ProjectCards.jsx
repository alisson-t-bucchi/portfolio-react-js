import ComingSoon from "../assets/images/coming-soon.jpg"
import WebFormPage from "../assets/images/web-form-page.webp"
import WebFormVideo from "../assets/videos/web-form-page.mp4"
import PizzaPricePredictorApp from "../assets/images/pizza-price-predictor-app.webp"
import PizzaPricePredictorAppVideo from "../assets/videos/pizza-price-predictor-app.mp4"

const qaProjects = [
    {
        id: 1,
        image: WebFormPage,
        title: "BDD test suite for Web Form Page",
        description: "BDD automation test for Web Form Page in Python using Selenium, Behave, and Allure Reports.",
        video: WebFormVideo,
        code:"https://github.com/alisson-t-bucchi/webform_selenium_behave_python.git"
    },
    {
        id: 2,
        image: ComingSoon,
        title: "Future project",
        description: "Future project",
        video: " ",
        code: " "
    },
];

const iaProjects = [
    {
      id: 1,
      image: PizzaPricePredictorApp,
      title: "Price predictor using Machine Learning",
      description: "Pizza price predictor in Python using Pandas, Sklearn and Streamlit libraries",
      video: PizzaPricePredictorAppVideo ,
      code: "https://github.com/alisson-t-bucchi/predict-pizza-values-ml.git"
    },
    {
        id: 2,
        image: ComingSoon,
        title: "Future project",
        description: "Future project",
        video: " ",
        code: " "
    },
];

const CardsItems = ({image, title, description, video, code}) => {
    return (
    <div className="shadow-lg rounded-lg p-4 bg-lime-100">
        <img src={image} alt="Project" className="rounded-md" />
        <h4 className="mt-4 text-xl font-bold">{title}</h4>
        <p className="text-sm">{description}</p>
        <div className="flex space-x-4 mt-4">
            <a href={video} target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-1 rounded-lg border-2">
                Live Preview
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-1 rounded-lg border-2">
                View code
            </a>
        </div>
    </div>
    )
}

export default function Cards() {
    return(
    <>
        <section id="projects">
            <h3 className="text-3xl font-bold text-center mb-4 py-4">QA Projects</h3>
            <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6">
                {qaProjects.map((project) => (
                    <CardsItems
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    video={project.video}
                    code={project.code} />
                    ))}
                </div>
        </section>
        
        <section id="projects">
            <h3 className="text-3xl font-bold text-center mb-4 py-4">IA Projects</h3>
            <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-6">
                {iaProjects.map((project) => (
                    <CardsItems
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    video={project.video}
                    code={project.code} />
                    ))}
            </div>
        </section>
    </>
    )
}

export {qaProjects, iaProjects}
