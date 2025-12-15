import { config } from "../config/config";

export const Image = ({
  url,
  alt,
  viewTransitionName,
  width,
}: {
  url?: string;
  alt: string;
  viewTransitionName?: string;
  width?: number
}) => {
  const baseUrl = config.API_URL;
  return (
    <img
      src={`${baseUrl}${url}`}
      alt={alt}
      width={width}
      style={{
        viewTransitionName: viewTransitionName ? viewTransitionName : "",
      }}
    />
  );
};
