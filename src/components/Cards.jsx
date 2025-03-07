import projectImg from "../assets/images/CC360.webp"

export default function Cards() {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-lime-100">
        <img src={projectImg} alt="Project" className="rounded-md" />
            <h4 className="mt-4 text-xl font-bold">
                Project title goes here
            </h4>
            <p className="text-sm">
            Short description... 
            </p>
            <div className="flex space-x-4 mt-4">
                <button href="#" className="bg-white px-4 py-1 rounded-lg border-2">
                    Live Preview
                </button>
                <a href="#" className="bg-white px-4 py-1 rounded-lg border-2">
                    View code
                </a>
            </div>
    </div>
  )
}
