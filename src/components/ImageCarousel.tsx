
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const images = [
    {
      src: "/lovable-uploads/b66d04f0-e08e-41af-88d1-11f837805e35.png",
      alt: "Fresh harvested tomatoes in green crates ready for market"
    },
    {
      src: "/lovable-uploads/707f3f00-d116-42fe-9cd5-c492238d6d70.png",
      alt: "Farmer harvesting tomatoes in modern greenhouse"
    },
    {
      src: "/lovable-uploads/930a1299-d32b-45b3-afeb-e54bb8184304.png",
      alt: "Premium quality tomatoes in harvest crates"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-slide every 3 seconds for faster transition

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Farm Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium tomato production, sustainable farming practices, and quality harvest
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 text-center leading-relaxed">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Mobile swipe indicator */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-green-200 rounded-full animate-pulse delay-200"></div>
            </div>
            <p className="text-sm text-gray-600 ml-2">Swipe to explore →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
