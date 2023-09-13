import "@/styles/globals.css";
import "@/styles/phone-number.css";

export default function App({ Component, pageProps }) {
  console.log("General render");
  if (Component?.Layout) {
    console.log("render with layout");
    return (
      <Component.Layout>
        <Component {...pageProps} />
      </Component.Layout>
    );
  }
  console.log("Whithout layout");
  return <Component {...pageProps} />;
}
