import { useState } from "react";
import type { IImage, IRender } from "../model/interfaces/IImage";
import { Image } from "./Image";
import "../styles/ImagesOverlay.css";
import { Render3D } from "./Render3D";

export const ImagesOverlay = ({
  images,
  render,
  handleClose,
}: {
  images: IImage[];
  render?: IRender;
  handleClose: () => void;
}) => {
  const [renderMode, setRenderMode] = useState(false);
  const [activeImage, setActiveImage] = useState<IImage>(images[0]);
  return (
    <section className="image-modal">
      <div className="image-modal-overlay" onClick={handleClose}></div>
      <div className="image-modal-content">
        <aside>
          {images.map((image, index) => (
            <button
              className={
                !renderMode && image.id === activeImage.id ? "active" : ""
              }
              onClick={() => {
                setActiveImage(image);
                setRenderMode(false);
              }}
              key={"image-" + index}
            >
              <Image
                url={image.url || image.image.url}
                alt={"image-" + index}
              />
            </button>
          ))}
        </aside>
        <article>
          <header>
            <button
              className={renderMode ? "" : "active"}
              onClick={() => setRenderMode(false)}
            >
              Imagenes
            </button>
            {render && (
              <button
                className={renderMode ? "active" : ""}
                onClick={() => setRenderMode(true)}
              >
                Render
              </button>
            )}
          </header>
          {renderMode && render ? (
            <Render3D url={render.url} />
          ) : (
            <Image
              url={activeImage.url || activeImage.image.url}
              alt={"image-" + activeImage.alt}
            />
          )}
        </article>
      </div>
    </section>
  );
};
