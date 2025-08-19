import DownloadCard from "../../components/Finance/DownloadCard"

const AnnualReports = () => {
  const annualReportsData = [
    { title: "Annual Report 2024-25", description: "Comprehensive annual report", date: "2024-25" },
    { title: "Annual Report 2023-24", description: "Comprehensive annual report", date: "2023-24" },
    { title: "Annual Report 2022-23", description: "Comprehensive annual report", date: "2022-23" },
    { title: "Annual Report 2021-22", description: "Comprehensive annual report", date: "2021-22" },
    { title: "Annual Report 2020-21", description: "Comprehensive annual report", date: "2020-21" },
    { title: "Annual Report 2019-20", description: "Comprehensive annual report", date: "2019-20" },
    { title: "Annual Report 2018-19", description: "Comprehensive annual report", date: "2018-19" },
    { title: "Annual Report 2017-18", description: "Comprehensive annual report", date: "2017-18" },
    { title: "Annual Report 2016-17", description: "Comprehensive annual report", date: "2016-17" },
    { title: "Annual Report 2015-16", description: "Comprehensive annual report", date: "2015-16" },
    { title: "Annual Report 2014-15", description: "Comprehensive annual report", date: "2014-15" },
    { title: "Annual Report 2013-14", description: "Comprehensive annual report", date: "2013-14" },
    { title: "Annual Report 2012-13", description: "Comprehensive annual report", date: "2012-13" },
    { title: "Annual Report 2011-12", description: "Comprehensive annual report", date: "2011-12" },
    { title: "Annual Report 2010-11", description: "Comprehensive annual report", date: "2010-11" },
    { title: "Annual Report 2009-10", description: "Comprehensive annual report", date: "2009-10" },
    { title: "Annual Report 2008-09", description: "Comprehensive annual report", date: "2008-09" },
    { title: "Annual Report 2007-08", description: "Comprehensive annual report", date: "2007-08" },
  ]

  const extractReturnsData = [
    { title: "MGT-7 - FY 2023-24", description: "Extract of Annual Return", date: "2023-24" },
    { title: "MGT-7 - FY 2022-23", description: "Extract of Annual Return", date: "2022-23" },
    { title: "MGT-7 - FY 2021-22", description: "Extract of Annual Return", date: "2021-22" },
    { title: "MGT-7 - FY 2020-21", description: "Extract of Annual Return", date: "2020-21" },
    { title: "MGT-7 - FY 2019-20", description: "Extract of Annual Return", date: "2019-20" },
  ]

  const businessResponsibilityData = [
    { title: "BRR 2021-22", description: "Business Responsibility Report", date: "2021-22" },
    { title: "BRR 2020-21", description: "Business Responsibility Report", date: "2020-21" },
    { title: "BRR 2018-20", description: "Business Responsibility Report", date: "2018-20" },
  ]

  const secretarialComplianceData = [
    { title: "SCR 2024-25", description: "Secretarial Compliance Report", date: "2024-25" },
    { title: "SCR 2023-24", description: "Secretarial Compliance Report", date: "2023-24" },
    { title: "SCR 2022-23", description: "Secretarial Compliance Report", date: "2022-23" },
    { title: "SCR 2021-22", description: "Secretarial Compliance Report", date: "2021-22" },
    { title: "SCR 2020-21", description: "Secretarial Compliance Report", date: "2020-21" },
  ]

  return (
    <div className="space-y-12">
      {/* Annual Reports Section */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">ANNUAL REPORTS</h2>
          <div className="w-full h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annualReportsData.map((report, index) => (
            <DownloadCard
              key={index}
              title={report.title}
              description={report.description}
              dateRange={report.date}
              pdfUrl="/sample-report.pdf"
            />
          ))}
        </div>
      </div>

      {/* Extract of Annual Return Section */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">EXTRACT OF ANNUAL RETURN</h2>
          <div className="w-full h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extractReturnsData.map((report, index) => (
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

      {/* Business Responsibility Reports Section */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">BUSINESS RESPONSIBILITY REPORTS</h2>
          <div className="w-full h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessResponsibilityData.map((report, index) => (
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

      {/* Secretarial Compliance Report Section */}
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">SECRETARIAL COMPLIANCE REPORT</h2>
          <div className="w-full h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secretarialComplianceData.map((report, index) => (
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
    </div>
  )
}

export default AnnualReports
