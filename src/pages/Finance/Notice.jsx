import DownloadCard from "../../components/Finance/DownloadCard"

const Notice = () => {
  const notices = [
    {
      title: "Annual General Meeting Notice",
      description: "Notice for Annual General Meeting 2024",
      date: "2024",
    },
    {
      title: "Board Meeting Outcome",
      description: "Outcome of Board Meeting held on March 15, 2024",
      date: "Mar 2024",
    },
    {
      title: "Dividend Declaration Notice",
      description: "Notice regarding declaration of interim dividend",
      date: "Feb 2024",
    },
    {
      title: "Rights Issue Notice",
      description: "Notice of Rights Issue to existing shareholders",
      date: "Jan 2024",
    },
    {
      title: "Corporate Action Notice",
      description: "Notice regarding corporate restructuring",
      date: "Dec 2023",
    },
    {
      title: "Extraordinary General Meeting",
      description: "Notice for EGM regarding special resolutions",
      date: "Nov 2023",
    },
    {
      title: "Compliance Certificate",
      description: "Certificate of compliance with listing regulations",
      date: "Oct 2023",
    },
    {
      title: "Change in Management",
      description: "Notice regarding changes in key management personnel",
      date: "Sep 2023",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Notice</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Stay updated with all company notices, announcements, and important communications to shareholders and
          stakeholders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {notices.map((notice, index) => (
          <DownloadCard
            key={index}
            title={notice.description}
            subtitle={notice.title}
            dateRange={notice.date}
            onDownload={() => window.open("/sample-report.pdf", "_blank")}
            onShare={() => {
              if (navigator.share) {
                navigator.share({
                  title: notice.title,
                  text: notice.description,
                  url: window.location.href,
                })
              } else {
                navigator.clipboard.writeText(window.location.href)
                alert("Link copied to clipboard!")
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Notice
