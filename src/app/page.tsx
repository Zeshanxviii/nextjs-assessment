import './globals.css'
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="text-center p-8">
      <Header />
      <section className="mt-8">
        <h1 className="text-4xl font-bold text-green-500">One Stop Marketplace for Influencers</h1>
        <p className="mt-4 text-lg">
          Unlock Your Influence and Earn with Our Exclusive Marketplace
        </p>
      </section>
      {/* Add more sections */}
    </div>
  );
}
