"use client";

import { QRCodeSVG } from "qrcode.react";

const URL = "https://app.tryinstallo.com";

export default function QRCodeSection() {
  return (
    <section className="relative z-10 border-t border-[#E5E5E5] bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-12">
        <h2 className="mb-2 text-lg font-semibold text-[#1A1A1A] md:text-xl">
          Scan to visit
        </h2>
        <p className="mb-8 text-sm text-[#4A4A4A] md:text-base">
          Point your camera at the QR code to open app.tryinstallo.com
        </p>
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-[#E5E5E5] bg-gradient-to-br from-white to-[#FAFAFA] p-8 shadow-lg shadow-black/5 md:p-10">
          {/* QR code with modern styling - white padding, rounded corners */}
          <div className="rounded-xl bg-white p-4 shadow-inner ring-1 ring-[#E5E5E5]/80">
            <QRCodeSVG
              value={URL}
              size={200}
              level="H"
              includeMargin={false}
              bgColor="#FFFFFF"
              fgColor="#1A1A1A"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-[#1A1A1A]">
              app.tryinstallo.com
            </span>
            <span className="text-xs text-[#ADADAD]">Instant access on your phone</span>
          </div>
        </div>
      </div>
    </section>
  );
}
