import './style.css'
import { Navbar } from './src/components/Navbar.js'
import { Hero } from './src/components/Hero.js'
import { Footer } from './src/components/Footer.js'

const app = document.querySelector('#app');

const testimonialsData = {
  'Marketing': {
    quote: "La integración de Inscale en nuestro equipo fue total. No solo optimizaron nuestras campañas, sino que nos ayudaron a entender mejor a nuestro cliente mediante datos reales. Hemos visto un crecimiento sostenido del 40% en solo seis meses.",
    author: "Carlos Mendoza",
    role: "CCO, TechVision Spain",
    company: "TECHVISION",
    image: "/assets/worker-hero.png" // Placeholder
  },
  'Ecommerce': {
    quote: "Nuestro ecommerce tenía tráfico pero no convertía. Inscale rediseñó la experiencia de usuario completa y optimizó el checkout. Pasamos de un 0.8% a un 2.4% de conversión en semanas. El ROI de la inversión ha sido espectacular.",
    author: "Sofia L.",
    role: "Founder, Glow & Co",
    company: "GLOW & CO",
    image: "/assets/ecommerce1.jpg"
  },
  'Estrategia': {
    quote: "Necesitábamos reposicionar nuestra marca en el mercado premium. La consultoría estratégica de Inscale nos dio la claridad y la hoja de ruta exacta. Hoy no solo vendemos más, sino que vendemos a un ticket mucho más alto con la misma inversión.",
    author: "Marc Soler",
    role: "CEO, Horizon Groups",
    company: "HORIZON",
    image: "/assets/Estrategia.jpg"
  }
};

const renderHome = () => {
  app.innerHTML = `
    ${Navbar()}
    ${Hero(
    "LA AGENCIA Nº1 EN RENDIMIENTO DE MARKETING DIGITAL",
    "DEJA DE BUSCAR<br>EMPIEZA A CRECER.",
    "EMPEZAR"
  )}

    <!-- Trust Bar -->
    <div class="trust-bar-section">
        <div class="container trust-bar-content">
            <p class="trust-label">CON LA CONFIANZA DE MARCAS LÍDERES</p>
            <div class="trust-logos">
                <span class="logo-item">Meta Business</span>
                <span class="logo-item">Google Partner</span>
                <span class="logo-item">Shopify Expert</span>
                <span class="logo-item">Klaviyo</span>
                <span class="logo-item">TikTok Ads</span>
            </div>
        </div>
    </div>

    <!-- Agency Intro Section -->
    <section class="agency-intro" id="agencia">
        <div class="container">
            <!-- Top Row: Heading + Text -->
            <div class="intro-top-row">
                <h2 class="intro-title">
                    Agencia de marketing digital especializada en 
                    <span class="intro-highlight">generación de leads</span>
                    y <span class="intro-highlight">ecommerce.</span>
                </h2>
                <div class="intro-text">
                    <p style="font-weight: 700; color: #000;">¿Necesitas más leads? ¿Quieres escalar pero te falta el mapa? No estás solo. Trabajamos compitiendo contra tus problemas exactos con soluciones digitales.</p>
                    <p>Inscale es una agencia de rendimiento digital con un entendimiento innato del negocio. Gestionamos un portafolio nacional de clientes con especializaciones en servicios profesionales, educación, SaaS y FMCG.</p>
                    <p>Basados en Madrid con visión global. Nuestros equipos son 100% in-house y siempre disponibles. Estamos incondicionalmente enfocados en el crecimiento de tu negocio.</p>
                </div>
            </div>

            <!-- Bottom Row: Gradient Pill + Text -->
            <div class="intro-bottom-row">
                <div class="gradient-pill-visual"></div>
                <div class="intro-bottom-text">
                    <h2>Nos tomamos el tiempo para <span class="text-blue-fluid">conocerte.</span></h2>
                    <p>Creemos en entender tu industria y tu problema íntimamente. Nos obsesiona el detalle y sabemos que invertir tiempo en entenderte significa mejores resultados para todos.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section bg-white-section" id="especialidades" style="padding-top: 100px;">
      <div class="container">
        
        <!-- Global Method Title -->
        <div class="method-header-container" style="text-align: center; padding: 80px 0; margin-bottom: 200px; position: relative;">
            <h2 class="method-title-main" style="font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; color: #000; letter-spacing: -0.02em; line-height: 1.0; margin-bottom: 20px;">
                El método <span class="text-blue-fluid">Inscale</span>
            </h2>
            <h3 class="method-subtitle-secondary" style="font-family: 'Playfair Display', serif; font-style: italic; color: #555; font-size: clamp(1.2rem, 2.5vw, 2rem); font-weight: 400; letter-spacing: 0; margin-bottom: 24px;">
                Tu hoja de ruta al éxito
            </h3>
            <p style="max-width: 700px; margin: 0 auto; font-size: 1.1rem; line-height: 1.6; color: #666;">
                Un sistema probado de 4 fases que integra estrategia, creatividad y tecnología. Diseñado para eliminar la incertidumbre y transformar tu inversión en crecimiento sostenible y escalable. <br><span style="color: #000; font-weight: 500;">Elige los servicios que necesites o delega tu Marketing en nosotros: la elección es tuya.</span>
            </p>
            
            <!-- Crystal Shard Connector -->
            <div id="snake-connector" class="snake-connector-line" style="
                width: 2px; 
                height: 0px; 
                background: linear-gradient(180deg, rgba(45, 99, 255, 0) 0%, #00C6FF 40%, #2D63FF 100%); 
                margin: 0 auto; 
                position: absolute; 
                left: 50%;
                transform: translateX(-50%);
                top: 100%; 
                margin-top: -20px; 
                z-index: 10;
                box-shadow: 0 0 10px rgba(0, 198, 255, 0.5);
                border-radius: 0;
            ">
                <!-- Diamond Crystal Tip -->
                <div class="snake-arrow-head" style="
                    position: absolute;
                    bottom: -6px; 
                    left: 50%; 
                    transform: translateX(-50%) rotate(45deg);
                    width: 10px; 
                    height: 10px; 
                    background: #111;
                    border: 2px solid #00C6FF;
                    box-shadow: 0 0 12px #2D63FF, inset 0 0 4px #00C6FF;
                "></div>
            </div>
        </div>

        <!-- Group 1: Tracción -->
        <div id="fase-1-trigger" class="section-heading interact-target">
            <p class="section-subtitle">Fase 01. Descubrimiento</p>
            <h2 class="bold-part">
                <span class="italic-part">Tracción y Visibilidad</span>
                Atrae a tu audiencia ideal
            </h2>
        </div>
        <div class="vibrant-cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); margin-bottom: 120px;">
          
          <!-- 1. Publicidad Digital (fase-1 v1) -->
          <div class="card-vibrant fase-1 v1">
            <h3>Publicidad Digital</h3>
            <p>Maximizamos tu retorno en los principales canales. Escalamos lo que funciona y detectamos oportunidades.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Segmentación precisa</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Análisis en tiempo real</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Adaptación a tendencias</li>
            </ul>
            <div class="card-vibrant-inset">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.8rem; font-weight: 700;">
                    <span>ROAS</span>
                    <span style="color: #27AE60;">6.4x</span>
                </div>
                <div style="display: flex; align-items: flex-end; gap: 4px; height: 50px;">
                    ${Array(12).fill(0).map((_, i) => `<div style="flex: 1; background: #42b883; height: ${30 + Math.random() * 70}%; border-radius: 1px; opacity: ${0.5 + (i / 12) * 0.5}"></div>`).join('')}
                </div>
            </div>

          </div>

          <!-- 2. Redes Sociales (fase-1 v2) -->
          <div class="card-vibrant fase-1 v2">
            <h3>Redes Sociales</h3>
            <p>Gestionamos tus redes con estrategia y creatividad para generar interacción real.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Contenido estratégico</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Crecimiento orgánico</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Análisis de impacto</li>
            </ul>
            <div class="card-vibrant-inset">
                <div style="display: flex; gap: 8px;">
                    <div style="flex: 1; height: 80px; background: #f5f5f7; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">❤️</div>
                    <div style="flex: 1; height: 80px; background: #f5f5f7; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">💬</div>
                </div>
            </div>

          </div>

          <!-- 3. Content Manager (fase-1 v3) -->
          <div class="card-vibrant fase-1 v3">
            <h3>Content Manager</h3>
            <p>Contenido SEO que aporta valor y mejora tu visibilidad online de forma sostenible.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Tráfico orgánico blog</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Redacción SEO</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Coherencia de marca</li>
            </ul>
            <div class="card-vibrant-inset">
                <div style="font-size: 0.7rem; color: #999; margin-bottom: 5px;">Google Search Console</div>
                <div style="display: flex; align-items: baseline; gap: 5px;">
                    <span style="font-size: 1.2rem; font-weight: 800;">+125%</span>
                    <span style="font-size: 0.7rem; color: #27AE60;">en Clicks</span>
                </div>
            </div>

          </div>
        </div>

        <!-- Info Block 1 -->
        <div class="service-info-block">
          <div class="container service-info-grid">
            <div class="info-block-text">
              <h2 class="hero-split-heading" style="color: black; margin-bottom: 30px;">
                <span class="italic-part" style="color: #000; font-size: 3.5rem;">Tu marca en el centro</span>
                <span class="bold-part" style="color: #000; font-size: 3rem; letter-spacing: -0.04em;">de la conversación.</span>
              </h2>
              <p class="description">No se trata solo de estar, sino de destacar. Combinamos pauta publicitaria agresiva con contenido orgánico que genera confianza y autoridad.</p>
              <ul class="info-block-list">
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Segmentación láser por comportamiento</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Creatividades que rompen el scroll</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Resultados medibles desde el día 1</li>
              </ul>
              <a href="#contacto" class="btn-black-pill" style="width: fit-content;">Hablemos de visibilidad <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div class="info-block-visual">
               <div class="mockup-main-card">
                  <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 40px; height: 40px; background: #2D63FF; border-radius: 10px;"></div>
                    <div style="font-weight: 700; color: #333;">Performance Feed</div>
                  </div>
                  <div class="status-indicator">● Active</div>
               </div>
               <div class="mockup-sub-stack">
                  <div class="mockup-tiny-card active">
                    <div class="left">
                        <div class="tiny-icon-placeholder">📈</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">ROAS Manager</div>
                            <div style="font-size: 0.75rem; color: #888;">Optimización automática</div>
                        </div>
                    </div>
                    <div class="status-indicator">6.4x</div>
                  </div>
                  <div class="mockup-tiny-card">
                    <div class="left">
                        <div class="tiny-icon-placeholder">✨</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">Creative Lab</div>
                            <div style="font-size: 0.75rem; color: #888;">Nuevas piezas en cola</div>
                        </div>
                    </div>
                    <div class="status-indicator" style="color: #666;">Ready</div>
                  </div>
               </div>
            </div>
          </div>
        </div>



        <!-- Group 2: Conversión -->
        <div class="section-heading">
            <p class="section-subtitle">Fase 02. Optimización</p>
            <h2 class="bold-part">
                <span class="italic-part">Conversión y Activos</span>
                Convierte clics en ventas
            </h2>
        </div>
        <div class="vibrant-cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); margin-bottom: 120px;">
          <!-- 4. Diseño Web (fase-2 v1) -->
          <div class="card-vibrant fase-2 v1">
            <h3>Diseño Web</h3>
            <p>Sitios web rápidos, estables y pensados para convertir. Shopify, Webflow y más.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Optimización UX</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Diseño Responsivo</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Landing Pages de Ventas</li>
            </ul>
            <div class="card-vibrant-inset">
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                    <button style="background: #000; color: white; border: none; padding: 8px 20px; border-radius: 6px; font-weight: 600; font-size: 0.8rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">Comprar</button>
                    <div style="width: 20px; height: 20px; background: #2D63FF; clip-path: polygon(0 0, 100% 40%, 40% 100%); transform: rotate(-15deg);"></div>
                </div>
                <div style="text-align: center; font-size: 0.7rem; color: #888; margin-top: 8px; font-weight: 500;">Conversion Optimized</div>
            </div>

          </div>

          <!-- 5. Email Marketing (fase-2 v2) -->
          <div class="card-vibrant fase-2 v2">
            <h3>Email Marketing</h3>
            <p>Automatizaciones y campañas de fidelización alineadas con tu embudo de ventas.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Fidelización efectiva</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Klaviyo & ActiveCampaign</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Segmentación avanzada</li>
            </ul>
            <div class="card-vibrant-inset">
                <div style="text-align: center; width: 100%;">
                    <div style="font-size: 0.75rem; color: #666; margin-bottom: 5px;">Tasa de Apertura</div>
                    <div style="font-size: 2rem; font-weight: 800; color: #38f9d7; line-height: 1;">65%</div>
                    <div style="font-size: 0.65rem; color: #999; margin-top: 5px;">vs 21% industria</div>
                </div>
            </div>

          </div>

          <!-- 6. Branding & Rebranding (fase-2 v3) -->
          <div class="card-vibrant fase-2 v3">
            <h3>Branding & Rebranding</h3>
            <p>Redefinimos tu identidad visual y verbal para que transmitas tu esencia real.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Imagen profesional</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Sistema de marca</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Diferenciación clara</li>
            </ul>
            <div class="card-vibrant-inset">
                <div style="display: flex; justify-content: center; align-items: center; gap: 15px;">
                    <div style="font-family: serif; font-size: 2rem; font-weight: 900; color: #fda085;">In.</div>
                    <div style="width: 1px; height: 30px; background: #ddd;"></div>
                    <div style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: #333;">Identity</div>
                </div>
            </div>

          </div>
        </div>

        <!-- Info Block 2 -->
        <div class="service-info-block">
          <div class="container service-info-grid">
            <div class="info-block-text">
              <h2 class="hero-split-heading" style="color: black; margin-bottom: 30px;">
                <span class="italic-part" style="color: #000; font-size: 3.5rem;">Donde la estética</span>
                <span class="bold-part" style="color: #000; font-size: 3rem; letter-spacing: -0.04em;">se cruza con los datos.</span>
              </h2>
              <p class="description">Un sitio web bonito no sirve si no vende. Una marca impactante no funciona sin una estrategia de retención. Unificamos tu identidad con tu embudo de ventas.</p>
              <ul class="info-block-list">
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> E-commerce de alto rendimiento</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Automatización de ciclos de vida</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Coherencia visual omnicanal</li>
              </ul>
              <a href="#contacto" class="btn-black-pill" style="width: fit-content;">Escalar mi conversión <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
             <div class="info-block-visual" style="background: #f8f9fa;">
               <div class="mockup-main-card">
                  <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 40px; height: 40px; background: #000; border-radius: 10px; color: white; display: flex; align-items: center; justify-content: center;">S</div>
                    <div style="font-weight: 700; color: #333;">Store vitals</div>
                  </div>
                  <div class="status-indicator">Secure</div>
               </div>
               <div class="mockup-sub-stack">
                  <div class="mockup-tiny-card active">
                    <div class="left">
                        <div class="tiny-icon-placeholder">🛒</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">Conversion Rate</div>
                            <div style="font-size: 0.75rem; color: #888;">Live benchmark</div>
                        </div>
                    </div>
                    <div class="status-indicator">+12%</div>
                  </div>
                  <div class="mockup-tiny-card">
                    <div class="left">
                        <div class="tiny-icon-placeholder">📧</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">Campaign Flow</div>
                            <div style="font-size: 0.75rem; color: #888;">Active sequences</div>
                        </div>
                    </div>
                    <div class="status-indicator" style="color: #666;">8 Active</div>
                  </div>
               </div>
            </div>
          </div>
        </div>



        <!-- Group 3: Escalabilidad -->
        <div class="section-heading">
            <p class="section-subtitle">Fase 03. Crecimiento</p>
            <h2 class="bold-part">
                <span class="italic-part">Escalabilidad Estratégica</span>
                Optimiza y crece sin límites
            </h2>
        </div>
        <div class="vibrant-cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); margin-bottom: 120px;">
          <!-- 7. Growth Marketing (fase-3 v1) -->
          <div class="card-vibrant fase-3 v1">
            <h3>Growth Marketing</h3>
            <p>Experimentamos, medimos y optimizamos para centrarnos en lo que realmente te hace crecer.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Ciclos cortos de trabajo</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Palancas de crecimiento</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Foco en impacto real</li>
            </ul>
             <div class="card-vibrant-inset">
                <div style="font-weight: 800; color: #4facfe;">Test > Measure > Scale</div>
            </div>

          </div>

          <!-- 8. Marketing Partner (fase-3 v2) -->
          <div class="card-vibrant fase-3 v2">
            <h3>Marketing Partner</h3>
            <p>Nos implicamos en tu negocio como parte de tu equipo con un modelo basado en éxito.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Modelo variable por éxito</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Colaboración flexible</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Visión 360 de negocio</li>
            </ul>
             <div class="card-vibrant-inset">
                <div style="font-weight: 800; font-size: 1.1rem; text-align: center;">Partner <span style="color: #2D63FF;">Impact</span></div>
            </div>

          </div>

          <!-- 9. Consultoría Digital (fase-3 v3) -->
          <div class="card-vibrant fase-3 v3">
            <h3>Consultoría Digital</h3>
            <p>Diagnóstico personalizado y plan de acción para optimizar tu ecosistema digital.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Detección de mejoras</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Plan estratégico real</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Soluciones eficientes</li>
            </ul>
             <div class="card-vibrant-inset">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 30px; height: 30px; border-radius: 50%; border: 3px solid #0ba360; border-top-color: transparent; animation: spin 2s linear infinite;"></div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: #333;">Diagnosticando...</span>
                </div>
            </div>

          </div>
        </div>

        <!-- Info Block 3 -->
        <div class="service-info-block">
          <div class="container service-info-grid">
            <div class="info-block-text">
              <h2 class="hero-split-heading" style="color: black; margin-bottom: 30px;">
                <span class="italic-part" style="color: #000; font-size: 3.5rem;">Más que una agencia,</span>
                <span class="bold-part" style="color: #000; font-size: 3rem; letter-spacing: -0.04em;">somos tu equipo.</span>
              </h2>
              <p class="description">Nos alejamos del modelo tradicional de "fee" fijo. Creemos tanto en nuestra capacidad que vinculamos parte de nuestro éxito al tuyo.</p>
              <ul class="info-block-list">
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Filosofía de Growth Partners</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Metodología ágil y experimental</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Visión de negocio global</li>
              </ul>
              <a href="#contacto" class="btn-black-pill" style="width: fit-content;">Plan de crecimiento <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
             <div class="info-block-visual">
               <div class="mockup-main-card">
                  <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 40px; height: 40px; background: #27AE60; border-radius: 10px; color: white; display: flex; align-items: center; justify-content: center;">P</div>
                    <div style="font-weight: 700; color: #333;">Profit Tracker</div>
                  </div>
                  <div class="status-indicator">Audited</div>
               </div>
               <div class="mockup-sub-stack">
                  <div class="mockup-tiny-card active">
                    <div class="left">
                        <div class="tiny-icon-placeholder">📊</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">LTV / CAC Ratio</div>
                            <div style="font-size: 0.75rem; color: #888;">Efficiency metric</div>
                        </div>
                    </div>
                    <div class="status-indicator">4.5</div>
                  </div>
                  <div class="mockup-tiny-card">
                    <div class="left">
                        <div class="tiny-icon-placeholder">🤝</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">Partner Goal</div>
                            <div style="font-size: 0.75rem; color: #888;">Next milestone</div>
                        </div>
                    </div>
                    <div class="status-indicator" style="color: #666;">92%</div>
                  </div>
               </div>
            </div>
          </div>
        </div>



        <!-- Group 4: Infraestructura -->
        <div class="section-heading">
            <p class="section-subtitle">Fase 04. Futuro</p>
            <h2 class="bold-part">
                <span class="italic-part">Infraestructura y Futuro</span>
                Domina tu ecosistema digital
            </h2>
        </div>
        <div class="vibrant-cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); margin-bottom: 120px;">
          <!-- 10. AI Marketing Specialist (fase-4 v1) -->
          <div class="card-vibrant fase-4 v1">
             <h3>AI Marketing Specialist</h3>
             <p>Integramos inteligencia artificial para ganar eficiencia y personalización avanzada.</p>
             <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Análisis predictivo</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Automatización de tareas</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Decisiones basadas en datos</li>
            </ul>
            <div class="card-vibrant-inset" style="background: rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.2); color: white;">
                <code style="font-size: 0.7rem;">Processing AI behavior... [OK]</code>
            </div>

          </div>

          <!-- 11. Integraciones (fase-4 v2) -->
          <div class="card-vibrant fase-4 v2">
            <h3>Integraciones Top</h3>
            <p>Configuramos y conectamos las mejores herramientas digitales para optimizar y escalar tus procesos.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Implementación de CRM</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Analítica & Eventos</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Integraciones escalables</li>
            </ul>
             <div class="card-vibrant-inset">
                <div style="display: flex; gap: 5px;">
                    <div style="width: 8px; height: 8px; background: #4caf50; border-radius: 2px;"></div>
                    <div style="width: 8px; height: 8px; background: #2196f3; border-radius: 2px;"></div>
                    <div style="width: 8px; height: 8px; background: #ff9800; border-radius: 2px;"></div>
                    <div style="font-size: 0.6rem; margin-left: auto; color: #333;">Connected</div>
                </div>
            </div>

          </div>

          <!-- 12. Escalado guiado (fase-4 v3) -->
          <div class="card-vibrant fase-4 v3">
            <h3>Escalado guiado</h3>
            <p>Definición estratégica global para escalar tu negocio de forma sostenible y controlada.</p>
            <ul class="card-vibrant-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Planificación a medida</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Control de rentabilidad</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Crecimiento sostenible</li>
            </ul>
             <div class="card-vibrant-inset">
                <div style="border-left: 2px solid #a88beb; padding-left: 10px; font-style: italic; font-size: 0.8rem; color: #333;">"Ahora tenemos el control total del dato."</div>
            </div>

          </div>
        </div>

        <!-- Info Block 4 (Phase 4) -->
        <div class="service-info-block">
          <div class="container service-info-grid">
            <div class="info-block-text">
              <h2 class="hero-split-heading" style="color: black; margin-bottom: 30px;">
                <span class="italic-part" style="color: #000; font-size: 3.5rem;">Delega la complejidad,</span>
                <span class="bold-part" style="color: #000; font-size: 3rem; letter-spacing: -0.04em;">toma el control.</span>
              </h2>
              <p class="description">Para directivos que exigen resultados. Eliminamos el ruido operativo con sistemas autónomos y reportes financieros que responden a las preguntas de tu consejo.</p>
              <ul class="info-block-list">
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Visión ejecutiva en tiempo real</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Alineación con objetivos de negocio</li>
                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Seguridad y compliance total</li>
              </ul>
              <a href="#contacto" class="btn-black-pill" style="width: fit-content;">Agendar sesión estratégica <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
             <div class="info-block-visual">
               <div class="mockup-main-card">
                  <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="width: 40px; height: 40px; background: #000; border-radius: 10px; color: white; display: flex; align-items: center; justify-content: center;">C</div>
                    <div style="font-weight: 700; color: #333;">Executive View</div>
                  </div>
                  <div class="status-indicator" style="color: #27AE60;">● On Track</div>
               </div>
               <div class="mockup-sub-stack">
                  <div class="mockup-tiny-card active">
                    <div class="left">
                        <div class="tiny-icon-placeholder">📉</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">Cost Efficiency</div>
                            <div style="font-size: 0.75rem; color: #888;">Optimized</div>
                        </div>
                    </div>
                    <div class="status-indicator">-18%</div>
                  </div>
                  <div class="mockup-tiny-card">
                    <div class="left">
                        <div class="tiny-icon-placeholder">🚀</div>
                        <div>
                            <div style="font-weight: 700; font-size: 0.9rem; color: #333;">Growth Rate</div>
                            <div style="font-size: 0.75rem; color: #888;">MoM</div>
                        </div>
                    </div>
                    <div class="status-indicator" style="color: #27AE60;">+24%</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Commitment & Testimonials Section -->
    <section class="section bg-white-section" style="padding-top: 50px;">
      <div class="container">
        
        <!-- Commitment -->
        <div class="commitment-header">
            <h2>Nuestro compromiso<br>con <span class="text-blue-fluid">tu crecimiento.</span></h2>
            <a href="#contacto" class="btn-black-pill">Saber más <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></a>
        </div>
        
        <div class="commitment-grid">
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Conversión Real</h4>
                <p>Eliminamos cuellos de botella para asegurar que cada visita tenga el máximo potencial de venta.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> ROAS Optimizado</h4>
                <p>Maximizamos cada euro invertido mediante segmentación avanzada y optimización continua.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Cero Fricción</h4>
                <p>Reducimos costes de adquisición automatizando procesos y verificando leads en tiempo real.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Escalabilidad</h4>
                <p>Diseñamos sistemas que crecen contigo, sin importar el tamaño de tu negocio.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Autoridad</h4>
                <p>Construimos una relación sólida con tu audiencia mediante contenido que genera autoridad.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Real-time Data</h4>
                <p>Acceso a datos y feedback instantáneo para tomar decisiones basadas en la realidad.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Integridad</h4>
                <p>Limpieza de bases de datos y gestión ética de la información de tus clientes.</p>
            </div>
            <div class="commitment-item">
                <h4><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D63FF" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Agilidad</h4>
                <p>Implementaciones rápidas y ciclos de trabajo que se adaptan a la velocidad del mercado.</p>
            </div>
        </div>

        <!-- Specialise Section -->
        <section class="specialise-section bg-white-section">
            <div class="container">
                <div class="specialise-header">
                    <h2 class="specialise-title">
                        Especializados en<br>
                        <span class="blue-highlight">tu sector.</span>
                    </h2>
                </div>
                <div class="specialise-grid">
                    <!-- Ecommerce -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        </div>
                        <h3>Ecommerce</h3>
                        <p>Escalado agresivo de ventas, ROAS saludable y retención de LTV.</p>
                    </div>

                    <!-- Healthcare -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        </div>
                        <h3>Salud & Bienestar</h3>
                        <p>Pacientes privados, agendas llenas y posicionamiento de clínicas.</p>
                    </div>

                    <!-- Education -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                        </div>
                        <h3>Educación</h3>
                        <p>Generación de matriculaciones y alumnos para centros formativos.</p>
                    </div>

                    <!-- Real Estate -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h3>Inmobiliaria</h3>
                        <p>Captación de vendedores cualificados y compradores listos para invertir.</p>
                    </div>

                    <!-- Luxury Brands -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3v6"></path><path d="M13 3v6"></path></svg>
                        </div>
                        <h3>Luxury Brands</h3>
                        <p>Estrategias de exclusividad y posicionamiento premium para clientes de alto valor.</p>
                    </div>

                    <!-- Food & Beverage -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                        </div>
                        <h3>Food & Beverage</h3>
                        <p>Estrategias de deseo y conversión local para restauración y marcas gastronómicas.</p>
                    </div>

                    <!-- Legal -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        </div>
                        <h3>Legal</h3>
                        <p>Captación de casos de alto valor y defensa de reputación digital.</p>
                    </div>

                     <!-- Beauty & Fashion -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </div>
                        <h3>Beauty & Fashion</h3>
                        <p>Branding aspiracional y performance para escalar ventas en mercados competitivos.</p>
                    </div>
                    
                    <!-- Financial -->
                    <div class="specialise-card">
                        <div class="specialise-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </div>
                        <h3>Servicios Financieros</h3>
                        <p>Confianza, autoridad y leads cualificados para gestión de patrimonios.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- In Good Company Section -->
        <div class="logo-marquee-section">

            
            <div class="layout-marquee-container">
                <!-- Row 1: Left -->
                <div class="marquee-row move-left">
                    <!-- Duplicate items 3 times for smooth loop -->
                     ${Array(20).fill(0).map((_, i) => {
    const logos = [
      '/assets/Logo Meta.avif', '/assets/Logo Ads.avif', '/assets/N8n Logo.png',
      '/assets/LinkedIn logo.png', '/assets/clickup logo.jpg', '/assets/Hubspot logo.png',
      '/assets/Open AI logo.webp', '/assets/Tiktok logo.png', '/assets/Instagram logo.avif'
    ];
    const logo = logos[i % logos.length];
    return `<div class="marquee-item"><img src="${logo}" alt="Logo"></div>`;
  }).join('')}
                </div>
                
                <!-- Row 2: Right -->
                <div class="marquee-row move-right">
                     ${Array(20).fill(0).map((_, i) => {
    const logos = [
      '/assets/Google Partner.png', '/assets/Shopify.png', '/assets/Klaviyo.png',
      '/assets/Apollo emblem.jpg', '/assets/Logo Meta.avif', '/assets/Logo Ads.avif',
      '/assets/N8n Logo.png', '/assets/LinkedIn logo.png', '/assets/clickup logo.jpg'
    ];
    // Placeholder logos if actuals are missing, reusing existing ones but shuffled
    const logo = logos[(i + 3) % logos.length];
    return `<div class="marquee-item"><img src="${logo}" alt="Logo"></div>`;
  }).join('')}
                </div>
            </div>
        </div>

        <!-- Results Section -->
        <div class="results-section" id="casos">
             <div class="container">
                <div class="results-header">
                    <h2 class="results-title">Resultados que hablan <span class="text-blue-fluid">por sí mismos.</span></h2>
                </div>
                
                <div class="results-grid">
                    <!-- Case 1: Pharma -->
                    <div class="result-card">
                        <img src="/assets/worker-hero.png" alt="Case Study Pharma">
                        <div class="result-overlay">
                            <div class="result-info">
                                <p>SECTOR PHARMA</p>
                                <h3>+200% ROAS PARA ALCANZAR +700% DE RETORNO EN 1 MES</h3>
                            </div>
                        </div>
                    </div>

                    <!-- Case 2: Ecommerce -->
                    <div class="result-card">
                        <img src="/assets/ecommerce1.jpg" alt="Case Study Ecommerce">
                        <div class="result-overlay">
                            <div class="result-info">
                                <p>ECOMMERCE & RETAIL</p>
                                <h3>+15% DE CLIENTES RECURRENTES EN 2 MESES</h3>
                            </div>
                        </div>
                    </div>

                    <!-- Case 3: Strategy -->
                    <div class="result-card">
                        <img src="/assets/Estrategia.jpg" alt="Case Study Strategy">
                        <div class="result-overlay">
                            <div class="result-info">
                                <p>CONSULTORÍA ESTRATÉGICA</p>
                                <h3>30% DE REDUCCIÓN DE COSTES Y MEJORA OPERATIVA EN 3 MESES</h3>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>


        <!-- Integrations (Ecosistema) -->
        <div class="integrations-wrapper">
            <div class="integrations-text">
                <h2 style="font-family: 'Playfair Display', serif; font-style: italic; font-weight: 400;">Impulsando tu éxito</h2>
                <h2 style="margin-top: -30px;">en todo tu ecosistema digital.</h2>
                <a href="#contacto" class="btn-black-pill" style="margin: 20px auto 0; width: fit-content; display: inline-flex;">Agendar Consultoría Gratuita <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            
            <div class="floating-logos-container">
                <!-- Left Side -->
                <div class="floating-logo-icon"><img src="/assets/Logo Meta.avif" alt="Meta"></div>
                <div class="floating-logo-icon"><img src="/assets/Logo Ads.avif" alt="Google"></div>
                <div class="floating-logo-icon"><img src="/assets/N8n Logo.png" alt="N8n"></div>
                <div class="floating-logo-icon"><img src="/assets/LinkedIn logo.png" alt="LinkedIn"></div>
                <div class="floating-logo-icon"><img src="/assets/clickup logo.jpg" alt="ClickUp"></div>
                
                <!-- Right Side -->
                <div class="floating-logo-icon"><img src="/assets/Hubspot logo.png" alt="Hubspot"></div>
                <div class="floating-logo-icon"><img src="/assets/Open AI logo.webp" alt="OpenAI"></div>
                <div class="floating-logo-icon"><img src="/assets/Tiktok logo.png" alt="TikTok"></div>
                <div class="floating-logo-icon"><img src="/assets/Instagram logo.avif" alt="Instagram"></div>
                <div class="floating-logo-icon"><img src="/assets/Apollo emblem.jpg" alt="Apollo"></div>
            </div>
        </div>

      </div>
    </section>

    <!-- Final CTA -->
    <section class="section bg-white-section" id="contacto">
      <div class="container">
        <div class="partner-contact-form-wrapper">
          <div style="text-align: center; color: white; margin-bottom: 40px;">
            <p style="text-transform: uppercase; letter-spacing: 2px; font-weight: 700; opacity: 0.8;">¿ESTÁS LISTO PARA INSCALAR?</p>
            <h2 style="font-size: 3.5rem; font-weight: 800; margin: 10px 0;">Hablemos de tu proyecto</h2>
          </div>
          <form class="contact-form">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <input type="text" placeholder="Nombre completo" required>
                <input type="email" placeholder="Email corporativo" required>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <input type="text" placeholder="Empresa / Web">
                <select required>
                    <option value="" disabled selected>Servicio de interés</option>
                    <option>Publicidad & Performance</option>
                    <option>Diseño & Ecommerce</option>
                    <option>Growth & Estrategia</option>
                    <option>IA & Automatización</option>
                    <option>Marketing Partner</option>
                </select>
            </div>
            <textarea placeholder="Cuéntanos un poco sobre tus objetivos..." style="width: 100%; height: 120px; margin-bottom: 30px;"></textarea>
            <div style="text-align: center;">
                <button type="submit" class="btn-outline">Enviar propuesta</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    ${Footer()}
  `;

  setupTestimonialTabs();
  setupHeroScroll();
  // Start typewriter effect after render
  runTypingAnimation();

  // Setup Arrow Interaction
  setupArrowInteraction();
};

const typeString = async (element, text) => {
  // Add cursor
  element.classList.add('active-cursor');

  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    // Humanize: random delay between 30ms and 90ms, occasionally longer
    const randomDelay = Math.random() * (90 - 30) + 30;
    const extraDelay = Math.random() < 0.1 ? 150 : 0; // 10% chance of pause
    await new Promise(r => setTimeout(r, randomDelay + extraDelay));
  }

  // Remove cursor
  element.classList.remove('active-cursor');
};

const runTypingAnimation = async () => {
  const line1 = document.getElementById('type-line-1');
  const line2 = document.getElementById('type-line-2');

  if (!line1 || !line2) return;

  // Wait a bit before starting
  await new Promise(r => setTimeout(r, 500));

  // Type line 1
  await typeString(line1, "DEJA DE BUSCAR");

  // Pause between phrases
  line1.classList.add('active-cursor'); // Keep cursor blinking on line 1 during pause
  await new Promise(r => setTimeout(r, 600));
  line1.classList.remove('active-cursor'); // Remove cursor from line 1

  // Type line 2
  await typeString(line2, "EMPIEZA A CRECER.");

  // Allow cursor to blink for a moment at the end, then remove
  line2.classList.add('active-cursor');
  await new Promise(r => setTimeout(r, 1000));
  line2.classList.remove('active-cursor');

  // Show CTA button
  const heroBtn = document.querySelector('.btn-hero');
  if (heroBtn) {
    heroBtn.classList.add('visible');
  }
};

const setupArrowInteraction = () => {
  const snake = document.getElementById('snake-connector');
  const methodContainer = document.querySelector('.method-header-container');
  const fase1Trigger = document.getElementById('fase-1-trigger');
  const fase1Cards = document.querySelectorAll('.card-vibrant.fase-1');

  if (!snake || !fase1Trigger || !methodContainer) return;

  window.addEventListener('scroll', () => {
    const containerRect = methodContainer.getBoundingClientRect();
    const triggerRect = fase1Trigger.getBoundingClientRect();

    // VISUAL LOGIC:
    // We want the snake to grow as the gap closes, but NOT push content.
    // It should look like it's reaching out to the next section.

    // Define the gap we are bridging
    // Distance between the snake's origin (snake.offsetTop + snake.parentOffset) vs Trigger Top
    // Since snake is absolute top:100% of methodContainer, its origin is containerRect.bottom - marginOffset
    const snakeOrigin = containerRect.bottom - 40;
    const gapToTrigger = triggerRect.top - snakeOrigin;

    // Growth Logic
    // Grow when the section enters the "active" zone (middle of screen)
    // We calculate 'progress' based on how close the gap is to the center
    const viewCenter = window.innerHeight / 2;
    const distFromCenter = snakeOrigin - viewCenter;

    // Max height we want the snake to reach (Longer now)
    const targetHeight = 200;

    // As we scroll down, distFromCenter goes from positive (below center) to negative (above center)
    // We want growth to peak when we are centered or slightly above

    let growth = 0;
    // Start growing earlier (350px before center) to allow full length
    if (distFromCenter < 350) {
      // Map distance to height (0 to targetHeight)
      growth = Math.min(targetHeight, (350 - distFromCenter) * 1.0);
    }

    // Ensure it doesn't overlap the text if the gap is smaller than the snake (on small screens or zoom)
    // Leave 20px buffer
    const maxAllowed = Math.max(0, gapToTrigger - 20);
    const finalHeight = Math.max(0, Math.min(growth, maxAllowed));

    snake.style.height = `${finalHeight}px`;

    // Opacity transition: Fade in as it starts growing
    snake.style.opacity = finalHeight > 10 ? 1 : 0;

    // ENERGY TRIGGER
    // If we reached near our target height (completed the gesture)
    // OR if the gap is very small (we scrolled past)
    if (finalHeight > 50 && finalHeight >= (targetHeight * 0.8) && !fase1Trigger.classList.contains('has-energized')) {
      fase1Trigger.classList.add('has-energized');

      // Sequence
      const allElements = [fase1Trigger, ...fase1Cards];
      allElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('energized');

          // Permanent Fade In for Trigger and Cards
          el.classList.add('fade-in-active');

          setTimeout(() => {
            el.classList.remove('energized');
          }, 1200);
        }, index * 200);
      });
    }
  });
};

const setupHeroScroll = () => {
  const btn = document.querySelector('.btn-hero');
  // The next logical section is usually the first content section. 
  // We can target the services section (id="especialidades") or just the next sibling of hero.
  // Given the layout: Hero -> Trust Bar -> Services. 
  // Usually "Start" implies going to the services/content.
  const targetSection = document.querySelector('#especialidades');

  if (btn && targetSection) {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Good practice if it was a link
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
};

function setupTestimonialTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const quoteEl = document.querySelector('.testimonial-quote');
  const authorNameEl = document.querySelector('.author-info h5');
  const authorRoleEl = document.querySelector('.author-info p');
  const companyLogoEl = document.querySelector('.client-logo-mini strong');
  const imgEl = document.querySelector('.testimonial-img-box img');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all
      tabs.forEach(t => t.classList.remove('active'));
      // Add to current
      tab.classList.add('active');

      const category = tab.getAttribute('data-tab');
      const data = testimonialsData[category];

      if (data) {
        // Animate content change (simple fade effect could be added here, but direct swap for now)
        if (quoteEl) quoteEl.textContent = `"${data.quote}"`;
        if (authorNameEl) authorNameEl.textContent = data.author;
        if (authorRoleEl) authorRoleEl.textContent = data.role;
        if (companyLogoEl) companyLogoEl.textContent = data.company;
        if (data.image && imgEl) {
          imgEl.src = data.image;
        }
      }
    });
  });
}

renderHome();
