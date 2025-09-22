import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Bird, Fish, Rabbit } from "lucide-react";

export interface Pet {
  type: "dog" | "cat" | "bird" | "fish" | "rabbit";
  name: string;
  icon: React.ReactNode;
}

const pets: Pet[] = [
  { type: "dog", name: "Dog", icon: <Dog className="w-8 h-8" /> },
  { type: "cat", name: "Cat", icon: <Cat className="w-8 h-8" /> },
  { type: "bird", name: "Bird", icon: <Bird className="w-8 h-8" /> },
  { type: "fish", name: "Fish", icon: <Fish className="w-8 h-8" /> },
  { type: "rabbit", name: "Rabbit", icon: <Rabbit className="w-8 h-8" /> },
];

interface PetSelectorProps {
  onPetSelect: (pet: Pet) => void;
  selectedPet?: Pet;
}

export default function PetSelector({ onPetSelect, selectedPet }: PetSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">What type of pet do you have?</h2>
        <p className="text-muted-foreground">Select your pet to get personalized care recommendations</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {pets.map((pet) => (
          <Card
            key={pet.type}
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedPet?.type === pet.type
                ? "ring-2 ring-primary bg-gradient-to-br from-primary/5 to-secondary/5"
                : "hover:bg-accent/10"
            }`}
            onClick={() => onPetSelect(pet)}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className={`p-3 rounded-full ${
                selectedPet?.type === pet.type
                  ? "bg-gradient-to-br from-primary to-secondary text-white"
                  : "bg-muted text-muted-foreground"
              }`}>
                {pet.icon}
              </div>
              <span className="font-medium text-sm">{pet.name}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}