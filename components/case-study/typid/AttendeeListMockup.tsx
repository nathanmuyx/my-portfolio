"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

const attendees = [
  { name: "Hope Mountain", id: "HIMAYA-0000188", email: "jmonsal13@gmail.com", type: "Silver", buyer: "Hope Mountain", date: "Dec 15, 2025" },
  { name: "Guest by Hope Mountain", id: "HIMAYA-0000189", email: "jmonsal13@gmail.com", type: "Silver", buyer: "Hope Mountain", date: "Dec 15, 2025" },
  { name: "Mr. and Mrs. Eric Balagot", id: "HIMAYA-0000166", email: "zighel74@gmail.com", type: "Bronze", buyer: "Mr. and Mrs. Eric Balagot", date: "Dec 01, 2025" },
  { name: "Guest by Green Alley Supergas Inc.", id: "HIMAYA-0000154", email: "Joeandrew1717@gmail.com", type: "Gold", buyer: "Green Alley Supergas Inc.", date: "Nov 28, 2025" },
  { name: "Miguelito Miguel", id: "HIMAYA-0000074", email: "miguelfam5@aol.com", type: "Bronze", buyer: "Miguelito Miguel", date: "Nov 26, 2025" },
  { name: "Guest by TOV IT Solutions", id: "HIMAYA-0000070", email: "dlemin2017@gmail.com", type: "Platinum", buyer: "TOV IT Solutions", date: "Nov 26, 2025" },
  { name: "Guest by TOV IT Solutions", id: "HIMAYA-0000071", email: "dlemin2017@gmail.com", type: "Platinum", buyer: "TOV IT Solutions", date: "Nov 26, 2025" },
  { name: "Guest by Aubrey Gagarra", id: "HIMAYA-0000064", email: "amgagarra2013@gmail.com", type: "ADMISSION TICKET", buyer: "Aubrey Gagarra", date: "Nov 25, 2025" },
  { name: "Gene Olojan", id: "HIMAYA-0000063", email: "jmonsal13@gmail.com", type: "Platinum", buyer: "Gene Olojan", date: "Nov 23, 2025" },
  { name: "Guest by Gene Olojan", id: "HIMAYA-0000062", email: "jmonsal13@gmail.com", type: "Platinum", buyer: "Gene Olojan", date: "Nov 23, 2025" },
];

function QRIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#374151]">
      <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="12" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="1" y="12" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="12" y="12" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="17" y="12" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="12" y="17" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="17" y="17" width="2" height="2" rx="0.5" fill="currentColor" />
    </svg>
  );
}

export function AttendeeListMockup() {
  return (
    <div className="w-[1100px] bg-white rounded-xl overflow-hidden select-none pointer-events-none font-sans">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#e5e7eb] hover:bg-transparent">
            <TableHead className="text-[#6b7280] text-[13px] font-medium pl-5 w-[22%]">Attendee Name</TableHead>
            <TableHead className="text-[#6b7280] text-[13px] font-medium w-[17%]">Email</TableHead>
            <TableHead className="text-[#6b7280] text-[13px] font-medium w-[12%]">Ticket Type</TableHead>
            <TableHead className="text-[#6b7280] text-[13px] font-medium w-[17%]">Buyer Name</TableHead>
            <TableHead className="text-[#6b7280] text-[13px] font-medium w-[12%]">Purchase Date</TableHead>
            <TableHead className="text-[#6b7280] text-[13px] font-medium w-[8%] text-center">QR Code</TableHead>
            <TableHead className="text-[#6b7280] text-[13px] font-medium w-[12%] text-right pr-5">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendees.map((row) => (
            <TableRow key={row.id} className="border-b border-[#f3f4f6] hover:bg-transparent">
              <TableCell className="pl-5 py-3.5">
                <p className="text-[14px] text-[#111827] font-medium leading-tight">{row.name}</p>
                <p className="text-[11px] text-[#9ca3af] leading-tight mt-0.5">{row.id}</p>
              </TableCell>
              <TableCell className="text-[13px] text-[#374151] py-3.5">{row.email}</TableCell>
              <TableCell className="py-3.5">
                <Badge variant="outline" className="border-[#d1d5db] text-[#374151] text-[12px] font-medium rounded-md bg-transparent">
                  {row.type}
                </Badge>
              </TableCell>
              <TableCell className="text-[13px] text-[#374151] py-3.5">{row.buyer}</TableCell>
              <TableCell className="text-[13px] text-[#374151] py-3.5">{row.date}</TableCell>
              <TableCell className="py-3.5 text-center">
                <div className="flex justify-center">
                  <QRIcon />
                </div>
              </TableCell>
              <TableCell className="py-3.5 pr-5 text-right">
                <Button size="sm" className="bg-[#1e293b] hover:bg-[#334155] text-white rounded-lg text-[13px] h-8 px-3 gap-1.5">
                  <CircleCheck className="w-4 h-4" />
                  Check In
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
