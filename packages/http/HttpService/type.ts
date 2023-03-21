import type { AxiosInstance } from 'axios';

export type TServices = (axios: AxiosInstance) => {
    [key in string]: { [key in string]: (p: any) => Promise<any> }
}