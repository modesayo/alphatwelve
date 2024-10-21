import React from "react";
import { Modal} from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ open, onClose }) => {
  const eventData = {
    name: "Event Name",
    date: "Event Date",
    description: "Event Description.",
    speakers: "3 Guest Speakers: Seaker name A, Speaker name B, Speaker name C",
    attendees: "300 Attendees ",
  };
  return (
    <Modal open={open} onClose={onClose}>
            <div className="w-full h-full flex justify-center items-center">
                <div className="bg22 md:w-[440px] w-[335px] h-[470px] md:h-[340px] shadow-md flex flex-col">
                    <div className="flex justify-between px-[24px] pt-[24px] items-center">
                        <div>
                            <h2 className="text-xl text-[18px] font-semibold">{eventData.name}</h2>
                            <p className="text-[#64748B] txt text-[14px] font-medium">{eventData.date}</p>
                        </div>
                        <button onClick={onClose} className="mb-auto">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
                                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#E2E8F0" />
                                <path
                                    d="M14.625 9.375L9.375 14.625"
                                    stroke="#334155"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9.375 9.375L14.625 14.625"
                                    stroke="#334155"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="px-[24px] txt py-[22px]">{eventData.description}</p>
                    <div className=" justify-between flex flex-col px-[24px] h-[156px]">
                       
                        <img src="avatar group.png" alt="Group Avatar" className="w-[80px] h-[32px]" />
                        
                            <p className="txt">{eventData.speakers}</p>
                        
                            <p className="txt">{eventData.attendees}</p>
                    </div>
                    <div className="flex h-[174px] flex-col md:flex-row md:h-[84px] md:px-[24px] p-[24px] bg-[#F8FAFC] justify-between items-center">
                        <button className="bg-white text-black font-thin border-[1px] h-[36px] w-full md:w-[70px] px-4 rounded">
                            Edit
                        </button>
                        
                            <button
                                className="h-[36px] mr-[8px] md:w-[75px] md:ml-auto bg-[#F43F5E] font-thin text-center text-white w-full px-4 rounded"
                                onClick={onClose}
                            >
                                Delete
                            </button>
                            <button
                                className="h-[36px] w-full bg-[#8576FF] whitespace-nowrap md:w-[160px] font-thin text-white px-4 rounded"
                                onClick={onClose}
                            >
                                Mark as Completed
                            </button>
                        </div>
                    
            </div></div>
        </Modal>
  );
};

export default ModalComponent;
