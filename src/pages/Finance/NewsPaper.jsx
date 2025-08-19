import DownloadCard from "../../components/Finance/DownloadCard"

const NewsPaper = () => {

  const newspaper = [
    {
      title: "Credit Rating 2024",
      description: "Latest credit rating assessment and analysis",
      date: "2024",
    },
    {
      title: "Credit Rating 2023",
      description: "Annual credit rating report and evaluation",
      date: "2023",
    },
    {
      title: "Credit Rating 2022",
      description: "Credit rating assessment for fiscal year 2022",
      date: "2022",
    },
    {
      title: "Credit Rating 2021",
      description: "Credit rating report and financial assessment",
      date: "2021",
    },
    {
      title: "CSR Annual Action Plan FY 2021-22",
      description: "Corporate Social Responsibility action plan and initiatives",
      date: "FY 2021-22",
    },
    {
      title: "Credit Rating 2020",
      description: "Credit rating evaluation and financial standing",
      date: "2020",
    },
    {
      title: "Company Updates 06.05.2020",
      description: "Important company announcements and updates",
      date: "06.05.2020",
    },
    {
      title: "Company Updated W.R.T. COVID-19 Situation",
      description: "COVID-19 impact assessment and company response",
      date: "2020",
    },
    {
      title: "Company Updates",
      description: "General company updates and announcements",
      date: "Recent",
    },
    {
      title: "Closure of Trading Window",
      description: "Trading window closure notification and guidelines",
      date: "As applicable",
    },
    {
      title: "Appointment of Director",
      description: "Board of directors appointment announcement",
      date: "Recent",
    },
    {
      title: "Closure of Plant",
      description: "Plant closure notification and related information",
      date: "As applicable",
    },
    {
      title: "Credit Rating",
      description: "General credit rating information and updates",
      date: "Current",
    },
  ]

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
            pdfUrl="/sample-notification.pdf"
          />
        ))}
      </div>
    </div>
  )
}

export default NewsPaper
