import { useZimaAuth } from "./zimaAuth";
import axios from "axios";

const zimaAuthAxios = axios.create();
useZimaAuth(zimaAuthAxios);

export default zimaAuthAxios;
