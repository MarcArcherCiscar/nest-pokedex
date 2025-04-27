import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create();
    }

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get<T>(url);
            return data;
        } catch (error) {
            console.error(error);
            throw new Error('Error in HTTP GET - Check logs');
        }
    }

}