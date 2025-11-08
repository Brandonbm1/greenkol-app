import { config } from "../config/config";

export const Image = ({
  url,
  alt,
  viewTransitionName,
}: {
  url?: string;
  alt: string;
  viewTransitionName?: string;
}) => {
  const baseUrl = config.API_URL;
  return (
    <img
      src={`${baseUrl}${url}`}
      alt={alt}
      style={{
        viewTransitionName: viewTransitionName ? viewTransitionName : "",
      }}
    />
  );
};
