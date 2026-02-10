"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";

export function QRScannerMockup() {
  return (
    <div className="w-[375px] bg-[#0f1729] text-white font-sans select-none pointer-events-none">
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5 text-white/70 shrink-0" />
          <div>
            <p className="text-lg font-bold leading-tight">Check-In Scanner</p>
            <p className="text-xs text-white/40 leading-tight">Himaya</p>
          </div>
        </div>
      </div>

      {/* Scanner card */}
      <Card className="mx-4 border-white/10 bg-[#131b2e] rounded-xl shadow-none gap-0 py-0">
        <CardContent className="p-4 pb-3">
          <p className="text-sm font-semibold text-white mb-3">QR Code Scanner</p>

          {/* Camera viewfinder */}
          <div className="rounded-lg bg-[#1a2236] relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            {/* Corner guides */}
            <div className="absolute top-[18%] left-[22%] w-[56%] h-[50%]">
              <div className="absolute top-0 left-0 w-[20%] h-[16%] border-t-[3px] border-l-[3px] border-[#17bff9] rounded-tl-sm" />
              <div className="absolute top-0 right-0 w-[20%] h-[16%] border-t-[3px] border-r-[3px] border-[#17bff9] rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-[20%] h-[16%] border-b-[3px] border-l-[3px] border-[#17bff9] rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-[20%] h-[16%] border-b-[3px] border-r-[3px] border-[#17bff9] rounded-br-sm" />
            </div>
            {/* Status pill */}
            <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2">
              <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-1.5">
                <span className="text-xs text-white/80 whitespace-nowrap">Searching for QR code...</span>
              </div>
            </div>
          </div>

          {/* Stop button */}
          <Button variant="destructive" className="w-full mt-3 rounded-lg bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium">
            Stop Scanning
          </Button>
        </CardContent>
      </Card>

      {/* How to use */}
      <Card className="mx-4 mt-3 mb-5 border-white/10 bg-[#131b2e] rounded-xl shadow-none gap-0 py-0">
        <CardContent className="p-4">
          <p className="text-sm font-semibold text-white mb-3">How to use:</p>
          <div className="space-y-1.5">
            {[
              'Click "Start Scanning" to activate the camera',
              "Point the camera at the attendee's QR code",
              "Wait for automatic detection (corner guides will turn green)",
              "The system will validate the QR code (yellow spinner)",
              "You'll see a success or error message with details",
              "The device will vibrate to confirm the scan",
              "Recent check-ins appear in the list above",
            ].map((step, i) => (
              <p key={i} className="text-[13px] text-white/50 leading-snug">
                {i + 1}. {step}
              </p>
            ))}
          </div>

          {/* Visual indicators box */}
          <div className="mt-3 rounded-lg bg-white/[0.06] px-4 py-3">
            <p className="text-[13px] font-semibold text-white mb-1.5">Visual Indicators:</p>
            <p className="text-[12px] text-white/40 leading-relaxed">Blue corners = Searching for QR code</p>
            <p className="text-[12px] text-white/40 leading-relaxed">Green corners = QR code detected</p>
            <p className="text-[12px] text-white/40 leading-relaxed">Yellow spinner = Validating check-in</p>
          </div>
        </CardContent>
      </Card>

      {/* FAB */}
      <div className="flex justify-end px-5 pb-5">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#17bff9] flex items-center justify-center shadow-lg">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0f1729]" />
        </div>
      </div>
    </div>
  );
}
