import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Clock, Wrench, AlertCircle, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Garantias() {
  const repairGuarantees = [
    {
      title: "6 Meses de Garantía Total",
      description: "Cobertura completa en mano de obra y repuestos instalados.",
      icon: Shield,
    },
    {
      title: "Repuestos Originales o Premium",
      description: "Solo usamos componentes certificados con garantía del fabricante.",
      icon: CheckCircle2,
    },
    {
      title: "Diagnóstico 100% Gratuito",
      description: "Sin compromiso. Sabrás el problema antes de decidir.",
      icon: Wrench,
    },
    {
      title: "Reparación Express en Garantía",
      description: "Fallo cubierto? Reparado en 24-48h sin costo.",
      icon: Clock,
    },
  ];

  const conditions = [
    {
      type: "covered",
      title: "Qué cubre la garantía",
      items: [
        "Defectos en la reparación realizada por ATA",
        "Fallo del repuesto instalado",
        "Problemas derivados del servicio original",
      ],
    },
    {
      type: "excluded",
      title: "Qué NO cubre",
      items: [
        "Daños por mal uso o accidente posterior",
        "Contacto con líquidos tras la reparación",
        "Manipulación por terceros no autorizados",
        "Desgaste normal o uso intensivo",
      ],
    },
    {
      type: "required",
      title: "Requisitos para hacerla válida",
      items: [
        "Presentar ticket original de reparación",
        "Dispositivo en las mismas condiciones de entrega",
        "Notificar el fallo dentro del plazo de garantía",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background py-20 sm:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary via-primary/90 to-accent p-1 mx-auto mb-8 shadow-2xl animate-pulse">
              <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Garantías <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ATA</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Tu tranquilidad <strong className="text-foreground">no es una opción</strong>, es nuestro compromiso.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-slate-100/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </section>

      {/* Garantías de Reparación */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-transparent bg-gradient-to-br from-card to-card/95 shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Lo que te garantizamos en cada reparación
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {repairGuarantees.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex gap-4 p-5 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
                    >
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent p-3 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Condiciones de Garantía */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Condiciones de Garantía
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {conditions.map((section, index) => {
              const iconColor =
                section.type === "covered"
                  ? "text-emerald-500"
                  : section.type === "excluded"
                  ? "text-red-500"
                  : "text-amber-500";

              const Icon = section.type === "covered" ? CheckCircle2 : AlertCircle;

              return (
                <Card
                  key={index}
                  className={cn(
                    "overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                    section.type === "excluded" && "border-red-200/50",
                    section.type === "covered" && "border-emerald-200/50",
                    section.type === "required" && "border-amber-200/50"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", iconColor)}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={cn("mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0", iconColor)} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-center text-sm text-muted-foreground italic">
              <strong className="text-foreground">Importante:</strong> La garantía es válida solo con el{" "}
              <span className="underline decoration-primary/50">ticket original</span> y en las condiciones de entrega del dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para reparar con total confianza?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Trae tu dispositivo hoy mismo y descubre por qué cientos de clientes en Mallorca confían en ATA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-bold group"
              onClick={() => window.location.href = '/contacto'}
            >
              <PhoneCall className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contactar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg"
              onClick={() => window.open('https://wa.me/34600123456', '_blank')}
            >
              <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.044h-.003c-.673 0-1.334-.164-1.918-.475l-.137-.028c-.32-.069-.661-.15-1.029-.267-2.148-.694-3.727-2.264-4.352-4.257-.169-.54-.263-1.1-.263-1.685 0-2.148 1.305-3.922 3.368-4.669.04-.015.08-.028.121-.041.792-.252 1.651-.421 2.538-.421 1.162 0 2.25.378 3.15 1.034.9.656 1.525 1.581 1.758 2.646.233 1.065.233 2.175 0 3.24-.233 1.065-.858 1.99-1.758 2.646-.9.656-1.988 1.034-3.15 1.034"/>
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
              WhatsApp
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Respuesta en <strong className="text-primary">menos de 2 horas</strong> por WhatsApp
          </p>
        </div>
      </section>
    </main>
  );
}