import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingCart } from "lucide-react";
import type { Pet } from "./PetSelector";

const toyRecommendations = {
  dog: [
    {
      name: "KONG Classic",
      category: "Mental Stimulation",
      price: "$12-18",
      rating: 4.8,
      benefits: ["Reduces anxiety", "Mental stimulation", "Durable"],
      description: "Stuff with treats to keep dogs engaged for hours. Perfect for reducing separation anxiety."
    },
    {
      name: "Rope Toy",
      category: "Chew & Tug", 
      price: "$8-15",
      rating: 4.5,
      benefits: ["Dental health", "Interactive play", "Durable"],
      description: "Great for tug-of-war and helps clean teeth while playing."
    },
    {
      name: "Puzzle Feeder",
      category: "Food Puzzle",
      price: "$15-25", 
      rating: 4.7,
      benefits: ["Slow feeding", "Mental challenge", "Prevents bloating"],
      description: "Makes mealtime more engaging while promoting healthy eating habits."
    },
    {
      name: "Squeaky Ball",
      category: "Fetch",
      price: "$5-12",
      rating: 4.3,
      benefits: ["Exercise", "Sound stimulation", "Fetch play"],
      description: "Classic fetch toy that dogs love. Choose appropriate size for your dog."
    }
  ],
  cat: [
    {
      name: "Feather Wand",
      category: "Interactive",
      price: "$8-15",
      rating: 4.9,
      benefits: ["Exercise", "Bonding", "Hunting instincts"],
      description: "Mimics prey movement to trigger natural hunting behaviors and provide exercise."
    },
    {
      name: "Catnip Mouse", 
      category: "Solo Play",
      price: "$3-8",
      rating: 4.4,
      benefits: ["Independent play", "Stress relief", "Natural high"],
      description: "Filled with premium catnip for hours of solo entertainment."
    },
    {
      name: "Cat Tunnel",
      category: "Exploration",
      price: "$12-20",
      rating: 4.6,
      benefits: ["Hide & seek", "Exercise", "Security"],
      description: "Collapsible tunnel perfect for hiding, playing, and feeling secure."
    },
    {
      name: "Laser Pointer",
      category: "Exercise",
      price: "$5-12",
      rating: 4.2,
      benefits: ["Cardio exercise", "Mental stimulation", "Interactive"],
      description: "Great for exercise, but always end sessions with a physical toy to catch."
    }
  ],
  bird: [
    {
      name: "Foraging Toys",
      category: "Mental Stimulation",
      price: "$10-20",
      rating: 4.7,
      benefits: ["Natural behavior", "Mental challenge", "Prevents boredom"],
      description: "Hide treats inside to encourage natural foraging behaviors."
    },
    {
      name: "Swing Perch",
      category: "Perching",
      price: "$8-15",
      rating: 4.5,
      benefits: ["Exercise", "Comfort", "Entertainment"],
      description: "Natural wood swing that provides exercise and a cozy resting spot."
    },
    {
      name: "Shredding Toys",
      category: "Destruction",
      price: "$5-12",
      rating: 4.4,
      benefits: ["Natural behavior", "Beak health", "Stress relief"],
      description: "Safe materials for birds to shred and destroy - satisfies natural instincts."
    },
    {
      name: "Mirror Toy",
      category: "Social",
      price: "$6-10",
      rating: 4.0,
      benefits: ["Companionship", "Entertainment", "Social interaction"],
      description: "Provides social stimulation for single birds (use in moderation)."
    }
  ],
  fish: [
    {
      name: "Live Plants",
      category: "Environment",
      price: "$5-15 each",
      rating: 4.8,
      benefits: ["Natural habitat", "Oxygen production", "Hiding spots"],
      description: "Create a natural environment with live aquatic plants."
    },
    {
      name: "Decorative Caves",
      category: "Shelter",
      price: "$8-20",
      rating: 4.6,
      benefits: ["Hiding spots", "Stress reduction", "Territory"],
      description: "Provide secure hiding places to reduce stress and territorial behavior."
    },
    {
      name: "Floating Log",
      category: "Decoration",
      price: "$10-18",
      rating: 4.3,
      benefits: ["Natural look", "Exploration", "Surface area"],
      description: "Realistic driftwood that floats and provides exploration opportunities."
    },
    {
      name: "Bubble Maker",
      category: "Entertainment", 
      price: "$15-30",
      rating: 4.1,
      benefits: ["Visual stimulation", "Water movement", "Entertainment"],
      description: "Creates gentle bubbles for visual interest and water movement."
    }
  ],
  rabbit: [
    {
      name: "Willow Ball",
      category: "Chew Toy",
      price: "$5-10",
      rating: 4.7,
      benefits: ["Dental health", "Natural material", "Safe chewing"],
      description: "Natural willow provides safe chewing to maintain healthy teeth."
    },
    {
      name: "Treat Ball",
      category: "Food Puzzle",
      price: "$8-15",
      rating: 4.5,
      benefits: ["Mental stimulation", "Exercise", "Slow feeding"],
      description: "Rolling ball dispenses treats as rabbit plays, encouraging movement."
    },
    {
      name: "Tunnel System",
      category: "Exploration",
      price: "$15-30",
      rating: 4.8,
      benefits: ["Natural behavior", "Exercise", "Security"],
      description: "Connects multiple tunnels to create an exploration playground."
    },
    {
      name: "Hanging Chews",
      category: "Dental Care",
      price: "$6-12", 
      rating: 4.4,
      benefits: ["Dental health", "Hanging play", "Natural materials"],
      description: "Hangs from cage or pen ceiling, providing overhead enrichment."
    }
  ]
};

const getCategoryColor = (category: string) => {
  const colors = {
    "Mental Stimulation": "bg-primary/20 text-primary",
    "Interactive": "bg-secondary/20 text-secondary",
    "Exercise": "bg-accent/20 text-accent-foreground",
    "Food Puzzle": "bg-primary/15 text-primary",
    "Solo Play": "bg-muted/40 text-muted-foreground",
    "Exploration": "bg-secondary/15 text-secondary",
    "Environment": "bg-secondary/25 text-secondary",
    "Chew Toy": "bg-accent/15 text-accent-foreground",
    "Dental Care": "bg-primary/10 text-primary"
  };
  return colors[category as keyof typeof colors] || "bg-muted/20 text-muted-foreground";
};

interface ToyRecommendationsProps {
  selectedPet?: Pet;
}

export default function ToyRecommendations({ selectedPet }: ToyRecommendationsProps) {
  if (!selectedPet) {
    return (
      <Card className="bg-gradient-to-br from-card to-accent/5">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" />
            Toy Recommendations
          </CardTitle>
          <CardDescription>Select a pet to see recommended toys and enrichment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center opacity-50">
            <ShoppingCart className="w-32 h-32 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const toys = toyRecommendations[selectedPet.type];

  return (
    <Card className="bg-gradient-to-br from-card to-accent/5 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          {selectedPet.name} Toy Recommendations
        </CardTitle>
        <CardDescription>
          Curated toys and enrichment items for your {selectedPet.name.toLowerCase()}'s happiness
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          {toys.map((toy, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="space-y-1">
                  <h4 className="font-semibold text-lg">{toy.name}</h4>
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(toy.category)}>
                      {toy.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {toy.rating}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">{toy.price}</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{toy.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {toy.benefits.map((benefit, benefitIndex) => (
                  <Badge key={benefitIndex} variant="outline" className="text-xs">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-sm text-primary mb-2">Shopping Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Always supervise initial play with new toys</li>
            <li>• Choose size-appropriate toys for your pet</li>
            <li>• Rotate toys weekly to maintain interest</li>
            <li>• Remove damaged toys immediately for safety</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}