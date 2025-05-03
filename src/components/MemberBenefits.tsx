
const MemberBenefits = () => {
  return (
    <section id="members" className="section-padding bg-gradient-to-br from-kurels-soft-purple/40 to-kurels-peach/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-4">Pour les <span className="text-kurels-purple">membres</span></h2>
            <p className="text-lg text-gray-600 mb-8">
              Une expérience simple et intuitive qui permet aux membres de rester connectés avec leur association.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-kurels-dark-purple">Tableau de bord personnalisé</h3>
                  <p className="text-gray-600">Voyez les événements à venir et les dernières nouvelles de votre association en un coup d'œil.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.852-.171-1.664-.481-2.404A5.001 5.001 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-kurels-dark-purple">Profil personnel</h3>
                  <p className="text-gray-600">Mettez à jour vos informations et suivez l'historique de vos cotisations facilement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-kurels-dark-purple">Inscription aux événements</h3>
                  <p className="text-gray-600">Inscrivez-vous et payez pour les événements en quelques clics seulement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-kurels-purple/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-kurels-dark-purple">Accès aux ressources</h3>
                  <p className="text-gray-600">Consultez tous les documents partagés par votre association à tout moment.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-[280px] h-[580px] bg-kurels-dark-purple rounded-3xl border border-kurels-purple/20 p-3 shadow-xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="h-14 bg-kurels-purple flex items-center justify-center">
                    <span className="text-white font-semibold">Profil membre</span>
                  </div>
                  
                  <div className="px-4 py-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 bg-kurels-soft-purple rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-kurels-purple">MD</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Mamadou Diop</h3>
                        <p className="text-sm text-gray-500">Membre actif</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-gray-200 my-4"></div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm text-gray-500 mb-2">Événements à venir</h4>
                      <div className="bg-kurels-soft-purple/20 p-3 rounded-lg mb-2">
                        <div className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-kurels-purple rounded-full mr-2"></div>
                          <p className="text-sm font-medium">Assemblée Générale</p>
                        </div>
                        <p className="text-xs text-gray-500 ml-4">15 Mai 2025 - 10:00</p>
                      </div>
                      <div className="bg-kurels-peach/20 p-3 rounded-lg">
                        <div className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-kurels-orange rounded-full mr-2"></div>
                          <p className="text-sm font-medium">Formation Digitale</p>
                        </div>
                        <p className="text-xs text-gray-500 ml-4">23 Mai 2025 - 14:30</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm text-gray-500 mb-2">Cotisations</h4>
                      <div className="bg-white border border-gray-200 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">Cotisation 2025</p>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Payé</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Payé le: 03/01/2025</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-gray-500 mb-2">Documents récents</h4>
                      <div className="bg-white border border-gray-200 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kurels-purple" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm">Rapport_annuel_2024.pdf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <div className="absolute -right-12 top-1/4 animate-float">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-kurels-purple rounded-full"></div>
                    <p className="text-xs font-medium">Rappel</p>
                  </div>
                  <p className="text-xs text-gray-500">Assemblée Générale demain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;
