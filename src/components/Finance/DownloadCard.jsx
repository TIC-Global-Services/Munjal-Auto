"use client"

const DownloadCard = ({ title, dateRange, pdfUrl }) => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = pdfUrl.split("/").pop() // get filename from url
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  

  const handleShare = () => {
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
    <div className="bg-gray-950 rounded-2xl p-4 text-white max-w-sm">
      <div className="text-center mb-6 border p-6 rounded-2xl border-gray-400">
        <p className="text-gray-300 text-sm mb-4">Download the report here</p>

        <button
          onClick={handleDownload}
          className="w-full border-2 border-red-500 text-red-500 py-3 px-6 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-200 mb-3"
        >
          Download
        </button>

        <button
          onClick={handleShare}
          className="w-full bg-white text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          Share
        </button>
      </div>

      <div className="text-left">
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white font-medium text-xl">{dateRange}</p>
      </div>
    </div>
  )
}

export default DownloadCard
