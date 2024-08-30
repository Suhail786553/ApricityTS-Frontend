import React from 'react';

const Product = () => {
  return (
    <>
    <div>
      <div className="bg-black text-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">Our Products</h3>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Accelerate business processes with our AI-driven solutions tailored for the UAE and Gulf regions.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs h-90 md:max-w-sm"style={{height:"52vh"}}>
          <img
            className="w-full h-48 object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/out1-YZ9bEoQQWZSE2gvJ.jpg"
            alt="Product 1"
          />
          <div className="p-6">
            <strong className="text-xl mb-2 block">Ayn OCR Engine</strong>
            <p>
            Ayn OCR is our Arabic OCR engine designed for precise data extraction from images and scanned PDFs with excep
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm"style={{height:"52vh"}}>
          <img
            className="w-full h-48 object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/1_gax3-sipo09bpdcz2fi_kw-mjE94oG5Z6T9Dk45.webp"
            alt="Product 2"
          />
          <div className="p-6">
            <strong className="text-xl mb-2 block">Invoice Extractor</strong>
            <p>
            Invoice Extractor leverages OCR and machine vision to accurately extract invoice data from scanned PDFs, powered by our Ayn OCR Engine
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-3xl overflow-hidden shadow-lg max-w-xs md:max-w-sm"style={{height:"52vh"}}>
          <img
            className="w-full h-48 object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/YZ9bEQRPa4i5BwKB/pvbwn-AGB4zEzjr1FVVr0a.jpg"
            alt="Product 3"
          />
          <div className="p-6">
            <strong className="text-xl mb-2 block">ID Card Detail Extractor</strong>
            <p>
            ID Card Extractor uses advanced technology to accurately extract information from ID card images. Powered By our Ayn OCR engine
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Product;
