
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, X } from "lucide-react";

interface AddItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
  itemType: string;
  onAdd: (item: any) => void;
}

export function AddItemDialog({ isOpen, onClose, itemType, onAdd }: AddItemDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    price: "",
    duration: "",
    category: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newItem = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString()
    };

    onAdd(newItem);
    
    toast({
      title: `${itemType} Added`,
      description: `New ${itemType.toLowerCase()} "${formData.title}" has been created successfully.`,
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      price: "",
      duration: "",
      category: ""
    });

    setIsSubmitting(false);
    onClose();
  };

  const getFieldsForType = () => {
    switch (itemType.toLowerCase()) {
      case "event":
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Event location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>
          </>
        );
      case "service":
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  placeholder="$0.00"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="e.g., 2 hours"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>
          </>
        );
      case "project":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                placeholder="e.g., Commercial, Wedding, Documentary"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="transition-all duration-300 focus:scale-105"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Add New {itemType}
          </DialogTitle>
          <DialogDescription>
            Fill in the details for the new {itemType.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder={`${itemType} title`}
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
              className="transition-all duration-300 focus:scale-105"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder={`${itemType} description`}
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="transition-all duration-300 focus:scale-105"
            />
          </div>

          {getFieldsForType()}

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 hover:scale-105 transition-all duration-300"
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting || !formData.title}
              className="flex-1 hover:scale-105 transition-all duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin-dot"></div>
                  Adding...
                </div>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Add {itemType}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
