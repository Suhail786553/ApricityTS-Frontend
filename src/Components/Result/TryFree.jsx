import { useRef } from "react";

const OCRComponent = () => {
  const fileInputRef = useRef(null);

  // Function to trigger the file input click
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // You can handle the file upload logic here
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div className="bg-[#904AF2] min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl font-bold text-center">
        Turn scanned images into Text using YourService.ai
      </h1>
      <p className="mt-2 text-center text-lg">
        Whether structured or unstructured, YourService transforms your typed, written, or printed documents <br />into machine-readable text at the click of a button.
      </p>
      
      {/* Section 1 */}
      <div className="mt-10 max-w-5xl w-full">
        <div className="bg-white text-[#904AF2] rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">01 Select a conversion model</h2>
          <p className="text-sm mb-4">
            For added customization, choose ‘Generic’ model according to how you want your data displayed.
          </p>
          <div className="flex items-center space-x-3">
            <input type="radio" name="model" className="text-[#904AF2]" defaultChecked />
            <label className="text-sm">Generic - Extracts all text in an image or PDF file</label>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className="mt-8 bg-white text-[#904AF2] rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">02 Add file for data extraction</h2>
          <p className="text-sm mb-4">
            Drag and drop your PDF, JPEG, or PNG containing no more than five pages and a maximum file size of 30MB.
          </p>
          <div
            className="border-dotted border-2 border-[#176BE0] rounded-lg py-12 flex justify-center items-center cursor-pointer hover:bg-[#176BE0] hover:text-white transition"
            onClick={handleFileClick}
          >
            <p className="text-center text-sm">
              Drag & Drop Files Here
              <br />
              <span className="underline">Click to Browse</span>
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept=".pdf, .jpeg, .png"
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 flex justify-between items-center">
          <a
            href="/terms"
            className="text-sm underline"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="inline-block font-bold hover:bg-blue-800 hover:border-white border-2 border-transparent text-white py-3 px-6 rounded-full transition duration-300"
            style={{ backgroundColor: "#176BE0", height: "7vh" }}
          >
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default OCRComponent;
