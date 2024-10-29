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
                    <div className="min-h-screen bg-[rgb(144,74,242)] flex items-center justify-center">
                        {/* Container */}
                        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                            {/* Left Section - Content */}
                            <div className="text-white flex flex-col justify-center">
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
                            <div className="flex justify-center">
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
