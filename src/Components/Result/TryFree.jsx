import { useState, useRef } from 'react';
import axios from 'axios';

const OCRComponent = () => {
  const [amount, setAmount] = useState(0); // State for user-defined amount
  const fileInputRef = useRef(null);

  // Function to trigger the file input click
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment initiation
  const handlePayment = async () => {
    if (amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert('Failed to load Razorpay SDK');
      return;
    }

    // Request order creation from the server
    const orderResult = await axios.post('http://localhost:5000/api/create-order', { amount, currency: 'INR' });

    const options = {
      key: 'rzp_live_1ImGsiMoqvxOF3', // Replace with your Razorpay Key ID
      amount: orderResult.data.amount,
      currency: orderResult.data.currency,
      name: 'ApricityTS',
      description: 'OCR Service Payment',
      order_id: orderResult.data.id,
      handler: async (response) => {
        await axios.post('/api/verify-payment', response);
        alert('Payment Successful!');
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-gradient-to-br from-[#5A9BF3] via-[#B899F5] to-[#B899F5] min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl font-bold text-center">
        Turn scanned images into Text using ApricityTS
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
            className="border-dotted border-2 border-[#176BE0] rounded-lg py-12 flex justify-center items-center cursor-pointer hover:bg-[#5A98F2] hover:text-white transition"
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

        {/* Payment Section */}
        <div className="mt-8 flex flex-col items-center">
          <label className="text-white text-lg mb-2">Enter Amount (INR):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 rounded bg-white text-[#904AF2] w-full max-w-xs text-center"
            placeholder="Amount in INR"
          />
        </div>

        {/* Footer with Try Free and Pay Now buttons */}
        <div className="mt-8 flex justify-between items-center">
          <a href="/terms" className="text-sm underline">Terms & Conditions</a>
          <div className="flex space-x-4">
            <a href="#" className="inline-block font-bold hover:bg-blue-800 hover:border-white border-2 border-transparent text-white py-3 px-6 rounded-full transition duration-300" style={{ backgroundColor: "#5A98F2", height: "7vh" }}>
              Try Free
            </a>
            <button onClick={handlePayment} className="inline-block font-bold hover:bg-blue-800 hover:border-white border-2 border-transparent text-white py-3 px-6 rounded-full transition duration-300" style={{ backgroundColor: "#5A98F2", height: "7vh" }}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCRComponent;
