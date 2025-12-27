const committees = () => {
  const BoardOfDirectorsList = [
    {
      name: "Mr. Sunil Chinubhai Vakil",
      role: "Chairman",
      designation: "Non-Executive Independent Director",
    },
    {
      name: "Mr. Atul Haribhai Patel",
      role: "Member",
      designation: "Non-Executive Independent Director",
    },
    {
      name: "Mrs. Avi Sabawala",
      role: "Member",
      designation: "Non-Executive Independent Director",
    },
    {
      name: "Mr. Sudhir Kumar Munjal",
      role: "Member",
      designation: "Executive Director",
    },
  ];

    const NominationAndRemunerationCommitteeList=[
      {
        "name": "Mr. Atul Haribhai Patel",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sunil Chinubhai Vakil",
        "role": "Member",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const StakeholdersRelationshipCommitteeList=[
      {
        "name": "Mrs. Avi Sabawala",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sameer Subhash Khera",
        "role": "Member",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Anuj Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const RiskManagementCommitteeList=[
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Chairman",
        "designation": "Executive Director"
      },
      {
        "name": "Mr. Sameer Subhash Khera",
        "role": "Member",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mrs. Anju Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const CorporateSocialResponsibilityCommitteeList=[
      {
        "name": "Mr. Sameer Subhash Khera",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Member",
        "designation": "Executive Director"
      },
      {
        "name": "Mrs. Anju Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
    const ShareTransferCommitteeList=[
      {
        "name": "Mrs. Avi Sabawala",
        "role": "Chairman",
        "designation": "Non-Executive Independent Director"
      },
      {
        "name": "Mr. Sudhir Kumar Munjal",
        "role": "Member",
        "designation": "Executive Director"
      }
    ]
  return (
    <div className="mt-10 px-5 lg:px-20 lg:p-10 overflow-x-hidden w-full">
     <div>
       <div>
        <h1 className="lg:text-[46px] lg:translate-x-[-12px] text-[22px] leading-[60px] text-center lg:text-start translate-x-[-1px] whitespace-nowrap lg:whitespace-normal">
          Composition of <span className="text-[#ED1C24]">Committees</span>
        </h1>

        <h1 className="mt-10 text-[16px] lg:text-[24px]">Audit Committee (AC)</h1>
      </div>
      <div className="flex gap-5 flex-wrap justify-center lg:mt-10 mt-5">
        {BoardOfDirectorsList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] rounded-[12px] text-center  w-full lg:max-w-[385px] lg:max-h-[200px] max-h-[140px] max-w-[358px] flex flex-col justify-center">
            <h1 className="text-[#ED1C24] font-bold lg:text-[20px] text-[16px]">{res.name}</h1>
            <p className="lg:text-[20px] font-[700] lg:font-[500] text-[16px]">({res.role})</p>
            <p className="text-[14px] lg:text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
     </div>
     <div>
       <div>
        <h1 className="text-[16px] lg:text-[24px] mt-10">Nomination & Remuneration Committee (NRC)</h1>
      </div>
       <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:mt-10 mt-5">
        {NominationAndRemunerationCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] w-full rounded-[12px] text-center  lg:max-h-[200px] max-h-[140px] max-w-[358px] flex flex-col justify-center">
            <h1 className="text-[#ED1C24] font-bold lg:text-[20px] text-[16px]">{res.name}</h1>
            <p className="lg:text-[20px] font-[500] text-[16px]">({res.role})</p>
            <p className="text-[14px] lg:text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
     </div>
     <div>
      <div>
         <div>
        <h1 className="text-[16px] lg:text-[24px] mt-10">Stakeholder’s Relationship Committee (SRC)</h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:mt-10 mt-5">
        {StakeholdersRelationshipCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] w-full rounded-[12px] text-center flex flex-col justify-center text-center lg:max-h-[200px] max-h-[140px] max-w-[358px]">
            <h1 className="text-[#ED1C24] font-bold lg:text-[20px] text-[16px]">{res.name}</h1>
            <p className="lg:text-[20px] font-[500] text-[16px]">({res.role})</p>
            <p className="text-[14px] lg:text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
      </div>
     </div>
     <div>
       <div>
        <h1 className="text-[16px] lg:text-[24px] mt-10">Risk Management Committee </h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:mt-10 mt-5">
        {RiskManagementCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] w-full rounded-[12px] flex flex-col justify-center text-center lg:max-h-[200px] max-h-[140px] max-w-[358px]">
            <h1 className="text-[#ED1C24] font-bold lg:text-[20px] text-[16px]">{res.name}</h1>
            <p className="lg:text-[20px] font-[500] text-[16px]">({res.role})</p>
            <p className="text-[14px] lg:text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
     </div>
      <div>
        <div>
        <h1 className="text-[14px] whitespace-nowrap lg:whitespace-normal lg:text-[24px] mt-10">Corporate Social Responsibility Committee</h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:mt-10 mt-5">
        {CorporateSocialResponsibilityCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] w-full rounded-[12px] flex flex-col justify-center text-center lg:max-h-[200px] max-h-[140px] max-w-[358px]">
            <h1 className="text-[#ED1C24] font-bold lg:text-[20px] text-[16px]">{res.name}</h1>
            <p className="lg:text-[20px] font-[500] text-[16px]">({res.role})</p>
            <p className="text-[14px] lg:text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
      </div>
         <div>
        <div>
        <h1 className="text-[14px] whitespace-nowrap lg:whitespace-normal lg:text-[24px] mt-10">Share Transfer Committee</h1>
      </div>
      <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:mt-10 mt-5">
        {ShareTransferCommitteeList.map((res, index) => (
          <div key={index} className="p-10 bg-[#F5F5F5] w-full rounded-[12px] flex flex-col justify-center text-center lg:max-h-[200px] max-h-[140px] max-w-[358px]">
            <h1 className="text-[#ED1C24] font-bold lg:text-[20px] text-[16px]">{res.name}</h1>
            <p className="lg:text-[20px] font-[500] text-[16px]">({res.role})</p>
            <p className="text-[14px] lg:text-[16px]">{res.designation}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
   
  );
};

export default committees;
