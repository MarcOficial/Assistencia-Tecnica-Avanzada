import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp, Clock, MapPin, ShieldCheck } from "lucide-react";
import repairImage from "@assets/generated_images/Smartphone_repair_close-up_shot_5458b2f6.png";

export default function Nosotros() {
  const values = [
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Repuestos originales y garantía extendida en cada reparación.",
      gradient: "from-yellow-400 to-amber-600"
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Técnicos certificados con +10 años de experiencia en electrónica.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "Precisión Total",
      description: "Diagnósticos avanzados que resuelven el problema de raíz.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Innovación Constante",
      description: "Formación continua en las últimas tecnologías del mercado.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const highlights = [
    { value: "100%", label: "Satisfacción Garantizada", icon: ShieldCheck },
    { value: "24-48h", label: "Reparación Express", icon: Clock },
    { value: "Palma", label: "Mallorca Central", icon: MapPin }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">ATA</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Asistencia Técnica Avanzada — Tu centro tecnológico de confianza en <strong className="text-foreground">Mallorca</strong>
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-slate-100/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </section>

      {/* Nuestra Historia */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <article className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Nuestra Historia
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">ATA</strong> nació con una misión clara: ofrecer reparaciones tecnológicas de <span className="underline decoration-primary/50">máxima calidad</span> en Mallorca, con un servicio cercano y transparente.
              </p>
              <p>
                Reparamos <strong>smartphones, tablets, portátiles y PCs</strong> con repuestos originales y herramientas de última generación. Pronto también ofreceremos <em>venta de equipos completos</em>: portátiles gaming, estaciones de trabajo, periféricos premium y más.
              </p>
              <p>
                Ubicados en el corazón de <strong>Palma de Mallorca</strong>, combinamos precisión técnica con atención personalizada. Tu dispositivo no solo se repara: <span className="italic">vuelve a la vida</span>.
              </p>
            </div>
          </article>

          <figure className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
            <img
              src={repairImage}
              alt="Técnico de ATA reparando un smartphone con herramientas profesionales en Palma de Mallorca"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <header className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold">Nuestros Valores</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que nos define no es solo lo que hacemos, sino <em>cómo lo hacemos</em>.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-transparent bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
                data-testid={`value-card-${index}`}
              >
                <CardContent className="p-7 text-center">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${value.gradient} p-3 flex items-center justify-center mx-auto mb-5 shadow-lg transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ¿Por Qué Elegirnos? */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-background rounded-3xl p-10 sm:p-16 text-center shadow-inner">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Por Qué Elegir ATA?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            No somos solo un taller. Somos tu <strong>aliado tecnológico</strong> en Mallorca.
          </p>

          <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
                >
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-extrabold text-primary mb-2">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{item.label}</div>
                </div>
              );
            })}
          </div>

          <p className="mt-12 text-sm text-muted-foreground italic max-w-xl mx-auto">
            *Tiempos de reparación estimados para averías comunes. Consultar disponibilidad.
          </p>
        </div>
      </section>
    </main>
  );
}