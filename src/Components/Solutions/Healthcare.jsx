import { Component } from 'react';

class ExistingComponent extends Component {
    constructor(props) {
        super(props);
        // Add state for tracking which FAQ is active
        this.state = {
            activeIndex: null, // Track the open/active FAQ
        };
    }

    // Method to toggle which FAQ is open
    toggleFAQ = (index) => {
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === index ? null : index,
        }));
    };
    componentDidMount() {
        // Trigger the animation on component mount
        setTimeout(() => {
            this.setState({ animate: true });
          }, 100); // 100ms delay
      }

    render() {
        // Documents data
        const documents = [
            {
                name: 'Medical Records',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m15,12.5V4.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h8c.276,0,.5.224.5.5s-.224.5-.5.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h7c2.481,0,4.5,2.019,4.5,4.5v8c0,.276-.224.5-.5.5s-.5-.224-.5-.5Zm-8.5,1.5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm5,0h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-5,4h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm5,0h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-3.5-8c.276,0,.5-.224.5-.5v-2h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-2v-2c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2v2c0,.276.224.5.5.5Zm9,5.5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5Zm1,0c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5,1.5Zm5.984,7.875c-.504-1.956-2.39-3.375-4.484-3.375s-3.98,1.419-4.484,3.375c-.068.267.092.54.359.609.269.069.54-.093.609-.36.385-1.496,1.896-2.625,3.516-2.625s3.131,1.128,3.516,2.625c.059.226.262.375.484.375.041,0,.083-.005.125-.016.268-.069.428-.342.359-.609Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Insurance Claims',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                      <path d="m8,0C4.691,0,2,2.691,2,6s2.691,6,6,6,6-2.691,6-6S11.309,0,8,0Zm0,11c-2.757,0-5-2.243-5-5S5.243,1,8,1s5,2.243,5,5-2.243,5-5,5Zm-3,3h6v1h-6c-2.206,0-4,1.794-4,4v5H0v-5c0-2.757,2.243-5,5-5Zm17.287-2.51l-3.787-1.255-3.787,1.255c-1.024.34-1.713,1.294-1.713,2.373v3.531c0,3.613,3.868,5.83,5.054,6.423l.425.212.441-.178c1.191-.479,5.08-2.361,5.08-6.458v-3.531c0-1.079-.688-2.033-1.713-2.373Zm.713,5.904c0,3.469-3.408,5.109-4.454,5.53l-.022.01-.022-.011c-1.056-.528-4.501-2.489-4.501-5.528v-3.531c0-.647.413-1.22,1.027-1.424l3.473-1.151,3.473,1.151c.614.204,1.027.776,1.027,1.424v3.531Z"></path>  
                    </svg>
                ),
            },
            {
                name: 'Patient Information',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                      <path d="m24,20h-4v4h-1v-4h-4v-1h4v-4h1v4h4v1Zm-15.866-11.913c-.203-.054-.414-.087-.634-.087H2.5c-1.378,0-2.5,1.122-2.5,2.5v3.5h1v-3.5c0-.827.673-1.5,1.5-1.5h3.527c.612-.456,1.324-.775,2.106-.913Zm7.366.913c.827,0,1.5.673,1.5,1.5v2.5h1v-2.5c0-1.378-1.122-2.5-2.5-2.5h-5c-.22,0-.431.033-.634.087.782.137,1.494.457,2.106.913h3.527ZM2,3c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm7,0c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm-2,7c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-2,3c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm-.5,5c-1.378,0-2.5,1.121-2.5,2.5v3.5h1v-3.5c0-.827.673-1.5,1.5-1.5h5c.827,0,1.5.673,1.5,1.5v-1.987c-.419-.317-.935-.513-1.5-.513h-5Z"></path>  
                    </svg>
                ),
            },
            {
                name: 'Prescriptions',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                     <path d="m23.23,14.731l-5.578-10.48c-1.513-2.757-4.85-3.967-7.769-2.821-1.047-.891-2.404-1.43-3.884-1.43C2.691,0,0,2.691,0,6v12c0,3.309,2.691,6,6,6,2.676,0,4.948-1.761,5.719-4.184l.528.932c1.138,2.075,3.287,3.25,5.501,3.25,1.017,0,2.048-.248,3-.771,1.467-.804,2.532-2.132,3-3.737.468-1.606.283-3.298-.518-4.759Zm-6.458-10.004l2.636,4.952-7.409,4.063v-7.742c0-1.432-.504-2.748-1.344-3.78,2.348-.706,4.918.322,6.117,2.507ZM6,1c2.757,0,5,2.243,5,5v5.5H1v-5.5C1,3.243,3.243,1,6,1Zm0,22c-2.757,0-5-2.243-5-5v-5.5h10v5.5c0,2.757-2.243,5-5,5Zm16.789-3.79c-.394,1.35-1.289,2.465-2.521,3.141-1.233.676-2.655.831-4.003.438-1.35-.394-2.465-1.289-3.144-2.527l-1.127-1.991c.004-.09.006-.18.006-.271v-3.118l7.878-4.32,2.472,4.645c.676,1.232.832,2.654.438,4.003Z"></path>  
                    </svg>
                ),
            },
            {
                name: 'Lab Reports',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                      <path d="m23.146,9.854c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707L14.854.146c-.195-.195-.512-.195-.707,0s-.195.512,0,.707l1.188,1.188L1.372,16.005c-.885.884-1.372,2.061-1.372,3.312s.487,2.427,1.372,3.312c.913.913,2.112,1.369,3.312,1.369s2.398-.457,3.312-1.369l13.963-13.963,1.188,1.188Zm-15.858,12.068c-1.436,1.436-3.773,1.436-5.209,0-.695-.696-1.079-1.621-1.079-2.605s.384-1.909,1.079-2.604l8.682-8.682,5.24,5.179-8.712,8.712Zm9.419-9.419l-5.24-5.179,4.574-4.574,5.209,5.209-4.544,4.544Zm4.639,2.88c-.744-.726-1.95-.725-2.728.039l-1.447,1.751c-.756.755-1.172,1.76-1.172,2.828s.416,2.073,1.172,2.829c.756.755,1.761,1.171,2.828,1.171s2.072-.416,2.828-1.171c.756-.756,1.172-1.76,1.172-2.829s-.416-2.073-1.141-2.793l-1.513-1.824Zm.774,6.739c-1.133,1.133-3.109,1.133-4.242,0-.566-.567-.879-1.32-.879-2.122s.312-1.554.91-2.156l1.443-1.747c.363-.355.931-.355,1.259-.039l1.509,1.82c.566.567.879,1.32.879,2.121s-.313,1.555-.879,2.122Z"></path>  
                    </svg>
                ),
            },
            {
                name: 'Billing and Financial Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        
                    </svg>
                ),
            },
            {
                name: 'Legal and Compliance Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M13.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.335,0,.663,.038,.985,.096V6.5c0,1.378,1.122,2.5,2.5,2.5h5.389c.033,.18,.078,.357,.092,.541,.023,.275,.271,.479,.539,.458,.275-.022,.48-.264,.458-.539-.125-1.536-.793-2.981-1.883-4.07l-3.485-3.485c-1.228-1.228-2.86-1.904-4.596-1.904H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5H13.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm3.889-16.904c.543,.543,.944,1.198,1.219,1.904h-5.108c-.827,0-1.5-.673-1.5-1.5V1.379c.704,.273,1.354,.682,1.904,1.231l3.485,3.485Zm6.464,17.05l-5.255-5.255,2.293-2.293,.435,.435c.452,.466,1.172-.255,.707-.707l-4.68-4.68c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l.409,.409-5.293,5.293-.409-.409c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l4.68,4.68c.452,.466,1.172-.255,.707-.707l-.435-.435,2.293-2.293,5.255,5.255c.452,.466,1.172-.255,.707-.707Zm-11.384-5.384l5.293-5.293,2.422,2.422-5.293,5.293-2.422-2.422ZM4,8.5c0-.276,.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H4.5c-.276,0-.5-.224-.5-.5Zm9.5,3.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H13.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm-3,3H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h6c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm-3,2c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3Z"></path>
                    </svg>
                ),
            },
            
        ];


        // FAQs data
        const faqs = [
            {
                question:
                    "How can ApricityTS document processing solution improve efficiency in Accounts Payable (AP) and Accounts Receivable (AR)?",
                answer:
                    "ApricityTS AI-powered workflows automate the extraction, validation, and processing of invoices, receipts, and payment data, drastically reducing manual entry errors and processing time. This improves cash flow management in AR and ensures timely, accurate invoice handling in AP.",
            },
            {
                question: "Can ApricityTS solution help with compliance and risk management in financial services?",
                answer:
                    "Yes, ApricityTS solution provides thorough compliance checks and reduces risks associated with financial operations.",
            },
            {
                question: "What types of financial documents can Sanad process?",
                answer:
                    "Sanad can process invoices, receipts, purchase orders, and other financial documents used in business transactions.",
            },
            {
                question: "How does ApricityTS fraud detection system work?",
                answer:
                    "ApricityTS fraud detection system uses machine learning algorithms to analyze patterns and detect anomalies in financial documents, providing an extra layer of security.",
            },
            {
                question:
                    "Is ApricityTS document processing solution scalable for growing financial institutions?",
                answer:
                    "Yes, ApricityTS solution is scalable and can be adapted to fit the growing needs of financial institutions, regardless of size.",
            },
        ];

        return (
            <div>
                {/* Existing JSX content of your component */}
                <div>
                    {/* First Section - Legal Document Automation */}
                    <div>
                    {/* First Section - Legal Document Automation */}
                    <div>
                    {/* First Section - Legal Document Automation */}
                    <div className="min-h-screen bg-[rgb(144,74,242)] flex items-center justify-center">
        {/* Container */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Left Section - Content */}
          <div
            className={`text-white flex flex-col justify-center transform transition-transform duration-1000 ${
              this.state.animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-4xl font-bold mb-4 text-[#4ADE80]">
            Prioritize patient care with Intelligent Document Processing for healthcare
            </h1>
            <p className="text-lg mb-4">
            Let ApricityTS advanced AI take your patient data management into the future with unmatched efficiency in all your document processing. Automate manual entry and uncover insights that drive superior care. 
            </p>
            <p className="text-lg font-bold mb-6">You can Try it for Free</p>
            <button className="bg-green-400 h-12 w-52 hover:bg-green-500 text-black font-semibold py-2 px-6 rounded-lg">
              Contact us Today!
            </button>
          </div>

          {/* Right Section - Image */}
          <div
            className={`flex justify-center transform transition-transform duration-1000 delay-200 ${
              this.state.animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
          >
            <img
              src="https://sanad.ai/wp-content/uploads/2023/12/Cloud-White.png"
              alt="Cloud"
              className="w-76 h-76 object-contain"
            />
          </div>
        </div>
      </div>

                    {/* Second Section - What ApricityTS Can Do */}
                    <div className="bg-gray-50 py-16">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center text-[#904AF2] mb-4">
                                What ApricityTS Can Do in the Legal Sector?
                            </h2>
                            <p className="text-center text-black-700 mb-12">Documents We Handle</p>

                            {/* Grid for 3 icons per row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                                {documents.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center space-y-2 transition duration-200 ease-in-out hover:scale-105"
                                    >
                                        <span>{item.icon}</span>
                                        <p className="text-[#2C4C56] font-semibold">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <p className="text-lg font-semibold text-gray-600 mb-4">
                                    Extract, validate, and process accounts payable and receivable
                                </p>
                                <button className="bg-[#904AF2] text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 hover:scale-105">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* section */}
                    <div className="py-16 bg-slate-200">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center text-[#904AF2] mb-4">
                                Transform Your Operations with Advanced OCR Solutions
                            </h2>
                            <p className="text-center text-gray-600 mb-12">
                                Powerful Tools for Modern Document Management at ApricityTS
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* AI-powered Document Understanding Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m19,11.5v7c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5Zm4.5-2.5c-.276,0-.5.224-.5.5v10c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h10c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-10c0-.276-.224-.5-.5-.5Zm-8.677-4.783l2.83-1.071,1.133-2.832c.152-.38.776-.38.929,0l1.135,2.836,2.836,1.135c.19.076.314.26.314.464s-.125.388-.314.464l-2.836,1.135-1.135,2.836c-.076.19-.26.314-.464.314s-.388-.125-.464-.314l-1.137-2.842-2.843-1.198c-.188-.08-.31-.266-.306-.47s.132-.386.323-.458Zm1.523.493l1.884.794c.123.052.22.151.27.275l.75,1.875.75-1.875c.051-.127.151-.228.279-.279l1.875-.75-1.875-.75c-.127-.051-.228-.151-.279-.279l-.75-1.875-.75,1.875c-.052.13-.156.232-.288.282l-1.866.706Zm-5.154,1.531l3.785,12.111c.083.263-.064.544-.328.626-.049.016-.1.023-.149.023-.213,0-.41-.137-.477-.351l-1.14-3.649h-6.765l-1.14,3.649c-.083.264-.364.411-.626.328-.264-.082-.411-.363-.328-.626l3.785-12.111c.236-.756.901-1.245,1.692-1.245h0c.792,0,1.456.489,1.692,1.245Zm1.378,7.76l-2.332-7.462c-.125-.4-.463-.542-.738-.542h0c-.275,0-.613.143-.738.543l-2.332,7.461h6.14Z"></path>   
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">AI-powered Document Understanding</h3>
                                    <p className="text-gray-600">
                                        Automate the classification and categorization of a broad spectrum of legal documents. Extract key terms, dates, and clauses rapidly and precisely. Validate for completeness and ensure data accuracy throughout.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Advanced Search Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m11,23.5c0,.276-.224.5-.5.5h-6c-2.481,0-4.5-2.019-4.5-4.5V4.501C0,2.02,2.018,0,4.5,0h11c2.481,0,4.5,2.018,4.5,4.499v3c0,.276-.223.5-.5.5s-.5-.224-.5-.5v-3c0-1.93-1.571-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.571-3.5,3.501v14.999c0,1.93,1.571,3.5,3.5,3.5h6c.276,0,.5.224.5.5Zm12.854.354c-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-3.423-3.423c-1.137.976-2.611,1.569-4.224,1.569-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5c0,1.612-.594,3.086-1.569,4.224l3.423,3.423c.195.195.195.512,0,.707Zm-2.854-8.354c0-3.032-2.467-5.5-5.5-5.5s-5.5,2.468-5.5,5.5,2.467,5.5,5.5,5.5,5.5-2.468,5.5-5.5ZM6.5,5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm0,10h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm3-10c-.276,0-.5.224-.5.5s.224.5.5.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-6Zm-3,5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm11.643,4.131l-2.706,2.618c-.337.33-.886.334-1.223.004l-1.363-1.345c-.196-.194-.513-.192-.707.004-.194.197-.192.514.005.707l1.364,1.347c.362.354.837.531,1.312.531s.951-.178,1.311-.533l2.703-2.614c.198-.192.204-.509.012-.707-.191-.198-.508-.202-.707-.012Z"></path>   
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Advanced Search and Retrieval</h3>
                                    <p className="text-gray-600">
                                        Deploy industry-leading AI for contextual understanding and dramatically improve search query accuracy. Use full-text search in even the largest datasets for speedy access to critical information.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Contract Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m5.882,15H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5.382c.191,0,.362-.106.447-.276l1.048-2.096c.209-.419.627-.664,1.098-.639.468.025.86.312,1.024.75l1.939,5.17c.03.081.093.101.14.103.054.003.112-.01.15-.087l1.048-2.096c.256-.511.77-.829,1.342-.829h4.382c.276,0,.5.224.5.5s-.224.5-.5.5h-4.382c-.191,0-.362.106-.447.276l-1.048,2.096c-.2.399-.592.641-1.033.641-.021,0-.043,0-.064-.002-.468-.025-.86-.312-1.024-.75l-1.939-5.17c-.03-.081-.093-.101-.14-.103-.049.005-.112.011-.15.087l-1.048,2.096c-.256.511-.77.829-1.342.829Zm16.118-5.015v9.515c0,2.481-2.019,4.5-4.5,4.5H6.5c-2.481,0-4.5-2.019-4.5-4.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5v-9.515c0-.335-.038-.663-.096-.985h-5.404c-1.378,0-2.5-1.122-2.5-2.5V1.096c-.323-.058-.651-.096-.985-.096h-5.515c-1.93,0-3.5,1.57-3.5,3.5v7c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7C2,2.019,4.019,0,6.5,0h5.515c1.736,0,3.369.676,4.596,1.904l3.485,3.485c1.228,1.228,1.904,2.86,1.904,4.596Zm-1.379-1.985c-.273-.704-.682-1.354-1.231-1.904l-3.485-3.485c-.55-.55-1.2-.959-1.904-1.231v5.121c0,.827.673,1.5,1.5,1.5h5.121Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Contract Analysis and Management</h3>
                                    <p className="text-gray-600">
                                        Our word processing software for legal documents identifies and extracts specific clauses from contracts and agreements with ease for review and compliance. Automate tracking of contract renewals and deadlines to prevent lapses.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Compliance and Risk Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                         <path d="m17.778,13.569c.295.506.297,1.111.005,1.619-.292.508-.816.812-1.402.812h-1.882c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1.882c.322,0,.481-.217.535-.31.053-.093.16-.339-.002-.617l-4.382-7.512c-.161-.276-.426-.307-.532-.307s-.372.03-.532.307l-4.382,7.512c-.163.278-.056.524-.002.617.054.093.212.31.535.31h1.882c.276,0,.5.224.5.5s-.224.5-.5.5h-1.882c-.586,0-1.11-.304-1.402-.812-.292-.508-.29-1.113.005-1.619l4.382-7.512c.292-.502.814-.803,1.396-.803s1.104.301,1.396.803l4.382,7.512Zm-5.278-1.069v-3c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3c0,.276.224.5.5.5s.5-.224.5-.5Zm-.5,1.5c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm10.442,3.912c-.329.582-.865,1-1.508,1.179-.644.177-1.318.095-1.899-.235l-.75-.425c-1.064,1.041-2.359,1.796-3.784,2.208v.861c0,1.379-1.122,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-.861c-1.425-.412-2.72-1.167-3.784-2.208l-.751.426c-.581.329-1.256.41-1.899.234-.644-.179-1.179-.597-1.508-1.179-.329-.581-.412-1.255-.234-1.898.178-.644.597-1.18,1.178-1.509l.748-.423c-.166-.692-.25-1.391-.25-2.082s.084-1.39.25-2.082l-.748-.424c-1.199-.68-1.623-2.208-.943-3.406.329-.582.864-1,1.508-1.179.646-.176,1.319-.095,1.899.235l.75.425c1.064-1.041,2.359-1.796,3.784-2.208v-.861c0-1.379,1.122-2.5,2.5-2.5s2.5,1.121,2.5,2.5v.861c1.425.412,2.72,1.167,3.784,2.208l.751-.426c.582-.329,1.256-.41,1.899-.234.644.179,1.179.597,1.508,1.179.679,1.198.256,2.727-.943,3.406l-.748.424c.166.692.25,1.391.25,2.082s-.084,1.39-.25,2.082l.749.423c.581.329.999.865,1.177,1.509s.095,1.317-.234,1.898Zm-.73-1.632c-.107-.386-.358-.707-.706-.904l-1.083-.613c-.201-.114-.297-.351-.234-.572.207-.728.312-1.464.312-2.19s-.105-1.463-.312-2.19c-.063-.222.034-.458.234-.571l1.083-.613c.72-.408.974-1.325.566-2.045-.197-.349-.519-.6-.905-.707-.386-.105-.791-.056-1.139.141l-1.086.615c-.201.11-.453.074-.611-.094-1.069-1.141-2.435-1.937-3.949-2.303-.224-.055-.382-.256-.382-.486v-1.246c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v1.246c0,.23-.158.432-.382.486-1.514.366-2.879,1.162-3.949,2.303-.158.169-.411.205-.611.094l-1.085-.614c-.349-.198-.754-.247-1.14-.142-.386.107-.708.358-.905.707-.408.72-.153,1.637.566,2.045l1.083.613c.201.113.297.35.234.571-.207.728-.312,1.464-.312,2.19s.105,1.463.312,2.19c.063.222-.034.458-.234.572l-1.083.613c-.72.407-.974,1.324-.566,2.044.198.349.519.6.905.707.386.105.791.056,1.139-.141l1.086-.615c.077-.043.162-.064.246-.064.135,0,.268.055.365.158,1.07,1.141,2.435,1.937,3.949,2.303.224.055.382.256.382.486v1.246c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-1.246c0-.23.158-.432.382-.486,1.514-.366,2.879-1.162,3.949-2.303.159-.168.411-.205.611-.094l1.085.614c.349.198.753.247,1.14.142.386-.107.708-.358.905-.707s.248-.754.141-1.14Z"></path>   
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Compliance and Risk Management</h3>
                                    <p className="text-gray-600">
                                        Automate the monitoring and reporting of compliance with legal and regulatory requirements. Identify and assess potential risks in legal documents, such as non-compliance issues or unfavorable terms.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Case Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="M13.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.335,0,.663,.038,.985,.096V6.5c0,1.378,1.122,2.5,2.5,2.5h5.389c.033,.18,.078,.357,.092,.541,.023,.275,.271,.479,.539,.458,.275-.022,.48-.264,.458-.539-.125-1.536-.793-2.981-1.883-4.07l-3.485-3.485c-1.228-1.228-2.86-1.904-4.596-1.904H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5H13.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm3.889-16.904c.543,.543,.944,1.198,1.219,1.904h-5.108c-.827,0-1.5-.673-1.5-1.5V1.379c.704,.273,1.354,.682,1.904,1.231l3.485,3.485Zm6.464,17.05l-5.255-5.255,2.293-2.293,.435,.435c.452,.466,1.172-.255,.707-.707l-4.68-4.68c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l.409,.409-5.293,5.293-.409-.409c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l4.68,4.68c.452,.466,1.172-.255,.707-.707l-.435-.435,2.293-2.293,5.255,5.255c.452,.466,1.172-.255,.707-.707Zm-11.384-5.384l5.293-5.293,2.422,2.422-5.293,5.293-2.422-2.422ZM4,8.5c0-.276,.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H4.5c-.276,0-.5-.224-.5-.5Zm9.5,3.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H13.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm-3,3H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h6c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm-3,2c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3Z"></path>  
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Case Management and Discovery</h3>
                                    <p className="text-gray-600">
                                        Refine and accelerate the organization and retrieval of case files, evidence, and related documents. Facilitate the review and management of documents involved in litigation discovery at scale.
                                    </p>
                                </div>



                            </div>



                            <div className="text-center mt-16">
                                <p className="text-lg font-semibold text-gray-600 mb-4">
                                    Start your document transformation with ApricityTS today.
                                </p>
                                <button className="bg-[#904AF2] text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 hover:scale-105">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* content of image and other left right */}
                    <div className="bg-gray-50 py-16 px-4 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-[#904AF2] mb-12" style={{ fontWeight: "700" }}>
        Which Legal Departments Stand to Benefit the Most?
      </h2>

      {/* Department Sections */}
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section 1: Contract Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Automate the review process highlighting key terms and clauses.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Track and manage contract renewals and deadlines automatically.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Quickly extract and categorize clauses from contracts.
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="flex justify-center lg:order-last">
            <img
              src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg"
              alt="Contract Management"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 2: Litigation and Case Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Litigation and Case Management</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Manage and organize vast amounts of case documents.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Drive efficiency in the discovery phase.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Rapid retrieval of specific case files and related documentation.
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:order-last">
            <img
              src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg"
              alt="Litigation and Case Management"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 3: Intellectual Property Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Intellectual Property Management</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Streamline the process of patent filing and renewals.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Automated tracking of intellectual property deadlines.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Secure storage and organization of IP documents.
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:order-last">
            <img
              src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg"
              alt="Intellectual Property Management"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Section 4: Compliance and Risk Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Compliance and Risk Management</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Ensure compliance with regulatory standards.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Automate risk assessment and management.
              </li>
              <li className="text-gray-600 text-lg flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Centralized tracking of compliance tasks and audits.
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:order-last">
            <img
              src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg"
              alt="Compliance and Risk Management"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            />
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-[#904AF2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#904AF2] transition-colors">
          Book a Demo
        </button>
      </div>
    </div>
                    {/* // sanad features */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <h2 className="text-center text-4xl font-bold mb-10 text-[#904AF2]">Why Choose ApricityTS for Legal Sector?</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
                            {/* AI-powered Data Extraction */}
                            <div className="p-6 border rounded-3xl shadow-md border-solid border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Automated Contract Management</h3>
                                <p className="text-gray-600 mb-6">
                                Manual review often leads to delays and errors but with AI-powered oversight no details go unchecked. Track renewals, identify specific clauses, and save precious time in every facet of contract management with precision.
                                </p>
                                
                            </div>

                            {/* Excellent Scalability */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Superior Litigation and Case Management</h3>
                                <p className="text-gray-600 mb-6">
                                High volumes of case documents in the discovery phase are difficult to manage in large volumes. Rapidly retrieve specific case files and evidence at critical moments with unrivaled searchability at scale.
                                </p>
                                
                            </div>

                            {/* Super Data Accessibility */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Compliance Performance Excellence</h3>
                                <p className="text-gray-600 mb-6">
                                Staying aligned with legal regulatory requirements is tedious and expensive when done manually. AI-driven risk assessment keeps compliance protocols updated with the latest regulations, reducing the burden on legal teams with minimal effort.
                                </p>
                               
                            </div>

                            {/* Rock Solid Compliance Tools */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Legal Research and Document Review</h3>
                                <p className="text-gray-600 mb-6">
                                Inconsistent analysis and cumbersome research methods feed into inefficiencies. Word processing software for legal documents automates and optimizes search and highlights key data reducing workloads.
                                </p>
                                
                            </div>
                        </div>

                        {/* Advanced Fraud Protection: Full-width card */}
                       
                    </div>
                </div>

                    {/* Second Section - What ApricityTS Can Do */}
                    <div className="bg-gray-50 py-16">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center text-[#904AF2] mb-4">
                                What ApricityTS Can Do in the Legal Sector?
                            </h2>
                            <p className="text-center text-black-700 mb-12">Documents We Handle</p>

                            {/* Grid for 3 icons per row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                                {documents.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center space-y-2 transition duration-200 ease-in-out hover:scale-105"
                                    >
                                        <span>{item.icon}</span>
                                        <p className="text-[#2C4C56] font-semibold">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <p className="text-lg font-semibold text-gray-600 mb-4">
                                    Extract, validate, and process accounts payable and receivable
                                </p>
                                <button className="bg-[#904AF2] text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 hover:scale-105">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* section */}
                    <div className="py-16 bg-slate-200">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center text-[#904AF2] mb-4">
                                Transform Your Operations with Advanced OCR Solutions
                            </h2>
                            <p className="text-center text-gray-600 mb-12">
                                Powerful Tools for Modern Document Management at ApricityTS
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* AI-powered Document Understanding Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="M14,7.5c0,.276-.224,.5-.5,.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H13.5c.276,0,.5,.224,.5,.5Zm0,3c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H13.5c.276,0,.5-.224,.5-.5Zm-9.5,5.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5Zm16,2c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-1,0c0-.552-.449-1-1-1s-1,.448-1,1,.449,1,1,1,1-.448,1-1Zm4.332,1.903c.218,.777-.29,1.642-1.076,1.829-.387,.103-.792,.044-1.137-.159l-.223-.131c-.408,.34-.881,.606-1.396,.786v.271c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.271c-.515-.18-.988-.446-1.396-.786l-.223,.131c-.345,.203-.749,.262-1.137,.159-.785-.187-1.294-1.052-1.076-1.829,.101-.388,.346-.713,.691-.916l.234-.138c-.064-.299-.094-.575-.094-.85s.03-.551,.094-.851l-.234-.138c-.345-.202-.591-.527-.692-.916-.218-.776,.291-1.642,1.076-1.828,.388-.102,.792-.044,1.137,.159l.223,.131c.408-.34,.881-.606,1.396-.786v-.271c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5v.271c.515,.18,.988,.446,1.396,.786l.223-.131c.345-.203,.75-.261,1.137-.159,.784,.186,1.294,1.052,1.076,1.828-.101,.389-.347,.714-.692,.917l-.233,.137c.064,.3,.094,.576,.094,.851s-.03,.551-.094,.85l.233,.137c.346,.204,.592,.529,.692,.917Zm-1.755-3.426l.556-.327c.564-.321,.046-1.199-.507-.862l-.541,.318c-.196,.116-.446,.084-.607-.077-.43-.432-.984-.743-1.603-.903-.221-.058-.375-.257-.375-.484v-.642c0-.275-.224-.5-.5-.5s-.5,.225-.5,.5v.642c0,.228-.154,.427-.375,.484-.619,.16-1.173,.472-1.603,.903-.161,.161-.412,.193-.607,.077l-.541-.318c-.552-.336-1.071,.542-.507,.861l.557,.328c.196,.115,.29,.349,.228,.567-.103,.361-.151,.665-.151,.955s.048,.594,.151,.955c.062,.219-.031,.453-.228,.568l-.556,.326c-.564,.32-.045,1.2,.507,.862l.541-.318c.195-.116,.446-.085,.607,.077,.43,.432,.984,.743,1.603,.903,.221,.058,.375,.257,.375,.484v.642c0,.275,.224,.5,.5,.5s.5-.225,.5-.5v-.642c0-.228,.154-.427,.375-.484,.619-.16,1.173-.472,1.603-.903,.161-.161,.411-.193,.607-.077l.541,.318c.555,.338,1.07-.543,.507-.863l-.556-.325c-.197-.115-.291-.35-.228-.568,.103-.361,.151-.665,.151-.955s-.048-.594-.151-.955c-.062-.219,.031-.452,.228-.567Zm-9.577,6.522H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h1c.276,0,.5-.224,.5-.5,0-.827,.673-1.5,1.5-1.5h3c.827,0,1.5,.673,1.5,1.5,0,.276,.224,.5,.5,.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-3c0-2.481-2.019-4.5-4.5-4.5h-.55c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217,.86-2.45,2h-.55C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5H12.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-.5-9.5c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h7c.276,0,.5-.224,.5-.5Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Automated Document Processing for Finance</h3>
                                    <p className="text-gray-600">
                                    Maximize invoice and receipt management efficiency with less manual work and errors. Batch process at scale and automatically validate data with multi-format and reconciliation support.  
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Advanced Search Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m6.49 63.5c-2.37 0-4.29-1.92-4.29-4.29v-54.42c0-2.37 1.92-4.29 4.29-4.29h30.38l.1.01c.04 0 .09.01.13.03.11.05.16.08.2.12l9.57 10.43c.03.04.06.08.09.15.02.08.03.12.03.17v.05l.02.07-.01 14.39.08.13c2.92 4.34 3.16 9.88.63 14.47l-.18.33 2.98 2.98.52-.52c.09-.09.22-.15.35-.15s.26.05.35.15l8.67 8.67c.89.89 1.39 2.08 1.39 3.35s-.49 2.45-1.39 3.35-2.08 1.39-3.35 1.39-2.45-.49-3.35-1.39l-6.7-6.73v7.26c0 2.37-1.92 4.29-4.29 4.29zm0-62c-1.82 0-3.29 1.48-3.29 3.29v54.42c0 1.81 1.48 3.29 3.29 3.29h36.22c1.81 0 3.29-1.48 3.29-3.29v-8.26l-.96-.95c-.09-.09-.15-.22-.15-.35s.05-.26.15-.35l.52-.52-2.98-2.98-.33.18c-2.05 1.12-4.37 1.71-6.73 1.71-3.72 0-7.21-1.44-9.82-4.04-2.63-2.63-4.08-6.12-4.08-9.84s1.45-7.21 4.08-9.84c2.62-2.62 6.12-4.07 9.84-4.07 3.6 0 7.02 1.37 9.61 3.84l.85.8v-12.61h-9.07c-.28 0-.5-.22-.5-.5v-9.93zm40.51 47.25v1.79l7.43 7.42c.68.68 1.64 1.06 2.64 1.06s1.96-.39 2.64-1.06c.71-.71 1.09-1.64 1.09-2.64s-.39-1.93-1.09-2.64l-8.32-8.32zm-1.47-5.27-.28.29-1.64 1.64 2.66 2.66 3.54-3.54-2.66-2.66zm-9.99-22.59c-3.45 0-6.7 1.34-9.13 3.78-5.03 5.04-5.03 13.23 0 18.26 2.43 2.43 5.67 3.76 9.13 3.76 3.37 0 6.55-1.28 8.96-3.59l.33-.33c.46-.48.88-.99 1.26-1.52l.09-.13c3.03-4.4 3.03-10.24 0-14.63l-.09-.13c-.43-.61-.91-1.18-1.42-1.68-2.43-2.45-5.67-3.79-9.13-3.79zm1.89-9.96h7.93l-7.93-8.64z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Robust Compliance and Risk Management</h3>
                                    <p className="text-gray-600">
                                    Automate ID verification and real-time transaction monitoring for KYC and AML (Anti Money Laundering). Simplify compliance reporting with audit trails and regulation updates with no intervention.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Contract Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="m18.088,14.89l1.613-2.102c.255-.359.353-.813.27-1.245-.084-.431-.333-.8-.702-1.037-.467-.301-.982-.563-1.519-.799.161-.542.251-1.114.251-1.707v-1h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.5c0-1.385-1.536-6-3.25-6-.72,0-1.483.352-2.334,1.074-.24.205-.591.204-.831,0-.852-.724-1.615-1.075-2.335-1.075-1.714,0-3.25,4.615-3.25,6h-1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v1c0,.605.092,1.189.259,1.74-.546.239-1.061.511-1.528.812-.37.238-.619.607-.702,1.041-.084.434.017.889.285,1.265l1.581,2.049c-1.839,1.702-2.895,4.077-2.895,6.594v2c0,.276.224.5.5.5s.5-.224.5-.5v-2c0-2.208.914-4.291,2.508-5.8l4.992,6.47v1.33c0,.276.224.5.5.5s.5-.224.5-.5v-1.33l4.977-6.485c1.602,1.509,2.523,3.601,2.523,5.815v2c0,.276.224.5.5.5s.5-.224.5-.5v-2c0-2.524-1.063-4.908-2.912-6.61ZM9.25,1c.466,0,1.033.281,1.687.838.614.521,1.508.521,2.126,0,.653-.556,1.221-.837,1.687-.837.61.003,2.25,3.376,2.25,5H7c0-1.624,1.64-4.997,2.25-5Zm7.75,6v1c0,2.757-2.243,5-5,5s-5-2.243-5-5v-1h10Zm-5,9.653l-1.104-2.76c.358.067.727.106,1.104.106s.746-.039,1.104-.106l-1.104,2.76Zm-6.883-4.393c-.101-.141-.139-.311-.106-.479.031-.162.124-.3.262-.389.416-.267.875-.509,1.362-.724.645,1.291,1.736,2.32,3.076,2.875.004.047,1.79,4.551,1.79,4.551v2.438l-6.383-8.273Zm7.383,5.834s1.786-4.504,1.79-4.551c1.351-.56,2.449-1.601,3.092-2.907.476.211.932.443,1.345.709.138.089.23.227.262.388.033.168-.004.337-.092.462l-6.396,8.332v-2.432Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Elite Fraud Detection Systems</h3>
                                    <p className="text-gray-600">
                                    Anomaly detection through behavioral tracking and analysis. Highly secure verification with document fingerprinting and image forensics for altered or tampered data sources.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Compliance and Risk Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="m24,19.505c0,1.376-1.119,2.495-2.495,2.495h-1.005v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.5h-1.005c-1.376,0-2.495-1.119-2.495-2.495,0-.276.224-.5.5-.5s.5.224.5.5c0,.824.671,1.495,1.495,1.495h3.01c.824,0,1.495-.671,1.495-1.495,0-.664-.446-1.255-1.084-1.438l-4.106-1.174c-1.065-.304-1.81-1.29-1.81-2.398,0-1.376,1.119-2.495,2.495-2.495h1.005v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5h1.005c1.376,0,2.495,1.119,2.495,2.495,0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-.824-.671-1.495-1.495-1.495h-3.01c-.824,0-1.495.671-1.495,1.495,0,.664.446,1.255,1.084,1.438l4.106,1.174c1.065.304,1.81,1.29,1.81,2.398ZM4.5,3h1c.276,0,.5-.224.5-.5,0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5,0,.276.224.5.5.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,.276.224.5.5.5s.5-.224.5-.5v-3c0-2.481-2.019-4.5-4.5-4.5h-.55c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217.86-2.45,2h-.55C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h9c.583,0,1.15-.11,1.688-.327.256-.104.379-.396.276-.651-.103-.256-.395-.378-.651-.276-.417.169-.859.255-1.312.255H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5Zm4.662,2.323c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Zm0,6c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Zm0,6c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Comprehensive Financial Reporting</h3>
                                    <p className="text-gray-600">
                                    Predictive analytics and trend analysis for strategic financial insights. Customizable dashboards for real-time data visualization of KPIs and metrics and easily exportable reports.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Case Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="m24,8.5v8c0,2.481-2.019,4.5-4.5,4.5h-7v2h4c.276,0,.5.224.5.5s-.224.5-.5.5H7.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4v-2h-7c-2.481,0-4.5-2.019-4.5-4.5v-8c0-2.055,1.388-3.847,3.375-4.358.269-.071.54.093.609.36.068.267-.093.54-.359.609-1.546.397-2.625,1.792-2.625,3.39v8c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5v-8c0-1.598-1.079-2.992-2.625-3.39-.267-.069-.428-.341-.359-.609.069-.267.34-.431.609-.36,1.987.511,3.375,2.304,3.375,4.358Zm-14-1.5c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm1,0c0,.551.448,1,1,1s1-.449,1-1-.448-1-1-1-1,.449-1,1Zm-4.506,1.478l.646-.377c-.094-.384-.14-.747-.14-1.1s.046-.716.14-1.101l-.646-.376c-.714-.418-.956-1.338-.539-2.052s1.337-.957,2.052-.54l.641.375c.537-.489,1.166-.852,1.853-1.068v-.738c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v.738c.687.216,1.316.579,1.853,1.068l.642-.374c.346-.203.749-.256,1.137-.156.388.102.712.349.914.695.417.714.175,1.635-.539,2.052l-.646.377c.094.386.14.749.14,1.101s-.046.715-.14,1.1l.646.377c.347.202.593.526.694.914.103.387.047.791-.155,1.137s-.526.593-.914.695c-.391.102-.792.045-1.137-.156l-.642-.374c-.536.489-1.166.852-1.853,1.068v.738c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.738c-.687-.216-1.315-.579-1.853-1.068l-.641.374c-.715.417-1.635.175-2.052-.539-.417-.714-.175-1.634.539-2.051Zm.324,1.547c.139.238.446.318.685.179l.971-.566c.078-.046.165-.068.252-.068.135,0,.268.054.364.158.55.586,1.249.989,2.021,1.165.228.052.389.254.389.487v1.121c0,.276.225.5.5.5s.5-.224.5-.5v-1.121c0-.233.161-.436.389-.487.773-.176,1.473-.579,2.021-1.165.161-.171.415-.207.617-.09l.972.567c.115.067.253.085.379.052.129-.034.237-.116.305-.231.067-.116.086-.25.052-.379s-.116-.237-.231-.304l-.979-.572c-.201-.118-.295-.358-.226-.581.138-.441.202-.819.202-1.188s-.064-.748-.202-1.189c-.069-.222.024-.463.226-.581l.979-.571c.238-.139.318-.446.18-.685-.067-.115-.176-.197-.305-.231-.126-.032-.263-.016-.379.052l-.972.567c-.199.117-.456.082-.617-.09-.548-.586-1.247-.988-2.021-1.165-.228-.052-.389-.254-.389-.487v-1.12c0-.276-.225-.5-.5-.5s-.5.224-.5.5v1.12c0,.233-.161.436-.389.487-.772.176-1.472.579-2.021,1.165-.159.171-.417.207-.616.09l-.971-.567c-.238-.138-.546-.059-.685.18s-.058.545.181.685l.979.571c.201.118.295.359.225.582-.138.439-.202.817-.202,1.188s.064.748.202,1.188c.07.223-.022.464-.225.582l-.979.572c-.238.139-.318.446-.18.684Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Easy ERP and CRM Integration</h3>
                                    <p className="text-gray-600">
                                    Enable real-time synching between our IDP and your financial systems and customize unique financial workflows. Get robust API connections for seamless data exchange without placing stress on your IT department.  
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Case Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="m23.682,5.966c-.06.023-.121.034-.182.034-.2,0-.389-.121-.466-.318l-1.554-3.983C17.941,10.047,10.93,15.531.616,17.986c-.039.01-.078.014-.116.014-.226,0-.431-.154-.486-.384-.064-.269.102-.539.371-.603,10.052-2.393,16.857-7.732,20.244-15.862l-4.193,1.636c-.255.101-.547-.027-.647-.284s.027-.547.284-.647L20.472.139c.341-.133.713-.127,1.049.021s.595.417.728.759l1.717,4.4c.101.257-.027.547-.284.647Zm-2.182,2.034c-.276,0-.5.224-.5.5v15c0,.276.224.5.5.5s.5-.224.5-.5v-15c0-.276-.224-.5-.5-.5Zm-5,5c-.276,0-.5.224-.5.5v10c0,.276.224.5.5.5s.5-.224.5-.5v-10c0-.276-.224-.5-.5-.5Zm-10,5c-.276,0-.5.224-.5.5v5c0,.276.224.5.5.5s.5-.224.5-.5v-5c0-.276-.224-.5-.5-.5Zm-5,2c-.276,0-.5.224-.5.5v3c0,.276.224.5.5.5s.5-.224.5-.5v-3c0-.276-.224-.5-.5-.5Zm10-4c-.276,0-.5.224-.5.5v7c0,.276.224.5.5.5s.5-.224.5-.5v-7c0-.276-.224-.5-.5-.5ZM0,6C0,2.691,2.691,0,6,0s6,2.691,6,6-2.691,6-6,6S0,9.309,0,6Zm6,5c.717,0,1.396-.158,2.014-.431-.003-.023-.014-.044-.014-.069v-.5c0-1.103-.897-2-2-2s-2,.897-2,2v.5c0,.024-.01.045-.014.069.617.273,1.296.431,2.014.431ZM1,6c0,1.628.794,3.063,2.002,3.976.013-1.643,1.351-2.976,2.998-2.976s2.985,1.333,2.998,2.976c1.208-.914,2.002-2.348,2.002-3.976,0-2.757-2.243-5-5-5S1,3.243,1,6Zm3-2c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm1,0c0,.552.449,1,1,1s1-.448,1-1-.449-1-1-1-1,.448-1,1Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Growth-Ready Scalability</h3>
                                    <p className="text-gray-600">
                                    Adaptable and customizable workflows match your demands at every turn without compromising on automation efficiency. Cloud and on-premise infrastructure means you always have the resources you need.
                                    </p>
                                </div>


                            </div>



                            <div className="text-center mt-16">
                                <p className="text-lg font-semibold text-gray-600 mb-4">
                                    Start your document transformation with ApricityTS today.
                                </p>
                                <button className="bg-[#904AF2] text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 hover:scale-105">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* content of image and other left right */}
                    <div className="bg-gray-50 py-16 px-4 lg:px-8">
                        <h2 className="text-center text-4xl font-bold text-[#904AF2] mb-12" style={{ fontWeight: "700" }}>
                            Which Legal Departments Stand to Benefit the Most?
                        </h2>

                        {/* Department Card */}
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Content: Contract Management */}
                            <div>
                                <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                <ul className="space-y-3">
                                    <li className="text-gray-600 text-lg flex items-start">
                                        <span className="text-green-600 mr-2">✔</span>
                                        Automate the review process highlighting key terms and clauses.
                                    </li>
                                    <li className="text-gray-600 text-lg flex items-start">
                                        <span className="text-green-600 mr-2">✔</span>
                                        Track and manage contract renewals and deadlines automatically.
                                    </li>
                                    <li className="text-gray-600 text-lg flex items-start">
                                        <span className="text-green-600 mr-2">✔</span>
                                        Quickly extract and categorize clauses from contracts.
                                    </li>
                                </ul>
                            </div>

                            {/* Right Image */}
                            <div className="flex justify-center">
                                <img
                                    src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                    alt="Contract Management"
                                    className="w-full h-auto max-w-md rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                        <div>
                            {/* 2nd content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Litigation and Case Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Manage and organize vast amounts of case documents.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Drive efficiency in the discovery phase.
                                        </li>
                                        <li className="text-gray-800 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Rapid retrieval of specific case files and related documentation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* 3 content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                {/* Left Content: Contract Management */}
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Automate the review process highlighting key terms and clauses.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Track and manage contract renewals and deadlines automatically.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Quickly extract and categorize clauses from contracts.
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                            <div></div>
                            {/* 4 content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Automate the review process highlighting key terms and clauses.
                                        </li >
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Track and manage contract renewals and deadlines automatically.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Quickly extract and categorize clauses from contracts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* 5 content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                {/* Left Content: Contract Management */}
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Automate the review process highlighting key terms and clauses.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Track and manage contract renewals and deadlines automatically.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Quickly extract and categorize clauses from contracts.
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                            <div></div>

                        </div>
                        {/* CTA Button */}
                        <div className="text-center mt-12">
                            <button className="bg-[#904AF2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#904AF2] transition-colors">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                    {/* // sanad features */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <h2 className="text-center text-4xl font-bold mb-10 text-[#904AF2]">Why Choose ApricityTS for Finance?</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
                            {/* AI-powered Data Extraction */}
                            <div className="p-6 border rounded-3xl shadow-md border-solid border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">AI-powered Data Extraction</h3>
                                <p className="text-gray-600 mb-6">
                                    No serious financial institution can survive manual data entry errors and the wasted resources associated with it. Our AI accelerates data entry and handling, delivering efficiency so teams can focus on work that matters.
                                </p>
                                <button className="bg-[#904AF2] text-white py-2 px-4 rounded-3xl hover:[#904AF2]">Transform your productivity and decisioning with AI</button>
                            </div>

                            {/* Excellent Scalability */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Excellent Scalability</h3>
                                <p className="text-gray-600 mb-6">
                                    It is no secret that traditional OCRs fall short when it comes to enterprise scalability. Our IDP possesses enterprise-grade infrastructure that adapts to growth demands, promising consistent performance and compliance.
                                </p>
                                <button className="bg-[#904AF2] text-white py-2 px-4 rounded-3xl hover:[#904AF2]">Deploy growth-ready processing</button>
                            </div>

                            {/* Super Data Accessibility */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Super Data Accessibility</h3>
                                <p className="text-gray-600 mb-6">
                                    Fragmented data sources present major blockages to processing. But Sanad.ai’s smooth integration with financial systems means comprehensive data extraction and management is improved exponentially.
                                </p>
                                <button className="bg-[#904AF2] text-white py-2 px-4 rounded-3xl hover:[#904AF2]">Augment your workflows data usability</button>
                            </div>

                            {/* Rock Solid Compliance Tools */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Rock Solid Compliance Tools</h3>
                                <p className="text-gray-600 mb-6">
                                    Meeting shifting financial regulatory expectations without automation is costly and risky. Deploy accurate and rapid processing and comprehensive audit trails for all documents and fulfill obligations with ease.
                                </p>
                                <button className="bg-[#904AF2] text-white py-2 px-4 rounded-3xl hover:[#904AF2]">Take the complications out of compliance</button>
                            </div>
                        </div>

                        {/* Advanced Fraud Protection: Full-width card */}
                        <div className="mt-8">
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...  hover:shadow-lg transition duration-300 ease-in-out lg:col-span-2">
                                <h3 className="text-xl font-semibold mb-4">Advanced Fraud Protection</h3>
                                <p className="text-gray-600 mb-6">
                                    Fraudulent activities can derail any organization and leave lasting damage. Sanad.ai accurately assesses risk regardless of document volumes to find anomalous data and stop fraud in its tracks.
                                </p>
                                <button className="bg-[#904AF2] text-white py-2 px-4 rounded-3xl hover:[#904AF2]">Safeguard your financial operations</button>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Second Section - What ApricityTS Can Do */}
                    <div className="bg-gray-50 py-16">
                        <div className="max-w-6xl mx-auto px-6">
                            <h2 className="text-3xl font-bold text-center text-[#904AF2] mb-4">
                                What ApricityTS Can Do in the Legal Sector?
                            </h2>
                            <p className="text-center text-black-700 mb-12">Documents We Handle</p>

                            {/* Grid for 3 icons per row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                                {documents.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center space-y-2 transition duration-200 ease-in-out hover:scale-105"
                                    >
                                        <span>{item.icon}</span>
                                        <p className="text-[#2C4C56] font-semibold">{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <p className="text-lg font-semibold text-gray-600 mb-4">
                                    Extract, validate, and process accounts payable and receivable
                                </p>
                                <button className="bg-[#904AF2] text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 hover:scale-105">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* section */}
                    <div className="py-16 bg-slate-200">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-4xl font-bold text-center text-[#904AF2] mb-4">
                            Transform Your Healthcare Operations with<br></br> Advanced Automation Solutions
                            </h2>
                            <p className="text-center text-gray-600 mb-12">
                                Powerful Tools for Modern Document Management at ApricityTS
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* AI-powered Document Understanding Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="M18.5,16c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm0,3c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Zm5.332-2.904c.218-.776-.292-1.642-1.076-1.828-.387-.102-.791-.044-1.137,.159l-.223,.131c-.408-.34-.881-.606-1.396-.786v-.271c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5v.271c-.515,.18-.988,.446-1.396,.786l-.223-.131c-.345-.203-.748-.261-1.137-.159-.785,.187-1.294,1.053-1.076,1.828,.101,.389,.347,.714,.692,.916l.234,.138c-.064,.3-.094,.576-.094,.851s.03,.551,.094,.85l-.234,.138c-.345,.203-.591,.528-.691,.916-.218,.777,.291,1.642,1.076,1.829,.389,.103,.792,.044,1.137-.159l.223-.131c.408,.34,.881,.606,1.396,.786v.271c0,.827,.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-.271c.515-.18,.988-.446,1.396-.786l.223,.131c.347,.203,.75,.262,1.137,.159,.785-.187,1.294-1.052,1.076-1.829-.101-.388-.346-.713-.692-.917l-.233-.137c.064-.299,.094-.575,.094-.85s-.03-.551-.094-.851l.233-.137c.346-.203,.591-.528,.692-.917Zm-1.982,.949c.103,.361,.151,.665,.151,.955s-.048,.594-.151,.955c-.062,.219,.031,.453,.228,.568l.556,.325c.563,.32,.048,1.201-.507,.863l-.541-.318c-.196-.116-.446-.084-.607,.077-.43,.432-.984,.743-1.603,.903-.221,.058-.375,.257-.375,.484v.642c0,.275-.224,.5-.5,.5s-.5-.225-.5-.5v-.642c0-.228-.154-.427-.375-.484-.619-.16-1.173-.472-1.603-.903-.096-.097-.225-.146-.354-.146-.087,0-.175,.022-.253,.069l-.541,.318c-.554,.337-1.07-.543-.507-.862l.556-.326c.197-.115,.291-.35,.228-.568-.103-.361-.151-.665-.151-.955s.048-.594,.151-.955c.062-.219-.031-.452-.228-.567l-.557-.328c-.564-.32-.045-1.198,.507-.861l.541,.318c.196,.116,.446,.084,.607-.077,.43-.432,.984-.743,1.603-.903,.221-.058,.375-.257,.375-.484v-.642c0-.275,.224-.5,.5-.5s.5,.225,.5,.5v.642c0,.228,.154,.427,.375,.484,.619,.16,1.173,.472,1.603,.903,.161,.161,.412,.193,.607,.077l.541-.318c.553-.337,1.071,.542,.507,.862l-.556,.327c-.196,.115-.29,.349-.228,.567Zm-9.349,5.955H4.5c-1.93,0-3.5-1.57-3.5-3.5v-7.5H14.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5h3.028c.231,0,.464,.055,.671,.158l3.156,1.578c.345,.173,.732,.264,1.118,.264h7.028c1.93,0,3.5,1.57,3.5,3.5,0,.276,.224,.5,.5,.5s.5-.224,.5-.5c0-2.481-2.019-4.5-4.5-4.5h-.5v-1.758c0-.922-.374-1.823-1.025-2.475l-1.742-1.742c-.662-.661-1.541-1.025-2.475-1.025h-5.257c-1.93,0-3.5,1.57-3.5,3.5v1.5h-.5C2.019,5,0,7.019,0,9.5v10c0,2.481,2.019,4.5,4.5,4.5H12.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM17.268,3.475c.156,.155,.28,.336,.388,.525h-2.156c-.276,0-.5-.225-.5-.5V1.342c.188,.109,.368,.233,.525,.391l1.742,1.742Zm-11.268,.025c0-1.379,1.122-2.5,2.5-2.5h5.257c.082,0,.162,.016,.243,.024V3.5c0,.827,.673,1.5,1.5,1.5h2.476c.008,.081,.024,.161,.024,.242v1.758h-5.528c-.231,0-.464-.055-.671-.158l-3.156-1.578c-.345-.173-.732-.264-1.118-.264h-1.528v-1.5Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Advanced Document Automation</h3>
                                    <p className="text-gray-600">
                                    Automatically extract data from a wealth of healthcare documents, including medical records, insurance claims, lab reports, and prescriptions. Process large volumes of documents in almost any format simultaneously.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Advanced Search Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m24,20h-4v4h-1v-4h-4v-1h4v-4h1v4h4v1Zm-15.866-11.913c-.203-.054-.414-.087-.634-.087H2.5c-1.378,0-2.5,1.122-2.5,2.5v3.5h1v-3.5c0-.827.673-1.5,1.5-1.5h3.527c.612-.456,1.324-.775,2.106-.913Zm7.366.913c.827,0,1.5.673,1.5,1.5v2.5h1v-2.5c0-1.378-1.122-2.5-2.5-2.5h-5c-.22,0-.431.033-.634.087.782.137,1.494.457,2.106.913h3.527ZM2,3c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm7,0c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Zm1,0c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm-2,7c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm-2,3c0,1.103.897,2,2,2s2-.897,2-2-.897-2-2-2-2,.897-2,2Zm-.5,5c-1.378,0-2.5,1.121-2.5,2.5v3.5h1v-3.5c0-.827.673-1.5,1.5-1.5h5c.827,0,1.5.673,1.5,1.5v-1.987c-.419-.317-.935-.513-1.5-.513h-5Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Patient Record Management</h3>
                                    <p className="text-gray-600">
                                    Integrate extracted data into centralized electronic health record (EHR) systems for easy access and retrieval. Delivers the highest accuracy and reliability in patient documentation allowing for faster response times.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Contract Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m10.5,23h-6c-1.93,0-3.5-1.57-3.5-3.5v-7c0-1.93,1.57-3.5,3.5-3.5h10c.615,0,1.22.162,1.75.468.239.139.545.056.683-.182.139-.239.057-.545-.182-.683-.239-.138-.492-.244-.75-.336v-1.767c0-3.584-2.916-6.5-6.5-6.5S3,2.916,3,6.5v1.776c-1.742.621-3,2.271-3,4.224v7c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM4,6.5c0-3.033,2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5v1.533c-.166-.018-.332-.033-.5-.033H4.5c-.171,0-.334.032-.5.051v-1.551Zm5.5,8.5c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5Zm8-4c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.033,0-5.5-2.468-5.5-5.5s2.467-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.467,5.5-5.5,5.5Zm3.35-6.857c.192.198.187.515-.012.707l-2.703,2.614c-.36.355-.835.533-1.311.533s-.949-.177-1.312-.531l-1.364-1.347c-.197-.193-.199-.51-.005-.707.194-.195.511-.198.707-.004l1.363,1.345c.337.33.886.326,1.223-.004l2.706-2.618c.2-.191.516-.187.707.012Z"></path>  
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Security and Compliance Solutions</h3>
                                    <p className="text-gray-600">
                                    Intelligent Document Processing for healthcare simplifies and facilitates HIPAA compliance with audit trails as well as keeping patient records safe and secure. Deploy robust end-to-end encryption and protect against unauthorized access and breaches.  
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Compliance and Risk Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m8.5,11H2.5c-1.378,0-2.5,1.122-2.5,2.5v8c0,1.378,1.122,2.5,2.5,2.5h6c1.378,0,2.5-1.122,2.5-2.5v-8c0-1.378-1.122-2.5-2.5-2.5Zm1.5,10.5c0,.827-.673,1.5-1.5,1.5H2.5c-.827,0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5,1.5-1.5h6c.827,0,1.5.673,1.5,1.5v8Zm-2-7c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4c.276,0,.5.224.5.5Zm0,3c0,.276-.224.5-.5.5h-1c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c.276,0,.5.224.5.5Zm-3,0c0,.276-.224.5-.5.5h-1c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c.276,0,.5.224.5.5Zm3,3c0,.276-.224.5-.5.5h-1c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c.276,0,.5.224.5.5Zm-3,0c0,.276-.224.5-.5.5h-1c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h1c.276,0,.5.224.5.5ZM21,0H6c-1.654,0-3,1.346-3,3v5.5c0,.276.224.5.5.5s.5-.224.5-.5V3c0-1.103.897-2,2-2s2,.897,2,2,.897,2,2,2h10v14.5c0,1.93-1.57,3.5-3.5,3.5h-3c-.276,0-.5.224-.5.5s.224.5.5.5h3c2.481,0,4.5-2.019,4.5-4.5V5h1c1.103,0,2-.897,2-2,0-1.654-1.346-3-3-3Zm1,4h-12c-.551,0-1-.449-1-1,0-.768-.29-1.469-.766-2h12.766c1.103,0,2,.897,2,2,0,.551-.449,1-1,1Z"></path>   
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Billing and Claims Processing</h3>
                                    <p className="text-gray-600">
                                    Automated claims management boosts processing turnaround times and validates them against policies and patient records. Accelerate reimbursements and reduce the risk of claim denials with fewer delays.  
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Case Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m15,12.5V4.5c0-1.93-1.57-3.5-3.5-3.5h-7c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h8c.276,0,.5.224.5.5s-.224.5-.5.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h7c2.481,0,4.5,2.019,4.5,4.5v8c0,.276-.224.5-.5.5s-.5-.224-.5-.5Zm-8.5,1.5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm5,0h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-5,4h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm5,0h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-3.5-8c.276,0,.5-.224.5-.5v-2h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-2v-2c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2v2c0,.276.224.5.5.5Zm9,5.5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5Zm1,0c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5,1.5Zm5.984,7.875c-.504-1.956-2.39-3.375-4.484-3.375s-3.98,1.419-4.484,3.375c-.068.267.092.54.359.609.269.069.54-.093.609-.36.385-1.496,1.896-2.625,3.516-2.625s3.131,1.128,3.516,2.625c.059.226.262.375.484.375.041,0,.083-.005.125-.016.268-.069.428-.342.359-.609Z"></path> 
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Clinical Decision Support</h3>
                                    <p className="text-gray-600">
                                    Advanced predictive analysis helps forecast patient outcomes and uncover trends hidden in data. Integrates extracted data with clinical decision support systems (CDSS) to provide actionable insights.   
                                    </p>
                                </div>
                               


                            </div>



                            <div className="text-center mt-16">
                                <p className="text-lg font-semibold text-gray-600 mb-4">
                                    Start your document transformation with ApricityTS today.
                                </p>
                                <button className="bg-[#904AF2] text-white font-semibold py-3 px-6 rounded-full transform transition-all duration-500 hover:scale-105">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* content of image and other left right */}
                    <div className="bg-gray-50 py-16 px-4 lg:px-8">
                        <h2 className="text-center text-4xl font-bold text-[#904AF2] mb-12" style={{ fontWeight: "700" }}>
                            Which Legal Departments Stand to Benefit the Most?
                        </h2>

                        {/* Department Card */}
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Content: Contract Management */}
                            <div>
                                <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                <ul className="space-y-3">
                                    <li className="text-gray-600 text-lg flex items-start">
                                        <span className="text-green-600 mr-2">✔</span>
                                        Automate the review process highlighting key terms and clauses.
                                    </li>
                                    <li className="text-gray-600 text-lg flex items-start">
                                        <span className="text-green-600 mr-2">✔</span>
                                        Track and manage contract renewals and deadlines automatically.
                                    </li>
                                    <li className="text-gray-600 text-lg flex items-start">
                                        <span className="text-green-600 mr-2">✔</span>
                                        Quickly extract and categorize clauses from contracts.
                                    </li>
                                </ul>
                            </div>

                            {/* Right Image */}
                            <div className="flex justify-center">
                                <img
                                    src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                    alt="Contract Management"
                                    className="w-full h-auto max-w-md rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                        <div>
                            {/* 2nd content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Litigation and Case Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Manage and organize vast amounts of case documents.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Drive efficiency in the discovery phase.
                                        </li>
                                        <li className="text-gray-800 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Rapid retrieval of specific case files and related documentation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* 3 content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                {/* Left Content: Contract Management */}
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Automate the review process highlighting key terms and clauses.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Track and manage contract renewals and deadlines automatically.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Quickly extract and categorize clauses from contracts.
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                            <div></div>
                            {/* 4 content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Automate the review process highlighting key terms and clauses.
                                        </li >
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Track and manage contract renewals and deadlines automatically.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Quickly extract and categorize clauses from contracts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* 5 content */}
                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                {/* Left Content: Contract Management */}
                                <div>
                                    <h3 className="text-3xl font-semibold text-[#904AF2] mb-4">Contract Management</h3>
                                    <ul className="space-y-3">
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Automate the review process highlighting key terms and clauses.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Track and manage contract renewals and deadlines automatically.
                                        </li>
                                        <li className="text-gray-600 text-lg flex items-start">
                                            <span className="text-green-600 mr-2">✔</span>
                                            Quickly extract and categorize clauses from contracts.
                                        </li>
                                    </ul>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://sanad.ai/wp-content/uploads/2023/12/ID-1.jpg" // Replace with the actual path to your image
                                        alt="Contract Management"
                                        className="w-full h-auto max-w-md rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                            <div></div>

                        </div>
                        {/* CTA Button */}
                        <div className="text-center mt-12">
                            <button className="bg-[#904AF2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#904AF2] transition-colors">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                    {/* // sanad features */}
                    <div className="max-w-6xl mx-auto px-4 py-16">
                        <h2 className="text-center text-4xl font-bold mb-10 text-[#904AF2]">Why Choose ApricityTS for Healthcare?</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
                            {/* AI-powered Data Extraction */}
                            <div className="p-6 border rounded-3xl shadow-md border-solid border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Unified View of Patient Data</h3>
                                <p className="text-gray-600 mb-6">
                                Data migration and high volumes of documentation create issues in patient care continuity. Intelligent Document Processing for healthcare not only consolidates patient data, but our AI expedites every stage of processing and management from admission to release.   
                                </p>
                               
                            </div>

                            {/* Excellent Scalability */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Total Financial Oversight</h3>
                                <p className="text-gray-600 mb-6">
                                Insurance policies and claim adjudication rules make financial processes confusing and costly. Automated validation prevents reconciliations of over and underpayments, solve billing issues, and avoid delays in payments.    
                                </p>
                                
                            </div>

                            {/* Super Data Accessibility */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Regulatory Updates Integration</h3>
                                <p className="text-gray-600 mb-6">
                                Manual handling of dynamic healthcare requirements and compliance-related incidents drains immense amounts of resources. Continuously monitor and verify vendor compliance and your own with automated tracking and reporting.   
                                </p>
                               
                            </div>

                            {/* Rock Solid Compliance Tools */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Data-Driven Patient Outcomes</h3>
                                <p className="text-gray-600 mb-6">
                                Delayed clinical insights, data overloads, and integration problems hinder quality care at its core. Give healthcare professionals the tools they need to make better decisions in real-time that are accurate and use AI to filter by relevance.   
                                </p>
                               
                            </div>
                        </div>

                        {/* Advanced Fraud Protection: Full-width card */}
                        <div className="mt-8">
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...  hover:shadow-lg transition duration-300 ease-in-out lg:col-span-2">
                                <h3 className="text-xl font-semibold mb-4">Fully Optimized Admin Operations</h3>
                                <p className="text-gray-600 mb-6">
                                Departmental coordination and resource allocation inefficiencies have a significant impact on profitability. AI-driven scheduling and optimal resource management means more productivity in staff, equipment, and facilities.  
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>


                {/* FAQ Section */}
                <div className="faq-section bg-[#904AF2] py-8 px-6 lg:px-24">
                    <h2 className="text-white text-3xl font-bold mb-6 text-center">FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item bg-white rounded-md shadow-md">
                                <button
                                    className="faq-question w-full p-4 text-left text-lg font-semibold text-gray-800 flex justify-between items-center"
                                    onClick={() => this.toggleFAQ(index)}
                                >
                                    {faq.question}
                                    <span>{this.state.activeIndex === index ? '↑' : '↓'}</span>
                                </button>
                                {this.state.activeIndex === index && (
                                    <div className="faq-answer p-4 text-gray-700">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Continue with other JSX content of your component */}
            </div>
        );
    }
}

export default ExistingComponent;
