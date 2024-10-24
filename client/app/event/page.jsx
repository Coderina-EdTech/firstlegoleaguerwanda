"use client";

import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const events = [
  {
    id: 1,
    name: "Robot Design Review",
    date: "2024-11-05",
    location: "Online",
    description: "Teams present their robot designs and coding strategies.",
  },
  {
    id: 2,
    name: "Core Values Workshop",
    date: "2024-11-12",
    location: "School Gym",
    description: "Interactive workshop on teamwork, inclusion, and innovation.",
  },
  {
    id: 3,
    name: "Regional FLL Competition",
    date: "2024-12-02",
    location: "City Arena",
    description: "Teams compete in robot games and project presentations.",
  },
  {
    id: 4,
    name: "Innovation Project Expo",
    date: "2024-12-15",
    location: "Community Center",
    description: "Showcase of solutions to real-world problems.",
  },
];

const Event = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of events per page

  // Function to filter events based on date (search input)
  const filteredEvents = events.filter((event) => event.date.includes(search));

  // Get paginated events
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  return (
    <div className="py-10 px-5 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-red-700">
        Upcoming FLL Events
      </h2>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="search"
          placeholder="Search by date (YYYY-MM-DD)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-[#0d2b42] px-4 outline-none rounded-2xl py-2  w-full md:w-1/2 lg:w-1/3 mx-auto"
        />
        {/* <IoMdSearch /> */}
      </div>

      {/* Event Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#0d2b42] text-white text-left">
              <th className="py-3 px-4">Event</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEvents.length > 0 ? (
              paginatedEvents.map((event) => (
                <tr key={event.id} className="border-t">
                  <td className="py-3 px-4">{event.name}</td>
                  <td className="py-3 px-4">{event.date}</td>
                  <td className="py-3 px-4">{event.location}</td>
                  <td className="py-3 px-4">{event.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">
                  No events found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1 ? "bg-gray-300" : "bg-red-700 text-white"
          } transition`}
        >
          Previous
        </button>

        <p className="text-gray-600">
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages ? "bg-gray-300" : "bg-red-700 text-white"
          } transition`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Event;
