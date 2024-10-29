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
                name: 'Contracts',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M14,13c0-1.1-.9-2-2-2s-2,.9-2,2c0,.81,.58,2.03,1.42,3.03-.62,.56-1.42,.97-2.42,.97-.8,0-1.58-.39-2.28-.99,1.39-1.6,2.28-3.76,2.28-5.01,0-1.65-1.35-3-3-3s-3,1.35-3,3c0,1.23,.87,3.43,2.3,5.03-.58,.5-1.22,.86-1.88,.97-.27,.04-.46,.3-.41,.57,.04,.25,.25,.42,.49,.42,.03,0,.05,0,.08,0,.88-.14,1.7-.61,2.42-1.25,.87,.76,1.88,1.26,3,1.26,3.3,0,5-3.5,5-5Zm-10-2c0-1.1,.9-2,2-2s2,.9,2,2-.8,2.93-1.98,4.31c-1.2-1.36-2.02-3.22-2.02-4.31Zm7,2c0-.55,.45-1,1-1s1,.45,1,1c0,.45-.29,1.41-.91,2.27-.68-.85-1.09-1.8-1.09-2.27Zm12.27-1.27c-.94-.94-2.59-.94-3.54,0l-7.71,7.71c-.66,.66-1.03,1.54-1.03,2.47v1.59c0,.28,.22,.5,.5,.5h1.59c.94,0,1.81-.36,2.47-1.03l7.71-7.71c.47-.47,.73-1.1,.73-1.77s-.26-1.3-.73-1.77Zm-.71,2.83l-7.71,7.71c-.47,.47-1.1,.73-1.77,.73h-1.09v-1.09c0-.67,.26-1.3,.73-1.77l7.71-7.71c.57-.57,1.55-.57,2.12,0,.28,.28,.44,.66,.44,1.06s-.16,.78-.44,1.06Zm-14.06,6.44H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h6.5v3.5c0,1.38,1.12,2.5,2.5,2.5h3.5v3.5c0,.28,.22,.5,.5,.5s.5-.22,.5-.5v-3.67c.01-.98-.35-1.89-1.01-2.56l-3.24-3.24c-.66-.66-1.54-1.03-2.47-1.03H4.5C2.02,0,0,2.02,0,4.5v13c0,2.48,2.02,4.5,4.5,4.5h4c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5ZM16.28,4.97c.29,.29,.49,.64,.61,1.03h-3.39c-.83,0-1.5-.67-1.5-1.5V1.11c.39,.12,.74,.33,1.04,.62l3.24,3.24Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Legal Agreements',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m24,4.5v15c0,2.481-2.019,4.5-4.5,4.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5h-9c-1.93,0-3.5,1.57-3.5,3.5v5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5Zm-13.5.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-9c-.276,0-.5.224-.5.5s.224.5.5.5Zm0,4h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-9c-.276,0-.5.224-.5.5s.224.5.5.5Zm0,4h7c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-7c-.276,0-.5.224-.5.5s.224.5.5.5Zm7.5,2c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm0,1c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm-7,7.5c0,.276-.224.5-.5.5H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h.5v-1c0-1.654,1.346-3,3-3h.378c-.915-2.409-1.378-3.936-1.378-4.54,0-1.38,1.098-2.46,2.5-2.46s2.5,1.08,2.5,2.46c0,.604-.464,2.131-1.378,4.54h.378c1.654,0,3,1.346,3,3v1h.5c.276,0,.5.224.5.5Zm-5.552-4.5h.104c1.342-3.493,1.448-4.356,1.448-4.54,0-.818-.659-1.46-1.5-1.46s-1.5.642-1.5,1.46c0,.184.106,1.047,1.448,4.54Zm-3.448,4h7v-1c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2v1Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Court Filings',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M13.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.335,0,.663,.038,.985,.096V6.5c0,1.378,1.122,2.5,2.5,2.5h5.389c.033,.18,.078,.357,.092,.541,.023,.275,.271,.479,.539,.458,.275-.022,.48-.264,.458-.539-.125-1.536-.793-2.981-1.883-4.07l-3.485-3.485c-1.228-1.228-2.86-1.904-4.596-1.904H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5H13.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm3.889-16.904c.543,.543,.944,1.198,1.219,1.904h-5.108c-.827,0-1.5-.673-1.5-1.5V1.379c.704,.273,1.354,.682,1.904,1.231l3.485,3.485Zm6.464,17.05l-5.255-5.255,2.293-2.293,.435,.435c.452,.466,1.172-.255,.707-.707l-4.68-4.68c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l.409,.409-5.293,5.293-.409-.409c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l4.68,4.68c.452,.466,1.172-.255,.707-.707l-.435-.435,2.293-2.293,5.255,5.255c.452,.466,1.172-.255,.707-.707Zm-11.384-5.384l5.293-5.293,2.422,2.422-5.293,5.293-2.422-2.422ZM4,8.5c0-.276,.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5H4.5c-.276,0-.5-.224-.5-.5Zm9.5,3.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5H13.5c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm-3,3H4.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h6c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm-3,2c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Discovery Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m11,23.5c0,.276-.224.5-.5.5h-6c-2.481,0-4.5-2.019-4.5-4.5V4.501C0,2.02,2.018,0,4.5,0h11c2.481,0,4.5,2.018,4.5,4.499v3c0,.276-.223.5-.5.5s-.5-.224-.5-.5v-3c0-1.93-1.571-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.571-3.5,3.501v14.999c0,1.93,1.571,3.5,3.5,3.5h6c.276,0,.5.224.5.5Zm12.854.354c-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-3.423-3.423c-1.137.976-2.611,1.569-4.224,1.569-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5c0,1.612-.594,3.086-1.569,4.224l3.423,3.423c.195.195.195.512,0,.707Zm-2.854-8.354c0-3.032-2.467-5.5-5.5-5.5s-5.5,2.468-5.5,5.5,2.467,5.5,5.5,5.5,5.5-2.468,5.5-5.5ZM6.5,5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm0,10h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm3-10c-.276,0-.5.224-.5.5s.224.5.5.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-6Zm-3,5h-2c-.276,0-.5.224-.5.5s.224.5.5.5h2c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm11.643,4.131l-2.706,2.618c-.337.33-.886.334-1.223.004l-1.363-1.345c-.196-.194-.513-.192-.707.004-.194.197-.192.514.005.707l1.364,1.347c.362.354.837.531,1.312.531s.951-.178,1.311-.533l2.703-2.614c.198-.192.204-.509.012-.707-.191-.198-.508-.202-.707-.012Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Subpoenas',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-11c2.757,0,5,2.243,5,5s-2.243,5-5,5-5-2.243-5-5S6.243,1,9,1Zm12.5,10h-6c-1.379,0-2.5,1.122-2.5,2.5v8c0,1.378,1.121,2.5,2.5,2.5h6c1.379,0,2.5-1.122,2.5-2.5V13.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,10.5c0,.827-.673,1.5-1.5,1.5h-6c-.827,0-1.5-.673-1.5-1.5V13.5c0-.827,.673-1.5,1.5-1.5h6c.827,0,1.5,.673,1.5,1.5v8Zm-2-7.003c0,.276-.224,.5-.5,.5h-4c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5Zm0,3.003c0,.276-.224,.5-.5,.5h-4c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5Zm0,2.997c0,.276-.224,.5-.5,.5h-4c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5Zm-10.008-5.778c-.049,.272-.311,.453-.579,.405-.465-.082-.94-.124-1.413-.124-4.411,0-8,3.589-8,8v.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5v-.5c0-4.962,4.037-9,9-9,.531,0,1.065,.047,1.587,.14,.272,.048,.454,.308,.405,.58Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Patent and Trademark Documents',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M20.1,5.39l-3.48-3.49c-1.23-1.23-2.86-1.9-4.6-1.9H6.5C4.02,0,2,2.02,2,4.5v15c0,2.48,2.02,4.5,4.5,4.5h3c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5h-3c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.51c.33,0,.66,.03,.99,.09V6.5c0,1.38,1.12,2.5,2.5,2.5h5.41c.06,.32,.09,.65,.09,.99v9.51c0,1.25-.67,2.41-1.75,3.03-.24,.14-.32,.44-.18,.68,.14,.24,.45,.32,.68,.18,1.39-.8,2.25-2.3,2.25-3.9V9.99c0-1.74-.68-3.37-1.9-4.6Zm-4.6,2.61c-.83,0-1.5-.67-1.5-1.5V1.37c.71,.27,1.35,.69,1.9,1.24l3.48,3.49c.55,.55,.97,1.2,1.24,1.9h-5.13Zm-1,5c-1.93,0-3.5,1.57-3.5,3.5,0,.95,.38,1.82,1,2.45v3.99c0,.43,.26,.82,.66,.99,.13,.05,.27,.08,.41,.08,.28,0,.55-.11,.75-.31l.68-.68,.68,.68c.31,.31,.76,.4,1.16,.23,.4-.17,.66-.55,.66-.99v-3.99c.62-.63,1-1.5,1-2.45,0-1.93-1.57-3.5-3.5-3.5Zm0,1c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5,1.12-2.5,2.5-2.5Zm1.39,8.98l-1.39-1.39-1.39,1.39-.11-.05v-3.27c.45,.22,.96,.34,1.5,.34s1.05-.12,1.5-.34v3.27l-.11,.05Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Compliance Reports',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m13.5,23H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.334,0,.663.03.985.088v5.412c0,1.379,1.121,2.5,2.5,2.5,0,0,5.84.01,5.937-.016.268-.068.429-.341.36-.608-.289-1.13-.877-2.163-1.702-2.987l-3.484-3.484c-1.228-1.228-2.86-1.904-4.597-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM12,1.368c.706.273,1.353.693,1.904,1.244l3.484,3.484c.543.543.964,1.193,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368Zm-1,13.132c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm0,4c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm11.896-6.569l-4.239-1.405c-.102-.033-.213-.033-.314,0l-4.24,1.405c-.659.22-1.103.833-1.103,1.526v3.917c0,3.613,3.868,5.829,5.053,6.423,0,0,.244.165.448.165s.419-.13.419-.13c1.192-.479,5.08-2.363,5.08-6.458v-3.917c0-.693-.443-1.307-1.104-1.526Zm.104,5.443c0,3.468-3.431,5.119-4.477,5.54-1.056-.528-4.523-2.5-4.523-5.54v-3.917c0-.262.168-.494.418-.577l4.082-1.354,4.081,1.354c.251.083.419.315.419.577v3.917Zm-12-6.874c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Legal Notices',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="M18,16.5c0,.276-.224,.5-.5,.5H6.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h11c.276,0,.5,.224,.5,.5Zm-.5,2.5H6.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h11c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5ZM7,8c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm1,0c0,.551,.448,1,1,1s1-.449,1-1-.448-1-1-1-1,.449-1,1Zm-1.602,5.99c.265,.054,.535-.117,.591-.388,.192-.928,1.038-1.602,2.011-1.602s1.818,.673,2.011,1.602c.049,.236,.257,.398,.488,.398,.034,0,.068-.003,.103-.01,.271-.056,.444-.321,.388-.591-.287-1.39-1.545-2.398-2.989-2.398s-2.702,1.009-2.989,2.398c-.057,.271,.117,.535,.388,.591Zm15.602-4.004v9.515c0,2.481-2.019,4.5-4.5,4.5H6.5c-2.481,0-4.5-2.019-4.5-4.5V4.5C2,2.019,4.019,0,6.5,0h5.515c1.735,0,3.368,.676,4.597,1.904l3.484,3.485c1.228,1.227,1.904,2.859,1.904,4.596Zm-8-3.485c0,.827,.673,1.5,1.5,1.5h5.121c-.273-.704-.682-1.354-1.232-1.904l-3.484-3.485c-.551-.55-1.2-.959-1.904-1.231V6.5Zm7,3.485c0-.335-.038-.663-.096-.985h-5.404c-1.379,0-2.5-1.122-2.5-2.5V1.096c-.323-.058-.651-.096-.985-.096H6.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V9.985Z"></path>
                    </svg>
                ),
            },
            {
                name: 'Legal Memos',
                icon: (
                    <svg width="48" height="48" fill="#6B21A8" viewBox="0 0 24 24">
                        <path d="m11,23.5c0,.276-.224.5-.5.5h-6c-2.481,0-4.5-2.019-4.5-4.5V4.5C0,2.019,2.019,0,4.5,0h9c2.481,0,4.5,2.019,4.5,4.5v4c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-1.93-1.57-3.5-3.5-3.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h6c.276,0,.5.224.5.5Zm3-18c0-.276-.224-.5-.5-.5H4.5c-.276,0-.5.224-.5.5s.224.5.5.5h9c.276,0,.5-.224.5-.5Zm-2,5c0-.276-.224-.5-.5-.5h-7c-.276,0-.5.224-.5.5s.224.5.5.5h7c.276,0,.5-.224.5-.5Zm-7.5,4.5c-.276,0-.5.224-.5.5s.224.5.5.5h4c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-4Zm19.5,2.5c0,3.584-2.916,6.5-6.5,6.5s-6.5-2.916-6.5-6.5,2.916-6.5,6.5-6.5,6.5,2.916,6.5,6.5Zm-1,0c0-3.032-2.468-5.5-5.5-5.5s-5.5,2.468-5.5,5.5,2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5Zm-3.347-.88l-2.218,2.129c-.336.332-.886.332-1.224.002l-1.131-1.108c-.196-.191-.513-.19-.707.008-.193.197-.189.514.008.707l1.131,1.108c.362.354.838.531,1.312.531s.95-.178,1.31-.532l2.213-2.124c.199-.19.205-.508.014-.707-.19-.198-.507-.205-.707-.014Z"></path>
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
                question: "What types of financial documents can ApricityTS process?",
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
                                    Automated word processing software for legal documents
                                </h1>
                                <p className="text-lg mb-4">
                                    Free up your most talented people with automated data extraction and optimize legal workflows. Use advanced AI to save time and resources in all aspects of document handling whether in Arabic or English.
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
