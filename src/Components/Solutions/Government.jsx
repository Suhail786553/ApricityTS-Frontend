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
                name: 'Identification Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m19.5,4h-4.5v-1c0-1.654-1.346-3-3-3s-3,1.346-3,3v1h-4.5C2.019,4,0,6.019,0,8.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-11c0-2.481-2.019-4.5-4.5-4.5Zm-9.5-1c0-1.103.897-2,2-2s2,.897,2,2v3.5c0,.275-.224.5-.5.5h-3c-.276,0-.5-.225-.5-.5v-3.5Zm13,16.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-11c0-1.93,1.57-3.5,3.5-3.5h4.5v1.5c0,.827.673,1.5,1.5,1.5h3c.827,0,1.5-.673,1.5-1.5v-1.5h4.5c1.93,0,3.5,1.57,3.5,3.5v11Zm-11-3.5c1.654,0,3-1.346,3-3s-1.346-3-3-3-3,1.346-3,3,1.346,3,3,3Zm0-5c1.103,0,2,.897,2,2s-.897,2-2,2-2-.897-2-2,.897-2,2-2Zm4.985,9.88c.066.268-.097.539-.365.605-.041.01-.081.015-.121.015-.224,0-.428-.152-.485-.38-.449-1.808-2.137-3.12-4.015-3.12s-3.566,1.312-4.015,3.12c-.067.268-.339.429-.606.365-.268-.066-.431-.338-.365-.605.558-2.248,2.655-3.88,4.985-3.88s4.427,1.632,4.985,3.88Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Financial Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                     <path d="m24,19.505c0,1.376-1.119,2.495-2.495,2.495h-1.005v1.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1.5h-1.005c-1.376,0-2.495-1.119-2.495-2.495,0-.276.224-.5.5-.5s.5.224.5.5c0,.824.671,1.495,1.495,1.495h3.01c.824,0,1.495-.671,1.495-1.495,0-.664-.446-1.255-1.084-1.438l-4.106-1.174c-1.065-.304-1.81-1.29-1.81-2.398,0-1.376,1.119-2.495,2.495-2.495h1.005v-1.5c0-.276.224-.5.5-.5s.5.224.5.5v1.5h1.005c1.376,0,2.495,1.119,2.495,2.495,0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-.824-.671-1.495-1.495-1.495h-3.01c-.824,0-1.495.671-1.495,1.495,0,.664.446,1.255,1.084,1.438l4.106,1.174c1.065.304,1.81,1.29,1.81,2.398ZM4.5,3h1c.276,0,.5-.224.5-.5,0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5,0,.276.224.5.5.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,.276.224.5.5.5s.5-.224.5-.5v-3c0-2.481-2.019-4.5-4.5-4.5h-.55c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217.86-2.45,2h-.55C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5h9c.583,0,1.15-.11,1.688-.327.256-.104.379-.396.276-.651-.103-.256-.395-.378-.651-.276-.417.169-.859.255-1.312.255H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5Zm4.662,2.323c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Zm0,6c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Zm0,6c.195.195.195.512,0,.707l-2.525,2.525c-.287.287-.667.444-1.072.444h0c-.404,0-.785-.158-1.07-.444l-1.347-1.346c-.195-.195-.195-.512,0-.707s.512-.195.707,0l1.347,1.346c.098.098.227.151.364.151s.268-.054.365-.151l2.525-2.525c.195-.195.512-.195.707,0h0Z"></path>  
                    </svg>
                ),
            },
            {
                name: 'Legal and Regulatory Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                      <path d="m24,4.5v15c0,2.481-2.019,4.5-4.5,4.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5h-9c-1.93,0-3.5,1.57-3.5,3.5v5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5Zm-13.5.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-9c-.276,0-.5.224-.5.5s.224.5.5.5Zm0,4h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-9c-.276,0-.5.224-.5.5s.224.5.5.5Zm0,4h7c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-7c-.276,0-.5.224-.5.5s.224.5.5.5Zm7.5,2c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm0,1c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm-7,7.5c0,.276-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h.5v-1c0-1.654,1.346-3,3-3h.378c-.915-2.409-1.378-3.936-1.378-4.54,0-1.38,1.098-2.46,2.5-2.46s2.5,1.08,2.5,2.46c0,.604-.464,2.131-1.378,4.54h.378c1.654,0,3,1.346,3,3v1h.5c.276,0,.5.224.5.5Zm-5.552-4.5h.104c1.342-3.493,1.448-4.356,1.448-4.54,0-.818-.659-1.46-1.5-1.46s-1.5.642-1.5,1.46c0,.184.106,1.047,1.448,4.54Zm-3.448,4h7v-1c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2v1Z"></path> 
                    </svg>
                ),
            },
            {
                name: 'Public Records',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                    <path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h11c2.481,0,4.5,2.019,4.5,4.5v15c0,2.481-2.019,4.5-4.5,4.5ZM6.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H6.5Zm11.5,4.5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5Zm0,6c0-.276-.224-.5-.5-.5h-6c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5ZM8.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Zm1.5,7h-2c-.276,0-.5-.224-.5-.5v-2c0-.276,.224-.5,.5-.5h2c.276,0,.5,.224,.5,.5v2c0,.276-.224,.5-.5,.5Zm-1.5-1h1v-1h-1v1Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Administrative Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                      <path d="M14,7.5c0,.276-.224,.5-.5,.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H13.5c.276,0,.5,.224,.5,.5Zm0,3c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5H13.5c.276,0,.5-.224,.5-.5Zm-9.5,5.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h6c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5Zm16,2c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm-1,0c0-.552-.449-1-1-1s-1,.448-1,1,.449,1,1,1,1-.448,1-1Zm4.332,1.903c.218,.777-.29,1.642-1.076,1.829-.387,.103-.792,.044-1.137-.159l-.223-.131c-.408,.34-.881,.606-1.396,.786v.271c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.271c-.515-.18-.988-.446-1.396-.786l-.223,.131c-.345,.203-.749,.262-1.137,.159-.785-.187-1.294-1.052-1.076-1.829,.101-.388,.346-.713,.691-.916l.234-.138c-.064-.299-.094-.575-.094-.85s.03-.551,.094-.851l-.234-.138c-.345-.202-.591-.527-.692-.916-.218-.776,.291-1.642,1.076-1.828,.388-.102,.792-.044,1.137,.159l.223,.131c.408-.34,.881-.606,1.396-.786v-.271c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5v.271c.515,.18,.988,.446,1.396,.786l.223-.131c.345-.203,.75-.261,1.137-.159,.784,.186,1.294,1.052,1.076,1.828-.101,.389-.347,.714-.692,.917l-.233,.137c.064,.3,.094,.576,.094,.851s-.03,.551-.094,.85l.233,.137c.346,.204,.592,.529,.692,.917Zm-1.755-3.426l.556-.327c.564-.321,.046-1.199-.507-.862l-.541,.318c-.196,.116-.446,.084-.607-.077-.43-.432-.984-.743-1.603-.903-.221-.058-.375-.257-.375-.484v-.642c0-.275-.224-.5-.5-.5s-.5,.225-.5,.5v.642c0,.228-.154,.427-.375,.484-.619,.16-1.173,.472-1.603,.903-.161,.161-.412,.193-.607,.077l-.541-.318c-.552-.336-1.071,.542-.507,.861l.557,.328c.196,.115,.29,.349,.228,.567-.103,.361-.151,.665-.151,.955s.048,.594,.151,.955c.062,.219-.031,.453-.228,.568l-.556,.326c-.564,.32-.045,1.2,.507,.862l.541-.318c.195-.116,.446-.085,.607,.077,.43,.432,.984,.743,1.603,.903,.221,.058,.375,.257,.375,.484v.642c0,.275,.224,.5,.5,.5s.5-.225,.5-.5v-.642c0-.228,.154-.427,.375-.484,.619-.16,1.173-.472,1.603-.903,.161-.161,.411-.193,.607-.077l.541,.318c.555,.338,1.07-.543,.507-.863l-.556-.325c-.197-.115-.291-.35-.228-.568,.103-.361,.151-.665,.151-.955s-.048-.594-.151-.955c-.062-.219,.031-.452,.228-.567Zm-9.577,6.522H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h1c.276,0,.5-.224,.5-.5,0-.827,.673-1.5,1.5-1.5h3c.827,0,1.5,.673,1.5,1.5,0,.276,.224,.5,.5,.5h1c1.93,0,3.5,1.57,3.5,3.5v3c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-3c0-2.481-2.019-4.5-4.5-4.5h-.55c-.232-1.14-1.242-2-2.45-2h-3c-1.208,0-2.217,.86-2.45,2h-.55C2.019,2,0,4.019,0,6.5v13c0,2.481,2.019,4.5,4.5,4.5H12.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-.5-9.5c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h7c.276,0,.5-.224,.5-.5Z"></path>  
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
                name: 'Licensing and Permits',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M20.1,5.39l-3.48-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h3c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5h-3c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v9.51c0,1.25-.67,2.41-1.75,3.03-.24,.14-.32,.44-.18,.68,.14,.24,.45,.32,.68,.18,1.39-.8,2.25-2.3,2.25-3.9V9.99c0-1.74-.68-3.37-1.9-4.6Zm-4.6,2.61c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.48,3.49c.55,.55,.97,1.2,1.24,1.9h-5.13Zm-1,5c-1.93,0-3.5,1.57-3.5,3.5,0,.95,.38,1.82,1,2.45v3.99c0,.43,.26,.82,.66,.99,.13,.05,.27,.08,.41,.08,.28,0,.55-.11,.75-.31l.68-.68,.68,.68c.31,.31,.76,.4,1.16,.23,.4-.17,.66-.55,.66-.99v-3.99c.62-.63,1-1.5,1-2.45,0-1.93-1.57-3.5-3.5-3.5Zm0,1c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Zm1.39,8.98l-1.39-1.39-1.39,1.39-.11-.05v-3.27c.45,.22,.96,.34,1.5,.34s1.05-.12,1.5-.34v3.27l-.11,.05Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Correspondence',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M18.83,21.77c-.21-.18-.52-.16-.71,.04-.66,.75-1.62,1.19-2.62,1.19H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v.51c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-.51c0-1.74-.68-3.37-1.9-4.6l-3.48-3.48c-1.23-1.23-2.86-1.9-4.6-1.9H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5H15.5c1.29,0,2.52-.56,3.38-1.52,.18-.21,.16-.52-.04-.71Zm-1.44-15.67c.55,.55,.97,1.2,1.24,1.9h-5.13c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.48,3.48Zm6.61,10.41c0,.5-.19,1-.58,1.38l-2.57,2.52c-.1,.09-.22,.14-.35,.14s-.26-.05-.36-.15c-.19-.2-.19-.51,0-.71l2.57-2.51c.06-.06,.1-.12,.14-.18H13.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h9.36c-.04-.07-.09-.13-.15-.19l-2.57-2.51c-.2-.19-.2-.51,0-.71,.19-.2,.51-.2,.71,0l2.57,2.51c.38,.38,.58,.89,.58,1.39,0,0,0,0,0,0s0,0,0,0Z"></path>
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
                                Start Your Digitization Journey with Document Automation for Government Entities
                                </h1>
                                <p className="text-lg mb-4">
                                Offer world class public services by powering your organization with AI built to maximize your people’s potential and remove inefficiencies from your daily operations.    
                                </p>
                                <p className="text-lg font-bold mb-6">Drive better productivity and deliver on your promises</p>
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
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Automated Document Processing</h3>
                                    <p className="text-gray-600">
                                    Gain the ability to handle large document volumes and let AI take the manual workload off your people. Our advanced technology processes an array of document types to make administrative tasks simpler and faster.  
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Advanced Search Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m13.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.334,0,.663.03.985.088v5.412c0,1.379,1.121,2.5,2.5,2.5,0,0,5.84.01,5.937-.016.268-.068.429-.341.36-.608-.289-1.13-.877-2.163-1.702-2.987l-3.484-3.484c-1.228-1.228-2.86-1.904-4.597-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM12,1.368c.706.273,1.353.693,1.904,1.244l3.484,3.484c.543.543.964,1.193,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368Zm-1,13.132c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm0,4c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm11.896-6.569l-4.239-1.405c-.102-.033-.213-.033-.314,0l-4.24,1.405c-.659.22-1.103.833-1.103,1.526v3.917c0,3.613,3.868,5.829,5.053,6.423,0,0,.244.165.448.165s.419-.13.419-.13c1.192-.479,5.08-2.363,5.08-6.458v-3.917c0-.693-.443-1.307-1.104-1.526Zm.104,5.443c0,3.468-3.431,5.119-4.477,5.54-1.056-.528-4.523-2.5-4.523-5.54v-3.917c0-.262.168-.494.418-.577l4.082-1.354,4.081,1.354c.251.083.419.315.419.577v3.917Zm-12-6.874c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Data Security</h3>
                                    <p className="text-gray-600">
                                    Safeguard sensitive information with robust encryption, access controls, and secure data handling protocols that prioritize the protection of governmental data assets. Utilizes advanced AI to uphold the privacy and integrity of public data.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Contract Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="m18.088,14.89l1.613-2.102c.255-.359.353-.813.27-1.245-.084-.431-.333-.8-.702-1.037-.467-.301-.982-.563-1.519-.799.161-.542.251-1.114.251-1.707v-1h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.5c0-1.385-1.536-6-3.25-6-.72,0-1.483.352-2.334,1.074-.24.205-.591.204-.831,0-.852-.724-1.615-1.075-2.335-1.075-1.714,0-3.25,4.615-3.25,6h-1.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v1c0,.605.092,1.189.259,1.74-.546.239-1.061.511-1.528.812-.37.238-.619.607-.702,1.041-.084.434.017.889.285,1.265l1.581,2.049c-1.839,1.702-2.895,4.077-2.895,6.594v2c0,.276.224.5.5.5s.5-.224.5-.5v-2c0-2.208.914-4.291,2.508-5.8l4.992,6.47v1.33c0,.276.224.5.5.5s.5-.224.5-.5v-1.33l4.977-6.485c1.602,1.509,2.523,3.601,2.523,5.815v2c0,.276.224.5.5.5s.5-.224.5-.5v-2c0-2.524-1.063-4.908-2.912-6.61ZM9.25,1c.466,0,1.033.281,1.687.838.614.521,1.508.521,2.126,0,.653-.556,1.221-.837,1.687-.837.61.003,2.25,3.376,2.25,5H7c0-1.624,1.64-4.997,2.25-5Zm7.75,6v1c0,2.757-2.243,5-5,5s-5-2.243-5-5v-1h10Zm-5,9.653l-1.104-2.76c.358.067.727.106,1.104.106s.746-.039,1.104-.106l-1.104,2.76Zm-6.883-4.393c-.101-.141-.139-.311-.106-.479.031-.162.124-.3.262-.389.416-.267.875-.509,1.362-.724.645,1.291,1.736,2.32,3.076,2.875.004.047,1.79,4.551,1.79,4.551v2.438l-6.383-8.273Zm7.383,5.834s1.786-4.504,1.79-4.551c1.351-.56,2.449-1.601,3.092-2.907.476.211.932.443,1.345.709.138.089.23.227.262.388.033.168-.004.337-.092.462l-6.396,8.332v-2.432Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Compliance and Risk Management</h3>
                                    <p className="text-gray-600">
                                    Stay aligned with legal and regulatory standards with automated compliance checks and reporting features. Automate ID verification and financial reporting, fostering trust and accountability.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Compliance and Risk Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                        <path d="m17.94,21.133c-.309,1.661-1.758,2.867-3.446,2.867H3.506c-1.009,0-1.97-.437-2.635-1.197-.668-.763-.974-1.776-.839-2.781.489-3.656,3.258-6.08,5.669-8.021C3.29,10.058.521,7.635.032,3.979-.103,2.972.203,1.957.871,1.194,1.534.435,2.493,0,3.5,0h11.001c1.688,0,3.134,1.206,3.44,2.867.051.271-.129.532-.4.583-.267.051-.532-.129-.582-.401-.22-1.187-1.253-2.049-2.458-2.049H3.5c-.719,0-1.402.311-1.877.852-.478.546-.696,1.273-.601,1.994.47,3.508,3.42,5.868,5.79,7.764.118.095.188.239.188.391s-.069.295-.188.391c-2.37,1.896-5.32,4.256-5.79,7.764-.096.719.123,1.444.601,1.99.476.543,1.162.855,1.883.855h10.988c1.206,0,2.242-.861,2.464-2.049.05-.273.315-.449.583-.4.271.051.45.312.399.583Zm.06-9.34v-3.293c0-.276-.224-.5-.5-.5s-.5.224-.5.5v3.5c0,.133.053.26.146.354l2,2c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707l-1.854-1.854Zm-8.969,2.656c.124,0,.24.051.331.134-.003-.004.001-.002.027.018,1.938,1.549,4.399,3.546,5.013,5.766.042.15.011.312-.084.436-.094.125-.241.197-.397.197H4.139c-.156,0-.303-.074-.397-.197-.095-.124-.126-.285-.085-.435.602-2.208,2.979-4.138,5.017-5.769.026-.021.029-.022.025-.017.092-.083.208-.133.333-.133h0Zm0,1.175s0,0,0,0c-1.698,1.358-3.446,2.756-4.18,4.376h8.354c-.755-1.641-2.56-3.084-4.174-4.375Zm14.969-3.624c0,3.584-2.916,6.5-6.5,6.5s-6.5-2.916-6.5-6.5,2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5Zm-1,0c0-3.033-2.468-5.5-5.5-5.5s-5.5,2.467-5.5,5.5,2.468,5.5,5.5,5.5,5.5-2.467,5.5-5.5Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Real-Time Analytics and Reporting</h3>
                                    <p className="text-gray-600">
                                    Improves strategic planning and decision-making within governmental entities using data-driven approaches to optimize performance in public service delivery. Customizable dashboards mean a 360-degree view of your operations.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                    <div className="text-[#176BE0] mb-6 flex justify-center">
                                        {/* Case Management Icon */}
                                        <svg width="48" height="48" fill="#904AF2" viewBox="0 0 24 24">
                                            <path d="m24,8.5v8c0,2.481-2.019,4.5-4.5,4.5h-7v2h4c.276,0,.5.224.5.5s-.224.5-.5.5H7.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h4v-2h-7c-2.481,0-4.5-2.019-4.5-4.5v-8c0-2.055,1.388-3.847,3.375-4.358.269-.071.54.093.609.36.068.267-.093.54-.359.609-1.546.397-2.625,1.792-2.625,3.39v8c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5v-8c0-1.598-1.079-2.992-2.625-3.39-.267-.069-.428-.341-.359-.609.069-.267.34-.431.609-.36,1.987.511,3.375,2.304,3.375,4.358Zm-14-1.5c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm1,0c0,.551.448,1,1,1s1-.449,1-1-.448-1-1-1-1,.449-1,1Zm-4.506,1.478l.646-.377c-.094-.384-.14-.747-.14-1.1s.046-.716.14-1.101l-.646-.376c-.714-.418-.956-1.338-.539-2.052s1.337-.957,2.052-.54l.641.375c.537-.489,1.166-.852,1.853-1.068v-.738c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v.738c.687.216,1.316.579,1.853,1.068l.642-.374c.346-.203.749-.256,1.137-.156.388.102.712.349.914.695.417.714.175,1.635-.539,2.052l-.646.377c.094.386.14.749.14,1.101s-.046.715-.14,1.1l.646.377c.347.202.593.526.694.914.103.387.047.791-.155,1.137s-.526.593-.914.695c-.391.102-.792.045-1.137-.156l-.642-.374c-.536.489-1.166.852-1.853,1.068v.738c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.738c-.687-.216-1.315-.579-1.853-1.068l-.641.374c-.715.417-1.635.175-2.052-.539-.417-.714-.175-1.634.539-2.051Zm.324,1.547c.139.238.446.318.685.179l.971-.566c.078-.046.165-.068.252-.068.135,0,.268.054.364.158.55.586,1.249.989,2.021,1.165.228.052.389.254.389.487v1.121c0,.276.225.5.5.5s.5-.224.5-.5v-1.121c0-.233.161-.436.389-.487.773-.176,1.473-.579,2.021-1.165.161-.171.415-.207.617-.09l.972.567c.115.067.253.085.379.052.129-.034.237-.116.305-.231.067-.116.086-.25.052-.379s-.116-.237-.231-.304l-.979-.572c-.201-.118-.295-.358-.226-.581.138-.441.202-.819.202-1.188s-.064-.748-.202-1.189c-.069-.222.024-.463.226-.581l.979-.571c.238-.139.318-.446.18-.685-.067-.115-.176-.197-.305-.231-.126-.032-.263-.016-.379.052l-.972.567c-.199.117-.456.082-.617-.09-.548-.586-1.247-.988-2.021-1.165-.228-.052-.389-.254-.389-.487v-1.12c0-.276-.225-.5-.5-.5s-.5.224-.5.5v1.12c0,.233-.161.436-.389.487-.772.176-1.472.579-2.021,1.165-.159.171-.417.207-.616.09l-.971-.567c-.238-.138-.546-.059-.685.18s-.058.545.181.685l.979.571c.201.118.295.359.225.582-.138.439-.202.817-.202,1.188s.064.748.202,1.188c.07.223-.022.464-.225.582l-.979.572c-.238.139-.318.446-.18.684Z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#243A55] mb-4">Case Management and Discovery</h3>
                                    <p className="text-gray-600">
                                        Efficiently manage and extract critical data from legal case files. Simplify case document management and streamline the discovery process.
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
                                <h3 className="text-xl font-semibold mb-4">Digitize Large Document Volumes Swiftly</h3>
                                <p className="text-gray-600 mb-6">
                                Documentation at enterprise-level is resource-heavy and can stretch budgets thin. Automate and process large volumes of documents with highly tailored AI driving down administrative costs. It also delivers quicker issuance of IDs, permits, and licenses.  
                                </p>
                                
                            </div>

                            {/* Excellent Scalability */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Intuitive User Experience</h3>
                                <p className="text-gray-600 mb-6">
                                Training teams on new solutions takes time and adoption issues can cause delays. Sanad.ai’s document automation for government agencies requires little to no training in order to deliver operational excellence daily.   
                                </p>
                                
                            </div>

                            {/* Super Data Accessibility */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Superior Data Safety and Compliance</h3>
                                <p className="text-gray-600 mb-6">
                                Keeping public data secure against threats while staying aligned with compliance is non-negotiable for government agencies. Experience robust data security and highest-level encryption while automating compliance with confidence.
                                </p>
                                
                            </div>

                            {/* Rock Solid Compliance Tools */}
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#caa6f9] ... hover:shadow-lg transition duration-300 ease-in-out">
                                <h3 className="text-xl font-semibold mb-4">Public Service Delivery Excellence</h3>
                                <p className="text-gray-600 mb-6">
                                Maintaining public satisfaction is top priority but there is scope for failure in every process of governmental operations. Elevate citizen service experiences with faster processing and accuracy, data insights, predictive analytics, and optimized workflows.   
                                </p>
                                
                            </div>
                        </div>

                        {/* Advanced Fraud Protection: Full-width card */}
                        <div className="mt-8">
                            <div className="p-6 border rounded-3xl shadow-md border-2 border-[#D3D3D3] ...  hover:shadow-lg transition duration-300 ease-in-out lg:col-span-2">
                                <h3 className="text-xl font-semibold mb-4">Effortless Data Management</h3>
                                <p className="text-gray-600 mb-6">
                                Handling and organization of varied and complicated documents places daily strain on departments to stay error-free. Sanad.ai’s advanced extraction dramatically improves data entry and retrieval so organizations can focus on making a positive impact.   
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
