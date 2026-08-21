/**
 * Direção visual: Pista Técnica — amarelo de sinalização, azul oficina,
 * percurso vertical e cartões de serviço diretos; sem imagens nesta primeira versão.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CarFront,
  CircleGauge,
  Cog,
  Menu,
  MessageCircle,
  Package,
  ScanLine,
  Settings2,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "5577991556566";
const ADDRESS = "R. Domingos Mármore, 265 — Vila Brasil, Barreiras - BA, 47800-384";
const OFFICIAL_LOGO = "/manus-storage/supra-logo-sem-fundo-final_0a9a207f.png";

const serviceData = [
  {
    number: "01",
    title: "Diagnóstico com aparelho",
    text: "Leitura técnica para identificar o próximo passo do seu veículo.",
    icon: ScanLine,
    message: "Olá, vim pelo site da SUPRA e gostaria de agendar um diagnóstico com aparelho.",
    image: "/manus-storage/01-diagnostico_496e8828.jpg",
  },
  {
    number: "02",
    title: "Câmbio",
    text: "Avaliação e manutenção para o funcionamento correto do sistema.",
    icon: Settings2,
    message: "Olá, vim pelo site da SUPRA e gostaria de falar sobre serviço de câmbio.",
    image: "/manus-storage/02-cambio_9d83ef7e.jpg",
  },
  {
    number: "03",
    title: "Revisão geral",
    text: "Cuidados preventivos para manter seu carro pronto para a rotina.",
    icon: Wrench,
    message: "Olá, vim pelo site da SUPRA e gostaria de agendar uma revisão geral.",
    image: "/manus-storage/03-revisao-geral_25d377b7.jpg",
  },
  {
    number: "04",
    title: "Troca de óleo",
    text: "Manutenção essencial feita com atenção aos itens do seu veículo.",
    icon: CircleGauge,
    message: "Olá, vim pelo site da SUPRA e gostaria de agendar uma troca de óleo.",
    image: "/manus-storage/04-troca-de-oleo_abf34735.jpg",
  },
  {
    number: "05",
    title: "Suspensão",
    text: "Verificação técnica para conforto, segurança e estabilidade.",
    icon: CarFront,
    message: "Olá, vim pelo site da SUPRA e gostaria de agendar um serviço de suspensão.",
    image: "/manus-storage/05-suspensao_7678e43a.jpg",
  },
  {
    number: "06",
    title: "Freios",
    text: "Revisão cuidadosa de um dos sistemas mais importantes do carro.",
    icon: ShieldCheck,
    message: "Olá, vim pelo site da SUPRA e gostaria de agendar um serviço de freios.",
    image: "/manus-storage/06-freios_3eef7f55.jpg",
  },
  {
    number: "07",
    title: "Motor",
    text: "Atendimento para manutenção e avaliação do coração do veículo.",
    icon: Cog,
    message: "Olá, vim pelo site da SUPRA e gostaria de falar sobre serviço de motor.",
    image: undefined,
  },
];

const vehicleRecords = [
  { number: "01", title: "BMW e sedã premium", text: "Dois veículos recebidos no mesmo espaço de trabalho, com organização e cuidado técnico em cada etapa.", image: "/manus-storage/ecc8bb77-55cd-4f22-8027-ebf96a9884a6_f1db56aa.jpg" },
  { number: "02", title: "Bastidores de precisão", text: "Componentes organizados em bancada para uma inspeção atenta antes da montagem do conjunto mecânico.", image: "/manus-storage/1474a92e-6424-473c-a899-eba73cb006d6_bdaaff19.jpg" },
  { number: "03", title: "Esportivo no elevador", text: "Veículo em altura de trabalho para uma avaliação completa dos sistemas que exigem acesso por baixo do carro.", image: "/manus-storage/92d81b8b-7be1-4f59-a4e8-81551d374a99_02afdb52.jpg" },
  { number: "04", title: "Atendimento multimarcas", text: "Veículos de perfis diferentes em preparação dentro da oficina, no mesmo padrão de atenção da SUPRA.", image: "/manus-storage/f5e5120b-33e3-442b-aec9-9dfd8fc86441_2b136a60.jpg" },
  { number: "05", title: "Rotina de oficina", text: "Visão ampla do box de serviços, com carros em diferentes etapas de atendimento técnico.", image: "/manus-storage/d266c508-cefb-49a1-9e20-894fe413e267_e0a8dfcd.jpg" },
  { number: "06", title: "SUV premium", text: "SUV em atendimento em uma área preparada para diagnóstico e manutenção com mais organização.", image: "/manus-storage/671f3bf2-a59c-4b27-a118-8b3330fca4c4_2aa13631.jpg" },
  { number: "07", title: "Pátio multimarcas", text: "Registro da oficina recebendo veículos do uso diário aos modelos de maior desempenho.", image: "/manus-storage/a4ca3ba0-142b-435d-9e40-6904257fb9cf_5bf5d294.jpg" },
  { number: "08", title: "Esportivo preto", text: "Carro em posição de serviço, pronto para uma checagem técnica detalhada dos principais sistemas.", image: "/manus-storage/b52d3ac6-8878-4e75-b753-a21df8562cac_fc6b05f4.jpg" },
  { number: "09", title: "SUV em manutenção", text: "Atendimento com acesso à área interna do veículo, com atenção à execução e ao acabamento do serviço.", image: "/manus-storage/4996dade-a719-4aa1-b7ee-83a9c57b523d_31c38ee2.jpg" },
  { number: "10", title: "Picape Toyota", text: "Picape recebida no box de serviço para uma rotina de verificação e cuidado mecânico.", image: "/manus-storage/6f4c582d-4718-4906-820c-2983f5c9663d_68cfa008.jpg" },
  { number: "11", title: "Equipe SUPRA", text: "Bastidores da equipe que acompanha cada atendimento com responsabilidade e foco no serviço.", image: "/manus-storage/e6c5c71b-f7de-4286-901e-7c17c8aac486_192544b1.jpg" },
  { number: "12", title: "Esportivo amarelo", text: "Modelo de alto impacto visual atendido em uma área preparada para receber veículos especiais.", image: "/manus-storage/207edb82-5cfa-41db-92ba-07840e2c363c_9743b622.jpg" },
  { number: "13", title: "Fachada SUPRA", text: "A entrada da SUPRA Mecânica Importados, onde começa cada atendimento em Barreiras.", image: "/manus-storage/fachada-supra-atualizada_efd5a0fa.png" },
  { number: "14", title: "Picape e SUV", text: "Veículos de perfis distintos no mesmo ambiente, mostrando a versatilidade do atendimento multimarcas.", image: "/manus-storage/9b4d4256-145b-42bc-ad0f-e91221456859_546f2290.jpg" },
];

function whatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} aria-label="SUPRA Mecânica Nacionais e Importados">
      <img className="brand-mark__image" src={OFFICIAL_LOGO} alt="SUPRA Mecânica Importados" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header" id="inicio">
        <div className="topline">
          <span>OFICINA MULTIMARCAS</span>
          <span>BARREIRAS — BA</span>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
            <a href="#inicio" className="brand-link" onClick={closeMenu}><BrandMark compact /></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#veiculos" onClick={closeMenu}>Veículos atendidos</a>
            <a href="#catalogo" onClick={closeMenu}>Consulta técnica</a>
            <a href="#sobre" onClick={closeMenu}>Sobre a SUPRA</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a className="nav-cta" href={whatsAppUrl("Olá, vim pelo site da SUPRA e gostaria de agendar um atendimento.")} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <MessageCircle size={17} /> Agendar
            </a>
          </div>
        </nav>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-route hero-route--catalogo">
            <a href="#catalogo" className="route-disc">
              <Package size={30} strokeWidth={1.8} />
              <span>CONSULTA</span>
              <small>Orientação técnica</small>
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="hero-center">
            <div className="hero-official-logo"><img src={OFFICIAL_LOGO} alt="Logomarca oficial SUPRA Mecânica Importados" /></div>
            <p className="eyebrow">NACIONAIS E IMPORTADOS</p>
            <h1 id="hero-title">MECÂNICA QUE<br /><em>ACOMPANHA</em> O SEU CARRO.</h1>
            <p className="hero-copy">Atendimento multimarcas em Barreiras, com diagnóstico claro, orientação objetiva e conversa direta pelo WhatsApp.</p>
            <a className="primary-cta" href="#servicos">
              Conheça os serviços <ArrowDownRight size={20} />
            </a>
          </div>

          <div className="hero-route hero-route--sobre">
            <a href="#sobre" className="route-disc">
              <span className="route-disc__serial">SUPRA<br />01</span>
              <span>SOBRE A SUPRA</span>
              <small>Nossa história</small>
              <ArrowDownRight size={18} />
            </a>
          </div>
        </section>
        <div className="hero-footnote"><span>DESLIZE E ESCOLHA SEU SERVIÇO</span><span className="hero-footnote__line" /></div>
      </header>

      <main>
        <section className="services-section" id="servicos" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="section-kicker">ATENDIMENTO ESPECIALIZADO</p>
            <h2 id="services-title">QUAL SERVIÇO<br /><em>SEU CARRO</em> PRECISA?</h2>
            <p>Selecione uma opção para iniciar a conversa com a equipe da SUPRA no WhatsApp.</p>
          </div>

          <div className="service-list">
            {serviceData.map((service) => {
              const Icon = service.icon;
              return (
                <a key={service.number} href={whatsAppUrl(service.message)} className={`service-card ${service.image ? "service-card--with-image" : "service-card--no-image"}`} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.title} pelo WhatsApp`}>
                  <span className="service-card__index">{service.number}</span>
                  <div className="service-card__icon"><Icon size={31} strokeWidth={1.7} /></div>
                  <div className="service-card__content">
                    <span className="service-card__prompt">QUER AGENDAR SERVIÇO DE</span>
                    <h3>{service.title}?</h3>
                    <p>{service.text}</p>
                  </div>
                  {service.image && <div className="service-card__media"><img src={service.image} alt={`Registro do serviço de ${service.title} na SUPRA`} loading="lazy" /><span>REGISTRO SUPRA</span></div>}
                  <span className="service-card__cta">AGENDAR <ArrowUpRight size={20} /></span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="vehicle-gallery-section" id="veiculos" aria-labelledby="vehicle-gallery-title">
          <div className="vehicle-gallery-intro">
            <div>
              <p className="section-kicker">REGISTROS REAIS DA OFICINA</p>
              <h2 id="vehicle-gallery-title">CARROS QUE JÁ<br /><em>PASSARAM PELA SUPRA.</em></h2>
            </div>
            <p>Uma seleção de registros reais do nosso dia a dia. Veículos nacionais e importados atendidos com organização, atenção técnica e respeito ao próximo passo de cada cliente.</p>
          </div>

          <div className="vehicle-gallery" aria-label="Galeria de veículos e bastidores da SUPRA">
            {vehicleRecords.map((record) => (
              <article className="vehicle-record" key={record.number}>
                <img src={record.image} alt={record.title} loading="lazy" />
                <div className="vehicle-record__overlay" />
                <span className="vehicle-record__number">{record.number}</span>
                <div className="vehicle-record__content">
                  <p className="vehicle-record__eyebrow">ATENDIMENTO SUPRA</p>
                  <h3>{record.title}</h3>
                  <p>{record.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="catalog-section" id="catalogo" aria-labelledby="catalog-title">
          <div className="catalog-heading">
            <p className="section-kicker">ORIENTAÇÃO DIRECIONADA</p>
            <h2 id="catalog-title">ROTA DE<br /><em>CONSULTA TÉCNICA</em></h2>
            <p>Conte para a SUPRA qual é o seu veículo e o que você está percebendo. A equipe organiza as informações e indica o melhor próximo passo para o seu atendimento.</p>
            <a className="dark-cta" href={whatsAppUrl("Olá, vim pelo site da SUPRA e gostaria de iniciar uma consulta técnica para o meu veículo.")} target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Iniciar consulta
            </a>
          </div>
          <div className="technical-route" aria-label="Rota de consulta técnica da SUPRA">
            <div className="technical-route__top"><span>ROTA TÉCNICA SUPRA</span><span>RESPOSTA PELO WHATSAPP</span></div>
            <div className="technical-route__steps">
              <div className="technical-route__step"><span>01</span><div><strong>IDENTIFIQUE O VEÍCULO</strong><p>Marca, modelo e o que você precisa resolver.</p></div></div>
              <div className="technical-route__step"><span>02</span><div><strong>DESCREVA O SINAL</strong><p>Ruído, alerta no painel ou comportamento que chamou atenção.</p></div></div>
              <div className="technical-route__step"><span>03</span><div><strong>RECEBA O PRÓXIMO PASSO</strong><p>A equipe SUPRA orienta o melhor encaminhamento para o atendimento.</p></div></div>
            </div>
            <div className="technical-route__footer"><span>SUPRA / CONSULTA DIRETA</span><ArrowUpRight size={19} /></div>
          </div>
        </section>

        <section className="about-section" id="sobre" aria-labelledby="about-title">
          <div className="about-serial" aria-hidden="true">SUPRA<br /><span>EM MOVIMENTO</span></div>
          <div className="about-content">
            <p className="section-kicker">SOBRE A SUPRA</p>
            <h2 id="about-title">SEU CARRO PEDE<br /><em>CLAREZA.</em><br />A SUPRA ORIENTA.</h2>
            <p>Em Barreiras, a SUPRA Mecânica Nacionais e Importados atende veículos de diferentes marcas com conversa direta, atenção aos sinais do carro e foco no próximo passo. Você explica o que está percebendo; a equipe ajuda a encaminhar o atendimento certo.</p>
            <a href={whatsAppUrl("Olá, vim pelo site da SUPRA e gostaria de falar sobre o atendimento para meu veículo.")} target="_blank" rel="noreferrer" className="text-link">Chamar a equipe <ArrowUpRight size={19} /></a>
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">PRONTO PARA ATENDER</p>
            <h2 id="contact-title">SEU PRÓXIMO<br /><em>ATENDIMENTO</em><br />COMEÇA AQUI.</h2>
          </div>
          <div className="contact-actions">
            <a className="contact-whatsapp" href={whatsAppUrl("Olá, vim pelo site da SUPRA e gostaria de agendar um atendimento.")} target="_blank" rel="noreferrer">
              <MessageCircle size={27} />
              <span><small>WHATSAPP DA SUPRA</small><strong>(77) 99155-6566</strong></span>
              <ArrowUpRight size={22} />
            </a>
            <a className="contact-address" href="https://www.google.com/maps/search/?api=1&query=R.+Domingos+M%C3%A1rmore%2C+265%2C+Vila+Brasil%2C+Barreiras+-+BA%2C+47800-384" target="_blank" rel="noreferrer">
              <span className="contact-address__pin">+</span>
              <span><small>ENCONTRE A SUPRA</small><strong>{ADDRESS}</strong></span>
              <ArrowUpRight size={22} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <BrandMark compact />
        <p>SUPRA Mecânica Nacionais e Importados · Barreiras — BA</p>
        <a href="#inicio">Voltar ao topo <ArrowUpRight size={16} /></a>
      </footer>

      <a className="floating-whatsapp" href={whatsAppUrl("Olá, vim pelo site da SUPRA e gostaria de falar com a equipe.")} target="_blank" rel="noreferrer" aria-label="Falar com a SUPRA pelo WhatsApp">
        <img src="/manus-storage/whatsapp-oficial_90edd80b.jpg" alt="" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
