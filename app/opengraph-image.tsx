import { ImageResponse } from "next/og";

export const alt = "Stewart's Storytelling — Wedding Videography in Greenville, SC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInstrumentSerif() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap"
  ).then((res) => res.text());
  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
  if (!fontUrl) return null;
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const instrumentSerif = await loadInstrumentSerif();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 28 }}>
          <path d="M12 3l9 18H3z" stroke="#8a7a53" strokeWidth="1.5" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            color: "#161616",
            fontFamily: instrumentSerif ? "Instrument Serif" : "serif",
          }}
        >
          Stewart&rsquo;s Storytelling
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#5c5955",
            marginTop: 24,
          }}
        >
          Wedding Videography · Greenville, SC
        </div>
      </div>
    ),
    {
      ...size,
      fonts: instrumentSerif
        ? [{ name: "Instrument Serif", data: instrumentSerif, style: "normal", weight: 400 }]
        : [],
    }
  );
}
