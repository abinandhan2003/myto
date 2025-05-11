
import { Check, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small schools or businesses just getting started.",
      features: [
        "1 website",
        "5 pages",
        "Basic templates",
        "Custom domain",
        "Mobile responsive",
        "Basic SEO tools",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$59",
      description: "Our most popular plan for growing schools and businesses.",
      features: [
        "3 websites",
        "Unlimited pages",
        "Premium templates",
        "Custom domain",
        "Mobile responsive",
        "Advanced SEO tools",
        "Lead capture forms",
        "Analytics dashboard",
        "Priority support"
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Advanced features for larger schools and established businesses.",
      features: [
        "10 websites",
        "Unlimited pages",
        "All templates",
        "Custom domain",
        "Mobile responsive",
        "Advanced SEO tools",
        "Lead capture forms",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-700 text-lg">
            Choose the plan that's right for your needs. All plans include our drag-and-drop editor and hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden opacity-0 animate-fade-up ${
                plan.popular 
                  ? 'border-2 border-primary shadow-lg shadow-primary/20 relative' 
                  : 'border border-gray-200 shadow-sm'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-light text-white' 
                      : 'bg-secondary hover:bg-secondary-light text-primary'
                  } transition-colors`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-up animate-delay-500">
          <div className="inline-flex items-center bg-secondary/50 rounded-full px-4 py-2">
            <HelpCircle size={16} className="text-primary mr-2" />
            <span className="text-gray-700">Need a custom plan? <a href="#contact" className="text-primary font-medium underline">Contact us</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
