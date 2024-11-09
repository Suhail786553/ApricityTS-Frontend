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
                name: 'Invoices',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m19,10.5c0,.276.224.5.5.5s.5-.224.5-.5v-.515c0-1.737-.677-3.369-1.904-4.596l-3.484-3.485c-1.229-1.228-2.861-1.904-4.597-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h13c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.335,0,.663.038.985.096v5.404c0,1.378,1.122,2.5,2.5,2.5h5.404c.058.323.096.651.096.985v.515Zm-5.5-2.5c-.827,0-1.5-.673-1.5-1.5V1.379c.704.273,1.354.682,1.904,1.231l3.484,3.485c.55.55.959,1.199,1.232,1.904h-5.121Zm4.5,5.5v7c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5s.5.224.5.5Zm-3.29.619c-.094-.459-.477-1.119-1.214-1.119s-1.126.689-1.207,1.088l-1.279,6.308c-.061.302.17.583.48.585h.018c.235.001.438-.163.485-.392l.323-1.589h2.376l.333,1.61c.047.226.247.389.48.39.312.002.546-.282.485-.585l-1.28-6.296Zm-2.19,3.881l.757-3.715c.024-.118.085-.284.219-.284s.189.132.227.316l.763,3.683h-1.965Zm8.967-5h-1.487c-.552,0-1,.449-1,1v6c0,.551.448,1,1,1h1.5c1.379,0,2.5-1.122,2.5-2.5v-2.988c0-1.385-1.127-2.512-2.513-2.512Zm1.513,5.5c0,.827-.673,1.5-1.5,1.5h-1.5v-6h1.487c.834,0,1.513.678,1.513,1.512v2.988Zm-15-5.5h-1c-.551,0-1,.449-1,1v6.5c0,.276.224.5.5.5s.5-.224.5-.5v-2.5h1c1.378,0,2.5-1.122,2.5-2.5s-1.122-2.5-2.5-2.5Zm0,4h-1v-3h1c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Receipts',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m22,20v-10.002c1.111-.048,2-.966,2-2.089,0-1.101-.6-2.11-1.563-2.634l-3.945-2.145c-.242-.13-.547-.043-.679.201-.132.243-.042.546.2.678l3.946,2.145c.642.349,1.041,1.021,1.041,1.755,0,.602-.489,1.091-1.091,1.091H2.091c-.602,0-1.091-.489-1.091-1.091,0-.732.399-1.405,1.041-1.755l3.947-2.143c.243-.132.333-.436.201-.678-.133-.242-.435-.332-.678-.201l-3.947,2.144c-.964.526-1.562,1.535-1.562,2.633,0,1.122.889,2.041,2,2.089v10.002c-1.103,0-2,.897-2,2s.897,2,2,2h6.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5H2c-.551,0-1-.449-1-1s.449-1,1-1h3.5c.276,0,.5-.224.5-.5v-10.5h5.5v2h-1.005c-1.376,0-2.495,1.119-2.495,2.495,0,1.108.744,2.095,1.81,2.399l4.105,1.173c.639.182,1.085.773,1.085,1.438,0,.824-.671,1.495-1.495,1.495h-3.01c-.824,0-1.495-.671-1.495-1.495,0-.276-.224-.5-.5-.5s-.5.224-.5.5c0,1.376,1.119,2.495,2.495,2.495h1.005v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h1.005c1.376,0,2.495-1.119,2.495-2.495,0-1.108-.744-2.095-1.81-2.399l-4.106-1.173c-.638-.182-1.084-.773-1.084-1.438,0-.824.671-1.495,1.495-1.495h3.01c.824,0,1.495.671,1.495,1.495,0,.276.224.5.5.5s.5-.224.5-.5c0-1.376-1.119-2.495-2.495-2.495h-1.005v-2h5.5v10.5c0,.276.224.5.5.5h3.5c.552,0,1,.449,1,1s-.448,1-1,1h-6.5c-.276,0-.5.224-.5.5s.224.5.5.5h6.5c1.103,0,2-.897,2-2s-.897-2-2-2Zm-17,0h-2v-10h2v10Zm14-10h2v10h-2v-10ZM8.189,3.811c-.195-.195-.195-.512,0-.707s.512-.195.707,0l2.604,2.604V.5c0-.276.224-.5.5-.5s.5.224.5.5v5.212l2.652-2.57c.199-.193.514-.187.707.011.191.198.187.515-.012.707l-2.793,2.707c-.289.289-.67.434-1.053.434-.384,0-.77-.146-1.062-.439l-2.75-2.75Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Tax Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m7,20.5v-6.5h-2c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c.276,0,.5.224.5.5s-.224.5-.5.5h-2v6.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5Zm12.463,2.521c.104.256-.019.547-.274.651-.536.217-1.104.328-1.688.328H5.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C1,2.019,3.019,0,5.5,0h5.515c1.735,0,3.368.676,4.597,1.904l3.484,3.485c1.228,1.227,1.904,2.859,1.904,4.596v.515c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.515c0-.334-.03-.663-.088-.985h-5.412c-1.379,0-2.5-1.122-2.5-2.5V1.088c-.322-.058-.651-.088-.985-.088h-5.515c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h12c.455,0,.896-.085,1.312-.254.255-.104.548.019.651.275ZM14.904,2.611c-.552-.551-1.199-.97-1.904-1.243v5.132c0,.827.673,1.5,1.5,1.5h5.132c-.273-.706-.693-1.353-1.244-1.904l-3.484-3.485Zm-4.888,17.762l1.667-6.334c.16-.607.688-1.015,1.316-1.015s1.156.408,1.316,1.015l1.667,6.334c.07.267-.089.541-.356.611-.042.011-.085.017-.127.017-.222,0-.425-.148-.483-.373l-.43-1.635c-.028.005-.057.008-.086.008h-3.088l-.428,1.627c-.069.267-.348.428-.61.356-.268-.07-.427-.344-.356-.611Zm1.658-2.373h2.65l-.976-3.707c-.066-.25-.284-.27-.35-.27s-.283.019-.35.27l-.976,3.707Zm8.401-1l1.858-3.252c.137-.24.054-.545-.187-.682-.237-.137-.545-.055-.683.186l-1.565,2.74-1.565-2.74c-.139-.241-.447-.323-.683-.186-.24.137-.323.442-.187.682l1.858,3.252-1.858,3.252c-.137.24-.054.545.187.682.078.045.163.066.248.066.173,0,.342-.09.435-.252l1.565-2.74,1.565,2.74c.093.162.262.252.435.252.085,0,.17-.021.248-.066.24-.137.323-.442.187-.682l-1.858-3.252Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Credit Card Statements',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M19.489,15.614l-.994,4.763c-.076,.363-.396,.623-.766,.623-.359,0-.672-.244-.759-.592l-1.202-4.775c-.079-.313,.158-.617,.481-.617,.227,0,.425,.154,.481,.374l.98,3.87,.803-3.85c.048-.23,.251-.395,.486-.395h.005c.315,0,.55,.289,.486,.597Zm-6.489,.386c.423,0,.802,.268,.943,.667,.092,.26,.376,.398,.638,.305,.26-.092,.397-.378,.305-.639-.282-.797-1.04-1.333-1.886-1.333-1.103,0-2,.897-2,2v2c0,1.103,.897,2,2,2,.846,0,1.604-.536,1.886-1.333,.092-.261-.044-.547-.305-.639-.262-.093-.546,.045-.638,.305-.141,.399-.52,.667-.943,.667-.551,0-1-.448-1-1v-2c0-.552,.449-1,1-1ZM24,7.5v5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-1.5H1v5.5c0,1.93,1.57,3.5,3.5,3.5h4c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H4.5c-2.481,0-4.5-2.019-4.5-4.5V7.5C0,5.019,2.019,3,4.5,3h15c2.481,0,4.5,2.019,4.5,4.5ZM1.051,7H22.949c-.245-1.692-1.691-3-3.449-3H4.5c-1.758,0-3.204,1.308-3.449,3Zm21.949,1H1v2H23v-2Zm.371,7.017h-.005c-.235,0-.438,.165-.486,.395l-.803,3.85-.98-3.87c-.056-.22-.254-.374-.481-.374-.323,0-.56,.304-.481,.617l1.202,4.775c.088,.348,.4,.592,.759,.592,.371,0,.691-.26,.766-.623l.994-4.763c.064-.308-.171-.597-.486-.597Zm-18.371-1.017c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm0,1c-.551,0-1,.448-1,1s.449,1,1,1,1-.448,1-1-.449-1-1-1Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Insurance Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m13.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.334,0,.663.03.985.088v5.412c0,1.379,1.121,2.5,2.5,2.5,0,0,5.84.01,5.937-.016.268-.068.429-.341.36-.608-.289-1.13-.877-2.163-1.702-2.987l-3.484-3.484c-1.228-1.228-2.86-1.904-4.597-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM12,1.368c.706.273,1.353.693,1.904,1.244l3.484,3.484c.543.543.964,1.193,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368Zm-1,13.132c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm0,4c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm11.896-6.569l-4.239-1.405c-.102-.033-.213-.033-.314,0l-4.24,1.405c-.659.22-1.103.833-1.103,1.526v3.917c0,3.613,3.868,5.829,5.053,6.423,0,0,.244.165.448.165s.419-.13.419-.13c1.192-.479,5.08-2.363,5.08-6.458v-3.917c0-.693-.443-1.307-1.104-1.526Zm.104,5.443c0,3.468-3.431,5.119-4.477,5.54-1.056-.528-4.523-2.5-4.523-5.54v-3.917c0-.262.168-.494.418-.577l4.082-1.354,4.081,1.354c.251.083.419.315.419.577v3.917Zm-12-6.874c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Financial Reports',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m24,19.505c0,1.376-1.119,2.495-2.495,2.495h-1.005v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.5h-1.005c-1.376,0-2.495-1.119-2.495-2.495,0-.276.224-.5.5-.5s.5.224.5.5c0,.824.671,1.495,1.495,1.495h3.01c.824,0,1.495-.671,1.495-1.495,0-.664-.446-1.255-1.084-1.438l-4.106-1.174c-1.065-.304-1.81-1.29-1.81-2.398,0-1.376,1.119-2.495,2.495-2.495h1.005v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5h1.005c1.376,0,2.495,1.119,2.495,2.495,0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-.824-.671-1.495-1.495-1.495h-3.01c-.824,0-1.495.671-1.495,1.495,0,.664.446,1.255,1.084,1.438l4.106,1.174c1.065.304,1.81,1.29,1.81,2.398ZM4.5,3h1c.276,0,.5-.224.5-.5,0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5,0,.276.224.5.5.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,.276.224.5.5.5s.5-.224.5-.5v-3c0-2.481-2.019-4.5-4.5-4.5h-.55c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217.86-2.45,2h-.55C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h9c.583,0,1.15-.11,1.688-.327.256-.104.379-.396.276-.651-.103-.256-.395-.378-.651-.276-.417.169-.859.255-1.312.255H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5Zm4.662,2.323c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Zm0,6c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Zm0,6c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Contracts & Agreements',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m12,12h3.537l7.645-7.732c.975-.975.975-2.561,0-3.535-.941-.944-2.586-.947-3.537.002l-7.645,7.732v3.533Zm1-3.123l7.354-7.438c.566-.566,1.555-.566,2.121,0,.585.585.585,1.536-.002,2.123l-7.354,7.438h-2.119v-2.123Zm7,9.123v-7.67l-1,1.012v6.658h-9v3c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-.771-.301-1.468-.78-2h11.35l.938-.949c-.166-.029-.334-.051-.508-.051H3C1.346,0,0,1.346,0,3v3h5v15c0,1.654,1.346,3,3,3h13c1.654,0,3-1.346,3-3v-3h-4ZM5,5H1v-2c0-1.103.897-2,2-2s2,.897,2,2v2Zm18,16c0,1.103-.897,2-2,2h-10.766c.476-.531.766-1.232.766-2v-2h12v2Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Purchase Orders',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M2.5,10c.276,0,.5-.224,.5-.5V3.5c0-1.378,1.121-2.5,2.5-2.5h4.258c.082,0,.161,.016,.242,.024V3.5c0,.827,.673,1.5,1.5,1.5h2.476c.008,.081,.024,.16,.024,.243v4.257c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V5.243c0-.935-.364-1.813-1.025-2.475l-1.742-1.742c-.651-.651-1.553-1.025-2.475-1.025H5.5c-1.93,0-3.5,1.57-3.5,3.5v6c0,.276,.224,.5,.5,.5ZM13.268,3.475c.158,.158,.282,.337,.391,.525h-2.158c-.275,0-.5-.224-.5-.5V1.344c.189,.109,.37,.233,.525,.388l1.742,1.742Zm9.913,6.18c-.984-.923-2.66-.854-3.548,.166l-3.732,4.102c-.314-1.108-1.335-1.922-2.543-1.922H3.5c-1.93,0-3.5,1.57-3.5,3.5v5c0,1.93,1.57,3.5,3.5,3.5h5.965c2.707,0,5.292-1.159,7.093-3.181l6.806-7.639c.911-1.022,.829-2.604-.183-3.526Zm-.563,2.861l-6.806,7.639c-1.611,1.809-3.925,2.846-6.347,2.846H3.5c-1.379,0-2.5-1.122-2.5-2.5v-5c0-1.378,1.121-2.5,2.5-2.5H13.357c.905,0,1.643,.737,1.643,1.642,0,.812-.606,1.511-1.398,1.624l-6.161,.737c-.274,.033-.47,.282-.437,.556,.032,.274,.282,.471,.556,.437l6.173-.739c1.021-.146,1.844-.878,2.145-1.824l4.496-4.94c.533-.612,1.545-.657,2.134-.1,.609,.555,.658,1.506,.11,2.122Z"></path>
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
            Realize Your Vision with Automated Document Processing for Finance
            </h1>
            <p className="text-lg mb-4">
            By automating document processing, financial services entities gain a deeper understanding of crucial data and the ability to manage it optimally. AI-powered workflows generate productivity that makes scalability simple. 
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
