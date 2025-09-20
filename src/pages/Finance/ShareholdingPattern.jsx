import DownloadCard from "../../components/Finance/DownloadCard"

const shareholdingData = [
  {
    year: "2025-26",
    reports: [
      { name: "Q1 Shareholding Pattern", date: "Mar'25", pdfUrl: "/reports/2025/Q1Apr-June25.html" },
    ],
  },
  {
    year: "2024-25",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'25", pdfUrl: "/reports/2025/07/Q4-Jan-Mar25.html" },
      { name: "Q3 Shareholding Pattern", date: "Dec'24", pdfUrl: "/reports/2025/01/Q3Oct-Dec24-1.html" },
      { name: "Q2 Shareholding Pattern", date: "Sep'24", pdfUrl: "/reports/2025/01/Q2Jul-Sept24-2.html" },
      { name: "Q1 Shareholding Pattern", date: "Jun'24", pdfUrl: "/reports/2025/01/Q1April-June24-2.html" },
    ],
  },
  {
    year: "2023-24",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'24", pdfUrl: "/reports/2024/07/Q4-Jan-Mar24_SHP.html" },
      { name: "Q3 Shareholding Pattern", date: "Dec'23", pdfUrl: "/reports/2024/02/Q3-Oct-Dec23_SHP.html" },
      { name: "Q2 Shareholding Pattern", date: "Sep'23", pdfUrl: "/reports/2023/11/Q2-Jul-Sept23_SHP.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'23", pdfUrl: "/reports/2023/09/munja.pdf" },
    ],
  },
  {
    year: "2022-23",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'23", pdfUrl: "/reports/2022/09/10-Q1-Apr-June22_SHP.pdf" },
      { name: "Q3 Shareholding Pattern", date: "Dec'22", pdfUrl: "/reports/2022/11/Q2-July-Sept22_SHP.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'22", pdfUrl: "/reports/2023/02/Shareholding-Pattern_Dec2022-1.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'22", pdfUrl: "/reports/2023/05/SHP-Q-4-Jan-March-2013.pdf" },
    ],
  },
  {
    year: "2021-22",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'22", pdfUrl: "/reports/2022/09/9-Q4-Jan-Mar22_SHP.pdf" },
      { name: "Q3 Shareholding Pattern", date: "Dec'21", pdfUrl: "/reports/2022/02/SHP-Q-3-Oct-Dec21.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'21", pdfUrl: "/reports/2021/10/SHP-Q-2-Jul-Sept21.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'21", pdfUrl: "/reports/2021/07/SHP-Q1-Apr-Jun21.pdf" },
    ],
  },
  {
    year: "2020-21",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'21", pdfUrl: "/reports/2021/04/SHP-Q4-Jan-Mar2021.pdf" },
      { name: "Q3 Shareholding Pattern", date: "Dec'20", pdfUrl: "/reports/2021/01/SHP-Q3-Oct-Dec20.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'20", pdfUrl: "/reports/2020/11/Shareholding-Pattern-Q2-July-Sept2020.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'20", pdfUrl: "/reports/2020/08/Shareholding-Pattern-Q1-Apr-June2020.pdf" },
    ],
  },
  {
    year: "2019-20",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'20", pdfUrl: "/reports/2020/06/SHP-Q4-2020.pdf" },
      { name: "Q3 Shareholding Pattern", date: "Dec'19", pdfUrl: "/reports/2020/01/Q3-2019-20_SHP.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'19", pdfUrl: "/reports/2019/SHP-Q2-FY-2019-20-munjalauto.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'19", pdfUrl: "/reports/2019/SHP-Q1-Apr-June’19.pdf" },
    ],
  },
  {
    year: "2018-19",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'19", pdfUrl: "/reports/2019/SHP-Q4-Jan-March19-1.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'18", pdfUrl: "/reports/2019/SHP-Q3-Oct-Dec18.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'18", pdfUrl: "/reports/2019/Shareholding-Pattern-Q2-30.09.18.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'18", pdfUrl: "/reports/2018/08/Share_Holding_pattern_Q1_30_06_2018.pdf" },
    ],
  },
  {
    year: "2017-18",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'18", pdfUrl: "/reports/2018/SHP-Q-42017-18.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'17", pdfUrl: "/reports/2018/Q-3-Oct-Dec_2017.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'17", pdfUrl: "/reports/2018/Q-2-July-Sep_2017.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'17", pdfUrl: "/reports/2018/Q-1-April-June_2016.pdf" },
    ],
  },
  {
    year: "2016-17",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'17", pdfUrl: "/reports/2018/Q-4-Jan-March_2017.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'16", pdfUrl: "/reports/2018/Q-3-Oct-Dec_2016.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'16", pdfUrl: "/reports/2018/Q-2-July-Sep_-2016.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'16", pdfUrl: "/reports/2018/Q-1-April-June_2016-1.pdf" },
    ],
  },
  {
    year: "2015-16",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'16", pdfUrl: "/reports/2018/Q-4-Jan-Mar-16-1.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'15", pdfUrl: "/reports/2018/Q-3-Oct-15-Dec15-1.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'15", pdfUrl: "/reports/2018/SHP-July-Sep15.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'15", pdfUrl: "/reports/2018/SHP-April-June15.pdf" },
    ],
  },
  {
    year: "2014-15",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'15", pdfUrl: "/reports/2018/SHP-Q-4-Jan-March-15.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'14", pdfUrl: "/reports/2018/SHP-Q-3-Oct-Dec-14.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'14", pdfUrl: "/reports/2018/SHP-Q-2-July-Sep-14.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'14", pdfUrl: "/reports/2018/SHP-Q-1-April-June-14.pdf" },
    ],
  },
  {
    year: "2013-14",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'14", pdfUrl: "/reports/2018/SHP-31.03.2014.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'13", pdfUrl: "/reports/2018/SHP-31.12.2013.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'13", pdfUrl: "/reports/2018/SHP-30.09.2013.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'13", pdfUrl: "/reports/2018/SHP-30.06.2013.pdf" },
    ],
  },
  {
    year: "2012-13",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'13", pdfUrl: "/reports/2018/SHP-31.03.2013.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'12", pdfUrl: "/reports/2018/SHP-31.12.2012.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'12", pdfUrl: "/reports/2018/SHP-30.09.2012.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'12", pdfUrl: "/reports/2018/SHP-30.06.2012.pdf" },
    ],
  },
  {
    year: "2011-12",
    reports: [
      { name: "Q2 Shareholding Pattern", date: "Sep'11", pdfUrl: "/reports/2018/CS-Shareholding-Pattern-as-on-30.09.20110001.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'11", pdfUrl: "/reports/2018/CS-Shareholding-Pattern-as-on-30.06.20110001.pdf" },
    ],
  },
  {
    year: "2010-11",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'13", pdfUrl: "/reports/2018/CS-Shareholding-Pattern-31.03.20110001.pdf"},
      { name: "Q3 Shareholding Pattern", date: "Dec'12", pdfUrl: "/reports/2018/CS-Shareholding-Pattern-31.03.20110001.pdf" },
      { name: "Q2 Shareholding Pattern", date: "Sep'12", pdfUrl: "/reports/2018/CS-Sharehoding-pattern-as-on-30.09.20100001.pdf" },
      { name: "Q1 Shareholding Pattern", date: "Jun'12", pdfUrl: "/reports/2018/CS-Shareholding-Pattern-30.06.20100001.pdf" },
    ],
  },
  {
    year: "2009-10",
    reports: [
      { name: "Q4 Shareholding Pattern", date: "Mar'13", pdfUrl: "/reports/2018/CS-Shareholding-Pattern-31.03.20110001-1.pdf"},
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yearData.reports.map((report) => (
              <DownloadCard
                key={report.name}
                title={report.name}
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
