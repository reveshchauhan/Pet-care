import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users } from "lucide-react";
import type { Pet } from "./PetSelector";
import petPlayImage from "@/assets/pet-play.jpg";

const playActivities = {
  dog: [
    {
      name: "Fetch",
      duration: "15-30 minutes",
      difficulty: "Easy",
      benefits: "Exercise, bonding, mental stimulation",
      description: "Classic game that provides great physical exercise and strengthens your bond."
    },
    {
      name: "Puzzle Toys", 
      duration: "10-20 minutes",
      difficulty: "Medium",
      benefits: "Mental stimulation, problem solving",
      description: "Hide treats in puzzle toys to challenge your dog's mind and keep them engaged."
    },
    {
      name: "Agility Training",
      duration: "20-45 minutes", 
      difficulty: "Hard",
      benefits: "Physical fitness, mental challenge, training",
      description: "Set up obstacles for your dog to navigate, improving coordination and obedience."
    },
    {
      name: "Hide and Seek",
      duration: "10-15 minutes",
      difficulty: "Easy", 
      benefits: "Mental stimulation, recall training",
      description: "Hide around the house and call your dog to find you - great for recall training."
    }
  ],
  cat: [
    {
      name: "Feather Wand",
      duration: "5-15 minutes",
      difficulty: "Easy",
      benefits: "Exercise, hunting instincts, bonding",
      description: "Mimic prey movements to trigger your cat's natural hunting instincts."
    },
    {
      name: "Laser Pointer",
      duration: "5-10 minutes",
      difficulty: "Easy",
      benefits: "Exercise, mental stimulation",
      description: "Let your cat chase the red dot, but always end with a physical toy they can catch."
    },
    {
      name: "Catnip Toys",
      duration: "10-20 minutes",
      difficulty: "Easy",
      benefits: "Stress relief, independent play",
      description: "Provide catnip-filled toys for solo play sessions and relaxation."
    },
    {
      name: "Treat Dispensers",
      duration: "15-30 minutes",
      difficulty: "Medium",
      benefits: "Mental stimulation, slow feeding",
      description: "Food puzzles that challenge your cat to work for their treats."
    }
  ],
  bird: [
    {
      name: "Foraging Games",
      duration: "20-40 minutes",
      difficulty: "Medium",
      benefits: "Mental stimulation, natural behavior",
      description: "Hide treats in paper cups or foraging toys to encourage natural searching behavior."
    },
    {
      name: "Mirror Play",
      duration: "10-15 minutes",
      difficulty: "Easy",
      benefits: "Social interaction, entertainment",
      description: "Supervised mirror time can provide social stimulation for single birds."
    },
    {
      name: "Perch Rotation",
      duration: "All day",
      difficulty: "Easy",
      benefits: "Exercise, environmental enrichment",
      description: "Rotate perches and toys weekly to keep the environment stimulating."
    },
    {
      name: "Training Sessions",
      duration: "5-10 minutes",
      difficulty: "Hard",
      benefits: "Mental challenge, bonding, behavior",
      description: "Teach simple commands or tricks using positive reinforcement."
    }
  ],
  fish: [
    {
      name: "Live Plants",
      duration: "Continuous",
      difficulty: "Easy",
      benefits: "Exploration, natural environment",
      description: "Add live plants for fish to explore and hide behind, creating a natural habitat."
    },
    {
      name: "Feeding Games",
      duration: "5-10 minutes",
      difficulty: "Medium",
      benefits: "Mental stimulation, exercise",
      description: "Use feeding rings or hide food to make meals more engaging."
    },
    {
      name: "Mirror Exercise",
      duration: "5-15 minutes",
      difficulty: "Easy",
      benefits: "Exercise, stimulation",
      description: "Show a mirror occasionally to encourage swimming and activity."
    },
    {
      name: "Current Changes",
      duration: "Continuous",
      difficulty: "Medium",
      benefits: "Exercise, environmental variation",
      description: "Adjust filter flow to create different current patterns for swimming exercise."
    }
  ],
  rabbit: [
    {
      name: "Tunnel Systems",
      duration: "30-60 minutes",
      difficulty: "Easy",
      benefits: "Exercise, natural behavior, exploration",
      description: "Provide tunnels and hideouts for your rabbit to hop through and explore."
    },
    {
      name: "Treat Balls",
      duration: "15-30 minutes",
      difficulty: "Medium",
      benefits: "Mental stimulation, exercise, foraging",
      description: "Rolling treat dispensers encourage movement and problem-solving."
    },
    {
      name: "Obstacle Course",
      duration: "20-40 minutes",
      difficulty: "Hard",
      benefits: "Physical exercise, mental challenge, training",
      description: "Create jumps and obstacles for your rabbit to navigate and explore."
    },
    {
      name: "Digging Box",
      duration: "15-45 minutes",
      difficulty: "Easy",
      benefits: "Natural behavior, stress relief, exercise",
      description: "Fill a box with shredded paper or hay for natural digging behavior."
    }
  ]
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "easy": return "bg-secondary/20 text-secondary";
    case "medium": return "bg-accent/20 text-accent-foreground";
    case "hard": return "bg-primary/20 text-primary";
    default: return "bg-muted/20 text-muted-foreground";
  }
};

interface PlayActivitiesProps {
  selectedPet?: Pet;
}

export default function PlayActivities({ selectedPet }: PlayActivitiesProps) {
  if (!selectedPet) {
    return (
      <Card className="bg-gradient-to-br from-card to-secondary/5">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Play Activities
          </CardTitle>
          <CardDescription>Select a pet to see fun activity ideas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img 
              src={petPlayImage} 
              alt="Pets playing" 
              className="rounded-lg w-64 h-48 object-cover opacity-50"
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  const activities = playActivities[selectedPet.type];

  return (
    <Card className="bg-gradient-to-br from-card to-secondary/5 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="w-5 h-5" />
          {selectedPet.name} Play Activities
        </CardTitle>
        <CardDescription>Fun activities to keep your {selectedPet.name.toLowerCase()} happy and healthy</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center mb-6">
          <img 
            src={petPlayImage} 
            alt="Pets playing with toys" 
            className="rounded-lg w-full max-w-md h-40 object-cover"
          />
        </div>
        
        <div className="grid gap-4">
          {activities.map((activity, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-lg">{activity.name}</h4>
                <Badge className={getDifficultyColor(activity.difficulty)}>
                  {activity.difficulty}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {activity.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {activity.benefits}
                </div>
              </div>
              
              <p className="text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}