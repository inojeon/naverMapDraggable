import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

const data = [
  {
    title: "Find me on Twitter",
    link: "#",
    imageUrl: "https://placeimg.com/1200/600/any",
  },
  {
    title: "Welcome to Ark Labs",
    link: "https://ark-labs.co.uk",
    imageUrl: "https://placeimg.com/1200/600/animals",
  },
  {
    title: "Some sort of third title",
    link: "#",
    imageUrl: "https://placeimg.com/1200/600/architecture",
  },
  {
    title: "A personal site perhaps?",
    link: "https://robkendal.co.uk",
    imageUrl: "https://placeimg.com/1200/600/nature",
  },
];
const Carousel = () => {
  const [carouselData, _] = useState(data);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLInputElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(carouselData.length - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (carouselData.length - 1 === currentIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevState) => prevState + 1);
      }
    }, 5000);
    return () => clearTimeout(timerId);
  }, [currentIndex, carouselData]);

  return (
    <div className="carousel mx-auto">
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <div className="z-10 flex items-end gap-x-2 pb-2 ">
            {carouselData &&
              carouselData.map((_, idx) => (
                <div key={idx}>
                  <button
                    className={clsx(
                      " h-4 rounded-full bg-white border-solid border-2 border-blue-600 hover:border-double transition-all ease-in-out duration-500",
                      currentIndex === idx ? "w-8" : "w-4"
                    )}
                    onClick={() => {
                      setCurrentIndex(idx);
                    }}
                  ></button>
                </div>
              ))}
          </div>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className=" relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {carouselData &&
            carouselData.map((resource, index) => {
              return (
                <div
                  key={index}
                  className=" text-center relative h-96 snap-start"
                >
                  <a
                    // href={resource.link}
                    className="h-full w-screen max-w-7xl block bg-center bg-origin-padding bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${resource.imageUrl || ""})`,
                    }}
                  ></a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
