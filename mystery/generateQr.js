import QRCode from "qrcode";
import { videos } from "./mystery.js";

videos.forEach(({ slug, page }) => {
  console.log("Generando QRCode para", slug);

  QRCode.toFile(
    `mystery/svg/${page}_${slug}.svg`,
    `https://www.kncelados.com/mystery/${slug}`,
    { type: "svg" }
  );
});