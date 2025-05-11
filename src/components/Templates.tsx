
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Templates' },
    { id: 'schools', label: 'Schools' },
    { id: 'businesses', label: 'Small Businesses' },
    { id: 'new', label: 'New Arrivals' },
  ];

  const templates = [
    {
      id: 1,
      title: 'Elementary School',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      category: 'schools',
    },
    {
      id: 2,
      title: 'High School',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      category: 'schools',
    },
    {
      id: 3,
      title: 'Local Restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      category: 'businesses',
    },
    {
      id: 4,
      title: 'Private Academy',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      category: 'schools',
    },
    {
      id: 5,
      title: 'Retail Store',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      category: 'businesses',
    },
    {
      id: 6,
      title: 'Kindergarten',
      image: 'https://images.unsplash.com/photo-1526634332515-d56c5fd16991',
      category: 'schools',
      new: true,
    }
  ];
  
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : activeCategory === 'new'
      ? templates.filter(template => template.new)
      : templates.filter(template => template.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const container = scrollContainerRef.current;
      
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="templates" className="section bg-page-background">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Our Templates</h2>
          <p className="text-gray-700 text-lg">
            Professional designs tailored specifically for schools and small businesses.
            Every template is fully customizable to match your unique brand.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 opacity-0 animate-fade-up animate-delay-200">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative opacity-0 animate-fade-up animate-delay-300">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md md:-left-5"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div ref={scrollContainerRef} className="flex overflow-x-auto hide-scrollbar gap-6 py-4 px-2 scroll-smooth snap-x">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="flex-shrink-0 w-72 snap-start card-hover"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`${template.image}?w=600&h=400&fit=crop`}
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{template.title}</h3>
                      {template.new && (
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">New</span>
                      )}
                    </div>
                    <div className="mt-4">
                      <a href="#" className="text-primary font-medium flex items-center">
                        Preview <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md md:-right-5"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-12 opacity-0 animate-fade-up animate-delay-400">
          <a href="#" className="btn-primary">
            View All Templates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Templates;
