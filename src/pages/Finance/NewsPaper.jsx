import DownloadCard from "../../components/Finance/DownloadCard"
import newspaper from './newspaper.json'

const NewsPaper = () => {

  return (
    <div>
      

      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">News Paper Publication</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the Newspaper publications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newspaper.map((notification, index) => (
          <DownloadCard
            key={index}
            title={notification.title}
            description={notification.description}
            dateRange={notification.date}
            pdfUrl={notification.fileLink}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsPaper
