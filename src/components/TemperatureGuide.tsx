import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Thermometer, Sun, Snowflake } from "lucide-react";
import type { Pet } from "./PetSelector";
import petComfortImage from "@/assets/pet-comfort.jpg";

const temperatureGuides = {
  dog: {
    ideal: "68-75°F (20-24°C)",
    cold: "Below 45°F (7°C)",
    hot: "Above 85°F (29°C)",
    tips: [
      "Provide shade and fresh water in hot weather",
      "Consider a coat for small or short-haired breeds in cold weather",
      "Never leave in hot cars - temperatures can reach deadly levels quickly",
      "Watch for signs of overheating: excessive panting, drooling, lethargy"
    ]
  },
  cat: {
    ideal: "65-75°F (18-24°C)",
    cold: "Below 45°F (7°C)", 
    hot: "Above 80°F (27°C)",
    tips: [
      "Cats seek warm spots naturally - provide cozy areas",
      "Ensure access to cool areas during hot weather",
      "Indoor cats are more sensitive to temperature changes",
      "Watch for excessive hiding (too cold) or panting (too hot)"
    ]
  },
  bird: {
    ideal: "68-78°F (20-26°C)",
    cold: "Below 65°F (18°C)",
    hot: "Above 85°F (29°C)",
    tips: [
      "Avoid drafts and sudden temperature changes",
      "Provide indirect sunlight for warmth",
      "Use bird-safe heating elements if needed",
      "Mist lightly with water on hot days for cooling"
    ]
  },
  fish: {
    ideal: "72-78°F (22-26°C) for tropical fish",
    cold: "Below 68°F (20°C)",
    hot: "Above 82°F (28°C)",
    tips: [
      "Use a reliable aquarium heater and thermometer",
      "Maintain consistent temperature - fluctuations stress fish",
      "Consider species-specific temperature needs",
      "Increase aeration in warmer water as oxygen levels decrease"
    ]
  },
  rabbit: {
    ideal: "60-68°F (15-20°C)",
    cold: "Below 50°F (10°C)",
    hot: "Above 75°F (24°C)",
    tips: [
      "Rabbits overheat easily - provide plenty of ventilation",
      "Offer frozen water bottles as cooling aids in summer",
      "Ensure dry, draft-free housing in cold weather",
      "Watch for signs of heat stress: rapid breathing, lethargy, drooling"
    ]
  }
};

interface TemperatureGuideProps {
  selectedPet?: Pet;
}

export default function TemperatureGuide({ selectedPet }: TemperatureGuideProps) {
  if (!selectedPet) {
    return (
      <Card className="bg-gradient-to-br from-card to-primary/5">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Thermometer className="w-5 h-5" />
            Temperature Guide
          </CardTitle>
          <CardDescription>Select a pet to see temperature recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img 
              src={petComfortImage} 
              alt="Pet comfort" 
              className="rounded-lg w-64 h-48 object-cover opacity-50"
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  const guide = temperatureGuides[selectedPet.type];

  return (
    <Card className="bg-gradient-to-br from-card to-primary/5 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="w-5 h-5" />
          {selectedPet.name} Temperature Guide
        </CardTitle>
        <CardDescription>Keep your {selectedPet.name.toLowerCase()} comfortable year-round</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="text-center p-4 bg-secondary/10 rounded-lg border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-secondary">Ideal Range</span>
              </div>
              <div className="text-2xl font-bold text-secondary">{guide.ideal}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <Snowflake className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-xs font-medium text-primary">Too Cold</div>
                <div className="text-sm">{guide.cold}</div>
              </div>
              <div className="text-center p-3 bg-destructive/5 rounded-lg">
                <Sun className="w-4 h-4 text-destructive mx-auto mb-1" />
                <div className="text-xs font-medium text-destructive">Too Hot</div>
                <div className="text-sm">{guide.hot}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={petComfortImage} 
              alt="Comfortable pet" 
              className="rounded-lg w-48 h-32 object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-primary">Temperature Care Tips</h4>
          <div className="space-y-2">
            {guide.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}