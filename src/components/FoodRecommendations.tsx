import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Pet } from "./PetSelector";
import petFoodImage from "@/assets/pet-food.jpg";

const foodRecommendations = {
  dog: {
    daily: "1-3 cups of high-quality dry kibble (depending on size)",
    frequency: "2 meals per day",
    foods: ["High-quality dry kibble", "Lean meats", "Rice", "Vegetables"],
    avoid: ["Chocolate", "Grapes", "Onions", "Garlic", "Xylitol"],
    tips: "Feed at consistent times and measure portions to maintain healthy weight."
  },
  cat: {
    daily: "1/2 to 1 cup of dry food or 5.5-6 oz of wet food",
    frequency: "2-3 meals per day",
    foods: ["High-protein cat food", "Wet food", "Occasional treats"],
    avoid: ["Chocolate", "Onions", "Garlic", "Raw fish", "Milk"],
    tips: "Cats need taurine and high protein. Always provide fresh water."
  },
  bird: {
    daily: "1-2 tablespoons of pellets plus fresh foods",
    frequency: "Daily feeding with fresh foods",
    foods: ["High-quality pellets", "Fresh fruits", "Vegetables", "Seeds (limited)"],
    avoid: ["Chocolate", "Avocado", "Caffeine", "Salt", "Fruit pits"],
    tips: "Variety is key. Rotate fruits and vegetables for balanced nutrition."
  },
  fish: {
    daily: "Small amounts 2-3 times daily",
    frequency: "2-3 small feedings per day",
    foods: ["High-quality flakes", "Pellets", "Frozen foods", "Live foods"],
    avoid: ["Overfeeding", "Bread", "Human food"],
    tips: "Feed only what fish can consume in 2-3 minutes to prevent water pollution."
  },
  rabbit: {
    daily: "1/4 cup pellets per 5 lbs body weight plus unlimited hay",
    frequency: "Daily pellets, unlimited hay, fresh veggies",
    foods: ["Timothy hay", "High-fiber pellets", "Leafy greens", "Limited fruits"],
    avoid: ["Iceberg lettuce", "Seeds", "Chocolate", "Onions"],
    tips: "Hay should make up 85% of diet. Introduce new foods gradually."
  }
};

interface FoodRecommendationsProps {
  selectedPet?: Pet;
}

export default function FoodRecommendations({ selectedPet }: FoodRecommendationsProps) {
  if (!selectedPet) {
    return (
      <Card className="bg-gradient-to-br from-card to-accent/5">
        <CardHeader className="text-center">
          <CardTitle>Food Recommendations</CardTitle>
          <CardDescription>Select a pet to see feeding guidelines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img 
              src={petFoodImage} 
              alt="Pet food bowls" 
              className="rounded-lg w-64 h-48 object-cover opacity-50"
            />
          </div>
        </CardContent>
      </Card>
    );
  }

  const recommendations = foodRecommendations[selectedPet.type];

  return (
    <Card className="bg-gradient-to-br from-card to-accent/5 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {selectedPet.icon}
          {selectedPet.name} Feeding Guide
        </CardTitle>
        <CardDescription>Nutritional recommendations for your {selectedPet.name.toLowerCase()}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-sm text-primary">Daily Amount</h4>
              <p className="text-sm">{recommendations.daily}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-primary">Frequency</h4>
              <p className="text-sm">{recommendations.frequency}</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={petFoodImage} 
              alt="Healthy pet food" 
              className="rounded-lg w-48 h-32 object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-secondary mb-2">Recommended Foods</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.foods.map((food, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary/20">
                  {food}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-destructive mb-2">Foods to Avoid</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations.avoid.map((food, index) => (
                <Badge key={index} variant="destructive" className="bg-destructive/20">
                  {food}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-sm text-primary mb-1">Pro Tip</h4>
          <p className="text-sm text-muted-foreground">{recommendations.tips}</p>
        </div>
      </CardContent>
    </Card>
  );
}