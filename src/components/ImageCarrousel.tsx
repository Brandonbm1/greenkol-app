import { useEffect, useRef, useState } from "react";
import type { IImage } from "../model/interfaces/IImage";
import { Image } from "./Image";
import "../styles/ImageCarrousel.css";
export const ImageCarrousel = ({
  images,
  name,
  autoMove = false,
  handleOpenModal,
  viewTransitionName,
}: {
  images: IImage[];
  name: string;
  autoMove?: boolean;
  viewTransitionName?: string;
  handleOpenModal?: () => void;
}) => {
  const CARROUSEL_ID = "carrousel";
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoMove) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  });

  const handleMoveActiveImage = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
    setActiveImageIndex(clampedIndex);
  };

  const handleNext = () => {
    if (activeImageIndex < images.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    // console.log(e)
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const ratio = x / width;

    const edgePercent = 0.2;

    if (ratio < edgePercent && activeImageIndex > 0) {
      return handlePrev();
    }
    if (ratio > 1 - edgePercent && activeImageIndex < images.length - 1) {
      return handleNext();
    }
    return handleOpenModal && handleOpenModal();
  };
  return (
    <div
      className="carrousel"
      onClick={handleContainerClick}
      ref={containerRef}
    >
      <div
        className="carrousel-image-container"
        id={CARROUSEL_ID}
        style={{
          transform: `translateX(-${activeImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <Image
            url={image.url || image.image.url}
            alt={name + "-" + index}
            key={"image-" + index}
            viewTransitionName={viewTransitionName ? viewTransitionName : ""}
          />
        ))}
      </div>
      <button
        className="carrousel-image-container-control"
        style={{
          left: 0,
          cursor: activeImageIndex > 0 ? "pointer" : "default",
          pointerEvents: activeImageIndex > 0 ? "all" : "none",
        }}
      />
      <button
        className="carrousel-image-container-control"
        style={{
          right: 0,
          cursor: activeImageIndex < images.length - 1 ? "pointer" : "default",
          pointerEvents: activeImageIndex < images.length - 1 ? "all" : "none",
        }}
      />
      <CarrouselControls
        images={images}
        handleChangeImage={handleMoveActiveImage}
        activeIndex={activeImageIndex}
      />
    </div>
  );
};

const CarrouselControls = ({
  images,
  handleChangeImage,
  activeIndex,
}: {
  images: IImage[];
  handleChangeImage: (index: number) => void;
  activeIndex: number;
}) => {
  return (
    <div className="carrousel-controls-container">
      {images.map((_, index) => (
        <button
          onClick={() => handleChangeImage(index)}
          key={`control-${index}`}
          className={activeIndex === index ? "active" : ""}
        ></button>
      ))}
    </div>
  );
};
