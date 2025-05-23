
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  delay?: number;
}

export function StatsCard({ title, value, icon: Icon, change, delay = 0 }: StatsCardProps) {
  return (
    <Card 
      className="animate-fade-in hover:shadow-lg transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-primary animate-pulse-slow" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {change && (
          <p className="text-xs text-accent mt-1">
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
