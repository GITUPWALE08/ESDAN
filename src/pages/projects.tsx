import images from '../assets/images/gen_image';

export default function Projects() {
  const projects = [
    {
      title: "Agricultural Revolution",
      content: "Modernizing the sector by promoting productivity and sustainability across the value chain. We aim to modernize the sector from farm to factory to market.",
      details: [
        "Livestock Development (Breeding, Meat/Milk production)",
        "Crop Production for commercial & raw material supply",
        "Agro-industrial Integration & Processing Plants",
        "Food Hubs and Distribution Centers"
      ],
      image: images.farmer
    },
    {
      title: "Industrial Development",
      content: "Fueling Nigeria’s industrial renaissance through local manufacturing, industrial clustering, and value chain integration. We believe industrialization is the engine of economic transformation.",
      details: [
        "Establishment of agro-industrial parks",
        "Development of auto assembly and component manufacturing plants",
        "Promotion of SMEs in food, textile, and machinery sectors",
        "Encouragement of sustainable energy use in industrial operations"
      ],
      image: images.tech5
    },
    {
      title: "Educational Reform",
      content: "Reshaping Nigeria’s educational landscape by integrating technology, innovation, and entrepreneurship training into the learning process.",
      details: [
        "Equipping students with digital economy skills",
        "Vocational and technical training to reduce unemployment",
        "Building innovation hubs and research centers",
        "Partnering with institutions for global knowledge transfer"
      ],
      image: images.Edu_img
    },
    {
      title: "Security and Peace Initiatives",
      content: "Integrating peacebuilding and community security programs into our development agenda, emphasizing collaboration with traditional institutions.",
      details: [
        "Conflict prevention and dialogue facilitation",
        "Youth rehabilitation and engagement",
        "Socioeconomic inclusion as a tool for security",
        "Promoting peace education across communities"
      ],
      image: images.tech4
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12 pb-20"> {/* pb-20 for Chatbot space */}
      <header className="border-b-2 border-brand-green/20 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-green">Our Projects</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">Strategic development focus areas.</p>
      </header>

      <div className="grid gap-8">
        {projects.map((proj, idx) => (
          <section key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Container: Full width on mobile, half width on desktop */}
              <div className="w-full md:w-2/5 h-56 md:h-auto relative">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Text Container */}
              <div className="p-6 md:p-8 flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{proj.title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{proj.content}</p>
                <ul className="space-y-3 mt-4">
                  {proj.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-700 text-sm">
                      <span className="w-2 h-2 mt-1.5 bg-brand-gold rounded-full mr-3 shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}