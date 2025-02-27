import WebPhoto from "../assets/web_photo.jpg"

export default function HeroSection({content: {title, role}}) {
  return (
  <header className="text-center py-12">
    <div className="grid lg:grid-cols-2 lg:min-h-6/12 lg:mt-8">
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start">
            <h2 className="text-4xl font-bold">{title}</h2>
            <h3 className="text-2l font-bold text-blue-600">{role}</h3>
            <img className="w-60 rounded-full md:hidden" 
            src={WebPhoto} 
            alt="Alisson" 
            />
            <button className=" mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
                Contact me
            </button>
        </div>
    
        <div>
            <img className="w-60 rounded-full hidden md:inline border-2 border-blue-600 " 
            src={WebPhoto} 
            alt="Alisson" 
            />
        </div>
    </div>
    </header>
  )
}
