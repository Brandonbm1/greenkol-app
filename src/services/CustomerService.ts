import { POST } from "../hooks/useFetch";
import type { ICustomerApi } from "../model/interfaces/ICustomer";

export const sendCustomerMessage = async (customer: ICustomerApi) => {
  const response = await POST("api/customers/send-message", customer);
  return response;
};
