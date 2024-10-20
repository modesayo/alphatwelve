import React from 'react';
import Image from 'next/image'
// Main component rendering multiple Card components
const Card = () => {
  // Card component definition inside Dashboard
  const Cards = ({ header, value, change }: { header: string; value: string; change: number }) => (
    <div className="bg-white border-[1px] border-[#F2F2F7] rounded-[2px] h-[88px] small-screen-only p-[16px] md:w-[260px] gap-[16px] ">
          <div className="flex items-center mb-2"> {/* Flex container for header and image */}
        <h2 className="font-semibold text-[#64748B] font-inter mb-0 mr-2">{header}</h2> {/* Remove bottom margin */}
        <Image 
          alt='Information Icon' 
          width={16} 
          height={16} 
          src="/information.png" 
        />
      </div>

      <div className="flex items-center font-semibold text-2xl mb-1">
        <span>{value}</span>
        <span className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change > 0 && <img src='arrow-up-right.png' alt="Up Arrow" className="inline w-4 h-4 m-1" />}
          {change < 0 && <img src="arrow-down-right.png" alt="Down Arrow" className="inline w-4 m-1 h-4" />}
          {change > 0 ? '+' : ''}
          {change}%
        </span>
      </div>
    </div>
  );

  // Data array containing information for each card
  const cardData = [
    { header: "Total Events", value: "100,000", change: 5.0 },
    { header: "Active Speakers", value: "25", change: -5.0 },
    { header: "Total Registrations", value: "300", change: 5.0 },
    { header: "Total Revenue", value: "$500,000", change: 5.0 },
  ];

  return (
    <>
    <div className="flex flex-col md:flex-row gap-[12px]">
      {cardData.map((data, index) => (
        <Cards key={index} header={data.header} value={data.value} change={data.change} />
      ))}
    </div>
    </>
  );
};

export default Card;