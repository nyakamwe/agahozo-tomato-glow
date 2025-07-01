
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/dfcb35e5-a33c-475a-99b3-f495a5bd056b.png",
      alt: "Fresh greenhouse tomatoes on the vine"
    },
    {
      src: "/lovable-uploads/9908c9ee-bfae-4e79-8c43-6ef2fbecc640.png",
      alt: "Fresh harvest of tomatoes and peppers"
    },
    {
      src: "/lovable-uploads/0c7eedfe-f253-4ed5-a927-bf5fb80e0b00.png",
      alt: "Growing tomatoes in different stages"
    },
    {
      src: "/lovable-uploads/6f253f1a-6926-40b6-b8e8-9c599069eb55.png",
      alt: "Solar-powered sustainable farming house"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Farm Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our premium greenhouse tomatoes and sustainable farming practices
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 text-center">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Mobile swipe indicator */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-sm text-gray-500 bg-white/70 px-4 py-2 rounded-full">
            Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
