
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Phone, PhoneCall } from "lucide-react";

const CallForm = () => {
  const [numbers, setNumbers] = useState("");
  const [script, setScript] = useState(
    "Hello, this is AppDice. We're a cutting-edge software development company specializing in mobile and web applications. We'd love to discuss how we can help your business grow through innovative technology solutions."
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!numbers.trim()) {
      toast({
        title: "Error",
        description: "Please enter at least one phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Parse phone numbers and remove any non-digit characters
    const parsedNumbers = numbers
      .split("\n")
      .map(num => num.replace(/\D/g, ""))
      .filter(num => num.length > 0);
      
    console.log("Initiating calls to:", parsedNumbers);
    console.log("Using script:", script);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Calls Initiated",
        description: `Started calling ${parsedNumbers.length} number(s)`,
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make Calls</CardTitle>
        <CardDescription>
          Enter phone numbers and customize your call script
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="numbers" className="text-sm font-medium">
              Phone Numbers <span className="text-muted-foreground">(one per line)</span>
            </label>
            <Textarea
              id="numbers"
              placeholder="+1 555-123-4567&#10;+1 555-987-6543"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              className="min-h-[120px]"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="script" className="text-sm font-medium">
              Call Script
            </label>
            <Textarea
              id="script"
              placeholder="Enter your call script here..."
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="min-h-[150px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 animate-pulse" />
                Initiating Calls...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Start Calling
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CallForm;
