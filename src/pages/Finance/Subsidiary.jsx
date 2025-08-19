import DownloadCard from "../../components/Finance/DownloadCard"

const Subsidiary = () => {
  const subsidiaryData = [
    {
      year: "2023-24",
      reports: [
        {
          title: "Financial Statement FY 2023-24",
          description: "Annual financial statement for fiscal year 2023-24",
          date: "March 2024",
        },
      ],
    },
    {
      year: "2022-23",
      reports: [
        {
          title: "Financial Statement FY 2022-23",
          description: "Annual financial statement for fiscal year 2022-23",
          date: "March 2023",
        },
      ],
    },
    {
      year: "2021-22",
      reports: [
        {
          title: "Financial Statements FY 2021-2022",
          description: "Annual financial statements for fiscal year 2021-22",
          date: "March 2022",
        },
      ],
    },
    {
      year: "2020-21",
      reports: [
        {
          title: "Financial Statements FY 2020-2021",
          description: "Annual financial statements for fiscal year 2020-21",
          date: "March 2021",
        },
      ],
    },
    {
      year: "2019-20",
      reports: [
        {
          title: "Financial Statements FY 2019-2020",
          description: "Annual financial statements for fiscal year 2019-20",
          date: "March 2020",
        },
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Subsidiary</h1>
        <p className="text-lg text-gray-600">
          Financial statements and reports from subsidiary companies organized by fiscal year.
        </p>
      </div>

      <div className="space-y-12">
        {subsidiaryData.map((yearData) => (
          <div key={yearData.year}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 pb-2 border-b-2 border-gray-200 inline-block">
                YEAR {yearData.year}:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yearData.reports.map((report, index) => (
                <DownloadCard
                  key={index}
                  title={report.title}
                  description={report.description}
                  date={report.date}
                  pdfUrl="/sample-report.pdf"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subsidiary
