"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from 'axios';

const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [freeClicks, setFreeClicks] = useState(0);
  const [showLimitMessage, setShowLimitMessage] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Can I get more credits?", answer: "Yes, you can purchase additional credits anytime." },
    { question: "Can I change my plan later?", answer: "Absolutely! You can upgrade or downgrade your plan anytime." },
    { question: "What if I decide to cancel?", answer: "You can cancel your subscription without any extra charges." },
    { question: "What about the returns and refunds?", answer: "Refund policies are available on specific conditions." },
    { question: "Will my unused credits roll over to the next month?", answer: "No, unused credits do not roll over." },
    { question: "How do you use my photos?", answer: "Your photos are used to personalize your experience." },
    { question: "Is the payment service secure?", answer: "Yes, we use secure and encrypted payment services." },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const plans = [
    {
      name: "Free",
      credits: "3 Credits",
      priceMonthly: "$0",
      priceAnnually: "$0",
      features: [
        "Basic virtual try-on with limited quality",
        "Slower generation speed",
        "Virtual try-on for upper body",
        "Virtual try-on for lower body",
        "Virtual try-on for dresses",
      ],
      buttonText: "Get Started",
      buttonDisabled: false,
    },
    {
      name: "Starter",
      credits: "100 Credits",
      priceMonthly: "$12.99",
      priceAnnually: "$9.99",
      features: [
        "100 credits per month",
        "High-quality, realistic virtual try-on",
        "Fast generation speed",
        "Virtual try-on for upper body",
        "Virtual try-on for lower body",
        "Full-body virtual try-on",
      ],
      buttonText: "Buy Plan",
    },
    {
      name: "Premium",
      credits: "500 Credits",
      priceMonthly: "$49.99",
      priceAnnually: "$39.99",
      features: [
        "500 credits per month",
        "High-quality, realistic virtual try-on",
        "Fast generation speed",
        "Virtual try-on for upper body",
        "Virtual try-on for lower body",
        "Full-body virtual try-on",
        "Priority customer support",
      ],
      buttonText: "Buy Plan",
    },
  ];


  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    
  };
  const handleButtonClick = async () => {
    if (freeClicks < 2) {
      try {
        const response = await axios.get("https://gradio.s3-us-west-2.amazonaws.com/4.24.0/gradio.js");
        console.log("File content:", response.data); // Log the content of the file
        setFreeClicks(freeClicks + 1); // Increment the free usage counter
      } catch (error) {
        console.error("Error fetching the file:", error);
      }
    } else {
      // Show message prompting the user to signup or purchase a plan
      setShowLimitMessage(true);
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section
        onMouseMove={handleMouseMove}
        className=" relative overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 lg:p-20 bg-gradient-to-br from-white to-gray-100"
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, #5A00FF 0%, transparent 40%)`,
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />

        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Revolutionize Fashion <br /> Shopping with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Transform how customers shop online with our AI-powered virtual
            outfit changer. Allow shoppers to visualize garments on realistic
            models instantly—boosting engagement, reducing returns, and driving
            sales.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#5A00FF] hover:bg-[#4a00e6] transition-transform duration-300 text-white font-semibold py-3 px-6 rounded-md shadow-lg"
            onClick={handleButtonClick}
          >
             Try  AI4FI Free
          </motion.button>
          {showLimitMessage && (
            <p className="text-gray-500 text-sm">
              Youve reached your free limit. Please sign up or purchase a plan to continue.
            </p>
          )}
          <p className="text-gray-500 text-sm">No credit card required.</p>

          {/* User Ratings */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
            <div className="flex -space-x-2">
              {["45", "47", "48", "49"].map((id, index) => (
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  key={index}
                  src={`https://randomuser.me/api/portraits/${
                    index % 2 === 0 ? "men" : "women"
                  }/${id}.jpg`}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 font-medium">
                Loved by <span className="font-bold">153,000+</span> users
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative z-10"
        >
          <img
            src="https://outfitanyoneai.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FX26-mmRvk4CuiCyo9bU9tw%2F448601ad-3e3c-4080-ee11-ef8b720eac00%2Fpublic&w=640&q=75"
            alt="AI Outfit"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section className="bg-[#F9FAFF] py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
            How to Use ApricityTS Fashion AI
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {[
              {
                step: "Step 1",
                title: "Upload Your Model",
                desc: "Start by uploading a model photo of yourself.",
                img: "f368124b-401c-4047-3f48-965d5f1b0300",
              },
              {
                step: "Step 2",
                title: "Choose or Customize Outfits",
                desc: "Select from pre-loaded outfits or customize by uploading your own designs.",
                img: "e50431f0-8bb9-4bc0-a79d-092082226d00",
              },
              {
                step: "Step 3",
                title: "Generate Look",
                desc: "Press Generate and watch your new look come to life.",
                img: "24baab0e-c60a-40b9-eb07-bcf7af6d4e00",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4 lg:w-1/3"
              >
                <img
                  src={`https://imagedelivery.net/X26-mmRvk4CuiCyo9bU9tw/${item.img}/public`}
                  alt={item.title}
                  className="rounded-lg shadow-md mx-auto w-full max-w-[250px]"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  <span className="text-[#A855F7] font-bold">
                    {item.step}:
                  </span>{" "}
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
      {/* Left Section */}
      <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          From Casual to <br /> Corporate in a Click.
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Elevate your image with Outfit Anyone AI. Transform your appearance
          from everyday casual to polished professional in seconds—perfect for
          creating standout headshots or business profiles.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
        Try  AI4FI Free
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center relative">
        {/* After Image */}
        <div className="relative">
          <span className="absolute top-2 left-2 bg-gray-700 text-white text-sm px-2 py-1 rounded">
            After
          </span>
          <img
            src="https://imagedelivery.net/X26-mmRvk4CuiCyo9bU9tw/ae411dab-e2c5-48b0-fd43-5713b28c8000/public"
            alt="After"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-white">
      {/* Left Section */}
      <div className="flex items-center justify-center relative">
        {/* After Image */}
        <div className="relative">
          <span className="absolute top-2 left-2 bg-gray-700 text-white text-sm px-2 py-1 rounded">
            After
          </span>
          <img
            src="https://imagedelivery.net/X26-mmRvk4CuiCyo9bU9tw/2fcf3864-0636-4e07-cf0e-5fbed8464400/public"
            alt="After"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
     

      {/* Right Section */}
      <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Explore Styles with <br></br>Virtual Try-On.
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
        Dive into a seamless shopping experience with Outfit Anyone AI. Try on various outfits virtually and discover your perfect match without stepping out of your home. It’s shopping made simple and fun!
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Try  AI4FI Free
        </button>
      </div>
    </section>
    <section>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      {/* Pricing Header */}
      <h2 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h2>
      <p className="text-gray-600 text-center mb-8">
        Choose the plan that fits your needs.
      </p>

      {/* Toggle Button */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            isMonthly ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            !isMonthly ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Annually
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-3xl shadow-xl border ${
              plan.name === "Premium" ? "border-black" : "border-gray-300"
            } flex flex-col items-center`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-lg text-gray-500">{plan.credits}</p>
            <p className="mt-4 text-3xl font-bold">
              {isMonthly ? plan.priceMonthly : plan.priceAnnually}
              <span className="text-sm">/month</span>
            </p>
            <button
              className={`mt-6 px-4 py-2 rounded-lg font-medium ${
                plan.name === "Premium"
                  ? "bg-black text-white"
                  : "bg-purple-600 text-white"
              }`}
              disabled={plan.buttonDisabled}
            >
              {plan.buttonText}
            </button>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-purple-700 font-bold uppercase">FAQ</h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Frequently Asked Questions
        </h1>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg text-gray-700 font-medium hover:text-gray-900"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span className="text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
  );
};

export default HeroSection;
