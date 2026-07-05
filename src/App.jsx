import { useState } from "react";

const PRIMARY = "#3b6034";
const PRIMARY_DARK = "#2d4a28";
const PRIMARY_LIGHT = "#e8f0e6";
const ACCENT = "#f5a623";
const WHITE = "#ffffff";
const DARK = "#121212";
const GRAY = "#f3f3f3";
const TEXT_MUTED = "rgba(18,18,18,0.65)";

const PRODUCT_IMAGE = "https://recetassaludablesdehoy.com/cdn/shop/files/Diseno_sin_titulo_27.png?v=1780899809";

function StarRating({ count = 5 }) {
  return (
    <span style={{ color: ACCENT, fontSize: "1.1rem", letterSpacing: 2 }}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

function Badge({ children, style = {} }) {
  return (
    <span style={{
      background: ACCENT,
      color: WHITE,
      fontWeight: 700,
      fontSize: "0.75rem",
      padding: "4px 12px",
      borderRadius: "20px",
      textTransform: "uppercase",
      letterSpacing: 1,
      display: "inline-block",
      ...style
    }}>
      {children}
    </span>
  );
}

function CheckItem({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
      <span style={{
        background: PRIMARY,
        color: WHITE,
        borderRadius: "50%",
        width: 22,
        height: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.8rem",
        flexShrink: 0,
        marginTop: 1
      }}>✓</span>
      <span style={{ color: DARK, fontSize: "0.97rem", lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: `1px solid rgba(59,96,52,0.15)`,
      marginBottom: 0
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          textAlign: "left",
          padding: "18px 0",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          fontFamily: "Assistant, sans-serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: DARK,
        }}
      >
        <span>{q}</span>
        <span style={{
          fontSize: "1.4rem",
          color: PRIMARY,
          transform: open ? "rotate(45deg)" : "rotate(0)",
          transition: "transform 0.25s",
          flexShrink: 0
        }}>+</span>
      </button>
      {open && (
        <div style={{
          paddingBottom: 16,
          color: TEXT_MUTED,
          fontSize: "0.95rem",
          lineHeight: 1.7
        }}>
          {a}
        </div>
      )}
    </div>
  );
}

function TestimonialCard({ name, location, text, stars, avatar }) {
  return (
    <div style={{
      background: WHITE,
      borderRadius: 16,
      padding: "24px 20px",
      boxShadow: "0 4px 24px rgba(59,96,52,0.10)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: "1 1 280px",
      minWidth: 260,
      maxWidth: 360
    }}>
      <StarRating count={stars} />
      <p style={{ color: DARK, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
        "{text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "auto" }}>
        <div style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: PRIMARY_LIGHT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.3rem",
          flexShrink: 0
        }}>
          {avatar}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.9rem", color: DARK }}>{name}</div>
          <div style={{ fontSize: "0.8rem", color: TEXT_MUTED }}>{location}</div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? PRIMARY : WHITE,
        borderRadius: 16,
        padding: "28px 22px",
        boxShadow: hovered ? `0 8px 32px rgba(59,96,52,0.25)` : "0 2px 16px rgba(59,96,52,0.08)",
        transition: "all 0.3s ease",
        flex: "1 1 200px",
        minWidth: 180,
        maxWidth: 260,
        cursor: "default"
      }}>
      <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>{icon}</div>
      <div style={{
        fontWeight: 700,
        fontSize: "1rem",
        color: hovered ? WHITE : DARK,
        marginBottom: 8,
        transition: "color 0.3s"
      }}>{title}</div>
      <div style={{
        fontSize: "0.88rem",
        color: hovered ? "rgba(255,255,255,0.85)" : TEXT_MUTED,
        lineHeight: 1.6,
        transition: "color 0.3s"
      }}>{desc}</div>
    </div>
  );
}

function CountdownTimer() {
  const [time] = useState({ h: "05", m: "47", s: "23" });
  // TODO: Implementar cuenta regresiva real con useEffect + setInterval
  return (
    <div style={{
      display: "flex",
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap"
    }}>
      <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>⏱ Oferta termina en:</span>
      {[time.h, time.m, time.s].map((val, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{
            background: "rgba(0,0,0,0.3)",
            color: WHITE,
            fontWeight: 700,
            fontSize: "1.1rem",
            padding: "4px 10px",
            borderRadius: 6
          }}>{val}</span>
          {i < 2 && <span style={{ color: WHITE, fontWeight: 700 }}>:</span>}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("descripcion");
  const [cartOpen, setCartOpen] = useState(false);

  const PRICE = 14.99;
  const ORIGINAL_PRICE = 29.99;

  const handleBuy = () => {
    setAddedToCart(true);
    setCartOpen(true);
    // TODO: Conectar con pasarela de pago real (Stripe, PayPal, etc.)
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    // TODO: Conectar con servicio de email marketing (Mailchimp, Klaviyo, etc.)
  };

  const benefits = [
    { icon: "🌿", title: "100% Antiinflamatorio", desc: "Ingredientes seleccionados para reducir la inflamación crónica de forma natural." },
    { icon: "⚡", title: "Acceso Inmediato", desc: "Recibes el ebook en tu email al instante. Sin esperas, sin envíos." },
    { icon: "🚫", title: "Sin Azúcar ni Gluten", desc: "Recetas libres de azúcar añadida y sin gluten. Ideales para todos." },
    { icon: "💪", title: "Altas en Proteína", desc: "Recetas equilibradas, ricas en proteínas de calidad para tu bienestar." },
    { icon: "🔄", title: "Actualizaciones Gratis", desc: "Siempre tendrás las versiones más nuevas sin coste adicional." },
    { icon: "📱", title: "Compatible con Todos", desc: "PDF compatible con móvil, tablet y ordenador. Llévalo contigo siempre." },
  ];

  const testimonials = [
    { name: "María García", location: "Madrid, España", stars: 5, avatar: "👩", text: "Increíble recetario. En 2 semanas noté una diferencia enorme en mi energía y bienestar. Las recetas son fáciles y deliciosas." },
    { name: "Laura Martínez", location: "Barcelona, España", stars: 5, avatar: "👩‍🦱", text: "Llevaba años sufriendo inflamación y gracias a este recetario aprendí a comer de forma saludable sin aburrirme. ¡100% recomendado!" },
    { name: "Carmen López", location: "Sevilla, España", stars: 5, avatar: "👩‍🦰", text: "Lo compré dudando y fue la mejor inversión del año. Más de 70 recetas increíbles, variadas y fáciles de preparar. Vale cada euro." },
    { name: "Ana Rodríguez", location: "Valencia, España", stars: 5, avatar: "🧕", text: "Mi familia entera ha adoptado estas recetas. Mis hijos las adoran y yo me siento mucho mejor. Gracias a Nutrición en Casa." },
  ];

  const faqs = [
    { q: "¿Cómo recibo el recetario?", a: "Tras completar la compra, recibirás un email con el enlace de descarga del PDF. El acceso es inmediato, disponible 24/7." },
    { q: "¿Necesito conocimientos de cocina?", a: "No. Las recetas están diseñadas para todos los niveles. Cada una incluye ingredientes simples y pasos fáciles de seguir." },
    { q: "¿Es apto para personas con intolerancias alimentarias?", a: "Sí. Todas las recetas son sin gluten y sin azúcar añadida. También incluimos opciones sin lácteos y veganas." },
    { q: "¿Cuántas recetas tiene exactamente?", a: "El recetario incluye más de 70 recetas deliciosas y antiinflamatorias, organizadas por desayunos, almuerzos, cenas y snacks." },
    { q: "¿Puedo imprimir el recetario?", a: "Sí, el PDF está optimizado para impresión. Aunque también es perfectamente legible en cualquier dispositivo digital." },
    { q: "¿Tiene garantía de devolución?", a: "Sí. Ofrecemos garantía de satisfacción de 30 días. Si no estás contenta con el recetario, te devolvemos el dinero sin preguntas." },
  ];

  const includes = [
    "Más de 70 recetas antiinflamatorias y deliciosas",
    "Recetas bajas en carbohidratos y sin azúcar",
    "Opciones sin gluten y sin lácteos",
    "Altas en proteína vegetal y animal",
    "Plan de organización semanal de comidas",
    "Lista de compra optimizada por categorías",
    "Guía de ingredientes antiinflamatorios esenciales",
    "Consejos nutricionales de expertos",
    "Acceso de por vida con actualizaciones gratuitas",
    "Formato PDF compatible con todos los dispositivos",
  ];

  return (
    <div style={{ fontFamily: "Assistant, system-ui, sans-serif", color: DARK, background: WHITE, minHeight: "100vh" }}>

      {/* TOP ANNOUNCEMENT BAR */}
      <div style={{
        background: PRIMARY,
        color: WHITE,
        textAlign: "center",
        padding: "10px 16px",
        fontSize: "0.85rem",
        fontWeight: 700,
        letterSpacing: 0.5
      }}>
        🎉 Oferta especial: 50% de descuento por tiempo limitado — ¡Solo hoy!
      </div>

      {/* NAVBAR */}
      <nav style={{
        background: WHITE,
        borderBottom: `2px solid ${PRIMARY_LIGHT}`,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 12px rgba(59,96,52,0.07)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.6rem" }}>🥦</span>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", color: PRIMARY }}>Nutrición en Casa</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: "0.85rem", color: TEXT_MUTED, display: "none" /* TODO: mostrar en desktop */ }}>Inicio</span>
          <button
            onClick={() => setCartOpen(!cartOpen)}
            style={{
              background: PRIMARY,
              color: WHITE,
              border: "none",
              borderRadius: 20,
              padding: "8px 18px",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "background 0.2s"
            }}
          >
            🛒 <span>Carrito {addedToCart ? "(1)" : "(0)"}</span>
          </button>
        </div>
      </nav>

      {/* MINI CART DROPDOWN */}
      {cartOpen && (
        <div style={{
          position: "fixed",
          top: 64,
          right: 16,
          width: 300,
          background: WHITE,
          borderRadius: 12,
          boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          zIndex: 200,
          padding: 20,
          border: `1px solid ${PRIMARY_LIGHT}`
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontWeight: 700, fontSize: "1rem" }}>Tu carrito</span>
            <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>✕</button>
          </div>
          {addedToCart ? (
            <div>
              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 60,
                  height: 60,
                  background: PRIMARY_LIGHT,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem"
                }}>📗</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>+70 Recetas Antiinflamatorias</div>
                  <div style={{ color: TEXT_MUTED, fontSize: "0.8rem" }}>Acceso digital inmediato</div>
                  <div style={{ color: PRIMARY, fontWeight: 700, marginTop: 4 }}>{PRICE.toFixed(2)}€</div>
                </div>
              </div>
              <button
                style={{
                  width: "100%",
                  background: PRIMARY,
                  color: WHITE,
                  border: "none",
                  borderRadius: 20,
                  padding: "12px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1rem"
                }}
              >
                Finalizar compra →
                {/* TODO: Enlazar con checkout real */}
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center", color: TEXT_MUTED, padding: "20px 0" }}>
              <div style={{ fontSize: "2rem", marginBottom: 8 }}>🛒</div>
              <div>Tu carrito está vacío</div>
            </div>
          )}
        </div>
      )}

      {/* HERO SECTION */}
      <section style={{
        background: `linear-gradient(135deg, ${PRIMARY_LIGHT} 0%, #d4e8d0 100%)`,
        padding: "48px 16px 56px"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center", justifyContent: "center" }}>

            {/* LEFT: Product Info */}
            <div style={{ flex: "1 1 340px", maxWidth: 560 }}>
              <div style={{ marginBottom: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Badge>⭐ Más vendido</Badge>
                <Badge style={{ background: PRIMARY }}>Ebook Digital</Badge>
              </div>
              <h1 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: DARK,
                lineHeight: 1.25,
                margin: "0 0 16px"
              }}>
                +70 Recetas Deliciosas y <span style={{ color: PRIMARY }}>Antiinflamatorias</span> para Tu Bienestar
              </h1>
              <p style={{
                fontSize: "1.05rem",
                color: TEXT_MUTED,
                lineHeight: 1.7,
                marginBottom: 24
              }}>
                Descubre el ebook digital con más de 70 recetas saludables, antiinflamatorias y sin azúcar.
                Bajas en carbohidratos, sin gluten y ricas en proteína. Resultados visibles desde la primera semana.
              </p>

              {/* STARS */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <StarRating count={5} />
                <span style={{ color: TEXT_MUTED, fontSize: "0.9rem" }}>4.9/5 — +2.400 clientes satisfechos</span>
              </div>

              {/* PRICE */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, flexWrap: "wrap" }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 700, color: PRIMARY }}>{PRICE.toFixed(2)}€</span>
                <span style={{
                  fontSize: "1.3rem",
                  color: TEXT_MUTED,
                  textDecoration: "line-through",
                  fontWeight: 400
                }}>{ORIGINAL_PRICE.toFixed(2)}€</span>
                <Badge style={{ background: "#e53935" }}>-50% HOY</Badge>
              </div>
              <div style={{ fontSize: "0.82rem", color: TEXT_MUTED, marginBottom: 24 }}>
                💳 Pago único · Acceso de por vida · Sin suscripción
              </div>

              {/* QUICK INCLUDES */}
              <div style={{ marginBottom: 24 }}>
                {[
                  "+70 recetas antiinflamatorias y deliciosas",
                  "Sin gluten · Sin azúcar añadida",
                  "Altas en proteína · Bajas en carbohidratos",
                  "Acceso inmediato por email"
                ].map((item, i) => (
                  <CheckItem key={i}>{item}</CheckItem>
                ))}
              </div>

              {/* QTY & BUY */}
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 16 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  border: `1px solid rgba(59,96,52,0.3)`,
                  borderRadius: 20,
                  overflow: "hidden"
                }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}
                    style={{ width: 38, height: 42, border: "none", background: "none", fontSize: "1.2rem", cursor: "pointer", color: PRIMARY }}>−</button>
                  <span style={{ width: 36, textAlign: "center", fontWeight: 700 }}>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}
                    style={{ width: 38, height: 42, border: "none", background: "none", fontSize: "1.2rem", cursor: "pointer", color: PRIMARY }}>+</button>
                </div>
                <button
                  onClick={handleBuy}
                  style={{
                    flex: 1,
                    minWidth: 200,
                    background: PRIMARY,
                    color: WHITE,
                    border: "none",
                    borderRadius: 20,
                    padding: "14px 28px",
                    cursor: "pointer",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    boxShadow: `0 4px 20px rgba(59,96,52,0.35)`,
                    transition: "all 0.2s",
                    letterSpacing: 0.3
                  }}
                  onMouseEnter={e => e.target.style.background = PRIMARY_DARK}
                  onMouseLeave={e => e.target.style.background = PRIMARY}
                >
                  {addedToCart ? "✓ ¡Añadido!" : "🛒 Comprar ahora"}
                </button>
              </div>

              {/* PAYMENT METHODS */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.8rem", color: TEXT_MUTED }}>Pagos seguros:</span>
                {["💳 Tarjeta", "PayPal", "Apple Pay"].map((m, i) => (
                  <span key={i} style={{
                    background: WHITE,
                    border: `1px solid rgba(0,0,0,0.1)`,
                    borderRadius: 6,
                    padding: "3px 10px",
                    fontSize: "0.78rem",
                    color: DARK,
                    fontWeight: 600
                  }}>{m}</span>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: "0.8rem", color: TEXT_MUTED, display: "flex", alignItems: "center", gap: 6 }}>
                🔒 Compra segura y encriptada · 🔄 Garantía 30 días
              </div>
            </div>

            {/* RIGHT: Product Image */}
            <div style={{ flex: "1 1 280px", maxWidth: 380, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 12px 48px rgba(59,96,52,0.25)",
                width: "100%"
              }}>
                <img
                  src={PRODUCT_IMAGE}
                  alt="Recetario Antiinflamatorio - +70 Recetas Deliciosas"
                  style={{ width: "100%", display: "block", borderRadius: 20 }}
                  onError={e => { e.target.src = "https://via.placeholder.com/400x480/3b6034/ffffff?text=+70+Recetas"; }}
                />
                <div style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#e53935",
                  color: WHITE,
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "6px 14px",
                  borderRadius: 20,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}>
                  -50%
                </div>
              </div>

              {/* Countdown */}
              <div style={{
                background: PRIMARY,
                borderRadius: 12,
                padding: "14px 20px",
                width: "100%",
                textAlign: "center"
              }}>
                <CountdownTimer />
              </div>

              {/* Social Proof */}
              <div style={{
                background: WHITE,
                borderRadius: 12,
                padding: "14px 20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
              }}>
                <div style={{ fontSize: "1.8rem" }}>🔥</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: DARK }}>¡Alta demanda!</div>
                  <div style={{ fontSize: "0.8rem", color: TEXT_MUTED }}>47 personas lo compraron en las últimas 24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ background: PRIMARY, padding: "20px 16px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 28
        }}>
          {[
            { icon: "⚡", text: "Acceso Inmediato" },
            { icon: "🔒", text: "Pago 100% Seguro" },
            { icon: "🔄", text: "Garantía 30 Días" },
            { icon: "📧", text: "Soporte por Email" },
            { icon: "♾️", text: "Acceso de Por Vida" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: WHITE }}>
              <span style={{ fontSize: "1.3rem" }}>{b.icon}</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 600 }}>{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TABS: Descripción / Incluye / Opiniones */}
      <section style={{ background: WHITE, borderBottom: `1px solid ${PRIMARY_LIGHT}`, position: "sticky", top: 64, zIndex: 90 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {[
            { id: "descripcion", label: "Descripción" },
            { id: "incluye", label: "¿Qué incluye?" },
            { id: "opiniones", label: "Opiniones (2.4k+)" },
            { id: "faq", label: "Preguntas frecuentes" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "16px 20px",
                border: "none",
                borderBottom: activeTab === tab.id ? `3px solid ${PRIMARY}` : "3px solid transparent",
                background: "none",
                cursor: "pointer",
                fontFamily: "Assistant, sans-serif",
                fontSize: "0.92rem",
                fontWeight: activeTab === tab.id ? 700 : 400,
                color: activeTab === tab.id ? PRIMARY : TEXT_MUTED,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                flexShrink: 0
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* TAB CONTENT */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px" }}>

        {/* DESCRIPCIÓN */}
        {activeTab === "descripcion" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: DARK, marginBottom: 16 }}>
              Transforma tu salud con +70 recetas <span style={{ color: PRIMARY }}>antiinflamatorias</span>
            </h2>
            <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 20, fontSize: "1rem" }}>
              ¿Te sientes cansada, hinchada o con dolor crónico sin explicación? La inflamación es la raíz de muchos de estos problemas.
              Con nuestro recetario <strong>"+70 Recetas Deliciosas y Antiinflamatorias"</strong> de <strong>Nutrición en Casa</strong>,
              aprenderás a comer de forma que tu cuerpo se cure desde adentro.
            </p>
            <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 20, fontSize: "1rem" }}>
              Cada receta ha sido cuidadosamente diseñada por expertos en nutrición para que sea deliciosa, fácil de preparar y
              con ingredientes que puedes encontrar en cualquier supermercado. Sin dietas estrictas, sin pasar hambre.
            </p>
            <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 32, fontSize: "1rem" }}>
              Miles de mujeres en España ya han transformado su salud con este recetario. ¡Es tu turno!
            </p>

            {/* Benefits Grid */}
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: DARK, marginBottom: 24 }}>
              Por qué este recetario es diferente
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
              {benefits.map((b, i) => (
                <BenefitCard key={i} {...b} />
              ))}
            </div>

            {/* CTA Banner */}
            <div style={{
              background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
              borderRadius: 20,
              padding: "36px 32px",
              textAlign: "center",
              color: WHITE
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🌿</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 12px" }}>
                ¿Lista para empezar tu transformación?
              </h3>
              <p style={{ opacity: 0.85, marginBottom: 24, lineHeight: 1.6 }}>
                Únete a más de 2.400 personas que ya mejoraron su salud con Nutrición en Casa.
              </p>
              <button
                onClick={handleBuy}
                style={{
                  background: WHITE,
                  color: PRIMARY,
                  border: "none",
                  borderRadius: 20,
                  padding: "14px 36px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s"
                }}
                onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              >
                Quiero mis recetas por {PRICE.toFixed(2)}€ →
              </button>
              <div style={{ marginTop: 12, fontSize: "0.82rem", opacity: 0.75 }}>
                🔄 Garantía de devolución de 30 días
              </div>
            </div>
          </div>
        )}

        {/* QUÉ INCLUYE */}
        {activeTab === "incluye" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: DARK, marginBottom: 8 }}>
              Todo lo que recibirás
            </h2>
            <p style={{ color: TEXT_MUTED, marginBottom: 32 }}>
              Al comprar el recetario de <strong>Nutrición en Casa</strong>, obtienes acceso inmediato a:
            </p>

            <div style={{
              background: PRIMARY_LIGHT,
              borderRadius: 20,
              padding: "32px",
              marginBottom: 32,
              border: `2px solid rgba(59,96,52,0.15)`
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: "2rem" }}>📗</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: DARK }}>+70 Recetas Deliciosas y Antiinflamatorias</div>
                  <div style={{ color: TEXT_MUTED, fontSize: "0.9rem" }}>Ebook Digital PDF — Acceso inmediato</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 4 }}>
                {includes.map((item, i) => (
                  <CheckItem key={i}>{item}</CheckItem>
                ))}
              </div>
            </div>

            {/* Bonus section */}
            <div style={{
              background: `linear-gradient(135deg, ${ACCENT}22 0%, ${ACCENT}11 100%)`,
              border: `2px solid ${ACCENT}`,
              borderRadius: 20,
              padding: "28px",
              marginBottom: 32
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: "1.5rem" }}>🎁</span>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: DARK }}>BONUS GRATUITO incluido</span>
                <Badge style={{ background: "#e53935" }}>Valor: 9.99€</Badge>
              </div>
              <CheckItem>Guía de Compra Inteligente en el Supermercado</CheckItem>
              <CheckItem>15 Recetas de Snacks Antiinflamatorios Extra</CheckItem>
              <CheckItem>Plan de Meal Prep para la Semana</CheckItem>
            </div>

            {/* Price breakdown */}
            <div style={{
              background: WHITE,
              border: `1px solid ${PRIMARY_LIGHT}`,
              borderRadius: 20,
              padding: "28px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{ margin: "0 0 20px", fontWeight: 700, fontSize: "1.2rem" }}>Resumen del pedido</h3>
              {[
                { label: "+70 Recetas Antiinflamatorias", price: "29.99€" },
                { label: "Bonus: Guía de Compra", price: "9.99€" },
                { label: "Bonus: Snacks Extra", price: "9.99€" },
              ].map((row, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: `1px solid ${PRIMARY_LIGHT}`,
                  fontSize: "0.95rem"
                }}>
                  <span style={{ color: TEXT_MUTED }}>{row.label}</span>
                  <span style={{ textDecoration: "line-through", color: TEXT_MUTED }}>{row.price}</span>
                </div>
              ))}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px 0 0",
                fontWeight: 700,
                fontSize: "1.2rem"
              }}>
                <span style={{ color: DARK }}>Total hoy:</span>
                <span style={{ color: PRIMARY }}>{PRICE.toFixed(2)}€</span>
              </div>
              <div style={{ color: TEXT_MUTED, fontSize: "0.8rem", marginBottom: 20, textAlign: "right" }}>
                Ahorro total: {(29.99 + 9.99 + 9.99 - PRICE).toFixed(2)}€
              </div>
              <button
                onClick={handleBuy}
                style={{
                  width: "100%",
                  background: PRIMARY,
                  color: WHITE,
                  border: "none",
                  borderRadius: 20,
                  padding: "16px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  boxShadow: `0 4px 20px rgba(59,96,52,0.3)`,
                  transition: "background 0.2s"
                }}
                onMouseEnter={e => e.target.style.background = PRIMARY_DARK}
                onMouseLeave={e => e.target.style.background = PRIMARY}
              >
                🛒 Obtener acceso ahora — {PRICE.toFixed(2)}€
              </button>
            </div>
          </div>
        )}

        {/* OPINIONES */}
        {activeTab === "opiniones" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: DARK, marginBottom: 8 }}>
              Lo que dicen nuestras clientas
            </h2>

            {/* Rating Summary */}
            <div style={{
              background: PRIMARY_LIGHT,
              borderRadius: 16,
              padding: "24px",
              marginBottom: 32,
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              alignItems: "center"
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3.5rem", fontWeight: 700, color: PRIMARY, lineHeight: 1 }}>4.9</div>
                <StarRating count={5} />
                <div style={{ color: TEXT_MUTED, fontSize: "0.85rem", marginTop: 4 }}>de 5 estrellas</div>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                {[
                  { stars: 5, pct: 92 },
                  { stars: 4, pct: 6 },
                  { stars: 3, pct: 2 },
                ].map((row, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: "0.85rem", color: TEXT_MUTED, width: 50 }}>{row.stars} ★</span>
                    <div style={{
                      flex: 1,
                      height: 8,
                      background: "rgba(59,96,52,0.15)",
                      borderRadius: 4,
                      overflow: "hidden"
                    }}>
                      <div style={{
                        width: `${row.pct}%`,
                        height: "100%",
                        background: PRIMARY,
                        borderRadius: 4
                      }} />
                    </div>
                    <span style={{ fontSize: "0.85rem", color: TEXT_MUTED, width: 35 }}>{row.pct}%</span>
                  </div>
                ))}
                <div style={{ color: TEXT_MUTED, fontSize: "0.85rem", marginTop: 8 }}>
                  Basado en +2.400 opiniones verificadas
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>

            {/* More reviews notice */}
            <div style={{
              textAlign: "center",
              padding: "24px",
              background: GRAY,
              borderRadius: 16
            }}>
              <div style={{ color: TEXT_MUTED, marginBottom: 16 }}>
                Mostrando 4 de +2.400 opiniones verificadas
              </div>
              <button
                onClick={handleBuy}
                style={{
                  background: PRIMARY,
                  color: WHITE,
                  border: "none",
                  borderRadius: 20,
                  padding: "14px 32px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1rem"
                }}
              >
                Únete a nuestras clientas satisfechas →
              </button>
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === "faq" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: DARK, marginBottom: 8 }}>
              Preguntas frecuentes
            </h2>
            <p style={{ color: TEXT_MUTED, marginBottom: 32 }}>
              ¿Tienes dudas? Aquí respondemos las preguntas más comunes sobre el recetario de Nutrición en Casa.
            </p>
            <div style={{ marginBottom: 40 }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} {...faq} />
              ))}
            </div>

            {/* Contact CTA */}
            <div style={{
              background: PRIMARY_LIGHT,
              borderRadius: 16,
              padding: "28px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>💬</div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>¿Tienes más preguntas?</div>
              <p style={{ color: TEXT_MUTED, marginBottom: 16, fontSize: "0.95rem" }}>
                Estamos aquí para ayudarte. Escríbenos y te respondemos en menos de 24 horas.
              </p>
              <a
                href="mailto:soporte@nutricionencasa.com"
                style={{
                  color: PRIMARY,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  border: `2px solid ${PRIMARY}`,
                  padding: "10px 24px",
                  borderRadius: 20,
                  display: "inline-block",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => { e.target.style.background = PRIMARY; e.target.style.color = WHITE; }}
                onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = PRIMARY; }}
              >
                {/* TODO: cambiar email por el real */}
                📧 Contactar soporte
              </a>
            </div>
          </div>
        )}
      </div>

      {/* NEWSLETTER / EMAIL CAPTURE */}
      <section style={{
        background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
        padding: "56px 16px"
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", color: WHITE }}>
          <div style={{ fontSize: "2rem", marginBottom: 12 }}>🥗</div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, margin: "0 0 12px" }}>
            Recibe una receta antiinflamatoria gratis
          </h2>
          <p style={{ opacity: 0.85, marginBottom: 28, lineHeight: 1.6 }}>
            Suscríbete y te enviamos una receta exclusiva de Nutrición en Casa directamente a tu email.
          </p>
          {emailSubmitted ? (
            <div style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 16,
              padding: "24px",
              fontSize: "1.1rem"
            }}>
              ✅ ¡Perfecto! Revisa tu email en los próximos minutos.
            </div>
          ) : (
            <form
              onSubmit={handleEmailSubmit}
              style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: "1 1 220px",
                  maxWidth: 320,
                  padding: "14px 20px",
                  borderRadius: 20,
                  border: "none",
                  fontSize: "1rem",
                  fontFamily: "Assistant, sans-serif",
                  outline: "none",
                  background: WHITE,
                  color: DARK
                }}
              />
              <button
                type="submit"
                style={{
                  background: ACCENT,
                  color: WHITE,
                  border: "none",
                  borderRadius: 20,
                  padding: "14px 28px",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "Assistant, sans-serif",
                  transition: "opacity 0.2s"
                }}
                onMouseEnter={e => e.target.style.opacity = "0.85"}
                onMouseLeave={e => e.target.style.opacity = "1"}
              >
                Enviar receta gratis →
              </button>
            </form>
          )}
          <div style={{ marginTop: 16, fontSize: "0.8rem", opacity: 0.65 }}>
            🔒 Sin spam. Puedes darte de baja cuando quieras.
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ background: GRAY, padding: "56px 16px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Badge style={{ marginBottom: 20 }}>🌟 Oferta especial</Badge>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 700, color: DARK, margin: "12px 0 16px" }}>
            Empieza hoy tu camino hacia <span style={{ color: PRIMARY }}>una salud plena</span>
          </h2>
          <p style={{ color: TEXT_MUTED, lineHeight: 1.7, marginBottom: 32, fontSize: "1rem" }}>
            No dejes para mañana el bienestar que puedes empezar hoy. Más de 2.400 personas ya transformaron
            su salud con las recetas de Nutrición en Casa. ¡Tú puedes ser la próxima!
          </p>

          <div style={{
            background: WHITE,
            borderRadius: 20,
            padding: "32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            marginBottom: 24
          }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{ fontSize: "2.8rem", fontWeight: 700, color: PRIMARY }}>{PRICE.toFixed(2)}€</span>
              <div>
                <div style={{ textDecoration: "line-through", color: TEXT_MUTED, fontSize: "1.2rem" }}>{ORIGINAL_PRICE.toFixed(2)}€</div>
                <Badge style={{ background: "#e53935" }}>Ahorra {(ORIGINAL_PRICE - PRICE).toFixed(2)}€</Badge>
              </div>
            </div>
            <button
              onClick={handleBuy}
              style={{
                width: "100%",
                maxWidth: 400,
                background: PRIMARY,
                color: WHITE,
                border: "none",
                borderRadius: 20,
                padding: "18px 32px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "1.15rem",
                boxShadow: `0 6px 28px rgba(59,96,52,0.35)`,
                transition: "all 0.2s",
                display: "block",
                margin: "0 auto 16px"
              }}
              onMouseEnter={e => { e.target.style.background = PRIMARY_DARK; e.target.style.transform = "scale(1.02)"; }}
              onMouseLeave={e => { e.target.style.background = PRIMARY; e.target.style.transform = "scale(1)"; }}
            >
              🛒 Quiero mis recetas ahora
            </button>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              {["⚡ Acceso inmediato", "🔒 Pago seguro", "🔄 Garantía 30 días"].map((t, i) => (
                <span key={i} style={{ color: TEXT_MUTED, fontSize: "0.83rem" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: DARK, color: "rgba(255,255,255,0.7)", padding: "40px 16px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginBottom: 32, justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 200px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: "1.4rem" }}>🥦</span>
                <span style={{ fontWeight: 700, fontSize: "1rem", color: WHITE }}>Nutrición en Casa</span>
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
                Tu guía de referencia para una alimentación saludable, antiinflamatoria y deliciosa.
              </p>
            </div>
            <div style={{ flex: "1 1 150px" }}>
              <div style={{ fontWeight: 700, color: WHITE, marginBottom: 12, fontSize: "0.9rem" }}>Producto</div>
              {["Descripción", "¿Qué incluye?", "Opiniones", "Preguntas frecuentes"].map((l, i) => (
                <div key={i} style={{ marginBottom: 8, fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => setActiveTab(["descripcion", "incluye", "opiniones", "faq"][i])}
                >
                  {l}
                </div>
              ))}
            </div>
            <div style={{ flex: "1 1 150px" }}>
              <div style={{ fontWeight: 700, color: WHITE, marginBottom: 12, fontSize: "0.9rem" }}>Legal</div>
              {[
                "Política de privacidad",
                "Términos y condiciones",
                "Política de devoluciones",
                "Contacto"
              ].map((l, i) => (
                <div key={i} style={{ marginBottom: 8, fontSize: "0.85rem", cursor: "pointer" }}>
                  {/* TODO: Añadir rutas legales reales */}
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
            textAlign: "center",
            fontSize: "0.8rem"
          }}>
            © {new Date().getFullYear()} Nutrición en Casa. Todos los derechos reservados.
            {" · "}
            Hecho con 💚 para tu bienestar
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BUY BAR (mobile) */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: WHITE,
        borderTop: `2px solid ${PRIMARY_LIGHT}`,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        zIndex: 150,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.1)"
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: "1.2rem", color: PRIMARY }}>{PRICE.toFixed(2)}€</div>
          <div style={{ fontSize: "0.75rem", color: TEXT_MUTED, textDecoration: "line-through" }}>{ORIGINAL_PRICE.toFixed(2)}€</div>
        </div>
        <button
          onClick={handleBuy}
          style={{
            flex: 1,
            maxWidth: 280,
            background: PRIMARY,
            color: WHITE,
            border: "none",
            borderRadius: 20,
            padding: "14px 20px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: `0 4px 16px rgba(59,96,52,0.35)`,
            transition: "background 0.2s"
          }}
          onMouseEnter={e => e.target.style.background = PRIMARY_DARK}
          onMouseLeave={e => e.target.style.background = PRIMARY}
        >
          {addedToCart ? "✓ ¡Añadido al carrito!" : "🛒 Comprar ahora"}
        </button>
      </div>

      {/* Spacer for sticky bottom bar */}
      <div style={{ height: 70 }} />
    </div>
  );
}