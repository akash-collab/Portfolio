import React from "react";
import QRCode from "qrcode.react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const ResumeDownload = () => {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1mgj3iVu_6cC4bMm55qsEJP25txBWNo4h";

  const resumeViewUrl =
    "https://drive.google.com/file/d/1mgj3iVu_6cC4bMm55qsEJP25txBWNo4h/preview";

  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    resumeUrl
  )}&title=Check%20out%20my%20resume!`;

  const emailShare = `mailto:?subject=My%20Resume&body=Hi,%20check%20out%20my%20resume%20here:%20${encodeURIComponent(
    resumeUrl
  )}`;

  return (
    <section
      className="px-6 py-16 bg-stone-900 text-white"
      id="resume-download"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
          Download My Resume
        </h2>
        <div className="h-1 w-20 bg-white mb-6 mx-auto"></div>
        <p className="text-lg mb-8">
          Scan the QR code, preview the PDF, or download directly below.
        </p>

        {/* QR Code with decorative corners */}
        <div className="flex justify-center mb-8">
          <div className="relative p-3 bg-white rounded-md shadow-lg">
            <QRCode
              value={resumeUrl}
              size={180}
              bgColor="#ffffff"
              fgColor="#1f2937"
              includeMargin={false}
            />
            {/* Decorative Corners */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-4 border-l-4 border-stone-100 rounded-tl-sm"></div>
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-4 border-r-4 border-stone-100 rounded-br-sm"></div>
          </div>
        </div>

        {/* Resume Embed */}
        <div className="w-full aspect-[4/3] max-w-4xl mx-auto mb-10">
          <iframe
            src={resumeViewUrl}
            className="w-full h-full rounded-lg shadow-lg"
            allow="autoplay"
            title="Resume Preview"
          />
        </div>

        {/* Download Button */}
        <a
          href={resumeUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition mb-6"
        >
          Download Resume
        </a>

        {/* Share Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href={linkedinShare}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
          >
            <FaLinkedin size={24} />
            Share on LinkedIn
          </a>

          <a
            href={emailShare}
            className="flex items-center gap-2 text-white hover:text-green-400 transition"
          >
            <FaEnvelope size={24} />
            Share via Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;