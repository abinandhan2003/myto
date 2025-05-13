
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Senthilkumar R K",
      role: "Principal, BVS School , bvhss.com",
      avatar: "https://i.postimg.cc/yYLyKhf2/image.webp",
      content: "Our school's new website has transformed how we communicate with parents and the community. The templates were perfect for our needs and the setup process was incredibly smooth.",
      rating: 5
    },
    {
      id: 2,
      name: "Krishnakumar R",
      role: "CEO, Nexcap",
      avatar: "https://i.postimg.cc/yx9ThW0B/IMG-20240821-145619521.jpg",
      content: "As a small business owner, I never had time to build a proper website. This platform made it simple and affordable. Our online orders have increased by 30% since launch.",
      rating: 5
    },
    {
      id: 3,
      name: "Santhosh S",
      role: "Fullstack Developer, Celcom",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=faces",
      content: "The customization options allowed us to perfectly match our school's branding. Parents love the new site and enrollment inquiries have doubled this semester.",
      rating: 5
    },
     {
      id: 4,
      name: "Jana Priya S P",
      role: "Fullstack Developer, Nexcap",
      avatar: "https://i.postimg.cc/vBM12zg4/IMG-20240920-151754103.jpg",
      content: "The platform's user-friendly interface made it easy for our team to manage content. The support team was always available to help with any questions we had.",
      rating: 5
    },
    {
      id: 5,
      name: "Kumaresan R",
      role: "PLM Enineer, Mayilon",
      avatar: "https://i.postimg.cc/pd5bNJHB/Whats-App-Image-2025-04-23-at-4-50-17-PM.jpg",
      content: "The website templates were a game-changer for us. We were able to launch our site in just a few days, and the feedback from our customers has been overwhelmingly positive.",
      rating: 4
    },
   
  ];

  return (
    <section id="testimonials" className="bg-page-background">
      <div className="">
        <div className="text-center bg-white w-full mx-auto py-10 px-2 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-700 text-lg">
            Don't just take our word for it. Hear from schools and businesses who have transformed their online presence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 py-10 container mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-full md:w-[48%] lg:w-[30%] bg-white rounded-xl p-6 shadow-sm opacity-0 animate-fade-up card-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
