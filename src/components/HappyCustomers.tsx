import React, { useState, useEffect } from "react";

const logos = [
  "/happy-customers/712.jpg",
  "/happy-customers/Ethiopia_INSA_Logo.jpg",
  "/happy-customers/Nib-International-Bank-Ethiopia-Logo-Profit.jpg",
  "/happy-customers/download (1).jpeg",
  "/happy-customers/download.jpeg",
  "/happy-customers/enat.jpeg",
  "/happy-customers/jsi-logo-footer.png",
  "/happy-customers/pict0-5845.png",
];

const HappyCustomers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = logos.length;
  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [totalSlides]);

  const getVisibleLogos = () => {
    const endIndex = (currentIndex + 1) * itemsPerPage;
    const visibleLogos = [];

    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex * itemsPerPage + i) % totalItems;
      visibleLogos.push(logos[index]);
    }

    return visibleLogos;
  };

  return (
    <section id="happy-customers" className="py-12 md:py-16 bg-white">
      <div className="luxury-container">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="luxury-heading text-2xl md:text-3xl">
            Happy Customers
          </h2>
          <p className="luxury-subheading mt-2">
            Trusted by leading organizations
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
            {getVisibleLogos().map((src, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-32"
              >
                <img
                  src={src}
                  alt="Customer logo"
                  className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
