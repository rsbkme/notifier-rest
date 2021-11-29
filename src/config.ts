import { config } from "dotenv";

config();

export const mongo_uri = process.env.MONGO_URI!;
export const port = parseInt(process.env.PORT!);
export const secret_hash = process.env.EVENT_SECRET_HASH!;