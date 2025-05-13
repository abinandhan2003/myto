import Hero from '../img/Hero.png';

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse h-[80vh] lg:flex-row items-center justify-between mt-20 sm:mt-36 md:mt-20 px-6 py-12 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 md:text-center sm:mt-10 lg:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1c0b5c]">
          Everything you need to <br /> create a website
        </h1>
       
        <ul className="space-y-2 text-[#1c0b5c]">
          <li className="flex items-center gap-2">
            ✅ Free domain for 1 st year 
          </li>
          <li className="flex items-center gap-2">
            ✅ Free web Hosting 
          </li>
          <li className="flex items-center gap-2">✅ 24/7 customer support</li>
        </ul>
        <div>
          <p className="text-2xl font-bold text-[#1c0b5c]">
            Claim 10 % off for UPI payments
          </p>
        </div>
        <div className="flex  sm:flex-row gap-4 items-center">
          <button className="bg-[#5025d1] text-white font-bold px-6 py-3 rounded">
            Claim deal
          </button>
          <div className="bg-[#e2dbfc] px-6 py-3 rounded font-mono">
            Contact now
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-sm text-gray-600">
  
        </div>
      </div>

      {/* Right Content - Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={Hero}
          alt="Hero Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
