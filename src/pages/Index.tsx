import { useState } from "react";
import PetSelector, { Pet } from "@/components/PetSelector";
import FoodRecommendations from "@/components/FoodRecommendations";
import TemperatureGuide from "@/components/TemperatureGuide";
import PlayActivities from "@/components/PlayActivities";
import ToyRecommendations from "@/components/ToyRecommendations";
import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import petHeroImage from "@/assets/pet-hero.jpg";

const Index = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | undefined>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="relative container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <PawPrint className="w-8 h-8" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Pet Parenting</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your Pet's Complete Care Guide
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Discover personalized feeding guides, temperature tips, play activities, and toy recommendations for your beloved companion.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="hero" size="lg" className="shadow-warm">
                  <Heart className="w-5 h-5" />
                  Start Pet Care Journey
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={petHeroImage}
                alt="Happy pets with their owners"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Pet Selection */}
        <section>
          <PetSelector onPetSelect={setSelectedPet} selectedPet={selectedPet} />
        </section>

        {/* Care Sections */}
        {selectedPet && (
          <div className="grid lg:grid-cols-2 gap-8">
            <FoodRecommendations selectedPet={selectedPet} />
            <TemperatureGuide selectedPet={selectedPet} />
            <PlayActivities selectedPet={selectedPet} />
            <ToyRecommendations selectedPet={selectedPet} />
          </div>
        )}

        {/* Default state when no pet is selected */}
        {!selectedPet && (
          <div className="grid lg:grid-cols-2 gap-8">
            <FoodRecommendations />
            <TemperatureGuide />
            <PlayActivities />
            <ToyRecommendations />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary">
              <PawPrint className="w-6 h-6" />
              <span className="font-semibold">Pet Parenting App</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping you give your pets the best care possible, one tail wag at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
