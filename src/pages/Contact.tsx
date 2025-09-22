import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const consultationSchema = z.object({
  ownerName: z.string().min(2, "Your name is too short"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .max(20, "Phone seems too long"),
  petType: z.enum(["Dog", "Cat", "Bird", "Rabbit", "Other"], {
    required_error: "Select a pet type",
  }),
  petAge: z
    .string()
    .min(1, "Provide your pet's age")
    .refine((v) => /^\d+(?:\s*(?:months?|years?))?$/.test(v), {
      message: "Examples: 6 months, 2 years, 3",
    }),
  symptoms: z.string().min(10, "Describe the symptoms (min 10 chars)"),
  urgency: z.enum(["Routine", "Soon", "Urgent"], {
    required_error: "Select urgency",
  }),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

const defaultValues: ConsultationForm = {
  ownerName: "",
  email: "",
  phone: "",
  petType: "Dog",
  petAge: "",
  symptoms: "",
  urgency: "Routine",
};

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = (values: ConsultationForm) => {
    // Simulate submit. In real app, POST to backend.
    console.log("Consultation submitted", values);
    toast({
      title: "Consultation request sent",
      description: "A veterinarian will contact you shortly.",
    });
    form.reset(defaultValues);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Doctor Consultation</CardTitle>
              <CardDescription>
                Describe your pet's health issue and we'll connect you with a vet.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="ownerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Alex Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 555-1234" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="petType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pet Type</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select pet" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Dog">Dog</SelectItem>
                                <SelectItem value="Cat">Cat</SelectItem>
                                <SelectItem value="Bird">Bird</SelectItem>
                                <SelectItem value="Rabbit">Rabbit</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="petAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pet Age</FormLabel>
                          <FormControl>
                            <Input placeholder="2 years" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="urgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Urgency</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select urgency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Routine">Routine</SelectItem>
                                <SelectItem value="Soon">Soon</SelectItem>
                                <SelectItem value="Urgent">Urgent</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="symptoms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe Symptoms</FormLabel>
                        <FormControl>
                          <Textarea rows={5} placeholder="Vomiting, lethargy since yesterday..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button type="submit">Submit Request</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
