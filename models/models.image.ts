import { StaticImageData } from "next/image";
import { DeviceType } from "./models.theme";

export interface ImageDTO {
  src: StaticImageData;
  alt: string;
}

export type CurrentEditionPoster = { [key in DeviceType]: ImageDTO };
