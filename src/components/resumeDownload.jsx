import QRCode from "qrcode.react";

const ResumeDownload = () => {
  const resumeUrl = "https://drive.google.com/file/d/1NHAgJ8gk8oVlk_6rah1BgIn7L1Bj3x3G/view?usp=drivesdk"; 

  return (
    <section className="px-6 py-10" id="resume-download">
      <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">
        Download My Resume
      </h2>
      <div className="h-1 w-20 bg-white mb-6"></div>
      <p className="text-lg mb-6">
        Scan the QR code below to download my resume instantly!
      </p>
      <div className="flex items-center justify-center">
        <QRCode 
          value={window.location.origin + resumeUrl} 
          size={200} 
          bgColor="#ffffff" 
          fgColor="#000000" 
          includeMargin={true}
        />
      </div>
    </section>
  );
};

export default ResumeDownload;
