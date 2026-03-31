import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#FF4500] flex items-center justify-center p-6">
      {/* Black card */}
      <div
        className="w-full max-w-7xl bg-[#0a0a0a] flex flex-col overflow-hidden"
        style={{
          borderRadius: "20px",
          height: "calc(100vh - 48px)",
          maxHeight: "760px",
        }}
      >
        <Navbar />
        <HeroSection />
        <BottomBar />
      </div>
    </main>
  );
}
