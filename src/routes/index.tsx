import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroCard from "@/assets/hero-card.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mateus Prata — Orientação para Solicitação de Cartão Visa" },
      {
        name: "description",
        content:
          "Serviço independente de orientação passo a passo para solicitar o seu cartão Visa associado à Bybit. Aprovação e disponibilidade dependem da plataforma.",
      },
      { property: "og:title", content: "Mateus Prata — Orientação para Solicitação de Cartão Visa" },
      {
        property: "og:description",
        content:
          "Serviço independente de orientação passo a passo para solicitar o seu cartão Visa associado à Bybit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_1 = "244959418362";
const WHATSAPP_2 = "244935997778";

function waLink(message: string, number: string = WHATSAPP_1) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const MSG_VIRTUAL = "Olá! Gostaria de solicitar o cartão Visa virtual (serviço de orientação).";
const MSG_PHYSICAL = "Olá! Gostaria de solicitar o cartão Visa físico (serviço de orientação).";
const MSG_GENERAL = "Olá! Gostaria de mais informações sobre o serviço de orientação para solicitação de cartão Visa.";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Options />
        <HowItWorks />
        <Transparency />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#precos", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold/40 bg-secondary">
            <span className="text-gold-gradient text-lg font-black">MP</span>
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Mateus Prata
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(MSG_GENERAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-gold to-gold-dark px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03]"
          >
            Falar no WhatsApp
          </a>
        </nav>
        <button
          className="rounded-lg border border-border p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(MSG_GENERAL)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-gradient-to-r from-gold to-gold-dark px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="inline-block rounded-full border border-gold/30 bg-secondary/60 px-4 py-1.5 text-xs font-medium text-gold">
            Serviço de orientação independente
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Solicite o seu cartão Visa com{" "}
            <span className="text-gold-gradient">orientação passo a passo</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground md:mx-0 md:text-lg">
            Receba ajuda clara no processo de solicitação do seu cartão Visa
            associado à Bybit. A orientação acompanha-o em cada etapa — sem
            prometer aprovação, emissão ou disponibilidade garantida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={waLink(MSG_VIRTUAL)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-gold to-gold-dark px-6 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-lg shadow-gold/25 transition-transform hover:scale-[1.03]"
            >
              Solicitar cartão virtual
            </a>
            <a
              href={waLink(MSG_PHYSICAL)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-azure/50 bg-secondary px-6 py-3.5 text-center text-sm font-bold text-foreground transition-colors hover:border-azure hover:bg-accent/20"
            >
              Solicitar cartão físico
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Aprovação e disponibilidade dependem da plataforma e dos requisitos aplicáveis.
          </p>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gold/10 blur-3xl" />
            <img
              src={heroCard}
              alt="Cartão premium dourado"
              width={1024}
              height={1024}
              loading="eager"
              className="relative w-full max-w-sm rounded-2xl border border-gold/20 shadow-2xl shadow-gold/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Options() {
  const cards = [
    {
      type: "Cartão Virtual",
      price: "10.000 Kz",
      features: [
        "Orientação para solicitação do cartão virtual",
        "Acompanhamento passo a passo no processo",
        "Ideal para compras online e digitais",
        "Atendimento rápido via WhatsApp",
      ],
      msg: MSG_VIRTUAL,
      highlight: false,
    },
    {
      type: "Cartão Físico",
      price: "25.000 Kz",
      features: [
        "Orientação para solicitação do cartão físico",
        "Acompanhamento passo a passo no processo",
        "Para uso online e presencial",
        "Atendimento dedicado via WhatsApp",
      ],
      msg: MSG_PHYSICAL,
      highlight: true,
    },
  ];
  return (
    <section id="precos" className="scroll-mt-20 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Opções de serviço"
          title="Escolha o tipo de cartão"
          subtitle="Valores do serviço de orientação. Eventuais taxas da plataforma, entrega ou outros custos devem ser confirmados antes do pagamento."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.type}
              className={
                c.highlight
                  ? "surface-card border-gold-glow relative rounded-2xl p-8"
                  : "surface-card relative rounded-2xl p-8"
              }
            >
              {c.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-1 text-xs font-bold text-primary-foreground">
                  Mais procurado
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{c.type}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-gold-gradient text-4xl font-black">{c.price}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Valor do serviço/anúncio. Custos adicionais devem ser confirmados antes do pagamento.
              </p>
              <ul className="mt-6 space-y-3">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 shrink-0 text-gold">
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(c.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  c.highlight
                    ? "mt-8 block rounded-xl bg-gradient-to-r from-gold to-gold-dark px-6 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-lg shadow-gold/25 transition-transform hover:scale-[1.02]"
                    : "mt-8 block rounded-xl border border-azure/50 bg-secondary px-6 py-3.5 text-center text-sm font-bold text-foreground transition-colors hover:border-azure hover:bg-accent/20"
                }
              >
                Solicitar {c.type.toLowerCase()}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            Não inventamos prazos, benefícios, limites ou taxas. Todos os detalhes
            relativos à plataforma serão confirmados consigo durante o atendimento.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Contactar pelo WhatsApp",
      desc: "Inicie a conversa por WhatsApp com a nossa equipa. Escolha o tipo de cartão (virtual ou físico) e receba as primeiras instruções.",
      icon: <ChatIcon />,
    },
    {
      n: "02",
      title: "Confirmar requisitos e custos",
      desc: "Verificamos os requisitos aplicáveis e esclarecemos eventuais custos da plataforma, entrega ou outros, antes de qualquer pagamento.",
      icon: <CheckListIcon />,
    },
    {
      n: "03",
      title: "Seguir orientação para solicitar",
      desc: "Receba acompanhamento passo a passo para fazer a solicitação na plataforma. A emissão e aprovação dependem da plataforma e da elegibilidade.",
      icon: <GuideIcon />,
    },
  ];
  return (
    <section id="como-funciona" className="scroll-mt-20 border-y border-border/40 bg-secondary/20 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Como funciona"
          title="Três passos simples"
          subtitle="Um processo claro e transparente, do primeiro contacto até à solicitação na plataforma."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="surface-card rounded-2xl p-7">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/30 bg-background/60 text-gold">
                  {s.icon}
                </div>
                <span className="text-3xl font-black text-gold/30">{s.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={waLink(MSG_GENERAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-gold to-gold-dark px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-gold/25 transition-transform hover:scale-[1.03]"
          >
            Começar agora no WhatsApp
          </a>
          <span className="text-sm text-muted-foreground">ou ligue diretamente:</span>
          <div className="flex gap-3">
            <a href={`tel:+${WHATSAPP_1}`} className="text-sm font-semibold text-azure hover:underline">
              +244 959 418 362
            </a>
            <span className="text-muted-foreground">·</span>
            <a href={`tel:+${WHATSAPP_2}`} className="text-sm font-semibold text-azure hover:underline">
              +244 935 997 778
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transparency() {
  const points = [
    {
      title: "Emissão e aprovação",
      desc: "A emissão e aprovação do cartão dependem exclusivamente da plataforma, da elegibilidade, do país e das regras vigentes — não são garantidas por este serviço.",
    },
    {
      title: "Confirmar disponibilidade antes de pagar",
      desc: "Recomendamos confirmar a disponibilidade e os requisitos junto da plataforma antes de efetuar qualquer pagamento pelo serviço de orientação.",
    },
    {
      title: "Nunca pedimos dados sensíveis",
      desc: "Nunca solicitamos a sua senha, código OTP ou frase de recuperação. A orientação limita-se a guiá-lo no processo de solicitação.",
    },
    {
      title: "Serviço independente",
      desc: "Este serviço é independente e não representa oficialmente a Visa ou a Bybit. Não afirmamos ser estas entidades nem prometemos aprovação.",
    },
  ];
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-azure/30 bg-secondary/30 p-8 md:p-12">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-azure/15 text-azure">
              <ShieldIcon />
            </span>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Transparência e segurança
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title} className="rounded-xl border border-border/50 bg-background/40 p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-gold">
                  <DotIcon />
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Qual é a diferença entre o cartão virtual e o físico?",
      a: "O cartão virtual destina-se principalmente a compras online e digitais, enquanto o cartão físico permite também uso presencial. A disponibilidade de cada tipo depende da plataforma e dos requisitos aplicáveis.",
    },
    {
      q: "A aprovação do cartão é garantida?",
      a: "Não. A aprovação e a emissão dependem exclusivamente da plataforma, da elegibilidade, do país e das regras vigentes. O nosso serviço oferece orientação no processo de solicitação, não garante a aprovação.",
    },
    {
      q: "Existem custos adicionais além do serviço?",
      a: "Podem existir taxas da plataforma, custos de entrega ou outros encargos. Todos os custos adicionais devem ser confirmados antes do pagamento. Não inventamos prazos, limites ou taxas.",
    },
    {
      q: "Como garantem a segurança do meu processo?",
      a: "Nunca solicitamos a sua senha, código OTP ou frase de recuperação. A orientação limita-se a guiá-lo passo a passo na solicitação dentro da plataforma. Qualquer pedido deste tipo deve ser recusado e reportado.",
    },
    {
      q: "Este serviço representa a Visa ou a Bybit?",
      a: "Não. Este é um serviço independente de orientação. Não representamos oficialmente a Visa nem a Bybit, e não afirmamos ser estas entidades. O serviço ajuda apenas no processo de solicitação.",
    },
    {
      q: "Como entro em contacto?",
      a: "Pode contactar-nos pelo WhatsApp através dos números +244 959 418 362 ou +244 935 997 778. Todos os botões de solicitação abrem uma conversa com mensagem pré-preenchida.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/40 bg-secondary/20 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="FAQ"
          subtitle="Esclarecimentos sobre o serviço de orientação para solicitação de cartão Visa."
        />
        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className="surface-card overflow-hidden rounded-xl">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold text-foreground sm:text-base">{item.q}</span>
                  <span className={`shrink-0 text-gold transition-transform ${open ? "rotate-45" : ""}`}>
                    <PlusIcon />
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold/40 bg-secondary">
              <span className="text-gold-gradient text-lg font-black">MP</span>
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">Mateus Prata</span>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ContactPill number={WHATSAPP_1} display="+244 959 418 362" />
            <ContactPill number={WHATSAPP_2} display="+244 935 997 778" />
          </div>
          <div className="max-w-2xl rounded-xl border border-border/50 bg-secondary/30 p-5">
            <p className="text-xs leading-relaxed text-muted-foreground">
              <strong className="text-foreground/80">Aviso:</strong> Este serviço é
              independente e não representa oficialmente a Visa ou a Bybit. Não
              afirmamos ser estas entidades nem prometemos aprovação, emissão ou
              disponibilidade garantida. A aprovação e disponibilidade dependem da
              plataforma, da elegibilidade, do país e das regras vigentes. Confirme
              sempre a disponibilidade antes de pagar. Nunca partilhe a sua senha,
              código OTP ou frase de recuperação.
            </p>
          </div>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Mateus Prata — Serviço de orientação independente.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactPill({ number, display }: { number: string; display: string }) {
  return (
    <a
      href={waLink(MSG_GENERAL, number)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold/50 hover:text-gold"
    >
      <WhatsAppIcon />
      {display}
    </a>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</span>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
    </div>
  );
}

/* Icons */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
function CheckListIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}
function GuideIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function DotIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default Index;
