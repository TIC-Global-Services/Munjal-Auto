import governanceData from "./corporate-governance.json"
import DownloadCard from "../../components/Finance/DownloadCard"

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
              <DownloadCard
                key={report.name}
                title={report.name}
                dateRange={report.date}
                subtitle={report.date}
                onDownload={() => window.open(report.pdfUrl, "_blank")}
                onShare={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: report.name,
                      text: report.name,
                      url: report.pdfUrl,
                    })
                  } else {
                    navigator.clipboard.writeText(report.pdfUrl)
                    alert("Link copied to clipboard!")
                  }
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CorporateGovernance
