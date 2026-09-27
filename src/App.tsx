import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Zap, Sun, Network, Ruler } from 'lucide-react';

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const whatsapp = 'https://wa.me/573022752552?text=Hola%2C%20quisiera%20consultar%20sobre%20los%20servicios%20de%20Compa%C3%B1%C3%ADa%20Colombiana%203C%20SAS.';

const services = [
  {
    number: '01',
    title: 'Instalaciones eléctricas',
    description: 'Instalaciones normales y reguladas de baja, media y alta tensión.',
    image: 'tablero-distribucion.webp',
    imageAlt: 'Tablero de distribución eléctrica',
  },
  {
    number: '02',
    title: 'Equipos de voltaje',
    description: 'Suministro e instalación de equipos de voltaje, incluidos reguladores y UPS.',
    image: 'equipos-electricos.webp',
    imageAlt: 'Equipos de distribución eléctrica instalados',
  },
  {
    number: '03',
    title: 'Paneles solares',
    description: 'Suministro e instalación de paneles solares.',
    image: 'panel-solar.webp',
    imageAlt: 'Panel solar fotovoltaico',
  },
  {
    number: '04',
    title: 'Calentadores solares de agua',
    description: 'Suministro e instalación en capacidades de 200, 300 y 400 litros.',
    image: 'calentador-solar.webp',
    imageAlt: 'Calentador solar de agua instalado',
  },
  {
    number: '05',
    title: 'Computadores, redes y fibra óptica',
    description: 'Suministro y mantenimiento de computadores; montaje de redes LAN y fibra óptica.',
    image: 'redes-datos.webp',
    imageAlt: 'Gabinete con equipos de conectividad y datos',
  },
  {
    number: '06',
    title: 'Estudios topográficos',
    description: 'Estudios topográficos para entender el terreno antes de proyectar.',
    image: 'topografia.jpg',
    imageAlt: 'Equipo de medición topográfica en un terreno',
  },
  {
    number: '07',
    title: 'Planos arquitectónicos',
    description: 'Diseño de planos arquitectónicos para dar forma a las ideas.',
    image: 'planos.jpg',
    imageAlt: 'Planos arquitectónicos sobre una mesa de trabajo',
  },
];

const accessories = [
  { image: 'kits-solares.webp', title: 'Kits y energía portátil', alt: 'Kits de iluminación, pequeños paneles y cargadores solares portátiles' },
  { image: 'camaras-radios-solares.webp', title: 'Cámaras y radios solares', alt: 'Cámaras de vigilancia con panel solar y radios con carga solar' },
  { image: 'luminarias-solares.webp', title: 'Luminarias y reflectores', alt: 'Reflectores, lámparas y luminarias de exterior con paneles solares' },
  { image: 'linternas-solares.webp', title: 'Linternas y lámparas', alt: 'Linternas, lámparas portátiles y accesorios de iluminación solar' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" id="inicio">
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-[#f5f2e9] focus:p-4" href="#contenido">Saltar al contenido</a>
      <header className="header container">
        <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Compañía Colombiana 3C SAS, ir al inicio" data-testid="link-logo-inicio">
          <img src={asset('logo-simbolo-transparente.png')} alt="" />
          <span className="brand-type">Compañía<br />Colombiana <strong>3C SAS</strong></span>
        </a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Navegación principal" id="main-navigation">
          <a href="#nosotros" onClick={closeMenu} data-testid="link-nosotros">Nosotros</a>
          <a href="#servicios" onClick={closeMenu} data-testid="link-servicios">Servicios</a>
          <a href="#energia-solar" onClick={closeMenu} data-testid="link-energia-solar">Energía solar</a>
          <a href="#contacto" onClick={closeMenu} data-testid="link-contacto-nav">Contacto</a>
        </nav>
        <a className="header-contact" href="#contacto" data-testid="link-conversemos-header">Hablemos de su proyecto <ArrowUpRight size={17} strokeWidth={1.7} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} data-testid="button-menu">
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-index">Ingeniería que conecta posibilidades · Colombia</div>
            <h1 id="hero-title" className="display">La energía de <em>hacerlo</em> posible.</h1>
            <p className="hero-sub">Infraestructura eléctrica, soluciones solares, tecnología y diseño técnico. Distintas disciplinas, una visión clara: llevar sus ideas a la realidad.</p>
            <div className="hero-actions">
              <a href="#servicios" className="button-primary" data-testid="link-explorar-servicios">Explore nuestros servicios <ArrowDownRight size={18} strokeWidth={1.7} /></a>
              <a href="#contacto" className="button-text" data-testid="link-hero-contacto">Póngase en contacto <ArrowUpRight size={15} strokeWidth={1.8} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={asset('hero-solar-alta-calidad.webp')} alt="Técnicos instalando un panel solar en una cubierta" fetchPriority="high" />
            <span className="hero-vertical">Electricidad / Energía / Tecnología / Diseño</span>
            <div className="hero-corner">Conectamos<span>lo que sigue.</span></div>
          </div>
        </section>

        <div className="ticker" aria-label="Áreas de servicio">
          <div className="ticker-inner container">
            <span className="ticker-item"><Zap size={17} strokeWidth={1.5} /> Infraestructura eléctrica</span>
            <span className="ticker-item"><Sun size={17} strokeWidth={1.5} /> Soluciones solares</span>
            <span className="ticker-item"><Network size={17} strokeWidth={1.5} /> Tecnología y conectividad</span>
            <span className="ticker-item"><Ruler size={17} strokeWidth={1.5} /> Diseño técnico</span>
          </div>
        </div>

        <section className="intro container" id="nosotros" aria-labelledby="intro-title">
          <div className="intro-grid">
            <div className="intro-aside reveal">
              <span className="eyebrow section-label">Nuestra perspectiva</span>
              <p>Compañía Colombiana 3C SAS reúne soluciones técnicas para necesidades que no caben en una sola categoría.</p>
            </div>
            <div className="intro-main reveal">
              <h2 id="intro-title" className="display">Hay proyectos que necesitan <span>más de una mirada.</span></h2>
              <p>Una instalación eléctrica, una solución solar, una red de datos o un plano arquitectónico son partes de una misma conversación: cómo hacer que los espacios, los sistemas y las personas funcionen mejor juntos.</p>
            </div>
          </div>
        </section>

        <section className="capabilities" id="servicios" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <span className="eyebrow section-label">01 / Lo que hacemos</span>
                <h2 id="services-title" className="display">Instalaciones eléctricas, tecnología y más.</h2>
              </div>
              <p>Del suministro a la instalación. Del terreno al plano. De la energía a la conexión.</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <div className={`service-item reveal ${service.image ? 'service-item-visual' : ''}`} key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  {service.image && (
                    <div className="service-photo">
                      <img src={asset(service.image)} alt={service.imageAlt} loading="lazy" />
                    </div>
                  )}
                  <ArrowUpRight className="service-arrow" size={23} strokeWidth={1.4} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="feature" id="energia-solar" aria-labelledby="solar-title">
          <div className="feature-grid container">
            <div className="feature-image reveal">
              <img src={asset('sistema-termico.webp')} alt="Sistema solar térmico instalado en una cubierta" loading="lazy" />
              <div className="feature-inset">
                <img src={asset('calentador-cubierta.webp')} alt="Calentador solar de agua en una cubierta" loading="lazy" />
                <span>Calentador solar de agua</span>
              </div>
            </div>
            <div className="feature-copy reveal">
              <span className="eyebrow section-label">02 / Energía solar</span>
              <h2 id="solar-title" className="display">Energía solar <span>desde otra perspectiva.</span></h2>
              <p>La energía solar abre nuevas posibilidades para su infraestructura. Ofrecemos suministro e instalación de paneles solares y calentadores solares de agua para diferentes necesidades.</p>
              <div className="feature-rule" />
              <div className="feature-detail"><strong>01</strong><span>Paneles solares: suministro e instalación.</span></div>
              <div className="feature-rule" />
              <div className="feature-detail"><strong>02</strong><span>Calentadores solares de agua: 200, 300 y 400 litros.</span></div>
              <a href="#contacto" className="button-text feature-link" data-testid="link-solar-contacto">Consultar una solución solar <ArrowUpRight size={16} strokeWidth={1.8} /></a>
            </div>
          </div>
        </section>

        <section className="accessories container" id="accesorios" aria-labelledby="accessories-title">
          <div className="accessories-heading reveal">
            <div>
              <span className="eyebrow section-label">Accesorios solares</span>
              <h2 id="accessories-title" className="display">Energía útil en <em>cada detalle.</em></h2>
            </div>
            <p>Explore opciones de iluminación, seguridad y energía portátil. Consulte referencias y disponibilidad para su proyecto.</p>
          </div>
          <div className="accessories-grid">
            {accessories.map((item, index) => (
              <figure className="accessory-card reveal" key={item.image}>
                <div className="accessory-image">
                  <img src={asset(item.image)} alt={item.alt} loading="lazy" />
                </div>
                <figcaption><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong></figcaption>
              </figure>
            ))}
          </div>
          <p className="accessories-note">Imágenes de referencia. Consulte disponibilidad y especificaciones antes de hacer su pedido.</p>
        </section>

        <section className="field-notes container" aria-labelledby="field-notes-title">
          <div className="field-notes-heading">
            <span className="eyebrow section-label">Imágenes de las soluciones</span>
            <h2 id="field-notes-title" className="display">Ingeniería en <em>cada detalle.</em></h2>
          </div>
          <div className="field-notes-grid">
            <figure className="field-note">
              <img src={asset('infraestructura-industrial.webp')} alt="Interior de una nave industrial con estructura metálica" loading="lazy" />
              <figcaption>Infraestructura</figcaption>
            </figure>
            <figure className="field-note">
              <img src={asset('canalizaciones.webp')} alt="Canalizaciones metálicas para instalaciones técnicas" loading="lazy" />
              <figcaption>Instalaciones técnicas</figcaption>
            </figure>
            <figure className="field-note">
              <img src={asset('conexiones-electricas.webp')} alt="Detalle de conexiones eléctricas en un tablero" loading="lazy" />
              <figcaption>Conexiones eléctricas</figcaption>
            </figure>
          </div>
        </section>

        <section className="spectrum container" aria-labelledby="spectrum-title">
          <div className="spectrum-header reveal">
            <div>
              <span className="eyebrow section-label">03 / Visión integral</span>
              <h2 id="spectrum-title" className="display">Topografía y planos: precisión con perspectiva.</h2>
            </div>
            <p>El trabajo técnico empieza por comprender el contexto: el lugar, la infraestructura y las conexiones que harán posible lo que viene.</p>
          </div>
          <div className="spectrum-grid">
            <article className="spectrum-card reveal">
              <img src={asset('topografia.jpg')} alt="Equipo de medición topográfica en un terreno" loading="lazy" />
              <div className="spectrum-card-content">
                <span>Terreno y contexto</span>
                <h3>Estudios topográficos</h3>
                <p>Información del terreno para proyectar con claridad.</p>
              </div>
            </article>
            <article className="spectrum-card reveal">
              <img src={asset('planos.jpg')} alt="Planos arquitectónicos sobre una mesa de trabajo" loading="lazy" />
              <div className="spectrum-card-content">
                <span>Forma y función</span>
                <h3>Diseño de planos arquitectónicos</h3>
                <p>Las ideas toman forma antes de convertirse en espacio.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="financing" id="financiacion" aria-labelledby="financing-title">
          <div className="container financing-grid">
            <div>
              <span className="eyebrow section-label">Opciones de financiación</span>
              <h2 id="financing-title" className="display">Haga realidad su proyecto <em>con más opciones.</em></h2>
              <p>Consulte por las opciones de financiación con Addi, Sistecrédito y CFA Cooperativa Financiera al solicitar su cotización. Disponibilidad y aprobación sujetas a las condiciones de cada entidad.</p>
              <a href={`https://wa.me/573022752552?text=${encodeURIComponent('Hola, quisiera consultar opciones de financiación con Addi, Sistecrédito o CFA para mi proyecto.')}`} target="_blank" rel="noopener noreferrer" className="button-text" data-testid="link-financiacion-3c">
                Consultar financiación <ArrowUpRight size={16} strokeWidth={1.8} />
              </a>
            </div>
            <div className="financing-options" aria-label="Entidades de financiación">
              <div className="finance-name"><img src={asset('addi-logo.png')} alt="Addi" loading="lazy" /></div>
              <div className="finance-name"><img src={asset('sistecredito-logo.png')} alt="Sistecrédito" loading="lazy" /></div>
              <div className="finance-name"><img src={asset('cfa-logo.png')} alt="CFA Cooperativa Financiera" loading="lazy" /></div>
            </div>
          </div>
        </section>

        <section className="contact" id="contacto" aria-labelledby="contact-title">
          <div className="contact-grid container">
            <div className="reveal">
              <span className="eyebrow section-label">04 / Conversemos</span>
              <h2 id="contact-title" className="display">El siguiente paso <em>empieza aquí.</em></h2>
              <p className="contact-lede">Cuéntenos qué necesita. Estamos disponibles para conversar sobre sus requerimientos de energía, tecnología e infraestructura.</p>
              <div className="contact-actions">
                <a className="button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp">Escribir por WhatsApp <ArrowUpRight size={18} strokeWidth={1.7} /></a>
                <a className="button-outline" href="mailto:ccolombiana3c@gmail.com" data-testid="link-email-cta">Enviar un correo <ArrowUpRight size={18} strokeWidth={1.7} /></a>
              </div>
            </div>
            <div className="contact-info reveal">
              <div className="contact-line"><small>Dirección</small><address>AV CRA 20 #80-60,<br /> EDIFICIO LOS HÉROES</address></div>
              <div className="contact-line"><small>PBX</small><a href="tel:+576014105110" data-testid="link-pbx">6014105110</a></div>
              <div className="contact-line"><small>Celular</small><a href="tel:+573022752552" data-testid="link-celular">3022752552</a></div>
              <div className="contact-line"><small>Correo</small><a href="mailto:ccolombiana3c@gmail.com" data-testid="link-email">ccolombiana3c@gmail.com</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#inicio" className="footer-brand" aria-label="Volver al inicio" data-testid="link-footer-inicio">
              <img src={asset('logo-simbolo-transparente.png')} alt="" />
              <span>Compañía Colombiana<br />3C SAS</span>
            </a>
            <p>Infraestructura eléctrica, energía solar, tecnología y diseño técnico.</p>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Compañía Colombiana 3C SAS.</span>
            <a href="#inicio" data-testid="link-volver-arriba">Volver arriba <ArrowRight size={13} style={{ display: 'inline-block', verticalAlign: 'middle' }} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;