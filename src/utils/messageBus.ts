import zimaAuthAxios from "./axiosInstance";
import axios, { AxiosInstance } from "axios";
import io from "socket.io-client";

const socketProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const socketUrl = `${socketProtocol}//${window.location.host}`;
const socketPath = "/v2/message_bus/socket.io";

interface MessageBusOptions {
  axiosInstance?: AxiosInstance;
}

export class MessageBus {
  private socket: SocketIOClientStatic["Socket"];
  private axiosInstance: AxiosInstance;
  private static instance: MessageBus;

  private constructor(options?: MessageBusOptions) {
    // Socket.io client
    this.socket = io(socketUrl, {
      transports: ["websocket"],
      path: socketPath,
      reconnection: false,
    });

    this.socket.on("connect", () => {
      console.log("MessageBus connected.");
    });

    this.socket.on("disconnect", () => {
      console.log("MessageBus disconnected.");
    });

    // post
    this.axiosInstance = options?.axiosInstance ?? axios.create();
  }
  
  static getInstance(options?: MessageBusOptions) {
    if (!MessageBus.instance) {
      MessageBus.instance = new MessageBus({ ...options });
    }
    return MessageBus.instance;
  }

  // listen to events
  on(eventName: string, callback: (data: any) => void) {
    this.socket.on(eventName, callback);
  }

  // stop listening to events
  off(eventName: string, callback: (data: any) => void) {
    this.socket.off(eventName, callback);
  }

  // publish events to the server
  publish(eventName: string, data: any) {
    return this.axiosInstance.post(`/v2/message_bus/event/casaos-ui/${eventName}`, data);
  }
}

export const messageBus = MessageBus.getInstance({ axiosInstance: zimaAuthAxios });
