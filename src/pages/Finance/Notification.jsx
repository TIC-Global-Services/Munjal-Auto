import DownloadCard from "../../components/Finance/DownloadCard"
import notifications from './notification.json'

const Notification = () => {

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Notification</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest company notifications, regulatory updates, and important announcements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notifications.map((notification, index) => (
          <DownloadCard
            key={index}
            title={notification.title}
            description={notification.description}
            dateRange={notification.date}
            pdfUrl="/sample-notification.pdf"
          />
        ))}
      </div>
    </div>
  )
}

export default Notification
