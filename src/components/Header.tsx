
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">AppDice Caller</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          Automated Call System
        </div>
      </div>
    </header>
  );
};

export default Header;
