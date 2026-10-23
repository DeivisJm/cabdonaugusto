
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

/**
 * Generates the temporary brand favicon.
 *
 * Replace this mark when the official logo is approved.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: 12,
          backgroundColor: "#75452E",
          color: "#F7F5EF",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "serif",
        }}
      >
        DA
      </div>
    ),
    size
  );
}
