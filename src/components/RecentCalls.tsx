
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneIncoming, PhoneMissed } from "lucide-react";

const recentCalls = [
  {
    id: 1,
    phoneNumber: "+1 555-123-4567",
    timestamp: "Today, 2:30 PM",
    duration: "1:24",
    status: "completed",
  },
  {
    id: 2,
    phoneNumber: "+1 555-987-6543",
    timestamp: "Today, 2:25 PM",
    duration: "0:45",
    status: "completed",
  },
  {
    id: 3,
    phoneNumber: "+1 555-675-4321",
    timestamp: "Today, 2:20 PM",
    duration: "-",
    status: "no-answer",
  },
  {
    id: 4,
    phoneNumber: "+1 555-234-5678",
    timestamp: "Today, 2:15 PM",
    duration: "2:05",
    status: "completed",
  },
  {
    id: 5,
    phoneNumber: "+1 555-876-5432",
    timestamp: "Today, 2:10 PM",
    duration: "-",
    status: "no-answer",
  },
];

const RecentCalls = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Calls</CardTitle>
        <CardDescription>Your latest call activities</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phone Number</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentCalls.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-medium">{call.phoneNumber}</TableCell>
                <TableCell>{call.timestamp}</TableCell>
                <TableCell>{call.duration}</TableCell>
                <TableCell>
                  {call.status === "completed" ? (
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 flex items-center gap-1">
                      <PhoneIncoming className="h-3 w-3" />
                      Completed
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 flex items-center gap-1">
                      <PhoneMissed className="h-3 w-3" />
                      No Answer
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentCalls;
