
import Header from "@/components/Header";
import CallForm from "@/components/CallForm";
import CallStats from "@/components/CallStats";
import RecentCalls from "@/components/RecentCalls";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <CallForm />
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <CallStats />
            <RecentCalls />
          </div>
        </div>
      </main>
      
      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AppDice Call Bot. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
