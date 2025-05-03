
const SpecialFeatures = () => {
  return (
    <section id="special" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Fonctionnalités <span className="text-kurels-purple">spéciales</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des outils uniques adaptés aux besoins spécifiques des associations africaines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ansaarudiine Cards */}
          <div className="card p-8 bg-gradient-to-br from-white to-kurels-soft-purple/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Cartes Ansaarudiine</h3>
            <p className="text-gray-700 mb-6">
              Un système de paiement simplifié pour les associations religieuses, permettant le paiement des cartes via un lien court envoyé par SMS.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Paiement simplifié</h4>
                  <p className="text-sm text-gray-600">Envoyez un lien court par SMS pour permettre un paiement rapide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Méthodes de paiement locales</h4>
                  <p className="text-sm text-gray-600">Acceptez les paiements par Wave et Orange Money</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Suivi en temps réel</h4>
                  <p className="text-sm text-gray-600">Visualisez l'état des paiements instantanément dans votre tableau de bord</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-sm mb-2 text-gray-500">Exemple de lien de paiement :</div>
              <div className="font-mono text-sm bg-kurels-light-gray p-2 rounded">
                kurels.com/ansaarudiine/pay/Sd9MZ6oFsB/
              </div>
            </div>
          </div>
          
          {/* Form Builder */}
          <div className="card p-8 bg-gradient-to-br from-white to-kurels-peach/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Constructeur de formulaires</h3>
            <p className="text-gray-700 mb-6">
              Créez des formulaires personnalisés pour collecter exactement les informations dont vous avez besoin pour votre association.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Création sur mesure</h4>
                  <p className="text-sm text-gray-600">Concevez des formulaires adaptés à vos besoins spécifiques</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Analyse des réponses</h4>
                  <p className="text-sm text-gray-600">Consultez et exportez facilement les données collectées</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Intégration fluide</h4>
                  <p className="text-sm text-gray-600">Liez automatiquement les réponses aux événements ou aux profils membres</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-kurels-purple p-3">
                  <div className="h-2 w-24 bg-white rounded-full opacity-50"></div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <div className="h-2 w-32 bg-gray-200 rounded-full mb-1"></div>
                    <div className="h-8 bg-kurels-light-gray rounded"></div>
                  </div>
                  <div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full mb-1"></div>
                    <div className="h-8 bg-kurels-light-gray rounded"></div>
                  </div>
                  <div>
                    <div className="h-2 w-28 bg-gray-200 rounded-full mb-1"></div>
                    <div className="flex gap-4">
                      <div className="h-5 w-5 bg-kurels-light-gray rounded"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="h-8 w-24 bg-kurels-purple rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-kurels-light-gray rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Notifications intelligentes</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Gardez vos membres informés avec des alertes personnalisées et des rappels automatiques pour les cotisations et événements.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-64">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-kurels-purple rounded-full"></div>
                <p className="text-sm font-medium">Rappel de cotisation</p>
              </div>
              <p className="text-xs text-gray-600 text-left">Votre cotisation annuelle est due dans 5 jours. Cliquez ici pour payer en ligne.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-64">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-kurels-orange rounded-full"></div>
                <p className="text-sm font-medium">Événement demain</p>
              </div>
              <p className="text-xs text-gray-600 text-left">Rappel: L'assemblée générale aura lieu demain à 10h00 à la salle principale.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-64">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-kurels-blue rounded-full"></div>
                <p className="text-sm font-medium">Nouveau document</p>
              </div>
              <p className="text-xs text-gray-600 text-left">Le rapport annuel 2024 est maintenant disponible dans votre espace membre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
