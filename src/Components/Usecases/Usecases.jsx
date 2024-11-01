import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AiSolutionsSection = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const useCases = [
    {
      title: "1. Automated Processing",
      description:
        "Streamline digitization of Arabic-language documents, including invoices and ID cards, improving record-keeping.",
    },
    {
      title: "2. Efficient Accounts Payable",
      description:
        "Use Invoice Extractor to automate data extraction from invoices, reducing manual entry.",
    },
    {
      title: "3. Enhanced Customer Onboarding",
      description:
        "Accelerate onboarding by using ID Card Extractor to extract information from personal documents quickly.",
    },
    {
      title: "4. Improved Financial Reporting",
      description:
        "Digitize financial documents to ensure accurate financial reporting with Invoice Extractor.",
    },
    {
      title: "5. Content Digitization",
      description:
        "Digitize and index Arabic-language books and documents using Ayn OCR, making them accessible.",
    },
    {
      title: "6. Compliance and Auditing",
      description:
        "Extract data from invoices and ID cards to ensure compliance and facilitate auditing processes.",
    },
    {
      title: "7. Efficient Expense Management",
      description:
        "Automate invoice data extraction to track expenses, improving financial oversight.",
    },
    {
      title: "8. Integrated ERP Systems",
      description:
        "Seamlessly integrate extracted data from invoices and ID cards with ERP systems for better workflows.",
    },
    {
      title: "9. Customer Verification",
      description:
        "Use ID Card Extractor for quick identity verification in sectors such as finance and telecom.",
    },
    {
      title: "10. Contract and Legal Document Analysis",
      description:
        "Extract and analyze data from Arabic-language contracts to streamline compliance checks.",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full mb-8">
          <span className="block text-[48px] font-[Noto-sans] font-sans-serif text-[#1D1E20] font-bold">
            AI Solutions
          </span>
          <p className="mt-4 text-lg text-[#1D1E20]">
            Explore real-world applications and success stories of our AI
            products.
          </p>
        </div>
        <div className="w-full flex justify-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=984&h=347"
            alt="AI Solutions"
            className="w-[900px] h-[320px] object-cover max-w-full rounded-2xl"
          />
        </div>
      </section>

      {/* Slider Section */}
      <section className="mb-12">
        <div className="w-full max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {useCases.map((useCase, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#0d1b2b] hover:bg-[#176BE0] hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg rounded-lg p-6 h-full flex flex-col justify-between text-center border border-gray-300 cursor-pointer">
                  <h3 className="text-lg font-bold text-white mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-white">{useCase.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

    </>
  );
};

export default AiSolutionsSection;
