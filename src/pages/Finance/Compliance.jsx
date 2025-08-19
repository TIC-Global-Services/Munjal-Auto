const Compliance = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Corporate & Compliance</h1>
        <p className="text-gray-600 text-lg">
          Contact details and compliance information for key managerial personnel.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Red Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-red-600 uppercase tracking-wide border-b-2 border-red-600 pb-2">
            Contact Details of Key Managerial Personnel Authorized for Determining Materiality of an Event or
            Information
          </h2>
        </div>

        {/* Contact Details */}
        <div className="space-y-12">
          {/* Mrs. Gauri Y. Bapat */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mrs. Gauri Y. Bapat</h3>
            <p className="text-gray-700 font-medium mb-4">
              Company Secretary & Chief Legal Officer (Corporate & Compliance)
            </p>

            <div className="space-y-2 text-gray-600">
              <p>187, GIDC Industrial Estate,</p>
              <p>Waghodia (Gujarat)</p>
              <p>District : Vadodara</p>
              <p className="mt-3">
                <span className="font-medium">Phone :</span> +91-2668-262421-22
              </p>
              <p>
                <span className="font-medium">Fax :</span> +91-2668-262427
              </p>
              <p>
                <span className="font-medium">E-mail :</span>
                <a href="mailto:cs@munjalauto.com" className="text-red-600 hover:text-red-800 ml-1">
                  cs@munjalauto.com
                </a>
              </p>
            </div>
          </div>

          {/* Mr. Brham Prakash Yadav */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mr. Brham Prakash Yadav</h3>
            <p className="text-gray-700 font-medium mb-4">Chief Financial Officer (CFO)</p>

            <div className="space-y-2 text-gray-600">
              <p>2nd Floor, Tower "G"</p>
              <p className="text-red-600 font-medium">Unitech Business Zone</p>
              <p>Nirvana Country</p>
              <p>South City-2, Sector-50</p>
              <p>Gurugram</p>
              <p className="mt-3">
                <span className="font-medium">Phone :</span> (0124) 4057891/92
              </p>
              <p>
                <span className="font-medium">E-mail :</span>
                <a href="mailto:brhamprakash@munjalauto.com" className="text-red-600 hover:text-red-800 ml-1">
                  brhamprakash@munjalauto.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compliance
