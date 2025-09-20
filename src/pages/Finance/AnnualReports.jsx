import DownloadCard from "../../components/Finance/DownloadCard"

const AnnualReports = () => {
  const annualReportsData = [
    { title: "Annual Report 2024-25", description: "Comprehensive annual report", date: "2024-25", fileLink: '/reports/2025/08/Annual-Report-2024-25.pdf' },
    { title: "Annual Report 2023-24", description: "Comprehensive annual report", date: "2023-24", fileLink: '/reports/2024/09/Annual-Report-2023-24.pdf' },
    { title: "Annual Report 2022-23", description: "Comprehensive annual report", date: "2022-23", fileLink: '/reports/2023/08/Annual-Report-2022-23.pdf' },
    { title: "Annual Report 2021-22", description: "Comprehensive annual report", date: "2021-22", fileLink: '/reports/2022/08/Annual-Report-2021-22.pdf' },
    { title: "Annual Report 2020-21", description: "Comprehensive annual report", date: "2020-21", fileLink: '/reports/2021/08/Annual-Report-FY-2020-21.pdf' },
    { title: "Annual Report 2019-20", description: "Comprehensive annual report", date: "2019-20", fileLink: '/reports/2020/08/Annual-Report-2019-20...pdf' },
    { title: "Annual Report 2018-19", description: "Comprehensive annual report", date: "2018-19", fileLink: '/reports/2019/Annual-Report-2018-19.pdf' },
    { title: "Annual Report 2017-18", description: "Comprehensive annual report", date: "2017-18", fileLink: '/reports/2018/Annual-Report-2017-18.pdf' },
    { title: "Annual Report 2016-17", description: "Comprehensive annual report", date: "2016-17", fileLink: '/reports/2017/Annual-Report-2016-17.pdf' },
    { title: "Annual Report 2015-16", description: "Comprehensive annual report", date: "2015-16", fileLink: '/reports/2016/Annual-Report-2015-16.pdf' },
    { title: "Annual Report 2014-15", description: "Comprehensive annual report", date: "2014-15", fileLink: '/reports/2015/Annual-Report-2014-15.pdf' },
    { title: "Annual Report 2013-14", description: "Comprehensive annual report", date: "2013-14", fileLink: '/reports/2014/Annual-Report-2013-14.pdf' },
    { title: "Annual Report 2012-13", description: "Comprehensive annual report", date: "2012-13", fileLink: '/reports/2013/Annual-Report-2012-13.pdf' },
    { title: "Annual Report 2011-12", description: "Comprehensive annual report", date: "2011-12", fileLink: '/reports/2012/Annual-Report-2011-12.pdf' },
    { title: "Annual Report 2010-11", description: "Comprehensive annual report", date: "2010-11", fileLink: '/reports/2011/Annual-Report-2010-11.pdf' },
    { title: "Annual Report 2009-10", description: "Comprehensive annual report", date: "2009-10", fileLink: '/reports/2010/Annual-Report-2009-10.pdf' },
    { title: "Annual Report 2008-09", description: "Comprehensive annual report", date: "2008-09", fileLink: '/reports/2009/Annual-Report-2008-09.pdf' },
    { title: "Annual Report 2007-08", description: "Comprehensive annual report", date: "2007-08", fileLink: '/reports/20008/Annual-Report-2007-08.pdf' },
  ]

  const extractReturnsData = [
    { title: "MGT-7 - FY 2023-24", description: "Extract of Annual Return", date: "2023-24", fileLink:'/report/2025/04/MGT_7-FY-2023-2024.pdf' },
    { title: "MGT-7 - FY 2022-23", description: "Extract of Annual Return", date: "2022-23", fileLink:'/report/2023/11/MGT_7-FY-2022-2023.pdf' },
    { title: "MGT-7 - FY 2021-22", description: "Extract of Annual Return", date: "2021-22", fileLink:'/report/2022/11/MGT_7-FY-2021-2022.pdf' },
    { title: "MGT-7 - FY 2020-21", description: "Extract of Annual Return", date: "2020-21", fileLink:'/report/2021/11/MGT_7-FY-2020-2021.pdf' },
    { title: "MGT-7 - FY 2019-20", description: "Extract of Annual Return", date: "2019-20", fileLink:'/report/2021/11/MGT_7-FY-2019-2020.pdf' },
  ]

  const businessResponsibilityData = [
    { title: "BRR 2021-22", description: "Business Responsibility Report", date: "2021-22", fileLink:"/report/2022/09/BRR-2021-22.pdf" },
    { title: "BRR 2020-21", description: "Business Responsibility Report", date: "2020-21", fileLink:"/report/2021/08/BRR-2020-21.pdf" },
    { title: "BRR 2018-20", description: "Business Responsibility Report", date: "2018-20", fileLink:"/report/2021/05/BRR-2018-20.pdf" },
  ]

  const secretarialComplianceData = [
    { title: "SCR 2024-25", description: "Secretarial Compliance Report", date: "2024-25", fileLink: '/report/2025/05/Report-SAR-31-03-2025.html' },
    { title: "SCR 2023-24", description: "Secretarial Compliance Report", date: "2023-24", fileLink: '/report/2024/07/SCR-2023-24.pdf' },
    { title: "SCR 2022-23", description: "Secretarial Compliance Report", date: "2022-23", fileLink: '/report/2023/09/SCR-2022-23.pdf' },
    { title: "SCR 2021-22", description: "Secretarial Compliance Report", date: "2021-22", fileLink: '/report/2022/09/SCR-2021-22.pdf' },
    { title: "SCR 2020-21", description: "Secretarial Compliance Report", date: "2020-21", fileLink: '/report/2022/09/SCR-2020-21.pdf' },
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
              pdfUrl={report.fileLink}
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
              pdfUrl={report.fileLink}
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
              pdfUrl={report.fileLink}
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
              pdfUrl={report.fileLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnnualReports
