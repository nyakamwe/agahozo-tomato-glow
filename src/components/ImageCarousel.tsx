
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
      src: "/lovable-uploads/0284ec66-0a4a-47c9-a4b7-5c129e4c7418.png",
      alt: "Farmer working in rice fields - sustainable agriculture"
    },
    {
      src: "/lovable-uploads/29467388-aa39-43ae-884d-69956263a26c.png",
      alt: "Solar-powered greenhouse with automated irrigation system"
    },
    {
      src: "/lovable-uploads/4c20f88c-081e-4e7d-bd22-553c19320d18.png",
      alt: "Fresh ripe tomatoes ready for harvest"
    },
    {
      src: "/lovable-uploads/82954982-a5e9-41df-81ab-4724872c518e.png",
      alt: "Farmer harvesting tomatoes in modern greenhouse"
    },
    {
      src: "/lovable-uploads/a10411b5-03d1-4ca4-9dfb-a722ac6689f3.png",
      alt: "Solar-powered irrigation system in greenhouse"
    },
    {
      src: "/lovable-uploads/4b5473c7-559b-471b-8edb-fd3b71450434.png",
      alt: "Organic tomato cultivation in controlled environment"
    },
    {
      src: "/lovable-uploads/828b581d-58ce-4370-9456-6d496dc26836.png",
      alt: "Hydroponic tomato farming in modern greenhouse"
    },
    {
      src: "/lovable-uploads/0b3c8fdc-8059-49b3-aa15-907883bad41e.png",
      alt: "Fresh harvested tomatoes ready for market"
    },
    {
      src: "/lovable-uploads/c39113cd-0a09-40ae-925e-d61b291d32f0.png",
      alt: "Smart agriculture technology and innovation"
    },
    {
      src: "/lovable-uploads/cd55d986-e5e1-4ed2-9376-b56722b4376b.png",
      alt: "Solar-powered farming irrigation system"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-slide every 4 seconds

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
            Explore our modern farming practices, sustainable agriculture, and premium crop production
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
