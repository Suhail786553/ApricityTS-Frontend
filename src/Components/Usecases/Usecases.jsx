import React from 'react';

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
    </>
  );
};

export default AiSolutionsSection;
