import financialData from "./subsidiary.json"
import DownloadCard from "../../components/Finance/DownloadCard"

const FinancialStatements = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Statements</h1>
        <p className="text-gray-600 text-lg">
          Access audited financial statements of Munjal Auto for previous years.
        </p>
      </div>

      {financialData.map((yearData) => (
        <div key={yearData.year} className="mb-12">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">YEAR {yearData.year}:</h2>
            <div className="flex-1 ml-4 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yearData.reports.map((report) => (
              <DownloadCard
                key={report.title}
                title={report.title}
                subtitle={report.description}
                dateRange={yearData.year}
                onDownload={() => window.open(report.fileLink, "_blank")}
                onShare={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: report.title,
                      text: report.description,
                      url: report.fileLink,
                    })
                  } else {
                    navigator.clipboard.writeText(report.fileLink)
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

export default FinancialStatements
