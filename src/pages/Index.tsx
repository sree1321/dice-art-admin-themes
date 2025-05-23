
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Camera, Film, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Dice Art Films</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/admin">
              <Button variant="outline">Admin Panel</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Creative Visual Storytelling
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Professional photography and filmmaking services that bring your vision to life
          </p>
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Button size="lg" className="hover:scale-105 transition-transform">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Camera, title: "Photography", desc: "Professional shoots for all occasions" },
              { icon: Film, title: "Videography", desc: "Cinematic videos and documentaries" },
              { icon: Users, title: "Events", desc: "Complete event coverage and production" }
            ].map((service, index) => (
              <Card key={service.title} className="animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Dice Art Films. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
