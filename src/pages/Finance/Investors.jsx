const Investors = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Investors</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Investor Services Department is{" "}
          <span className="font-semibold">dedicated to provide efficient and timely service to our shareholders</span>.
          We are committed to assist our investors in the following areas of operation and their related correspondence.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          Transfer, nomination, transmission, change of address, dividend, issue of duplicate share certificates and
          split/consolidation of share certificates/debentures, etc. to the Registrar & Transfer Agent of the Company at
          following address:
        </p>

        <p className="text-gray-700 leading-relaxed">
          Investors can send their correspondence including requests for transfer, dematerialisation, transmission,
          subdivision, consolidation, change of address, etc. to the Registrar & Transfer Agent of the Company at
          following address:
        </p>
      </div>

      {/* MCS Share Transfer Agent Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-red-600 mb-4">MCS SHARE TRANSFER AGENT LIMITED</h2>

        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-medium">1st Floor, Neekan Apartment,</span>
          </p>
          <p>89, Sunderabai Colony,</p>
          <p>Above Chhappanbhog Sweet,</p>
          <p>Andheri,</p>
          <p>Vadodara – 390 007</p>

          <div className="mt-4 space-y-2">
            <p>
              <span className="font-medium">Tel:</span> (0265) 2341757, 2340490
            </p>
            <p>
              <span className="font-medium">Fax:</span> (0265) 2341838
            </p>
            <p>
              <span className="font-medium">E-Mail:</span> mcsltdbarodas@gmail.com; mcsstate@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            Investors may also contact <span className="font-medium">Ms. Grusti Y. Raput, Company Secretary</span> for
            any general assistance they may need, at the following address:
          </p>
        </div>
      </div>

      {/* Munjal Auto Industries Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-red-600 mb-4">MUNJAL AUTO INDUSTRIES LIMITED</h2>

        <div className="space-y-3 text-gray-700">
          <p>187, GIDC Industrial Estate,</p>
          <p>Waghodia (Gujarat)</p>
          <p>District - Vadodara</p>

          <div className="mt-4 space-y-2">
            <p>
              <span className="font-medium">Phone:</span> +91-2668-252424-22
            </p>
            <p>
              <span className="font-medium">Fax:</span> +91-2668-252427
            </p>
            <p>
              <span className="font-medium">E-mail:</span> cs@munjalgroup.com
            </p>
          </div>
        </div>
      </div>

      {/* Important Information Section */}
      <div className="space-y-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-medium">Members must quote their Folio No.</span> (in case of physical shares) and{" "}
            <span className="font-medium">DP ID & Client ID</span> (in case of dematerialised shares) in all the
            correspondences with the company. Any correspondence without the above details will not be entertained.
          </p>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
          <p className="text-gray-700 leading-relaxed">
            Members must notify promptly any changes in their address/bank account details – in case of physical form –
            to the Company's Share Department; in case of holding in dematerialised form – to their DPs.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-gray-700 leading-relaxed">
            Members who have either not received or have not encashed their dividend warrants for the financial year
            2004-05 & onwards must contact the Company's Share Department immediately.
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
          <p className="text-gray-700 leading-relaxed">
            The equity shares of the Company are under compulsory demat category hence members holding shares in
            physical form must dematerialise their physical holding at the earliest.
          </p>
        </div>
      </div>

      {/* PCS Mandate Form Section */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <a
          href="/form/ECS-Mandate-Form-1.doc"
          download
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-lg font-semibold">PCS MANDATE FORM</span>
        </a>
        <p className="text-gray-600 mt-2">Click to download the mandate form</p>
      </div>

    </div>
  )
}

export default Investors
