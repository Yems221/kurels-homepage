
import { Users, Calendar, Wallet, FileText, MessageSquare } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-kurels-purple" />,
      title: "Gestion des membres",
      description: "Inscrivez facilement de nouveaux membres, définissez des statuts personnalisés et suivez les cotisations avec des rappels automatiques.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-kurels-purple" />,
      title: "Organisation d'événements",
      description: "Créez des événements avec trois niveaux de visibilité, gérez les inscriptions et collectez des paiements si nécessaire.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-kurels-purple" />,
      title: "Gestion des finances",
      description: "Suivez les entrées et sorties d'argent, créez des sous-portefeuilles pour différentes activités et acceptez les paiements en ligne.",
    },
    {
      icon: <FileText className="h-10 w-10 text-kurels-purple" />,
      title: "Partage de fichiers",
      description: "Gardez tous les documents importants en un seul endroit et contrôlez précisément qui peut accéder à chaque document.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-kurels-purple" />,
      title: "Communication efficace",
      description: "Envoyez des SMS à tous les membres ou à des groupes spécifiques et gérez facilement vos listes de contacts.",
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Pour les <span className="text-kurels-purple">responsables d'associations</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kurels.com offre tous les outils nécessaires pour gérer efficacement votre association et vous libérer des tâches administratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:scale-[1.02] transition-transform">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-kurels-dark-purple">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-kurels-purple hover:text-kurels-purple/80 font-medium">
            En savoir plus sur les fonctionnalités pour responsables
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
