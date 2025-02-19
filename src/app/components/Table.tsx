"use client";

import React from "react";
import { Button } from "./ui/Button";
import FilterButton from "./ui/FilterButton";
import { PlusIcon } from "./ui/icons/plus-icon";

const Table = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-300 divide-y divide-y-gray-300">
      <div className="divide-y divide-y-gray-300">
        <div className="p-6">
          <div className="flex border border-gray-300 rounded-lg divide-x divide-gray-300">
            <div className="flex-grow py-[10px] px-6">
              <p className="text-textGray text-sm">Total Revenue</p>
              <p className="text-textColor font-bold text-base">$12,084</p>
            </div>
            <div className="flex-grow py-[10px] px-6">
              <p className="text-textGray text-sm">Total Revenue</p>
              <p className="text-textColor font-bold text-base">$12,084</p>
            </div>
            <div className="flex-grow py-[10px] px-6">
              <p className="text-textGray text-sm">Total Revenue</p>
              <p className="text-textColor font-bold text-base">$12,084</p>
            </div>
            <div className="flex-grow py-[10px] px-6">
              <p className="text-textGray text-sm">Total Revenue</p>
              <p className="text-textColor font-bold text-base">$12,084</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-6">
          <div className="flex flex-wrap gap-4">
            <FilterButton
              count={340}
              isSelected={true}
              label="All Orders"
              onClick={() => {}}
              key={1}
            />
            <FilterButton
              count={340}
              isSelected={false}
              label="Processing"
              onClick={() => {}}
              key={1}
            />
            <FilterButton
              count={340}
              isSelected={false}
              label="Processing"
              onClick={() => {}}
              key={1}
            />
            <FilterButton
              count={340}
              isSelected={false}
              label="Processing"
              onClick={() => {}}
              key={1}
            />
            <FilterButton
              count={340}
              isSelected={false}
              label="Processing"
              onClick={() => {}}
              key={1}
            />
          </div>
          <div className="relative ml-auto">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>

            <input
              type="text"
              id="Search"
              placeholder="Search order..."
              className="min-w-[300px] h-full rounded-md border border-gray-300 py-2.5 ps-10 shadow-sm sm:text-sm"
            />
          </div>
          <Button label="Filters" startIcon={<PlusIcon />} />
        </div>
      </div>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-b-xl">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Date of Birth
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Role
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Salary
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              John Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Web Developer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $120,000
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jane Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              04/11/1980
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Web Designer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $100,000
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Gary Barlow
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Singer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $20,001
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
