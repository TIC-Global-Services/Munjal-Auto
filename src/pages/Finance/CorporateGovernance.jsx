import DownloadCard from "../../components/Finance/DownloadCard"

const governanceData = [
  {
    year: "2024-25",
    reports: [
      { name: "Annual Corporate Governance Report", date: "Mar'25", pdfUrl: "/pdfs/governance-annual-2025.pdf" },
      { name: "Q3 Compliance Certificate", date: "Dec'24", pdfUrl: "/pdfs/governance-q3-2024.pdf" },
      { name: "Q2 Compliance Certificate", date: "Sep'24", pdfUrl: "/pdfs/governance-q2-2024.pdf" },
      { name: "Q1 Compliance Certificate", date: "Jun'24", pdfUrl: "/pdfs/governance-q1-2024.pdf" },
    ],
  },
  {
    year: "2023-24",
    reports: [
      { name: "Annual Corporate Governance Report", date: "Mar'24", pdfUrl: "/pdfs/governance-annual-2024.pdf" },
      { name: "Q3 Compliance Certificate", date: "Dec'23", pdfUrl: "/pdfs/governance-q3-2023.pdf" },
      { name: "Q2 Compliance Certificate", date: "Sep'23", pdfUrl: "/pdfs/governance-q2-2023.pdf" },
      { name: "Q1 Compliance Certificate", date: "Jun'23", pdfUrl: "/pdfs/governance-q1-2023.pdf" },
    ],
  },
  {
    year: "2022-23",
    reports: [
      { name: "Annual Corporate Governance Report", date: "Mar'23", pdfUrl: "/pdfs/governance-annual-2023.pdf" },
      { name: "Q3 Compliance Certificate", date: "Dec'22", pdfUrl: "/pdfs/governance-q3-2022.pdf" },
      { name: "Q2 Compliance Certificate", date: "Sep'22", pdfUrl: "/pdfs/governance-q2-2022.pdf" },
      { name: "Q1 Compliance Certificate", date: "Jun'22", pdfUrl: "/pdfs/governance-q1-2022.pdf" },
    ],
  },
]

const CorporateGovernance = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Corporate Governance Report</h1>
        <p className="text-gray-600 text-lg">
          Access our comprehensive corporate governance reports and compliance certificates
        </p>
      </div>

      {governanceData.map((yearData) => (
        <div key={yearData.year} className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">YEAR {yearData.year}:</h2>
            <div className="flex-1 ml-4 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yearData.reports.map((report) => (
              <DownloadCard key={report.name} title={report.name} dateRange={report.date} subtitle={report.date} pdfUrl={report.pdfUrl} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CorporateGovernance
