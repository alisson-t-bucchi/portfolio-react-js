import projectImg from "../assets/CC360.webp"

export default function Cards() {
  return (
    <div className="shadow-lg rounded-lg p-4">
        <img src={projectImg} alt="Project" className="rounded-md" />
            <h4 className="mt-4 text-xl font-bold">
                Project title goes here
            </h4>
            <p className="text-sm text-gray-600">
            Short description... 
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600">
                    Live Preview
                </a>
                <a href="#" className="text-blue-600">
                    View code
                </a>
            </div>
    </div>
  )
}
