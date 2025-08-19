"use client"

const RegDisclosure = () => {
  // Sample PDF URL - replace with actual PDF links later
  const samplePdfUrl = "/sample-disclosure.pdf"

  const disclosureItems = [
    "Details of business",
    "Terms and conditions of appointment of independent directors",
    "Composition of various committees of board of directors",
    "Code of conduct of board of directors and senior management personnel",
    "Details of establishment of vigil mechanism/ Whistle Blower policy",
    "Criteria of making payments to non-executive directors",
    "Policy on dealing with related party transactions",
    "Policy for determining 'material' subsidiaries",
    "Details of familiarization programmes imparted to independent directors",
    "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",
    "Email address for grievance redressal and other relevant details",
    "Financial results",
    "Shareholding pattern",
    "Advertisements as per regulation 47(1)",
    "Credit rating or revision in credit rating obtained",
    "Separate audited financial statements of each subsidiary of the listed entity",
    "Materiality Policy as per Regulation 30",
    "Dividend Distribution policy as per Regulation 43A (as applicable)",
  ]

  const handleKnowMore = (itemIndex) => {
    // Open PDF in new tab
    window.open(samplePdfUrl, "_blank")
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">DISCLOSURES UNDER REGULATION 46 OF THE LODR</h1>
        <p className="text-gray-600 text-lg">
          Regulatory disclosures as per SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015
        </p>
      </div>

      <div className="space-y-3">
        {disclosureItems.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-6 bg-white border border-gray-100 rounded-xl hover:border-red-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 w-8 h-8 bg-red-50 text-red-700 font-semibold rounded-full flex items-center justify-center text-sm group-hover:bg-red-100 transition-colors">
                {index + 1}
              </div>

              <span className="text-gray-800 leading-relaxed font-medium text-base pr-4">{item}</span>
            </div>

            <button
              onClick={() => handleKnowMore(index)}
              className="flex items-center gap-2 px-5 py-2.5 text-red-600 hover:text-white hover:bg-red-600 border border-red-200 hover:border-red-600 rounded-lg transition-all duration-200 font-medium text-sm group-hover:shadow-md"
            >
              Know More
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>

     
    </div>
  )
}

export default RegDisclosure
