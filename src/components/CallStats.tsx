
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  PhoneCall, 
  PhoneIncoming, 
  PhoneMissed, 
  Check 
} from "lucide-react";

const statItems = [
  {
    title: "Total Calls",
    value: "24",
    icon: PhoneCall,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    title: "Connected",
    value: "18",
    icon: PhoneIncoming,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    title: "No Answer",
    value: "6",
    icon: PhoneMissed,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    title: "Conversion",
    value: "75%",
    icon: Check,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
];

const CallStats = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Statistics</CardTitle>
        <CardDescription>Overview of your calling activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-md border">
              <div className={`${item.bgColor} ${item.color} p-2 rounded-full mb-2`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.title}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CallStats;
