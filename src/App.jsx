import { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Smartphone,
  Monitor,
  LayoutDashboard,
  Globe,
  CreditCard,
  FileText,
  Wrench,
  Code2,
  Database,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  Sparkles,
  Workflow,
  ShieldCheck,
  Rocket,
  Cpu,
  ExternalLink,
  HelpCircle,
  X,
  Image as ImageIcon,
  ChevronUp,
  Copy,
  Check,
  Palette,
  Layers3,
  BadgeCheck,
  Zap,
  PackageCheck,
  ShoppingBag,
  Gauge,
  Star,
} from "lucide-react";
import "./App.css";

const SECTION_LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "paquetes", label: "Paquetes" },
  { id: "proceso", label: "Proceso" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "contacto", label: "Contacto" },
];

const SERVICES = [
  {
    title: "Aplicaciones móviles",
    description:
      "Apps para Android e iOS orientadas a resolver necesidades reales de negocios, servicios y usuarios.",
    icon: Smartphone,
    items: ["Android", "iOS", "Apps a medida"],
  },
  {
    title: "Aplicaciones de escritorio",
    description:
      "Software de escritorio para administración, carga de datos, procesos internos y gestión operativa.",
    icon: Monitor,
    items: ["Gestión", "Administración", "Multiplataforma"],
  },
  {
    title: "Sistemas de gestión",
    description:
      "Soluciones para organizar productos, clientes, ventas, stock, órdenes de trabajo y resultados.",
    icon: LayoutDashboard,
    items: ["Stock", "Ventas", "Reportes"],
  },
  {
    title: "Páginas web y landing pages",
    description:
      "Sitios modernos, responsivos y enfocados en mostrar servicios, generar confianza y captar consultas.",
    icon: Globe,
    items: ["Web profesional", "Landing", "Portfolio"],
  },
  {
    title: "Tarjetas digitales",
    description:
      "Presentaciones digitales para compartir contacto, ubicación, horarios, servicios y redes en un solo lugar.",
    icon: CreditCard,
    items: ["QR", "WhatsApp", "Contacto"],
  },
  {
    title: "Brochures profesionales",
    description:
      "Materiales digitales para presentar negocios, servicios, propuestas comerciales o marca personal.",
    icon: FileText,
    items: ["PDF", "Redes", "Comercial"],
  },
  {
    title: "Mantenimiento y mejoras",
    description:
      "Ajustes, mejoras visuales, optimización y evolución de sistemas o piezas digitales existentes.",
    icon: Wrench,
    items: ["Mejoras", "Soporte", "Optimización"],
  },
  {
    title: "Presencia digital para comercios",
    description:
      "Diseño de soluciones simples para que comercios y profesionales se vean más confiables y modernos.",
    icon: Rocket,
    items: ["Marca", "Clientes", "Imagen"],
  },
];

const PROJECTS = [
  {
    title: "App móvil de gestión para taller mecánico",
    type: "Aplicación móvil",
    category: "Apps",
    status: "Finalizado",
    description:
      "Aplicación personalizada para la gestión técnica y administrativa de un taller mecánico. Permite registrar clientes y vehículos, crear órdenes de trabajo, cargar servicios y costos, adjuntar fotos o archivos, generar presupuestos/facturas, administrar copias de seguridad y consultar un manual de uso interno.",
    technologies: ["Android Studio", "Gestión", "Backup", "PDF"],
    images: [
      "/Proyectos/app-taller1.jpg",
      "/Proyectos/app-taller2.jpg",
      "/Proyectos/app-taller3.jpg",
      "/Proyectos/app-taller4.jpg",
      "/Proyectos/app-taller5.jpg",
      "/Proyectos/app-taller6.jpg",
      "/Proyectos/app-taller7.jpg",
      "/Proyectos/app-taller8.jpg",
      "/Proyectos/app-taller9.jpg",
    ],
  },
  {
    title: "Tarjetas digitales profesionales",
    type: "Tarjeta digital",
    category: "Tarjetas",
    status: "Finalizado",
    description:
      "Diseño de tarjetas digitales personalizadas para profesionales y comercios, pensadas para compartir información de contacto, horarios, ubicación, servicios e identidad visual de forma clara y profesional.",
    technologies: ["Diseño digital", "QR", "HTML/CSS", "Presentación"],
    images: [
      "/Proyectos/tarj1.png",
      "/Proyectos/tarj2.png",
      "/Proyectos/tarj3.png",
      "/Proyectos/tarj4.png",
      "/Proyectos/tarj5.png",
      "/Proyectos/tarj6.png",
      "/Proyectos/garota-shop-1.png",
      "/Proyectos/garota-shop-2.png",
      "/Proyectos/garota-shop-3.png",
      "/Proyectos/bait-servicio-tecnico-1.png",
      "/Proyectos/bait-servicio-tecnico-2.png",
      "/Proyectos/bait-servicio-tecnico-3.png",
    ],
  },
  {
    title: "Brochures digitales para negocios",
    type: "Brochure digital",
    category: "Diseño",
    status: "Finalizado",
    description:
      "Brochures orientados a presentar servicios digitales, aplicaciones móviles, páginas web, tarjetas digitales, soluciones a medida y propuestas comerciales para negocios o marca personal.",
    technologies: ["Diseño digital", "Brochure", "PDF", "Marketing"],
    images: [
      "/Proyectos/brochure1.png",
      "/Proyectos/brochure2.png",
      "/Proyectos/brochure3.png",
    ],
  },
];

const PACKAGES = [
  {
    title: "Pack Emprendedor",
    label: "Para empezar rápido",
    description:
      "Ideal para negocios que necesitan verse profesionales y tener una presentación clara para compartir por WhatsApp o Instagram.",
    icon: ShoppingBag,
    includes: ["Logo base", "Tarjeta digital", "Flyer de presentación", "Adaptación para redes"],
  },
  {
    title: "Pack Profesional",
    label: "Más presencia visual",
    description:
      "Pensado para comercios y profesionales que quieren una imagen más completa y material listo para publicar.",
    icon: Palette,
    includes: ["Tarjeta digital", "3 flyers", "Portada para WhatsApp", "Mockups comerciales"],
    featured: true,
  },
  {
    title: "Pack Web",
    label: "Presencia digital completa",
    description:
      "Para negocios que quieren una página web catálogo, contacto directo, estructura comercial y una base escalable.",
    icon: Globe,
    includes: ["Web catálogo", "Formulario", "WhatsApp directo", "Mantenimiento inicial"],
  },
];

const TECHNOLOGIES = [
  "Android Studio",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "C#",
  "SQL",
  "Bases de datos",
  "Git",
  "GitHub",
  "Visual Studio",
  "Vite",
];

const PROCESS = [
  {
    title: "Escucho tu idea",
    description:
      "Analizo tu necesidad, el objetivo del proyecto y qué problema debería resolver la solución digital.",
    icon: MessageCircle,
  },
  {
    title: "Diseño una propuesta",
    description:
      "Defino una estructura clara, funcionalidades principales, alcance inicial y una experiencia simple para el usuario.",
    icon: Workflow,
  },
  {
    title: "Desarrollo la solución",
    description:
      "Construyo el proyecto con foco en funcionalidad, diseño, orden, escalabilidad y facilidad de uso.",
    icon: Code2,
  },
  {
    title: "Entrega y mejoras",
    description:
      "Reviso el resultado, ajusto detalles y dejo la solución lista para presentar, usar o seguir evolucionando.",
    icon: ShieldCheck,
  },
];

const FAQS = [
  {
    question: "¿Trabajás con negocios pequeños o emprendimientos?",
    answer:
      "Sí. La idea es crear soluciones digitales accesibles y profesionales para negocios, emprendedores y profesionales que quieran mejorar su presencia digital.",
  },
  {
    question: "¿Puedo pedir una página simple para empezar?",
    answer:
      "Sí. Se puede comenzar con una landing page o página de presentación y luego agregar más secciones, funcionalidades o integraciones.",
  },
  {
    question: "¿Hacés tarjetas digitales para compartir por WhatsApp?",
    answer:
      "Sí. Las tarjetas digitales son ideales para compartir datos de contacto, servicios, redes, ubicación, horarios y enlaces importantes desde un solo lugar.",
  },
  {
    question: "¿Puedo pedir una app o sistema a medida?",
    answer:
      "Sí. Primero se analiza la necesidad, el flujo de trabajo y las funciones principales para definir una solución útil y ordenada.",
  },
  {
    question: "¿Mostrás precios fijos?",
    answer:
      "No por ahora. Cada proyecto puede tener distinto alcance, por eso se trabaja con presupuesto según necesidad. Las consultas son sin compromiso.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const cardEnter = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function ProjectShowcase({ project, index, onOpenImage }) {
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleThumbnailClick = (imageIndex) => {
    if (imageIndex === activeImage) return;
    setImageLoaded(false);
    setActiveImage(imageIndex);
  };

  return (
    <motion.article
      className="project-card premium-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={cardEnter}
      transition={{ duration: 0.62, delay: index * 0.08 }}
    >
      <div className="project-media">
        <button
          className={`featured-image${!imageLoaded ? " image-loading" : ""}`}
          onClick={() => onOpenImage(project.images[activeImage], project.title)}
          aria-label={`Ver imagen ampliada de ${project.title}`}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={project.images[activeImage]}
              src={project.images[activeImage]}
              alt={`${project.title} imagen principal`}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
            />
          </AnimatePresence>
          <span className="image-action">
            <ImageIcon size={18} />
            Ver imagen
          </span>
          <span className="image-glow"></span>
        </button>

        <div className="thumbnail-row">
          {project.images.map((image, imageIndex) => (
            <button
              key={image}
              className={`thumbnail${activeImage === imageIndex ? " thumbnail-active" : ""}`}
              onClick={() => handleThumbnailClick(imageIndex)}
              aria-label={`Ver imagen ${imageIndex + 1} de ${project.title}`}
            >
              <img
                src={image}
                alt={`${project.title} ${imageIndex + 1}`}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="project-info">
        <div className="project-top">
          <span>{project.type}</span>
          <small>{project.status}</small>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-counter">
          <Star size={15} />
          {project.images.length} imágenes disponibles
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const whatsappNumber = "543751617994";
  const emailAddress = "cristianschneider91@gmail.com";

  const [previewImage, setPreviewImage] = useState(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("Todos");
  const [cursorGlow, setCursorGlow] = useState({ x: 50, y: 20 });

  const links = {
    whatsapp: `https://wa.me/${whatsappNumber}?text=Hola%20Cristian,%20quiero%20consultarte%20por%20un%20proyecto%20digital.`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Consulta%20por%20proyecto%20digital&body=Hola%20Cristian,%20quiero%20consultarte%20por%20un%20proyecto%20digital.`,
    linkedin: "https://www.linkedin.com/in/cristian-schneider-712180376",
    github: "https://github.com/cristianschneider91-del",
    instagram: "https://www.instagram.com/schneider.soft",
  };

  const projectFilters = useMemo(
    () => ["Todos", ...new Set(PROJECTS.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === "Todos") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeProjectFilter);
  }, [activeProjectFilter]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch (error) {
      console.error("No se pudo copiar el email:", error);
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPreviewImage(null);
    };

    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewImage]);

  const updateScrollData = useCallback(() => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    setScrollProgress(progress);
    setShowTopButton(scrollTop > 500);

    if (scrollTop < 120) {
      setActiveSection("inicio");
      return;
    }

    const detectionLine = window.innerHeight * 0.38;
    let currentSection = "inicio";
    let bestDistance = Number.POSITIVE_INFINITY;

    SECTION_LINKS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionIsVisible =
        rect.top <= detectionLine && rect.bottom >= detectionLine;

      if (sectionIsVisible) {
        const distance = Math.abs(rect.top - detectionLine);
        if (distance < bestDistance) {
          bestDistance = distance;
          currentSection = item.id;
        }
      }
    });

    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 80;

    if (isAtBottom) currentSection = "contacto";

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollData();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollData();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollData);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollData);
    };
  }, [updateScrollData]);

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    setCursorGlow({ x, y });
  };

  return (
    <main
      className="page"
      onMouseMove={handleMouseMove}
      style={{ "--cursor-x": `${cursorGlow.x}%`, "--cursor-y": `${cursorGlow.y}%` }}
    >
      <div className="cursor-light"></div>

      <div className="scroll-progress">
        <span style={{ width: `${scrollProgress}%` }}></span>
      </div>

      <section className="hero" id="inicio">
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="animated-gradient"></div>
        <div className="hero-bg-image"></div>
        <div className="hero-bg-glow"></div>
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>

        <motion.nav
          className="navbar"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="#inicio"
            className="brand"
            onClick={() => handleNavClick("inicio")}
          >
            <span className="brand-icon">
              <Code2 size={25} />
            </span>
            <span>
              Schneider Digital
              <small>Software & Branding</small>
            </span>
          </a>

          <div className="nav-links">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link${activeSection === item.id ? " nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>

        <div className="hero-layout">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="badge">
              <Sparkles size={16} />
              Desarrollo, diseño digital y soluciones para vender mejor
            </div>

            <h1>
              Transformo negocios en experiencias digitales que se ven
              <span> profesionales, modernas y confiables</span>
            </h1>

            <p className="hero-description">
              Desarrollo páginas web, aplicaciones, tarjetas digitales, identidad visual
              y materiales comerciales para que emprendedores, comercios y profesionales
              puedan presentarse mejor, ordenar sus procesos y captar más consultas.
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                Ver trabajos reales
                <ArrowRight size={18} />
              </a>

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={18} />
                Pedir asesoramiento
              </a>
            </div>

            <div className="hero-pills">
              <span>Webs profesionales</span>
              <span>Tarjetas digitales</span>
              <span>Apps y sistemas</span>
              <span>Branding comercial</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-showcase"
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            <div className="premium-showcase-card">
              <div className="showcase-orbit"></div>
              <div className="mockup-window mockup-main">
                <div className="mockup-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <small>portfolio.preview</small>
                </div>
                <img src="/Proyectos/bait-servicio-tecnico-1.png" alt="Tarjeta digital BAIT" />
              </div>

              <div className="mockup-phone">
                <img src="/Proyectos/garota-shop-1.png" alt="Tarjeta digital Garota Shop" />
              </div>

              <div className="showcase-metric metric-one">
                <BadgeCheck size={20} />
                <strong>Imagen profesional</strong>
                <span>Diseño listo para compartir</span>
              </div>

              <div className="showcase-metric metric-two">
                <Gauge size={20} />
                <strong>Enfoque comercial</strong>
                <span>Más confianza, más consultas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="servicios">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Servicios</p>
          <h2>Soluciones digitales pensadas para negocios reales</h2>
          <p>
            No se trata solo de tener una web o una tarjeta: la idea es que tu negocio
            se entienda rápido, transmita confianza y tenga canales claros para recibir consultas.
          </p>
        </motion.div>

        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card premium-border"
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardEnter}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section section-dark" id="proyectos">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Proyectos</p>
          <h2>Portfolio visual con trabajos reales</h2>
          <p>
            Galería de aplicaciones, tarjetas digitales y piezas comerciales desarrolladas
            para mejorar presencia digital, presentación profesional y contacto con clientes.
          </p>
        </motion.div>

        <div className="project-filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={activeProjectFilter === filter ? "filter-active" : ""}
              onClick={() => setActiveProjectFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProjectFilter}
            className="projects-list"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectShowcase
                key={project.title}
                project={project}
                index={index}
                onOpenImage={(image, title) => setPreviewImage({ image, title })}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="section packages-section" id="paquetes">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Paquetes</p>
          <h2>Opciones simples para vender más rápido</h2>
          <p>
            Paquetes pensados para que el cliente entienda rápido qué necesita:
            empezar con una presentación digital, reforzar su imagen o avanzar con una web completa.
          </p>
        </motion.div>

        <div className="packages-grid">
          {PACKAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className={`package-card premium-border${item.featured ? " package-featured" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardEnter}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="package-label">{item.label}</div>
                <div className="package-icon">
                  <Icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.includes.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Proceso</p>
          <h2>Una forma simple y ordenada de trabajar</h2>
          <p>
            Cada proyecto comienza con una idea y se transforma paso a paso en
            una solución digital clara, funcional y lista para usar.
          </p>
        </motion.div>

        <div className="process-grid">
          {PROCESS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="process-card premium-border"
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardEnter}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section technologies-section" id="tecnologias">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Tecnologías</p>
          <h2>Herramientas que uso y sigo fortaleciendo</h2>
          <p>
            Trabajo con tecnologías orientadas al desarrollo de aplicaciones,
            sistemas, páginas web y soluciones digitales funcionales.
          </p>
        </motion.div>

        <div className="tech-list">
          {TECHNOLOGIES.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.86 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.035 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="section about-section" id="sobre-mi">
        <motion.div
          className="about-layout"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="eyebrow">Sobre mí</p>
            <h2>
              Desarrollo software con enfoque práctico y mirada comercial
            </h2>
          </div>

          <div className="about-card premium-border">
            <p>
              Soy Cristian Schneider, desarrollador de software en formación,
              enfocado en crear soluciones digitales funcionales para negocios,
              emprendedores y profesionales.
            </p>

            <p>
              Actualmente desarrollo proyectos propios utilizando tecnologías
              como Android Studio, React, JavaScript, C#, SQL y bases de datos,
              aplicando estos conocimientos en aplicaciones de gestión, sistemas
              administrativos y herramientas digitales.
            </p>

            <p>
              Mi objetivo es construir soluciones simples, claras y útiles,
              combinando lógica de programación, diseño funcional y una mirada
              práctica sobre las necesidades reales de cada cliente.
            </p>

            <div className="about-highlights">
              <div>
                <strong>Ubicación</strong>
                <span>Puerto Piray, Misiones, Argentina</span>
              </div>
              <div>
                <strong>Enfoque</strong>
                <span>Clientes, negocios y proyectos digitales</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section faq-section" id="faq">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Antes de empezar un proyecto</h2>
          <p>
            Algunas respuestas rápidas para quienes quieren consultar por una
            página, app, tarjeta digital, folleto o sistema a medida.
          </p>
        </motion.div>

        <div className="faq-grid">
          {FAQS.map((faq, index) => (
            <motion.article
              className="faq-card premium-border"
              key={faq.question}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardEnter}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <HelpCircle size={22} />
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Contacto</p>
          <h2>Tu negocio puede verse más profesional esta semana</h2>
          <p>
            Contame qué vendés o qué servicio ofrecés y te asesoro con la mejor
            opción: tarjeta digital, página web, logo, flyer o sistema.
          </p>

          <div className="contact-info">
            <span>
              <MapPin size={18} />
              Puerto Piray, Misiones, Argentina
            </span>
            <span>
              <Mail size={18} />
              {emailAddress}
            </span>
          </div>

          <div className="social-contact">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-actions"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <MessageCircle size={18} />
            Escribirme por WhatsApp
          </a>

          <a
            href={links.gmail}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Mail size={18} />
            Enviar email por Gmail
          </a>

          <button type="button" className="btn btn-copy" onClick={handleCopyEmail}>
            {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
            {copiedEmail ? "Email copiado" : "Copiar email"}
          </button>
        </motion.div>
      </section>

      <footer className="footer">
        <div>
          <p>© 2026 Cristian Schneider | Schneider Digital</p>
          <span>Código limpio. Diseño profesional. Resultados reales.</span>
        </div>

        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="#inicio">
            <ExternalLink size={18} />
            Inicio
          </a>
        </div>
      </footer>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="image-modal"
            onClick={() => setPreviewImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <button
              className="modal-close"
              onClick={() => setPreviewImage(null)}
              aria-label="Cerrar imagen"
            >
              <X size={22} />
            </button>
            <motion.div
              className="modal-content"
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <img src={previewImage.image} alt={previewImage.title} />
              <p>{previewImage.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTopButton && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver al inicio"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
