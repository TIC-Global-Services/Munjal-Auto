"use client"

import { useState, useMemo } from "react"
import { Search, ChevronDown, Download, Share2, Link, Facebook, Twitter, Mail, Check, X } from "lucide-react"

const AnnualReportCard = ({ yearData, onDownload, onShare, reportType }) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      // Use the PDF path from yearData if available
      const pdfUrl = yearData.pdf || `/pdfs/annual-report/annual-report-${yearData.year.replace(" to ", "-")}.pdf`

      const link = document.createElement("a")
      link.href = pdfUrl
      link.download = `${reportType} ${yearData.year}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      if (onDownload) onDownload(yearData.year, reportType)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setTimeout(() => setIsDownloading(false), 1000)
    }
  }

  return (
    <div className="bg-[#E8E8E8] border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 rounded-[28px]">
      <div className="p-8 border rounded-[15px] flex flex-col space-y-5">
        <p className="text-gray-600">Download the report here</p>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full flex items-center justify-center gap-2 bg-transparent text-red-500 py-2 px-4 rounded-full border border-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <>
              <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              Downloading...
            </>
          ) : (
            <>
              <Download size={16} />
              Download
            </>
          )}
        </button>
        <button
          onClick={() => onShare && onShare(yearData.year)}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-2xl border-1 border-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Share report"
        >
          <Share2 size={16} className="text-black" />
          Share
        </button>
      </div>
      <h3 className="font-semibold text-[12px] mb-1 mt-4 text-gray-600">{reportType}</h3>
      <p className="text-gray-800 text-[20px] mb-1">{yearData.year}</p>
    </div>
  )
}

const ShareModal = ({ isOpen, onClose, reportType, year }) => {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const shareUrl = `${window.location.origin}/reports/${reportType.toLowerCase().replace(/\s+/g, "-")}/${year.replace(" to ", "-")}`
  const shareText = `Check out the ${reportType} for ${year}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareOptions = [
    {
      name: "Copy Link",
      icon: Link,
      action: copyToClipboard,
      className: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    },
    {
      name: "Facebook",
      icon: Facebook,
      action: () =>
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank"),
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
          "_blank",
        ),
      className: "bg-sky-500 hover:bg-sky-600 text-white",
    },
    {
      name: "Email",
      icon: Mail,
      action: () =>
        window.open(
          `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
          "_blank",
        ),
      className: "bg-green-600 hover:bg-green-700 text-white",
    },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Share Report</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          {reportType} - {year}
        </p>

        <div className="space-y-3">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={option.action}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${option.className}`}
            >
              <option.icon size={20} />
              <span>{option.name}</span>
              {option.name === "Copy Link" && copied && <Check size={16} className="ml-auto text-green-600" />}
            </button>
          ))}
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 mb-2">Share URL:</p>
          <p className="text-sm font-mono bg-white p-2 rounded border break-all">{shareUrl}</p>
        </div>
      </div>
    </div>
  )
}

const AnnualReport = () => {
  const [showMore, setShowMore] = useState(false)
  const [showMore2, setShowMore2] = useState(false)
  const [showMore3, setShowMore3] = useState(false)
  const [shareModal, setShareModal] = useState({
    isOpen: false,
    reportType: "",
    year: "",
  })
  const [searchTerm, setSearchTerm] = useState("")

  const AnnualReportYears = [
    { year: "2023 to 2024", pdf: "/pdfs/Annual-Report-2023-24.pdf" },
    { year: "2022 to 2023", pdf: "/pdfs/Annual-Report-2022-23.pdf" },
    { year: "2021 to 2022", pdf: "/pdfs/Annual-Report-2021-22.pdf" },
    { year: "2020 to 2021", pdf: "/pdfs/Annual-Report-2020-21.pdf" },
  ]

  const AnnualReportMoreYears = [
    { year: "2019 to 2020", pdf: "/pdfs/Annual-Report-2019-20.pdf" },
    { year: "2018 to 2019", pdf: "/pdfs/Annual-Report-2018-19.pdf" },
    { year: "2017 to 2018", pdf: "/pdfs/Annual-Report-2017-18.pdf" },
    { year: "2016 to 2017", pdf: "/pdfs/Annual-Report-2016-17.pdf" },
    { year: "2015 to 2016", pdf: "/pdfs/Annual-Report-2015-16.pdf" },
    { year: "2014 to 2015", pdf: "/pdfs/Annual-Report-2014-15.pdf" },
    { year: "2013 to 2014", pdf: "/pdfs/Annual-Report-2013-14.pdf" },
    { year: "2012 to 2013", pdf: "/pdfs/Annual-Report-2012-13.pdf" },
    { year: "2011 to 2012", pdf: "/pdfs/Annual-Report-2011-12.pdf" },
    { year: "2010 to 2011", pdf: "/pdfs/Annual-Report-2010-11.pdf" },
    { year: "2009 to 2010", pdf: "/pdfs/Annual-Report-2009-10.pdf" },
    { year: "2008 to 2009", pdf: "/pdfs/Annual-Report-2008-09.pdf" },
    { year: "2007 to 2008", pdf: "/pdfs/Annual-Report-2007-08.pdf" },
  ]

  const AnnualReturnYears = [
    { year: "2023 to 2024", pdf: "/pdfs/return/MGT_7-FY-2023-2024.pdf" },
    { year: "2022 to 2023", pdf: "/pdfs/return/MGT-7-FY-2022-23.pdf" },
    { year: "2021 to 2022", pdf: "/pdfs/return/MGT-7-FY-2021-22.pdf" },
    { year: "2020 to 2021", pdf: "/pdfs/return/MGT-7-FY-2020-21.pdf" },
  ]

  const AnnualReturnMoreYears = [{ year: "2019 to 2020", pdf: "/pdfs/return/MGT-7-FY-2019-20.pdf" }]

  const BusinessReturnYears = [
    { year: "2019 to 2020", pdf: "/pdfs/business/BRR_2019-20.pdf" },
    { year: "2020 to 2021", pdf: "/pdfs/business/BRR-2020-21.pdf" },
    { year: "2021 to 2022", pdf: "/pdfs/business/BRR-2021-22.pdf" },
  ]

  const BusinessReturnMoreYears = [
    { year: "2011 to 2012", pdf: "/pdfs/Business-Responsibility-2011-12.pdf" },
    { year: "2010 to 2011", pdf: "/pdfs/Business-Responsibility-2010-11.pdf" },
    { year: "2009 to 2010", pdf: "/pdfs/Business-Responsibility-2009-10.pdf" },
    { year: "2008 to 2009", pdf: "/pdfs/Business-Responsibility-2008-09.pdf" },
  ]

  const filterBySearch = (reports, searchTerm) => {
    if (!searchTerm.trim()) return reports
    return reports.filter(
      (report) =>
        report.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.year.replace(/\s+/g, "").includes(searchTerm.replace(/\s+/g, "")) ||
        report.year.match(/\d{4}/g)?.some((year) => year.includes(searchTerm)),
    )
  }

  const filteredAnnualReports = useMemo(() => {
    const allReports = [...AnnualReportYears, ...AnnualReportMoreYears]
    return filterBySearch(allReports, searchTerm)
  }, [searchTerm])

  const filteredAnnualReturnReports = useMemo(() => {
    const allReports = [...AnnualReturnYears, ...AnnualReturnMoreYears]
    return filterBySearch(allReports, searchTerm)
  }, [searchTerm])

  const filteredBusinessReports = useMemo(() => {
    const allReports = [...BusinessReturnYears, ...BusinessReturnMoreYears]
    return filterBySearch(allReports, searchTerm)
  }, [searchTerm])

  const handleShare = (reportType, year) => {
    setShareModal({ isOpen: true, reportType, year })
  }

  const handleDownload = (year, reportType) => {
    console.log(`Downloaded ${reportType} for ${year}`)
  }

  const ReportSection = ({ title, years, moreYears, showMore, setShowMore, reportType, filteredReports }) => {
    const isSearchActive = searchTerm.trim() !== ""
    const reportsToShow = isSearchActive ? filteredReports : years
    const moreReportsToShow = isSearchActive ? [] : showMore ? moreYears : []

    return (
      <div className="max-w-7xl py-10 mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-4xl font-medium mb-4 md:mb-0">{title}</h1>
          {title === "Annual Report" && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search (2023, 2020-2021)"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete="off"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          )}
        </div>
        {reportsToShow.length === 0 && isSearchActive ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No reports found for "{searchTerm}"</p>
            <p className="text-gray-400 text-sm mt-2">Try searching for a year like "2023" or "2020"</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reportsToShow.map((yearData, index) => (
                <AnnualReportCard
                  key={`${reportType}-${yearData.year}-${index}`}
                  yearData={yearData}
                  onDownload={handleDownload}
                  onShare={(year) => handleShare(reportType, year)}
                  reportType={reportType}
                />
              ))}
            </div>
            {moreReportsToShow.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]">
                {moreReportsToShow.map((yearData, index) => (
                  <AnnualReportCard
                    key={`${reportType}-more-${yearData.year}-${index}`}
                    yearData={yearData}
                    onDownload={handleDownload}
                    onShare={(year) => handleShare(reportType, year)}
                    reportType={reportType}
                  />
                ))}
              </div>
            )}
            {moreYears && !isSearchActive && (
              <div className="flex justify-center mt-12">
                <button
                  className="flex items-center justify-center bg-gray-100 text-gray-800 rounded-full px-6 py-2 hover:bg-gray-200 transition-colors"
                  onClick={() => setShowMore(!showMore)}
                >
                  View {showMore ? "less" : "more"}
                  <ChevronDown
                    className={`ml-2 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <ReportSection
        title="Annual Report"
        years={AnnualReportYears}
        moreYears={AnnualReportMoreYears}
        showMore={showMore}
        setShowMore={setShowMore}
        reportType="Annual Report"
        filteredReports={filteredAnnualReports}
      />
      <ReportSection
        title="Extract Of Annual Return"
        years={AnnualReturnYears}
        moreYears={AnnualReturnMoreYears}
        showMore={showMore2}
        setShowMore={setShowMore2}
        reportType="Extract Of Annual Return"
        filteredReports={filteredAnnualReturnReports}
      />
      <ReportSection
        title="Business Responsibility Report"
        years={BusinessReturnYears}
        moreYears={BusinessReturnMoreYears}
        showMore={showMore3}
        setShowMore={setShowMore3}
        reportType="Business Responsibility Report"
        filteredReports={filteredBusinessReports}
      />
      <ShareModal
        isOpen={shareModal.isOpen}
        onClose={() => setShareModal({ isOpen: false, reportType: "", year: "" })}
        reportType={shareModal.reportType}
        year={shareModal.year}
      />
    </div>
  )
}

export default AnnualReport
