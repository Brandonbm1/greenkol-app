import { config } from "../config/config";

export const Image = ({
  url,
  alt,
  viewTransitionName,
  width,
  onLoad,
}: {
  url?: string;
  alt: string;
  viewTransitionName?: string;
  width?: number;
  onLoad?: () => void;
}) => {
  const baseUrl = config.API_URL;
  return (
    <img
      src={`${baseUrl}${url}`}
      alt={alt}
      width={width}
      onLoad={onLoad}
      style={{
        viewTransitionName: viewTransitionName ?? "",
      }}
    />
  );
};
