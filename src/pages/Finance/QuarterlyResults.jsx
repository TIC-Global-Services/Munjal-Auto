"use client"

import DownloadCard from "../../components/Finance/DownloadCard"

const quarterlyData = [
  {
    year: "2025-26",
    quarters: [
      { name: "Q1 (Apr-Jun'25)", date: "Apr-Jun'25", pdfUrl: "/reports/2025/08/Q1-April-June-25-.pdf" },
    ],
  },
  {
    year: "2024-25",
    quarters: [
      { name: "Q4 (Jan-Mar'25)", date: "Jan-Mar'25", pdfUrl: "/reports/2025/05/Q4Jan-Mar-25_compressed.pdf" },
      { name: "Q3 (Oct-Dec'24)", date: "Oct-Dec'24", pdfUrl: "/reports/2025/02/Q3-Oct-Dec-24-.pdf" },
      { name: "Q2 (Jul-Sep'24)", date: "Jul-Sep'24", pdfUrl: "/reports/2024/11/OUTCOMESEPT2024.pdf" },
      { name: "Q1 (Apr-June'24)", date: "Apr-June'24", pdfUrl: "/reports/2024/11/finaloutcomemerged.pdf" },
    ],
  },
  {
    year: "2023-24",
    quarters: [
      { name: "Q4 (Jan-Mar'24)", date: "Jan-Mar'24", pdfUrl: "/reports/2024/07/Q4-Jan-Mar24_Result.pdf" },
      { name: "Q3 (Oct-Dec'23)", date: "Oct-Dec'23", pdfUrl: "/reports/2024/02/Q3-Oct-Dec24.pdf" },
      { name: "Q2 (Jul-Sep'23)", date: "Jul-Sep'23", pdfUrl: "/reports/2023/11/Q2-Jul-Sept23_Result.pdf" },
      { name: "Q1 (Apr-June'23)", date: "Apr-June'23", pdfUrl: "/reports/2023/08/Q1-April-June23.pdf" },
    ],
  },
  {
    year: "2022-23",
    quarters: [
      { name: "Q4 (Jan-Mar'23)", date: "Jan-Mar'23", pdfUrl: "/reports/2023/05/Q4-Jan-Mar23.pdf" },
      { name: "Q3 (Oct-Dec'22)", date: "Oct-Dec'22", pdfUrl: "/reports/2023/02/Q3-Oct-Dec22.pdf" },
      { name: "Q2 (Jul-Sep'22)", date: "Jul-Sep'22", pdfUrl: "/reports/2022/11/Q2-July-Sep22.pdf" },
      { name: "Q1 (Apr-June'22)", date: "Apr-June'22", pdfUrl: "/reports/2022/08/Q1Apr-June22.pdf" },
    ],
  },
  {
    year: "2021-22",
    quarters: [
      { name: "Q4 (Jan-Mar'22)", date: "Jan-Mar'22", pdfUrl: "/reports/2022/05/Q4-Jan-March2022.pdf" },
      { name: "Q3 (Oct-Dec'21)", date: "Oct-Dec'21", pdfUrl: "/reports/2022/02/Q3Oct-Dec21.pdf" },
      { name: "Q2 (Jul-Sep'21)", date: "Jul-Sep'21", pdfUrl: "/reports/2021/11/Q2-July-Sept2021.pdf" },
      { name: "Q1 (Apr-June'21)", date: "Apr-June'21", pdfUrl: "/reports/2021/08/Q1-Apr-Jun21.pdf" },
    ],
  },
  {
    year: "2020-21",
    quarters: [
      { name: "Q4 (Jan-Mar'21)", date: "Jan-Mar'21", pdfUrl: "/reports/2021/06/Q4-Jan-Mar21.pdf" },
      { name: "Q3 (Oct-Dec'20)", date: "Oct-Dec'20", pdfUrl: "/reports/2021/02/Q3-Oct-Dec20.pdf" },
      { name: "Q2 (Jul-Sep'20)", date: "Jul-Sep'20", pdfUrl: "/reports/2020/11/Outcome-182nd-Board-Meeting.pdf" },
      { name: "Q1 (Apr-June'20)", date: "Apr-June'20", pdfUrl: "/reports/2020/10/Q1-Apr-June-20.pdf" },
    ],
  },
  {
    year: "2019-20",
    quarters: [
      { name: "Q4 (Jan-Mar'20)", date: "Jan-Mar'20", pdfUrl: "/reports/2020/07/Outcome-of-180th-Board-Meeting.pdf" },
      { name: "Q3 (Oct-Dec'19)", date: "Oct-Dec'19", pdfUrl: "/reports/2020/02/179th-Board-MeetingD.pdf" },
      { name: "Q2 (Jul-Sep'19)", date: "Jul-Sep'19", pdfUrl: "/reports/2019/Munjal-Auto-Result-Q2.pdf" },
      { name: "Q1 (Apr-June'19)", date: "Apr-June'19", pdfUrl: "/reports/2019/Mar-June-2019-Quarterly-Result.pdf" },
    ],
  },
  {
    year: "2018-19",
    quarters: [
      { name: "Q4 (Jan-Mar'19)", date: "Jan-Mar'19", pdfUrl: "/reports/2019/BSENSE22052019.pdf" },
      { name: "Q3 (Oct-Dec'18)", date: "Oct-Dec'18", pdfUrl: "/reports/2019/Result-Q3-2018-19.pdf" },
      { name: "Q2 (Jul-Sep'18)", date: "Jul-Sep'18", pdfUrl: "/reports/2019/Q2-Quarterly-Results-2018.pdf" },
      { name: "Q1 (Apr-June'18)", date: "Apr-June'18", pdfUrl: "/reports/2018/Q1_Apr-June2018.pdf" },
    ],
  },
  {
    year: "2017-18",
    quarters: [
      { name: "Q4 (Jan-Mar'18)", date: "Jan-Mar'18", pdfUrl: "/reports/2018/Q-4-Jan-Mar18.pdf" },
      { name: "Q3 (Oct-Dec'17)", date: "Oct-Dec'17", pdfUrl: "/reports/2018/Q3_Oct_Dec17.pdf" },
      { name: "Q2 (Jul-Sep'17)", date: "Jul-Sep'17", pdfUrl: "/reports/2018/Q2Apr-June17_Quarterly-Results.pdf2019/Q2-Quarterly-Results-2018.pdf" },
      { name: "Q1 (Apr-June'17)", date: "Apr-June'17", pdfUrl: "/reports/2018/quarter_ended-30_06_2017.pdf" },
    ],
  },
  {
    year: "2016-17",
    quarters: [
      { name: "Q4 (Jan-Mar'17)", date: "Jan-Mar'17", pdfUrl: "/reports/2018/Q-4-2016-17.pdf" },
      { name: "Q3 (Oct-Dec'16)", date: "Oct-Dec'16", pdfUrl: "/reports/2018/RESULT31122016.pdf" },
      { name: "Q2 (Jul-Sep'16)", date: "Jul-Sep'16", pdfUrl: "/reports/2018/Q2Apr-June17_Quarterly-Results.pdf2019/Q2-Quarterly-Results-2018.pdf" },
      { name: "Q1 (Apr-June'16)", date: "Apr-June'16", pdfUrl: "/reports/2018/quarter_ended_30_06_2016.pdf" },
    ],
  },
  {
    year: "2015-16",
    quarters: [
      { name: "Q4 (Jan-Mar'16)", date: "Jan-Mar'16", pdfUrl: "/reports/2018/Q-4-Jan-March16.pdf" },
      { name: "Q3 (Oct-Dec'15)", date: "Oct-Dec'15", pdfUrl: "/reports/2018/Q-3-Oct-15-Dec15.pdf" },
      { name: "Q2 (Jul-Sep'15)", date: "Jul-Sep'15", pdfUrl: "/reports/2018/Q-2-July-Sep15.pdf" },
      { name: "Q1 (Apr-June'15)", date: "Apr-June'15", pdfUrl: "/reports/2018/Q-2-July-Sep15.pdf" },
    ],
  },
  {
    year: "2014-15",
    quarters: [
      { name: "Q4 (Jan-Mar'15)", date: "Jan-Mar'15", pdfUrl: "/reports/2018/Result-31.03.20150001.pdf" },
      { name: "Q3 (Oct-Dec'14)", date: "Oct-Dec'14", pdfUrl: "/reports/2018/BSE-Result-31.12.14.pdf" },
      { name: "Q2 (Jul-Sep'14)", date: "Jul-Sep'14", pdfUrl: "/reports/2018/Q2-Jul-Sept-2014.pdf" },
      { name: "Q1 (Apr-June'14)", date: "Apr-June'14", pdfUrl: "/reports/2018/Quarterly_Results_April_June_2014_1.pdf" },
    ],
  },
  {
    year: "2013-14",
    quarters: [
      { name: "Q4 (Jan-Mar'14)", date: "Jan-Mar'14", pdfUrl: "/reports/2018/Q4-Jan-March-2014.pdf" },
      { name: "Q3 (Oct-Dec'13)", date: "Oct-Dec'13", pdfUrl: "/reports/2018/Q3-Oct-Dec13.pdf" },
      { name: "Q2 (Jul-Sep'13)", date: "Jul-Sep'13", pdfUrl: "/reports/2018/Q2-Jul-Sep2013.pdf" },
      { name: "Q1 (Apr-June'13)", date: "Apr-June'13", pdfUrl: "/reports/2018/Quarterly_Results_Apr_march_2013.pdf" },
    ],
  },
  {
    year: "2011-12",
    quarters: [
      { name: "Q4 (Jan-Mar'12)", date: "Jan-Mar'12", pdfUrl: "/reports/2018/Q4_Audited_Result_31_03_2012.pdf" },
      { name: "Q3 (Oct-Dec'11)", date: "Oct-Dec'11", pdfUrl: "/reports/2018/Unaudited-Result-31.12.2011.pdf" },
      { name: "Q2 (Jul-Sep'11)", date: "Jul-Sep'11", pdfUrl: "/reports/2018/Unaudited-Result-30.09.2011.pdf" },
      { name: "Q1 (Apr-June'11)", date: "Apr-June'11", pdfUrl: "/reports/2018/Outcome-of141st-Board-Meeting-NSE0001.pdf" },
    ],
  },
  {
    year: "2010-11",
    quarters: [
      { name: "Q4 (Jan-Mar'11)", date: "Jan-Mar'11", pdfUrl: "/reports/2018/Unaudited-Result-31.12.2011-1.pdf" },
      { name: "Q3 (Oct-Dec'10)", date: "Oct-Dec'10", pdfUrl: "/reports/2018/Unaudited-Results-Dec-10.pdf" },
      { name: "Q2 (Jul-Sep'10)", date: "Jul-Sep'10", pdfUrl: "/reports/2018/Unaudited-Results-Sept10.pdf" },
      { name: "Q1 (Apr-June'10)", date: "Apr-June'10", pdfUrl: "/reports/2018/Unaudited-Financial-Result-30.06.20100001.pdf" },
    ],
  },
  {
    year: "2009-10",
    quarters: [
      { name: "Q4 (Jan-Mar'10)", date: "Jan-Mar'10", pdfUrl: "/reports/2018/unaudited-results-31.03.10.pdf" },
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
