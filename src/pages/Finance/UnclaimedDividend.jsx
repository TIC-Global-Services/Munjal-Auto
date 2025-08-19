import DownloadCard from "../../components/Finance/DownloadCard"

const UnclaimedDividend = () => {
  const unclaimedDividendData = [
    { title: "Unclaimed dividend as on March 2024", date: "March 2024", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend as of March 2023", date: "March 2023", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend as on 31.03.2022", date: "March 2022", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend as on 31.03.2021", date: "March 2021", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend as on 31.03.2020", date: "March 2020", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend as on 31.03.2019", date: "March 2019", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2017-18", date: "2017-18", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2016-17", date: "2016-17", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2015-16", date: "2015-16", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2014-15", date: "2014-15", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2013-14", date: "2013-14", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2012-13", date: "2012-13", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2011-12", date: "2011-12", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2010-11", date: "2010-11", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2009-10", date: "2009-10", type: "Unclaimed Dividend" },
    { title: "Unclaimed Dividend 2007-09", date: "2007-09", type: "Unclaimed Dividend" },
    { title: "Unpaid Dividend 2009-10 to 2015-16", date: "2009-16", type: "Unpaid Dividend" },
    { title: "Unpaid Dividend 2009-10 to 2015-16", date: "2009-16", type: "Unpaid Dividend" },
  ]

  const epfSharesData = [
    { title: "EPF Shares 2015-16 (Interim) to 2021-22", date: "2015-22", type: "EPF Shares" },
    { title: "EPF Shares 2014-15 to 2020-21", date: "2014-21", type: "EPF Shares" },
    { title: "EPF Shares FY 2019-14 to FY 2019-20", date: "2019-20", type: "EPF Shares" },
    { title: "EPF Shares 2012-13 to 2018-19", date: "2012-19", type: "EPF Shares" },
    { title: "EPF Shares 2011-12 to 2017-18", date: "2011-18", type: "EPF Shares" },
    { title: "EPF Shares 2010-11 to 2016-17", date: "2010-17", type: "EPF Shares" },
    { title: "EPF Shares 2009-10 to 2015-16", date: "2009-16", type: "EPF Shares" },
  ]

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Unclaimed Dividend</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Access unclaimed dividend information and EPF shares data. Download the relevant documents for your reference.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">YEAR 2023-24</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unclaimedDividendData.map((item, index) => (
            <DownloadCard
              key={index}
              title={item.title}
              dateRange={item.date}
              type={item.type}
              pdfUrl="/sample-report.pdf"
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">EPF Shares</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {epfSharesData.map((item, index) => (
            <DownloadCard
              key={index}
              title={item.title}
              dateRange={item.date}
              type={item.type}
              pdfUrl="/sample-report.pdf"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UnclaimedDividend
