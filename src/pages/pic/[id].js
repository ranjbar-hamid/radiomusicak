export async function GET({ params, request }) {
  try {
    const f = await fetch(
      `https://script.google.com/macros/s/AKfycbz2ilrGauIAJoWzpZ3IcBv6gEato1hUWcC5p-1OJctJZcmwSIiLvrA5n5c8QZ9E5Mb3/exec?t=pic&id=${params.id}`,
      {
        cache: "force-cache",
        next: { revalidate: 3600 * 24 * 7 },
      }
    );

    const js = f.json();

    return new Response(
      await js.then(
        (i) => {
          const base64Data = i.pic.split(",")[1] || i.pic;
          const binaryData = Buffer.from(base64Data, "base64");
          return binaryData;
        },
        {
          headers: {
            "Content-Type": "image/jpeg",
          },
        }
      )
    );
  } catch (e) {
    return new Response("");
  }
}
