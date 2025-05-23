
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Film } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Admin credentials
  const ADMIN_EMAIL = "admin@diceartfilms.com";
  const ADMIN_PASSWORD = "DiceArt2024!";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", "true");
      localStorage.setItem("adminUser", JSON.stringify({
        email: ADMIN_EMAIL,
        name: "Admin User",
        role: "Administrator"
      }));
      
      toast({
        title: "Login Successful",
        description: "Welcome back to Dice Art Films Admin Portal",
      });
      
      navigate("/admin");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="animate-float-in shadow-2xl border-2">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-spin-slow">
              <Film className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold animate-slide-down">
              Dice Art Films
            </CardTitle>
            <CardDescription className="animate-slide-down delay-100">
              Admin Portal Login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2 animate-slide-up">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="space-y-2 animate-slide-up delay-200">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10 transition-all duration-300 focus:scale-105"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full animate-slide-up delay-300 hover:scale-105 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin-dot"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-accent/10 rounded-lg animate-slide-up delay-500">
              <h4 className="font-semibold text-sm mb-2">Demo Credentials:</h4>
              <p className="text-xs text-muted-foreground">
                <strong>Email:</strong> admin@diceartfilms.com<br />
                <strong>Password:</strong> DiceArt2024!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
