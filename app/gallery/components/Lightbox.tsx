"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LightboxProps = {
  images: string[];
  selectedImage: string;
  setSelectedImage: Dispatch<SetStateAction<string>>;
};

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  selectedImage,
  setSelectedImage,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;
  const currentImageIndex = images.indexOf(selectedImage);
  const isFirstImage = currentImageIndex <= 0;
  const isLastImage = currentImageIndex >= images.length - 1;

  const arrowBaseClasses =
    "hidden lg:absolute lg:top-[55%] lg:block lg:-translate-x-2/4 lg:-translate-y-2/4 lg:text-4xl";
  const getArrowClasses = (isDisabled: boolean) =>
    cn(
      arrowBaseClasses,
      isDisabled ? "lg:opacity-30 lg:cursor-not-allowed" : "lg:cursor-pointer"
    );

  const handlePreviousImage = useCallback(() => {
    if (isFirstImage) {
      return;
    }

    setSelectedImage(images[currentImageIndex - 1]);
  }, [isFirstImage, images, currentImageIndex, setSelectedImage]);

  const handleNextImage = useCallback(() => {
    if (isLastImage) {
      return;
    }

    setSelectedImage(images[currentImageIndex + 1]);
  }, [isLastImage, images, currentImageIndex, setSelectedImage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          handleNextImage();
          break;
        case "ArrowLeft":
          handlePreviousImage();
          break;
        case "Escape":
          setSelectedImage("");
          break;
      }
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [setSelectedImage, handleNextImage, handlePreviousImage]);

  // Preload adjacent images for smoother navigation
  useEffect(() => {
    if (!isFirstImage) {
      const prevImage = new window.Image();
      prevImage.src = `/${images[currentImageIndex - 1]}.webp`;
    }
    if (!isLastImage) {
      const nextImage = new window.Image();
      nextImage.src = `/${images[currentImageIndex + 1]}.webp`;
    }
  }, [currentImageIndex, images, isFirstImage, isLastImage]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextImage();
    }

    if (isRightSwipe) {
      handlePreviousImage();
    }
  };

  return (
    <div className="bg-background/90 fixed inset-0 top-0 left-0 z-50 flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-between p-6">
        <span className="ml-10 flex-1 text-center text-2xl md:ml-8">
          {currentImageIndex + 1}/{images.length}
        </span>
        <FontAwesomeIcon
          icon={faX}
          className="ml-auto cursor-pointer text-3xl"
          onClick={() => setSelectedImage("")}
        />
      </div>

      <div
        className="flex h-full w-screen items-center justify-center gap-6 select-none lg:gap-52 xl:gap-80"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={cn(getArrowClasses(isFirstImage), "lg:left-[10%]")}
          onClick={handlePreviousImage}
        />
        <Image
          quality={100}
          priority={true}
          src={`/${selectedImage}.webp`}
          alt={selectedImage}
          width={512}
          height={844}
          className="h-4/5 w-4/5 object-contain lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className={cn(getArrowClasses(isLastImage), "lg:right-[8%]")}
          onClick={handleNextImage}
        />
      </div>
    </div>
  );
};
