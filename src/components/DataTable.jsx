import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const DataTable = ({ title, data, updateData }) => {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns: [
      { accessorKey: "topic", header: "Topic" },
      { accessorKey: "weightage", header: "Weightage", sortingFn: "basic" },
      {
        accessorKey: "imp",
        header: "Important",
        cell: ({ getValue }) => (getValue() ? "✅" : "❌"),
      },
      {
        accessorKey: "isCompleted",
        header: "Completed",
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.original.isCompleted}
            onChange={() => updateData(row.original.topic)}
            className="w-5 h-5 cursor-pointer bg-gray-950"
          />
        ),
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  });

  return (
    <div className="p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
               <tr key={headerGroup.id}>
               {headerGroup.headers.map((header) => {
                 const sortedState = header.column.getIsSorted();
                 const sortingIcon =
                   sortedState === "asc" ? "⬆️" : sortedState === "desc" ? "⬇️" : "⬍";

                 return (
                   <th
                     key={header.id}
                     onClick={header.column.getToggleSortingHandler()}
                     className="p-3 text-left cursor-pointer border border-gray-700 select-none"
                   >
                     <div className="flex items-center gap-2">
                       {flexRender(header.column.columnDef.header, header.getContext())}
                       <span>{sortingIcon}</span>
                     </div>
                   </th>
                 );
               })}
             </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-zinc-900">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 border border-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
