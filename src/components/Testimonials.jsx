import Person1 from "../assets/images/patricia-moutinho.webp"
import Person2 from "../assets/images/eduardo-donzelli.webp"

const testimonialsData = [
  {
    id: 1,
    text: "Alisson was my colleague at DXNet – A Logicalis Company, having started as an intern and later joined the team as a QA Tester and API/Integration Developer. It was a pleasure working with him, given his high level of commitment and dedication to achieving the company's goals, as well as those specifically assigned to him. He demonstrates a strong team spirit, an excellent willingness to collaborate with colleagues, is highly proactive, and has a strong interest in learning new tools that allow him to grow both professionally and personally. Alisson is a responsible, dynamic professional and, without a doubt, an asset to any organization.",
    image: Person1,
    name: "Patricia Moutinho",
    title: "UI Designer and Software Testing - Logicalis Portugal",
  },
  {
    id: 2,
    text: "I had the opportunity to follow Alisson's work, even if indirectly, and also to share knowledge with him in some moments of learning and informal mentoring. During this time, I could see his dedication, discipline, and, above all, his constant pursuit of knowledge and professional development. Alisson shows a lot of determination to learn, seeking to understand concepts in depth and continuously improve. Another point worth highlighting is his organization and good work and study habits, which reflect his commitment and responsibility in everything he sets out to do. It is very rewarding to follow professionals who show genuine interest in learning and a willingness to take on new challenges. I recommend Alisson for his attitude, dedication, and eagerness to grow. I’m sure these qualities will contribute greatly to his professional development.",
    image: Person2,
    name: "Eduardo Donzelli Paino",
    title: "Platform Engineer - Streaming @PicPay Brasil",
  },
];
  
  const TestimonialItem = ({ text, image, name, title }) => (
    <div id="testimonials" className="p-4 md:w-1/2 w-full">
      <div className="h-full p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
        <p className="leading-relaxed mb-6 text-gray-300">{text}</p>
        <div className="inline-flex items-center">
          <img
            alt="Testimonial"
            src={image}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-blue-500">{name}</span>
            <span className="text-blue-500 text-sm">{title}</span>
          </span>
        </div>
      </div>
    </div>
  );
  
  export default function Testimonials() {
    return (
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl body-font font-black mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            {testimonialsData.map((testimonial) => (
              <TestimonialItem key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
    );
  }
