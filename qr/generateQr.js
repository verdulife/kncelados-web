import QRCode from "qrcode";
import { videos } from "./mystery.js";

videos.forEach(({ slug, page }) => {
  QRCode.toFile(
    `qr/svg/${page}_${slug}.svg`,
    `https://www.kncelados.com/mystery/${slug}`,
    { type: "svg" }
  );
});