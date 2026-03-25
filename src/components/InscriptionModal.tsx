import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allFormations } from "@/data/formations";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const inscriptionSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  phone: z.string().trim().min(9, "Numéro de téléphone invalide").max(20),
  email: z.string().trim().email("Adresse email invalide").max(255),
  formation: z.string().min(1, "Veuillez choisir une formation"),
});

type InscriptionForm = z.infer<typeof inscriptionSchema>;

interface InscriptionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultFormation?: string;
}

const InscriptionModal = ({ open, onOpenChange, defaultFormation }: InscriptionModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InscriptionForm>({
    resolver: zodResolver(inscriptionSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      formation: defaultFormation || "",
    },
  });

  const onSubmit = (data: InscriptionForm) => {
    // EmailJS integration placeholder
    console.log("Inscription data:", data);
    setSubmitted(true);
    toast({
      title: "Inscription envoyée !",
      description: "Nous vous contacterons très bientôt.",
    });
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      form.reset();
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Inscription</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire et nous vous contacterons rapidement.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center py-8 gap-4 text-center">
            <CheckCircle className="w-16 h-16 text-success" />
            <h3 className="text-lg font-semibold">Merci pour votre inscription !</h3>
            <p className="text-sm text-muted-foreground">
              Notre équipe vous contactera dans les plus brefs délais.
            </p>
            <Button onClick={() => handleClose(false)}>Fermer</Button>
          </div>
        ) : (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="Ex: Jean Dupont" {...form.register("name")} />
              {form.formState.errors.name && (
                <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" placeholder="Ex: 6XX XXX XXX" {...form.register("phone")} />
              {form.formState.errors.phone && (
                <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Ex: jean@email.com" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Formation souhaitée</Label>
              <Select
                value={form.watch("formation")}
                onValueChange={(val) => form.setValue("formation", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une formation" />
                </SelectTrigger>
                <SelectContent>
                  {allFormations.map((f) => (
                    <SelectItem key={f.id} value={f.id}>
                      {f.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.formation && (
                <p className="text-xs text-destructive">{form.formState.errors.formation.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full font-semibold" disabled={form.formState.isSubmitting}>
              Envoyer ma demande
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InscriptionModal;
