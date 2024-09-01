import React from 'react';
import {FaInstagram,FaLinkedin} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const AiSolutionsSection = () => {
  return (
    <>
      <section className="flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full mb-8">
          <span className="block text-[48px] font-[Noto-sans] font-sans-serif text-[#1D1E20] font-bold">
            AI Solutions
          </span>
          <p className="mt-4 text-lg text-[#1D1E20]">
            Explore real-world applications and success stories of our AI <br /> products.
          </p>
        </div>
        <div className="w-full flex justify-center mb-12"> {/* Added margin-bottom for spacing */}
          <img
            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=984&h=347"
            alt="AI Solutions"
            className="w-[900px] h-[320px] object-cover max-w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 mb-12">
        <div className="w-full max-w-4xl text-center">
          <p className="text-lg text-[#1D1E20]">
            Here are ten combined use cases for <strong>Ayn OCR</strong>, <strong>Invoice Extractor</strong>, and <strong>ID Card Extractor</strong> to enhance various business operations:
          </p>
          <ul className="mt-6 space-y-4 text-base text-[#1D1E20] text-left">
            <li>
              <strong>1. Automated Document Processing:</strong> Streamline the digitization of Arabic-language documents, including invoices and ID cards, to improve  record-keeping and data accessibility.
            </li>
            <li>
              <strong>2. Efficient Accounts Payable:</strong> Use Invoice Extractor to automatically extract data from invoices, reducing manual entry and speeding up accounts payable processes.
            </li>
            <li>
              <strong>3. Enhanced Customer Onboarding:</strong> Accelerate the onboarding process by using ID Card Extractor to quickly and accurately extract  information from ID cards and other personal documents.
            </li>
            <li>
              <strong>4. Improved Financial Reporting:</strong> Extract and digitize data from invoices and other financial documents to ensure timely and accurate  financial reporting.
            </li>
            <li>
              <strong>5. Content Digitization:</strong> Digitize and index Arabic-language books, articles, and historical documents using Ayn OCR, making them searchable and accessible.
            </li>
            <li>
              <strong>6. Compliance and Auditing:</strong> Use OCR to extract data from contracts, invoices, and ID cards to ensure compliance with regulations and facilitate auditing processes.
            </li>
            <li>
              <strong>7. Efficient Expense Management:</strong> Automate the extraction of invoice details for better expense tracking and management, improving  financial oversight.
            </li>
            <li>
              <strong>8. Integrated ERP Systems:</strong> Seamlessly integrate extracted data from invoices and ID cards with ERP systems to enhance business workflows  and data accuracy.
            </li>
            <li>
              <strong>9. Customer Verification:</strong> Utilize ID Card Extractor for verifying customer identities quickly and accurately in sectors such as finance and  telecom.
            </li>
            <li>
              <strong>10. Contract and Legal Document Analysis:</strong> Extract and analyze data from Arabic-language contracts and legal documents to streamline  compliance checks and legal reviews.
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[rgb(13,27,43)] text-white py-12 px-8 md:flex md:justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-[48px] md:text-[64px] font-[sans-serif noto-sans] font-semibold">
          Predict the future by creating it
        </h1>
        <p className="text-[16px] md:text-[18px] mt-4">
          You didn’t come this far to stop
        </p>
        <div className="flex items-center space-x-4 mt-4 justify-center md:justify-start">
          <button className="bg-[#176BE0] text-white py-2 px-4 md:w-1/4 h-12 md: w-1/3 h-12 rounded-full">
            Create it
          </button>
          <a
            href="https://www.instagram.com/"
            className="text-white-800 hover:text-white-500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", marginTop: "4px" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            className="text-white-800 hover:text-white-500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", marginTop: "4px" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:someone@example.com"
            className="text-white-800 hover:text-white-500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px", marginTop: "4px" }}
          >
            <MdOutlineEmail />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 flex flex-row space-x-4 mt-8 md:flex-row items-center md:space-x-4 mt-8 md:mt-0">
        {/* First Image */}
        <img
          src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=720&h=1367"
          alt="First"
          className="w-full md:w-1/2 h-[300px] md:h-[420px] rounded-lg"
        />
        {/* Second and Third Images */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4">
          <img
            src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=720&h=656"
            alt="Second"
            className="w-full h-[140px] md:h-[200px] rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=720&h=656"
            alt="Third"
            className="w-full h-[140px] md:h-[200px] rounded-lg"
          />
        </div>
      </div>
    </section>
    <div className="bg-white py-16 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
          {/* Left Div (Image) */}
          <div className="w-full md:w-2/3 md:h-full ms:h-full">
            <img
              src="https://images.unsplash.com/photo-1710993011875-38d2f3ecf0be?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyOHx8YWklMjBzb2x1dGlvbnN8ZW58MHx8fHwxNzIzNDY0MDYyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=861&h=653" // Replace with your image URL
              alt="Testimonial"
              className="w-full h-full object-cover"
              style={{ height: "70vh" }}
            />
          </div>

          {/* Right Div (Content) */}
          <div
            className="w-full md:w-2/3 bg-[#904af2] text-white p-12 flex flex-col items-center justify-center"
            style={{ height: "70vh" }}
          >
            <div className="text-center">
              {/* 5 Stars */}
              <div className="mb-4 text-2xl">{"★ ★ ★ ★ ★"}</div>

              {/* Testimonial Text */}
              <p className="text-[18px] mb-8">
                Our Arabic OCR engine has revolutionized our workflow
                efficiency. Highly recommend it!
              </p>

              {/* Circular Image */}
              <div className="mt-8 flex justify-center">
                <img
                  className="w-28 h-28 rounded-full border-4 border-white"
                  src="https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxhaSUyMHNvbHV0aW9uc3xlbnwwfHx8fDE3MjM0NjQwNjJ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48"
                  alt="Happy Customer"
                />
              </div>

              {/* Happy Customer Text */}
              <p className="mt-4 font-noto text-[22px] text-black">
                Anas Al Mashari
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSolutionsSection;
