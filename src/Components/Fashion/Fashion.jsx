"use client";
import { motion } from "framer-motion";
import { useState,useEffect,useRef} from "react";
import axios from 'axios';
import './Fashion.css';

const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [freeClicks, setFreeClicks] = useState(0);
  const [showLimitMessage, setShowLimitMessage] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  // State to track if sections are in view
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);

  // Set up the Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the section comes into view, set state to true
          if (entry.target === ref1.current) {
            setIsInView1(true);
          } else if (entry.target === ref2.current) {
            setIsInView2(true);
          }
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the section is in the viewport
    });

    // Observe both sections
    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);

    // Cleanup observer
    return () => {
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
    };
  }, []);

  useEffect(() => {
    // When ref1 comes into view, add animation classes
    if (isInView1) {
      ref1.current?.classList.add('animate-fade-in', 'animate-fade-in-delay');
    }
    // When ref2 comes into view, add animation classes
    if (isInView2) {
      ref2.current?.classList.add('animate-fade-in', 'animate-fade-in-delay');
    }
  }, [isInView1, isInView2]);

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
      <section ref={ref1} className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
  {/* Background Accents */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-purple-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

  <div className="container mx-auto px-6 lg:px-16 relative z-10">
    {/* Heading */}
    <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-12 text-gray-900 animate-fade-in">
      How to Use <span className="text-purple-600">ApricityTS Fashion AI</span>
    </h2>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ duration: 0.4 }}
          className="group bg-white rounded-xl shadow-lg p-6 transform hover:shadow-2xl transition-all duration-300"
        >
          {/* Image and Step Badge */}
          <div className="relative">
            <img
              src={`https://imagedelivery.net/X26-mmRvk4CuiCyo9bU9tw/${item.img}/public`}
              alt={item.title}
              className="rounded-lg mx-auto w-full max-w-[240px] transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute top-2 left-2 bg-purple-600 text-white font-semibold text-xs uppercase py-1 px-3 rounded-tr-lg rounded-bl-lg shadow-md">
              {item.step}
            </span>
          </div>

          {/* Title and Description */}
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mt-6 group-hover:text-purple-600 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section ref={ref2} className="relative bg-gradient-to-br from-white to-gray-100 py-16 px-6 lg:px-24 overflow-hidden">
  {/* Background Gradient Accent */}
  <div className="absolute -top-16 -left-16 w-96 h-96 bg-purple-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-purple-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

  {/* Container */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
    {/* Section 1: From Casual to Corporate */}
    <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug mb-6 animate-fade-in">
        From Casual to <br /> Corporate in a Click
      </h1>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in-delay">
        Transform your image with <span className="font-semibold text-purple-600">Outfit Anyone AI</span>. Go from casual to professional effortlessly in seconds—ideal for standout headshots or corporate profiles.
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 animate-bounce">
        Try AI4FI Free
      </button>
    </div>
    <div className="relative group">
      <div className="relative">
        <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
          After
        </span>
        <img
          src="https://imagedelivery.net/X26-mmRvk4CuiCyo9bU9tw/ae411dab-e2c5-48b0-fd43-5713b28c8000/public"
          alt="After Transformation"
          className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 animate-fade-in"
        />
      </div>
    </div>

    {/* Section 2: Explore Styles */}
    <div className="relative group">
      <div className="relative">
        <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
          After
        </span>
        <img
          src="https://imagedelivery.net/X26-mmRvk4CuiCyo9bU9tw/2fcf3864-0636-4e07-cf0e-5fbed8464400/public"
          alt="Virtual Try-On"
          className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300 animate-fade-in-delay"
        />
      </div>
    </div>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug mb-6 animate-fade-in">
        Explore Styles with <br /> Virtual Try-On
      </h1>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in-delay">
        Dive into a seamless shopping experience with <span className="font-semibold text-purple-600">Outfit Anyone AI</span>. Try on various outfits virtually and find your perfect match without stepping outside!
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 animate-bounce">
        Try AI4FI Free
      </button>
    </div>
  </div>
</section>

   <section>
  <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8 lg:p-16">
    {/* Pricing Header */}
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-extrabold mb-6 text-center text-gray-900"
    >
      Choose the right plan for you
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-gray-600 text-center mb-8 max-w-3xl"
    >
      Our flexible plans are designed to meet all your fashion needs. Explore options that suit <br />
      your pace and budget. Each outfit change consumes one credit.
    </motion.p>

    {/* Toggle Button */}
    <div className="flex justify-center mb-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
          isMonthly ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => setIsMonthly(true)}
      >
        Monthly
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
          !isMonthly ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => setIsMonthly(false)}
      >
        Annually
      </motion.button>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className={`bg-white p-8 rounded-3xl shadow-lg border ${
            plan.name === "Premium" ? "border-purple-600" : "border-gray-300"
          } flex flex-col items-center`}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h3>
          <p className="text-lg text-gray-500">{plan.credits}</p>
          <p className="mt-4 text-3xl font-bold text-gray-900">
            {isMonthly ? plan.priceMonthly : plan.priceAnnually}
            <span className="text-sm text-gray-600">/month</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 px-6 py-3 rounded-lg font-medium transition-transform ${
              plan.name === "Premium"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
            disabled={plan.buttonDisabled}
          >
            {plan.buttonText}
          </motion.button>
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="bg-gray-50 py-16 px-8">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-sm text-purple-700 font-bold uppercase"
    >
      FAQ
    </motion.h2>
    <motion.h1
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2"
    >
      Frequently Asked Questions
    </motion.h1>
    <div className="mt-8 space-y-6">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="border-b border-gray-300 pb-4"
        >
          <button
            className="w-full flex justify-between items-center text-left text-lg text-gray-700 font-medium hover:text-gray-900"
            onClick={() => handleToggle(index)}
          >
            {faq.question}
            <motion.span
              animate={{ rotate: activeIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 text-lg"
            >
              {activeIndex === index ? "−" : "+"}
            </motion.span>
          </button>
          {activeIndex === index && (
            <motion.p
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.4 }}
              className="mt-3 text-gray-600 text-sm"
            >
              {faq.answer}
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

    
    </>
  );
};

export default HeroSection;
