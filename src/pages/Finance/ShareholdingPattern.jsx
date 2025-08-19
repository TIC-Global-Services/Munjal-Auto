import DownloadCard from "../../components/Finance/DownloadCard"

const shareholdingData = [
  {
    year: "2024-25",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'25", pdfUrl: "/pdfs/shareholding-q4-2025.pdf" },
      { name: "Q3 Shareholding Pattern", date: "Dec'24", pdfUrl: "/pdfs/shareholding-q3-2024.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'24", pdfUrl: "/pdfs/shareholding-q2-2024.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'24", pdfUrl: "/pdfs/shareholding-q1-2024.pdf" },
    ],
  },
  {
    year: "2023-24",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'24", pdfUrl: "/pdfs/shareholding-q4-2024.pdf" },
      { name: "Q3 Shareholding Pattern", date: "Dec'23", pdfUrl: "/pdfs/shareholding-q3-2023.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'23", pdfUrl: "/pdfs/shareholding-q2-2023.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'23", pdfUrl: "/pdfs/shareholding-q1-2023.pdf" },
    ],
  },
]

const ShareholdingPattern = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shareholding Pattern</h1>
        <p className="text-gray-600">Access quarterly shareholding pattern reports organized by financial year.</p>
      </div>

      {shareholdingData.map((yearData) => (
        <div key={yearData.year} className="mb-12">
          <div className="flex items-center mb-6">
            <div className="h-px bg-gradient-to-r from-red-500 to-transparent flex-1"></div>
            <h2 className="text-xl font-semibold text-gray-800 mx-4 bg-white px-4">YEAR {yearData.year}</h2>
            <div className="h-px bg-gradient-to-l from-red-500 to-transparent flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {yearData.reports.map((report) => (
              <DownloadCard
                key={report.name}
                title="Shareholding Pattern"
                subtitle={report.date}
                pdfUrl={report.pdfUrl}
                fileName={`${report.name}.pdf`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShareholdingPattern
