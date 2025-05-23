
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { SectionCard } from "@/components/admin/SectionCard";
import { Calendar, Briefcase, FolderOpen, PenTool, TrendingUp, Users, Eye, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { toast } = useToast();

  // Mock data - in a real app, this would come from your backend
  const stats = [
    { title: "Total Events", value: "24", icon: Calendar, change: "+12% from last month" },
    { title: "Active Services", value: "8", icon: Briefcase, change: "+3 new this month" },
    { title: "Projects", value: "156", icon: FolderOpen, change: "+8% completion rate" },
    { title: "Blog Posts", value: "42", icon: PenTool, change: "+5 published this week" },
    { title: "Total Views", value: "12.4K", icon: Eye, change: "+15% this month" },
    { title: "Engagement", value: "8.2K", icon: TrendingUp, change: "+22% interactions" },
    { title: "Active Users", value: "2.1K", icon: Users, change: "+18% new users" },
    { title: "Rating", value: "4.8", icon: Star, change: "Based on 127 reviews" },
  ];

  const events = [
    { id: 1, title: "Film Premiere Night", description: "Showcase of latest short films" },
    { id: 2, title: "Photography Workshop", description: "Advanced lighting techniques" },
    { id: 3, title: "Client Meeting", description: "Project discussion with ABC Corp" }
  ];

  const services = [
    { id: 1, title: "Commercial Photography", description: "Professional product and corporate photography" },
    { id: 2, title: "Video Production", description: "Full-service video creation and editing" },
    { id: 3, title: "Event Coverage", description: "Comprehensive event documentation" }
  ];

  const projects = [
    { id: 1, title: "Tech Startup Brand Video", description: "30-second promotional video for SaaS company" },
    { id: 2, title: "Wedding Documentary", description: "Cinematic wedding coverage and editing" },
    { id: 3, title: "Restaurant Menu Shoot", description: "Food photography for upscale restaurant" }
  ];

  const blogs = [
    { id: 1, title: "5 Tips for Better Lighting", description: "Essential lighting techniques for filmmakers" },
    { id: 2, title: "The Art of Storytelling", description: "How to craft compelling narratives in film" },
    { id: 3, title: "Behind the Scenes", description: "A look at our latest commercial project" }
  ];

  const handleAdd = (section: string) => {
    toast({
      title: "Add New " + section,
      description: `Opening form to create a new ${section.toLowerCase()}...`,
    });
  };

  const handleEdit = (section: string, id: string) => {
    toast({
      title: "Edit " + section,
      description: `Opening edit form for ${section.toLowerCase()} #${id}...`,
    });
  };

  const handleDelete = (section: string, id: string) => {
    toast({
      title: "Delete " + section,
      description: `${section} #${id} has been deleted.`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      
      <main className="p-6 space-y-8">
        {/* Stats Overview */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6 animate-slide-up">
            Dashboard Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                change={stat.change}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Content Management Sections */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground animate-slide-up">
            Content Management
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SectionCard
              title="Events"
              description="Manage upcoming events, workshops, and screenings"
              icon={Calendar}
              items={events}
              onAdd={() => handleAdd("Event")}
              onEdit={(id) => handleEdit("Event", id)}
              onDelete={(id) => handleDelete("Event", id)}
              delay={0}
            />
            
            <SectionCard
              title="Services"
              description="Manage your offered services and packages"
              icon={Briefcase}
              items={services}
              onAdd={() => handleAdd("Service")}
              onEdit={(id) => handleEdit("Service", id)}
              onDelete={(id) => handleDelete("Service", id)}
              delay={200}
            />
            
            <SectionCard
              title="Projects"
              description="Portfolio projects and client work"
              icon={FolderOpen}
              items={projects}
              onAdd={() => handleAdd("Project")}
              onEdit={(id) => handleEdit("Project", id)}
              onDelete={(id) => handleDelete("Project", id)}
              delay={400}
            />
            
            <SectionCard
              title="Blog Posts"
              description="Articles, tutorials, and company updates"
              icon={PenTool}
              items={blogs}
              onAdd={() => handleAdd("Blog Post")}
              onEdit={(id) => handleEdit("Blog Post", id)}
              onDelete={(id) => handleDelete("Blog Post", id)}
              delay={600}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
