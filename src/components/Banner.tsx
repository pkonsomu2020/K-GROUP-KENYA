import React from "react";
// Use the public path for the image since it's in the public folder
const bannerImage = "/banner-img.jpg";

interface BannerProps {
  title: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <section
      className="relative w-full min-h-[280px] flex items-end justify-center overflow-hidden border-b"
      style={{ marginTop: '2.5rem' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12 pt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-brand-red max-w-3xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Banner; 