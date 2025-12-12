export interface ICustomer {
    name: string, 
    phone: string,
    email: string, 
    messages: IMessage[]
}

interface IMessage {
    message: string;
    createdAt: string
}
export interface ICustomerApi {
    name: string, 
    phone: string;
    email: string;
    message: string
}