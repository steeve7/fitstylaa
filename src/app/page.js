import App from "@/components/section/App";
import Download from "@/components/section/Download";
import Features from "@/components/section/Features";


export default function Home() {
  return (
    <div className="w-full">
      <Features />
      <Download />
      <App />
    </div>
  );
}
