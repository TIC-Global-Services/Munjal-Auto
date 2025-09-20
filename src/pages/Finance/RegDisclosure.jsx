"use client"

const RegDisclosure = () => {
  // Disclosure items with individual PDF links
  const disclosureItems = [
    {
      title: "Details of business",
      url: "/products",
    },
    {
      title: "Terms and conditions of appointment of independent directors",
      url: "/reports/2020/02/Draft-Letter-of-appointment-of-Independent-Director.pdf",
    },
    {
      title: "Composition of various committees of board of directors",
      url: "#",
    },
    {
      title: "Code of conduct of board of directors and senior management personnel",
      url: "/reports/2018/Code-of-Conduct.pdf",
    },
    {
      title: "Details of establishment of vigil mechanism/ Whistle Blower policy",
      url: "/reports/2018/Whistle-Blower-Policy..pdf",
    },
    {
      title: "Criteria of making payments to non-executive directors",
      url: "#",
    },
    {
      title: "Policy on dealing with related party transactions",
      url: "/reports/2018/Related-Party-Transaction-Policy..pdf",
    },
    {
      title: "Policy for determining 'material' subsidiaries",
      url: "/reports/2021/06/Policy-for-determining-Material-Subsidiary.pdf",
    },
    {
      title: "Details of familiarization programmes imparted to independent directors",
      url: "/reports/2022/09/Directors-Familiarization-Programme-FY-2022.pdf",
    },
    {
      title:
        "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",
      url: "/finance/investors/",
    },
    {
      title: "Email address for grievance redressal and other relevant details",
      url: "/finance/investors/",
    },
    {
      title: "Financial results",
      url: "/finance/quarterly-results/",
    },
    {
      title: "Shareholding pattern",
      url: "#",
    },
    {
      title: "Advertisements as per regulation 47(1)",
      url: "/finance/newspaper",
    },
    {
      title: "Credit rating or revision in credit rating obtained",
      url: "/finance/notification",
    },
    {
      title: "Separate audited financial statements of each subsidiary of the listed entity",
      url: "/finance/annual-reports",
    },
    {
      title: "Materiality Policy as per Regulation 30",
      url: "/reports/2018/Material-Event-Policy.pdf",
    },
    {
      title: "Dividend Distribution policy as per Regulation 43A (as applicable)",
      url: "/reports/2021/09/Dividend-Distribution-Policy.pdf",
    },
  ]

  const handleKnowMore = (url) => {
    window.open(url, "_blank")
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          DISCLOSURES UNDER REGULATION 46 OF THE LODR
        </h1>
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

              <span className="text-gray-800 leading-relaxed font-medium text-base pr-4">{item.title}</span>
            </div>

            <button
              onClick={() => handleKnowMore(item.url)}
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
