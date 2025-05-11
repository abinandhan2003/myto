
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "For Schools",
      description: "Help your school engage with students, parents and the community",
      features: [
        "Parent portal integration options",
        "Event calendar & announcements",
        "Faculty & staff directories",
        "Curriculum information pages",
        "Mobile-friendly responsive design",
        "Social media integration",
      ]
    },
    {
      title: "For Small Businesses",
      description: "Establish a professional online presence for your growing business",
      features: [
        "Custom domain integration",
        "Business hours & location maps",
        "Product or service showcase",
        "Customer review integration",
        "Contact forms & inquiry management",
        "SEO optimization tools",
      ]
    }
  ];

  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored for Your Needs</h2>
          <p className="text-gray-700 text-lg">
            Our platform is specifically designed to meet the unique requirements of schools and small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-page-background rounded-2xl p-8 shadow-sm opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-primary">{benefit.title}</h3>
              <p className="text-gray-700 mb-6">{benefit.description}</p>
              
              <div className="space-y-3">
                {benefit.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="#" className={`${index === 0 ? 'btn-primary' : 'btn-secondary'} inline-block`}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
