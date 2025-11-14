"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Faltan campos",
        description: "Por favor completa los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);

    toast({
      title: (
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          Mensaje enviado
        </div>
      ),
      description: "Te responderemos en menos de 24 horas.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      deviceType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Nuestra Ubicación",
      content: "Carrer de Aragón 123\n07005 Palma de Mallorca\nIslas Baleares, España",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      icon: Phone,
      title: "Llámanos",
      content: "+34 971 123 456",
      gradient: "from-emerald-500 to-teal-600",
      href: "tel:+34971123456",
    },
    {
      icon: Mail,
      title: "Escríbenos",
      content: "contacto@ata-tech.es",
      gradient: "from-blue-500 to-indigo-600",
      href: "mailto:contacto@ata-tech.es",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun-Vie: 9:00 - 20:00\nSáb: 10:00 - 14:00\nDom: Cerrado",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 sm:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Contáctanos
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              ¿Problema con tu dispositivo? <strong className="text-foreground">Estamos aquí para ayudarte</strong> en Palma.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-slate-100/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-transparent bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${info.gradient} p-3 flex items-center justify-center mx-auto mb-4 shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-primary hover:underline whitespace-pre-line transition-colors"
                      target={info.href.startsWith("tel") ? undefined : "_blank"}
                      rel={info.href.startsWith("mailto") ? "noopener" : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Formulario */}
          <Card className="overflow-hidden shadow-xl border-transparent bg-gradient-to-br from-card to-card/95">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Envía tu Consulta
              </CardTitle>
              <p className="text-muted-foreground">
                Respuesta garantizada en <strong className="text-primary">menos de 24h</strong>
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    required
                    className="h-12"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@email.com"
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deviceType">Tipo de dispositivo</Label>
                  <Select
                    value={formData.deviceType}
                    onValueChange={(value) => setFormData({ ...formData, deviceType: value })}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger id="deviceType" className="h-12">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="movil">Móvil / Smartphone</SelectItem>
                      <SelectItem value="portatil">Portátil</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="ordenador">Ordenador de sobremesa</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe el problema o tu consulta..."
                    rows={5}
                    required
                    className="resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 font-bold text-lg group relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className={`flex items-center justify-center gap-2 ${isSubmitting ? "opacity-0" : ""}`}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Mapa / Ubicación */}
          <Card className="overflow-hidden shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Dónde Estamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Placeholder para Google Maps */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.579343569238!2d2.643463!3d39.569687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297921b0b0b0b0b%3A0x1b0b0b0b0b0b0b0b!2sPalma%2C%20Balearic%20Islands!5e0!3m2!1sen!2ses!4v1234567890!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Ubicación de ATA en Palma de Mallorca"
                />
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Cómo Llegar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A 5 minutos de la <strong>Plaza de España</strong>. Acceso fácil en EMT (líneas 3, 7, 15) y parking público cercano.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Horario de Atención</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span className="font-semibold text-foreground">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span className="font-semibold text-foreground">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos</span>
                      <span className="font-medium text-destructive">Cerrado</span>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Arag%C3%B3n+123,+07005+Palma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Obtener Direcciones
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}