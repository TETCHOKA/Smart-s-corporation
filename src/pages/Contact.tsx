import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  phone: z.string().trim().min(9, "Numéro de téléphone invalide").max(20),
  email: z.string().trim().email("Adresse email invalide").max(255),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactForm) => {
    // EmailJS placeholder
    console.log("Contact form:", data);
    setSubmitted(true);
    toast({ title: "Message envoyé !", description: "Nous vous répondrons rapidement." });
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary">
        <div className="container mx-auto text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground">
            <span className="text-gradient">Contactez</span>-nous
          </h1>
          <p className="text-lg text-muted-foreground">
            Une question ? N'hésitez pas à nous écrire ou à nous appeler.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-12 gap-4 text-center">
                    <CheckCircle className="w-16 h-16 text-success" />
                    <h3 className="text-xl font-bold text-foreground">Merci pour votre message !</h3>
                    <p className="text-muted-foreground">Notre équipe vous répondra dans les plus brefs délais.</p>
                    <Button onClick={() => { setSubmitted(false); form.reset(); }}>Envoyer un autre message</Button>
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Envoyez-nous un message</h2>

                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Nom complet</Label>
                      <Input id="contact-name" placeholder="Votre nom" {...form.register("name")} />
                      {form.formState.errors.name && (
                        <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Téléphone</Label>
                        <Input id="contact-phone" placeholder="6XX XXX XXX" {...form.register("phone")} />
                        {form.formState.errors.phone && (
                          <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input id="contact-email" type="email" placeholder="votre@email.com" {...form.register("email")} />
                        {form.formState.errors.email && (
                          <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea id="contact-message" placeholder="Votre message..." rows={5} {...form.register("message")} />
                      {form.formState.errors.message && (
                        <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full font-semibold" disabled={form.formState.isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Nos coordonnées</h2>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Téléphone", value: "+237 655 78 56 20" },
                  { icon: Mail, label: "Email", value: "smartscorporation2014@gmail.com" },
                  { icon: MapPin, label: "Adresse", value: "Douala, Cameroun" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/237655785620?text=${encodeURIComponent("Bonjour, j'aimerais avoir des informations.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl bg-[hsl(145,63%,42%)] text-white hover:bg-[hsl(145,63%,36%)] transition-colors shadow-md"
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <p className="font-bold">Contactez-nous sur WhatsApp</p>
                  <p className="text-sm opacity-90">Réponse rapide garantie</p>
                </div>
              </a>

              {/* Map placeholder */}
           <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7959.284322666972!2d9.73874635285856!3d4.093034095880721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610fb2f1299c9b%3A0xd606a0fbfadf9fa9!2sKMC%20BONAMOUSSADI!5e0!3m2!1sfr!2scm!4v1776757659286!5m2!1sfr!2scm"
                width="100%"
                height="350"
                style={{ border: 0, display: "block" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Smart's Corporation"
                className="w-full"
              />
            </div>

              {/* Social */}
              <div>
  <h3 className="font-semibold text-foreground mb-3">Suivez-nous</h3>
  <div className="flex gap-3">
    
      <a
      href="https://www.facebook.com/share/1B6gDLgrtZ/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
    >
      Facebook
    </a>
    
      <a
      href="https://www.tiktok.com/@smarts_corporation?_r=1&_t=ZS-95aJgrWYljL"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
    >
      TikTok
    </a>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
