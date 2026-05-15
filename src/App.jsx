import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Rocket,
  Cpu,
  ExternalLink,
  HelpCircle,
  X,
  Image as ImageIcon,
  ChevronUp,
} from "lucide-react";
import "./App.css";

function ProjectShowcase({ project, index, onOpenImage }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
    >
      <div className="project-media">
        <button
          className="featured-image"
          onClick={() => onOpenImage(project.images[activeImage], project.title)}
        >
          <img
            src={project.images[activeImage]}
            alt={`${project.title} imagen principal`}
          />
          <span className="image-action">
            <ImageIcon size={18} />
            Ver imagen
          </span>
        </button>

        <div className="thumbnail-row">
          {project.images.map((image, imageIndex) => (
            <button
              key={image}
              className={`thumbnail ${
                activeImage === imageIndex ? "thumbnail-active" : ""
              }`}
              onClick={() => setActiveImage(imageIndex)}
            >
              <img src={image} alt={`${project.title} ${imageIndex + 1}`} />
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
          {project.images.length} imágenes disponibles
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const whatsappNumber = "543751617994";
  const [previewImage, setPreviewImage] = useState(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  const sectionLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Proyectos" },
    { id: "proceso", label: "Proceso" },
    { id: "tecnologias", label: "Tecnologías" },
    { id: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollProgress(progress);
      setShowTopButton(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = {
    whatsapp: `https://wa.me/${whatsappNumber}?text=Hola%20Cristian,%20quiero%20consultarte%20por%20un%20proyecto%20digital.`,
    email: "mailto:cristianschneider91@gmail.com",
    linkedin: "https://www.linkedin.com/in/cristian-schneider-712180376",
    github: "https://github.com/cristianschneider91",
    instagram: "https://www.instagram.com/crisschneiderr_",
  };

  const services = [
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

  const projects = [
    {
      title: "App móvil de gestión para taller mecánico",
      type: "Aplicación móvil",
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
      ],
    },
    {
      title: "Brochures digitales para negocios",
      type: "Brochure digital",
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

  const technologies = [
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

  const process = [
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

  const faqs = [
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

  return (
    <main className="page">
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
          <a href="#inicio" className="brand">
            <span className="brand-icon">
              <Code2 size={25} />
            </span>
            <span>
              Cristian Schneider
              <small>Soluciones Digitales</small>
            </span>
          </a>

          <div className="nav-links">
            {sectionLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${
                  activeSection === item.id ? "nav-link-active" : ""
                }`}
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
              Desarrollo de software y soluciones digitales
            </div>

            <h1>
              Desarrollo software y soluciones digitales para negocios que
              quieren <span>crecer con tecnología</span>.
            </h1>

            <p className="hero-description">
              Creo aplicaciones móviles, sistemas de escritorio, páginas web,
              tarjetas digitales y brochures profesionales, pensados para ayudar
              a negocios, emprendedores y profesionales a organizarse mejor,
              presentarse con mayor confianza y dar el siguiente paso en el
              mundo digital.
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos
                <ArrowRight size={18} />
              </a>

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={18} />
                Contactar por WhatsApp
              </a>
            </div>

            <div className="hero-pills">
              <span>Apps Android e iOS</span>
              <span>Webs profesionales</span>
              <span>Sistemas de gestión</span>
              <span>Tarjetas digitales</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-showcase"
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            <div className="showcase-card main-showcase">
              <div className="panel-header">
                <div className="window-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>solution.config</p>
              </div>

              <div className="code-card">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">solution</span> = {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;brand:{" "}
                  <span className="code-green">"Cristian Schneider"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;focus:{" "}
                  <span className="code-green">"negocios"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;services: [
                  <span className="code-green">"apps"</span>,{" "}
                  <span className="code-green">"web"</span>,{" "}
                  <span className="code-green">"sistemas"</span>],
                </p>
                <p>
                  &nbsp;&nbsp;result:{" "}
                  <span className="code-green">"crecimiento digital"</span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>

            <div className="floating-card card-top">
              <Cpu size={22} />
              <div>
                <strong>Código limpio</strong>
                <span>Soluciones escalables</span>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <Database size={22} />
              <div>
                <strong>Gestión de datos</strong>
                <span>Orden y resultados</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-strip"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div>
            <Rocket size={22} />
            <span>Soluciones a medida</span>
          </div>
          <div>
            <ShieldCheck size={22} />
            <span>Calidad y confianza</span>
          </div>
          <div>
            <Code2 size={22} />
            <span>Código limpio y escalable</span>
          </div>
          <div>
            <CheckCircle2 size={22} />
            <span>Resultados reales</span>
          </div>
        </motion.div>
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
          <h2>Soluciones completas para tu negocio</h2>
          <p>
            Desarrollo herramientas y piezas digitales pensadas para que tu
            negocio se vea más profesional, organice mejor su información y
            pueda presentarse con mayor confianza.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
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
          <h2>Trabajos realizados y soluciones desarrolladas</h2>
          <p>
            Proyectos reales orientados a gestión, presencia digital,
            presentación profesional y soluciones prácticas para negocios.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectShowcase
              key={project.title}
              project={project}
              index={index}
              onOpenImage={(image, title) =>
                setPreviewImage({ image, title })
              }
            />
          ))}
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
          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="process-card"
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
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
          {technologies.map((tech, index) => (
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
              Desarrollo software con enfoque práctico y orientado a negocios
            </h2>
          </div>

          <div className="about-card">
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
            página, app, tarjeta digital, brochure o sistema a medida.
          </p>
        </motion.div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.article
              className="faq-card"
              key={faq.question}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
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
          <h2>¿Tenés una idea o proyecto digital?</h2>
          <p>
            Podemos conversar sobre tu negocio, emprendimiento o necesidad y ver
            cómo transformarlo en una solución digital profesional. Consultas
            sin compromiso y presupuesto según proyecto.
          </p>

          <div className="contact-info">
            <span>
              <MapPin size={18} />
              Puerto Piray, Misiones, Argentina
            </span>
            <span>
              <Mail size={18} />
              cristianschneider91@gmail.com
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

          <a href={links.email} className="btn btn-secondary">
            <Mail size={18} />
            Enviar email
          </a>
        </motion.div>
      </section>

      <footer className="footer">
        <div>
          <p>© 2026 Cristian Schneider | Soluciones Digitales</p>
          <span>Código limpio. Soluciones escalables. Resultados reales.</span>
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

      {previewImage && (
        <div className="image-modal" onClick={() => setPreviewImage(null)}>
          <button className="modal-close" onClick={() => setPreviewImage(null)}>
            <X size={22} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage.image} alt={previewImage.title} />
            <p>{previewImage.title}</p>
          </div>
        </div>
      )}

      {showTopButton && (
        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <ChevronUp size={20} />
        </button>
      )}
    </main>
  );
}

export default App;