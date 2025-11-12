"use client";
import  { useState, useEffect } from 'react';
import { Sun, Leaf, TrendingUp, DollarSign, ChevronRight, Menu, X, Award } from 'lucide-react';

export default function EcoInovaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const valores = [
    {
      icon: <Leaf className="w-12 h-12" />,
      titulo: "Sustentabilidade",
      descricao: "Comprometidos com o futuro do planeta através de energia limpa e renovável"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      titulo: "Inovação",
      descricao: "Tecnologia de ponta para maximizar eficiência e resultados"
    },
    {
      icon: <Award className="w-12 h-12" />,
      titulo: "Transparência",
      descricao: "Clareza total em processos, custos e benefícios para nossos clientes"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      titulo: "Custo-benefício",
      descricao: "Soluções acessíveis que geram economia real a longo prazo"
    }
  ];

  const equipe = [
    {
      nome: "Manuela Sotrate",
      cargo: "CEO & Fundadora",
      foto: "MS",
      cor: "bg-emerald-600"
    },
    {
      nome: "Jhuan Medeiros",
      cargo: "CTO",
      foto: "JM",
      cor: "bg-blue-600"
    },
    {
      nome: "Pedro Leblon",
      cargo: "Diretor Comercial",
      foto: "PL",
      cor: "bg-amber-600"
    },
    {
      nome: "Guilherme Ferraresi",
      cargo: "Diretor de Operações",
      foto: "GF",
      cor: "bg-purple-600"
    }
  ];

  const timeline = [
    { ano: "2020", evento: "Fundação da EcoInova com a missão de democratizar energia solar" },
    { ano: "2022", evento: "Alcançamos 500+ instalações residenciais" },
    { ano: "2023", evento: "Expansão para 5 estados brasileiros" },
    { ano: "2025", evento: "Líderes em inovação com tecnologia própria" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className={`w-8 h-8 ${scrolled ? 'text-emerald-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                EcoInova
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Início', 'Quem Somos', 'Soluções', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['Início', 'Quem Somos', 'Soluções', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-gray-700 hover:text-emerald-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Manifesto */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
            Energia Solar Acessível para Todos
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Iluminando o Futuro<br />
            com Energia Limpa
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
              <p className="text-xl text-white/90">
                Democratizar o acesso à energia limpa no Brasil
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Nossa Visão</h2>
              <p className="text-xl text-white/90">
                Ser líder em soluções de energia solar residencial até 2030
              </p>
            </div>
          </div>

          <button className="group bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl flex items-center mx-auto">
            Faça um Orçamento Gratuito
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossa História
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada movida pela paixão por sustentabilidade e inovação
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong>EcoInova</strong> nasceu em 2020 do sonho de três engenheiros brasileiros que acreditavam que a energia solar não deveria ser um luxo, mas sim um direito acessível a todos. Inspirados pelos desafios energéticos do país e pela urgência climática global, fundamos uma empresa com propósito claro: tornar a energia limpa uma realidade em cada residência brasileira.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoje, somos mais do que uma empresa de energia solar. Somos agentes de transformação, combinando tecnologia de ponta, transparência absoluta e compromisso ambiental para criar um futuro mais sustentável e econômico para nossos clientes.
              </p>
            </div>

            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {item.ano}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-full bg-emerald-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <p className="text-gray-700 text-lg">{item.evento}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os pilares que guiam cada decisão e projeto da EcoInova
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="text-emerald-600 mb-6 transform group-hover:scale-110 transition-transform">
                  {valor.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {valor.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Equipe */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Conheça Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas apaixonados por energia limpa e inovação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {equipe.map((membro, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${membro.cor} h-48 flex items-center justify-center`}>
                  <span className="text-6xl font-bold text-white">
                    {membro.foto}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {membro.nome}
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    {membro.cargo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Economizar com Energia Solar?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Faça parte da revolução energética. Receba uma proposta personalizada e descubra quanto você pode economizar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl">
              Solicitar Orçamento
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Conheça Nossas Soluções
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-bold">EcoInova</span>
              </div>
              <p className="text-gray-400">
                Democratizando o acesso à energia limpa no Brasil
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-emerald-400">Carreiras</a></li>
                <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Residencial</a></li>
                <li><a href="#" className="hover:text-emerald-400">Comercial</a></li>
                <li><a href="#" className="hover:text-emerald-400">Industrial</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@ecoinova.com.br</li>
                <li>(11) 3000-0000</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EcoInova Ltda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}