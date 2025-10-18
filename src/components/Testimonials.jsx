import Person1 from "../assets/images/patricia-moutinho.webp"

const testimonialsData = [
  {
    id: 1,
    text: "Alisson was my colleague at DXNet – A Logicalis Company, having started as an intern and later joined the team as a QA Tester and API/Integration Developer. It was a pleasure working with him, given his high level of commitment and dedication to achieving the company's goals, as well as those specifically assigned to him. He demonstrates a strong team spirit, an excellent willingness to collaborate with colleagues, is highly proactive, and has a strong interest in learning new tools that allow him to grow both professionally and personally. Alisson is a responsible, dynamic professional and, without a doubt, an asset to any organization.",
    image: Person1,
    name: "Patricia Moutinho",
    title: "UI Designer and Software Testing - Logicalis Portugal",
  },
];
  
  const TestimonialItem = ({ text, image, name, title }) => (
    <div id="testimonials" className="p-4 md:w-1/2 w-full">
      <div className="h-full bg-white p-8 rounded-4xl">
        <p className="leading-relaxed mb-6">{text}</p>
        <div className="inline-flex items-center">
          <img
            alt="Testimonial"
            src={image}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{name}</span>
            <span className="text-gray-700 text-sm">{title}</span>
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
