"use client"

import DownloadCard from "../../components/Finance/DownloadCard"

const quarterlyData = [
  {
    year: "2024-25",
    quarters: [
      { name: "Q4 (Jan-Mar'25)", date: "Jan-Mar'25", pdfUrl: "/pdfs/q4-2025.pdf" },
      { name: "Q3 (Oct-Dec'24)", date: "Oct-Dec'24", pdfUrl: "/pdfs/q3-2024.pdf" },
      { name: "Q2 (Jul-Sep'24)", date: "Jul-Sep'24", pdfUrl: "/pdfs/q2-2024.pdf" },
      { name: "Q1 (Apr-June'24)", date: "Apr-June'24", pdfUrl: "/pdfs/q1-2024.pdf" },
    ],
  },
  {
    year: "2023-24",
    quarters: [
      { name: "Q4 (Jan-Mar'24)", date: "Jan-Mar'24", pdfUrl: "/pdfs/q4-2024.pdf" },
      { name: "Q3 (Oct-Dec'23)", date: "Oct-Dec'23", pdfUrl: "/pdfs/q3-2023.pdf" },
      { name: "Q2 (Jul-Sep'23)", date: "Jul-Sep'23", pdfUrl: "/pdfs/q2-2023.pdf" },
      { name: "Q1 (Apr-June'23)", date: "Apr-June'23", pdfUrl: "/pdfs/q1-2023.pdf" },
    ],
  },
]

const QuarterlyResults = () => {
  const handleDownload = (pdfUrl, fileName) => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = fileName
    link.click()
  }

  const handleShare = (pdfUrl, fileName) => {
    if (navigator.share) {
      navigator.share({
        title: fileName,
        url: pdfUrl,
      })
    } else {
      navigator.clipboard.writeText(window.location.origin + pdfUrl)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Quarterly Results</h1>

      {quarterlyData.map((yearData) => (
        <div key={yearData.year} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            YEAR {yearData.year}:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
            {yearData.quarters.map((quarter) => (
              <DownloadCard
                key={quarter.name}
                title="Quarterly Report"
                dateRange={quarter.date}
                pdfUrl={quarter.pdfUrl}
                fileName={`${quarter.name}.pdf`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default QuarterlyResults
