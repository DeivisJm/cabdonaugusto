
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#183D2C",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          color: "#F2DFB3",
          fontSize: 29,
          fontFamily: "serif",
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        DA
      </div>
    ),
    size
  );
}
