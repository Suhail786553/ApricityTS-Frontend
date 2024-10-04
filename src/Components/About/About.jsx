const Section = () => {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Upper Content */}
          <h3
            className="font-noto text-[36px] md:text-[46px] text-[#1D1E20] mb-12 font-semibold"
            style={{ fontFamily: "Noto Sans, sans-serif", marginTop: "-40px" }}
          >
            Accelerating <br /> Business Processes <br /> with Smart AI
          </h3>

          {/* Lower Content */}
          <div
            className="flex flex-col-reverse md:flex-row items-stretch space-y-8 md:space-y-0 md:space-x-8"
            style={{ marginTop: "-45px" }}
          >
            {/* Left Div (Image) */}
            <div className="w-full md:w-1/2 lg:w-5/12 flex-grow"> {/* Flex-grow ensures equal height */}
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&h=738"
                alt="AI Solutions"
                className="w-full h-full object-cover rounded-lg" /* Set h-full for full container height */
              />
            </div>

            {/* Right Div (Text Content) */}
            <div className="w-full md:w-1/2 lg:w-7/12 flex-grow flex items-center"> {/* Flex-grow & center content */}
              <p className="text-lg leading-relaxed text-gray-700">
                At Apricity TS, we are at the forefront of advancing business
                processes through innovative artificial intelligence solutions.
                With over a decade of expertise, we deliver state-of-the-art
                AI-driven technologies that seamlessly integrate with your
                services to drive efficiency and intelligence.
                <br />
                <br />
                Our diverse product portfolio includes cutting-edge solutions
                designed to address a wide range of business needs. From our
                advanced OCR engines to intelligent document processing tools,
                our offerings are crafted to enhance and automate critical
                business functions.
                <br />
                <br />
                We specialize in providing solutions that cater to various
                industries and are committed to helping businesses in the UAE,
                Dubai, and beyond achieve new levels of productivity and
                insight. Our technology is designed to evolve with the industry,
                ensuring that as we expand our product line, you benefit from
                the latest advancements in AI.
                <br />
                <br />
                Discover how Apricity TS can transform your operations with our
                innovative solutions and become a catalyst for your business
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;

