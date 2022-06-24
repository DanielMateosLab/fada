import { StaticImageData } from "next/image";
import { DeviceType } from "./models.device";

export interface ImageDTO {
  src: StaticImageData;
  alt: string;
}

export type CurrentEditionPoster = { [key in DeviceType]: ImageDTO };
