import toast, { type ToastOptions } from "react-hot-toast";

export const toastServices = () => {
  const settings: ToastOptions = {
    duration: 3000,
    position: "top-right",
    toasterId: "default",
  };
  const success = (message: string) => {
    toast.success(message, settings);
  };
  const error = (message: string) => {
    toast.error(message, settings);
  };
  const promise = (
    promise: Promise<unknown>,
    successMessage?: (data: unknown) => string,
    errorMessage?: (error: unknown) => string,
    loadingMessage = "Loading..."
  ) => {
    toast.promise(promise, {
      loading: loadingMessage,
      success: successMessage,
      error: errorMessage,
    });
  };

  return {
    success,
    error,
    promise,
  };
};
