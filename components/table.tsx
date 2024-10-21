"use client";
import Papa from "papaparse";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
  Collapse,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Define the type for the event object
interface Event {
  name: string;
  date: string;
  speaker: string;
  status: "Completed" | "In Progress";
}

// Sample events data (predefined list)
const eventsData: Event[] = [
  {
    name: "Cloud Innovation Summit",
    date: "2023-10-01",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    name: "Blockchain Revolution Conference",
    date: "2023-10-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    name: "AI in Healthcare Symposium",
    date: "2023-10-10",
    speaker: "Dr. Aisha Mallik",
    status: "Completed",
  },
  {
    name: "Future of Fintech Forum",
    date: "2023-10-15",
    speaker: "John Lee",
    status: "In Progress",
  },
  {
    name: "Data Analytics in Business",
    date: "2023-10-20",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    name: "Sustainable Energy Expo",
    date: "2023-10-25",
    speaker: "Prof. Alan Green",
    status: "In Progress",
  },
  {
    name: "Web3 Interfaces Workshop",
    date: "2023-10-30",
    speaker: "Kevin Adams",
    status: "Completed",
  },
  {
    name: "Cybersecurity for Startups",
    date: "2023-11-01",
    speaker: "Emily Zhang",
    status: "In Progress",
  },
  {
    name: "Smart Cities Forum",
    date: "2023-11-05",
    speaker: "Dr. Maria Hernandez",
    status: "Completed",
  },
  {
    name: "Tech Safari Mixer",
    date: "2023-11-10",
    speaker: "Guest Panel",
    status: "In Progress",
  },
];

// Define props for StatusBadge component
interface StatusBadgeProps {
  status: "Completed" | "In Progress";
  showDot:  boolean;

}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status , showDot = true  }) => {
  const statusClasses = {
    Completed: " md:bg77 text-[#10B981]",
    "In Progress": " md:polos text-[#3B82F6]",
  };
const mobile = {
  Completed: "segg",
  "In Progress": "gress",

}
  const statusdot = {
    Completed: (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.50003" cy="8" r="3" fill="#10B981" />
      </svg>
    ),

    "In Progress": (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.50003" cy="8" r="3" fill="#3B82F6" />
      </svg>
    ),
  };
  return (
    <Badge
    className={`px-2 py-1 items-center rounded-full text-sm ${mobile[status]} ${statusClasses[status]}`}
    sx={{position: 'static'}}
    >
      
      {showDot && statusdot[status]} 
      {status}
    </Badge>
  );
};
const Arrowup = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);
const EventList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Set mobile state based on width
  };

  useEffect(() => {
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);
  const handlePagination = (direction: "previous" | "next" | number) => {
    setCurrentPage((prevPage) => {
      if (direction === "previous" && prevPage > 1) {
        return prevPage - 1;
      } else if (direction === "next") {
        return prevPage + 1;
      } else if (typeof direction === "number") {
        return direction;
      }
      return prevPage;
    });
  };
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value; // Capture the value from the event
    setSearchTerm(searchValue); // Update the search term state
    const filtered = eventsData.filter(
      (event) => event.name.toLowerCase().includes(searchValue.toLowerCase()) // Use the captured value here
    );
    setFilteredEvents(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };
  const sortEvents = (
    key: "name" | "date" | "status",
    order: "asc" | "desc"
  ) => {
    const sortedEvents = [...filteredEvents].sort((a, b) => {
      if (key === "date") {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else if (key === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (key === "status") {
        return order === "asc"
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      }
      return 0; // Fallback
    });
    setFilteredEvents(sortedEvents); // Update the state with sorted events
  };
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const handleExportToCSV = () => {
    const csv = Papa.unparse(filteredEvents);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "events.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);

    // Call the sortEvents function based on the selected option
    if (value === "option1") {
      sortEvents("name", "asc"); // Sort by name descending
    } else if (value === "option2") {
      sortEvents("name", "desc"); // Sort by name ascending
    } else if (value === "option3") {
      sortEvents("date", "asc");
    } else if (value === "option4") {
      sortEvents("date", "desc");
    } else if (value === "option5") {
      sortEvents("status", "asc");
    } else if (value === "option6") {
      sortEvents("status", "desc");
    }
  };
  const handleRowClick = (index: number) => {
    setOpenRows({ ...openRows, [index]: !openRows[index] });
  };

  // Replace with your current page state
  const totalPages = 10; // Replace with your total pages

  const getPages = () => {
    const pagesSet = new Set<number>();
    const start = Math.max(currentPage - 1, 1); // Start from one page before the current page
    const end = Math.min(currentPage + 1, totalPages); // End at two pages after the current page

    for (let i = start; i <= end; i++) {
      pagesSet.add(i);
    }

    // Adjust if we are at the beginning or end
    if (currentPage === 1) {
      pagesSet.add(2);
      pagesSet.add(3); // Show next pages if at the start
    }

    return Array.from(pagesSet); // Convert Set to Array
  };
  const pages = getPages();

  return (
    <div className="mobilem">
    <div className=" mx-auto  mobilem p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4">Event List</h2>
      <div className="flex flex-col  mb-4">
        <div className="flex flex-col md:flex-row gap-[8px]">
          <input
            type="search"
            className="px-4 h-[36px] bg22 bd py-2 rounded"
            placeholder="Search events"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            id="my-dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            className=" h-[36px] bd border bg22 rounded"
          >
            <option value="">Name</option>
            <option value="option1">asc</option>
            <option value="option2">desc</option>
          </select>
          <select
            id="my-dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            className=" h-[36px] bd border bg22 rounded"
          >
            <option value="">Date</option>
            <option value="option3">asc</option>
            <option value="option4">desc</option>
          </select>
          <select
            id="my-dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            className=" h-[36px] bd border bg22 rounded"
          >
            <option value="">Status</option>
            <option value="option5">asc</option>
            <option value="option6">desc</option>
          </select>
          <h1 className="my-auto md:ml-auto font-semibold">
            Displaying 100 results
          </h1>

          <div className="md:gap-[8px] justify-between  flex ">
            <h1 className="flex items-center">Sort :</h1>
            <select
              id="my-dropdown"
              value={selectedOption}
              onChange={handleSelectChange}
              className="items-center bd flex border h-[36px] bg22 text-center  rounded"
            >
              <option value="">Most Recent</option>
              <option value="option1">Asc</option>
              <option value="option2">Desc</option>
            </select>
          </div>
          <div className="md:gap-[8px] justify-between  flex ">
            <div className="flex justify-center items-center w-[36px] h-[36px] bg22 bd">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg2"
              >
                <path
                  d="M10.4166 5.83333C10.4166 6.06345 10.2301 6.25 9.99998 6.25C9.76986 6.25 9.58331 6.06345 9.58331 5.83333C9.58331 5.60321 9.76986 5.41666 9.99998 5.41666C10.2301 5.41666 10.4166 5.60321 10.4166 5.83333Z"
                 
                />
                <path
                  d="M10.4166 10C10.4166 10.2301 10.2301 10.4167 9.99998 10.4167C9.76986 10.4167 9.58331 10.2301 9.58331 10C9.58331 9.76988 9.76986 9.58333 9.99998 9.58333C10.2301 9.58333 10.4166 9.76988 10.4166 10Z"
                  
                />
                <path
                  d="M10.4166 14.1667C10.4166 14.3968 10.2301 14.5833 9.99998 14.5833C9.76986 14.5833 9.58331 14.3968 9.58331 14.1667C9.58331 13.9365 9.76986 13.75 9.99998 13.75C10.2301 13.75 10.4166 13.9365 10.4166 14.1667Z"
                 
                />
              </svg>
            </div>
            <button
              className="px-4 bd  h-[36px] flex items-center justify-between py-2 bg22 rounded "
              onClick={handleExportToCSV}
            > <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '8px' }} 
            className="bg2"
          >
            <path
              d="M1.16663 7.83333V8.83333C1.16663 9.9379 2.06206 10.8333 3.16663 10.8333H8.83329C9.93786 10.8333 10.8333 9.9379 10.8333 8.83333V7.83333M5.99996 7.5V1.16666M5.99996 7.5L3.83329 5.16666M5.99996 7.5L8.16663 5.16666"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

              Export
             
            </button>
          </div>
        </div>
      </div>
      {isMobile ? (
        <TableContainer>
        <Table sx={{ borderCollapse: 'collapse' }}> {/* Ensure borders are collapsed */}
          <TableHead className="bg-[#F1F5F9]">
            <TableRow>
              <TableCell className="" sx={{ border: 'none' }}>Event Name</TableCell>
              <TableCell className="" sx={{ border: 'none' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEvents.map((event, index) => (
              <React.Fragment key={index}>
                <TableRow className="bg22" sx={{ "& > *": { borderBottom: "none" } }} onClick={() => handleRowClick(index)}>
                  <TableCell className="flex" component="th" scope="row" sx={{ border: 'none' }}>
                    <span style={{ marginLeft: 8 }}>
                      {openRows[index] ? (<ArrowDown/>) : (<Arrowup/>)}
                    </span>
                    {event.name}
                  </TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>
                    <StatusBadge showDot={false} status={event.status} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ padding: 0, border: 'none' }} colSpan={2}>
                    <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                      <div className="bg-[#F5F5F5] h-[52px] items-center w-full p-5" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="pl-[16px]">{event.speaker}</div>
                        <div className="pr-[16px]">{event.date}</div>
                      </div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        {/* Pagination component */}
        {/* Add pagination buttons here */}
      </TableContainer>
      ) : (
        <TableContainer >
        <Table sx={{ borderCollapse: 'collapse' }}> {/* Collapse borders to eliminate gaps */}
          <TableHead className="bg3 txt">
            <TableRow>
              <TableCell className="txt" sx={{ border: 'none' }}>Event Name</TableCell>
              <TableCell className="txt" sx={{ border: 'none' }}>Date</TableCell>
              <TableCell className="txt" sx={{ border: 'none' }}>Speaker</TableCell>
              <TableCell className="txt" sx={{ border: 'none' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEvents.map((event, index) => (
              <TableRow key={index} className="bg22 txt" sx={{ "& > *": { borderBottom: "none" }, border: 'none' }}>
                <TableCell className="txt" sx={{ border: 'none' }}>{event.name}</TableCell>
                <TableCell className="txt" sx={{ border: 'none' }}>{event.date}</TableCell>
                <TableCell className="txt" sx={{ border: 'none' }}>{event.speaker}</TableCell>
                <TableCell className="txt" sx={{ border: 'none' }}>
                  <StatusBadge showDot={true} status={event.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-6">
          <button
            className={`px-3 py-1 bg22 rounded ${
              currentPage == 1 ? "disabled-button" : ""
            }`}
            onClick={() => handlePagination("previous")}
            disabled={currentPage == 1}
          >
            <FontAwesomeIcon className="bg4" icon={faChevronLeft} />
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              className={`gap-[16px] mx-4 flex justify-center ${
                page === currentPage
                  ? "bg-[#8576FF] w-[24px] h-[24px] text-white rounded-full"
                  : "bg-transparent"
              }`}
              onClick={() => handlePagination(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={`px-3 py-1 bd bg22 rounded ${
              currentPage === totalPages ? "disabled-button" : ""
            }`}
            onClick={() => handlePagination("next")}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon className="bg4" icon={faChevronRight} />
          </button>
        </div>
        <div className="">
          Show:
          <select
            className="ml-2 bg-transparent border-[1px] rounded"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
            <option value={50}>50 rows</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EventList;
