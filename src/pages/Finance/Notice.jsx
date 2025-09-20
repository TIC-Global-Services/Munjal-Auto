import DownloadCard from "../../components/Finance/DownloadCard"
import notices from "./notices.json" // relative path

const Notice = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Notice</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Stay updated with all company notices, announcements, and important communications to shareholders and
          stakeholders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice, index) => (
          <DownloadCard
            key={index}
            title={notice.title}
            subtitle={notice.description}
            dateRange={notice.date || ""}
            pdfUrl={notice.fileLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Notice
