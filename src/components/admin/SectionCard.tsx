
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { LucideIcon, Plus, Edit, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: any[];
  onAdd: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  delay?: number;
}

export function SectionCard({ 
  title, 
  description, 
  icon: Icon, 
  items, 
  onAdd, 
  onEdit, 
  onDelete,
  delay = 0 
}: SectionCardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card 
      className="animate-slide-up hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-primary animate-bounce-slow" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Button 
            onClick={onAdd}
            size="sm"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add New
          </Button>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <LoadingSkeleton rows={3} />
        ) : (
          <div className="space-y-3">
            {items.length === 0 ? (
              <p className="text-muted-foreground text-center py-8 animate-fade-in">
                No {title.toLowerCase()} found. Create your first one!
              </p>
            ) : (
              items.map((item, index) => (
                <div 
                  key={item.id || index} 
                  className="flex items-center justify-between p-3 rounded-lg border bg-card/50 hover:bg-accent/10 transition-all duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <h4 className="font-medium">{item.title || item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description || item.excerpt || "No description"}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onEdit(item.id || index)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => onDelete(item.id || index)}
                      className="hover:scale-110 transition-transform text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
