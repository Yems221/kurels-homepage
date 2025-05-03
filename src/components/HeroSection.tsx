
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-kurels-soft-purple/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-kurels-peach/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="heading-xl mb-6">
              <span className="text-kurels-purple">Simplifiez</span> la gestion de votre association
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Kurels.com est la plateforme complète qui aide les associations africaines 
              à gérer leurs membres, événements, finances et communications - tout au même endroit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Démarrer gratuitement <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Voir la démonstration
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-kurels-peach flex items-center justify-center text-sm font-medium">D</div>
                <div className="w-8 h-8 rounded-full bg-kurels-soft-purple flex items-center justify-center text-sm font-medium">F</div>
                <div className="w-8 h-8 rounded-full bg-kurels-blue flex items-center justify-center text-sm text-white font-medium">A</div>
                <div className="w-8 h-8 rounded-full bg-kurels-purple/20 flex items-center justify-center text-sm font-medium">+</div>
              </div>
              <p className="text-sm text-gray-600">Déjà utilisé par <span className="font-semibold">150+ associations</span> au Sénégal</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[280px] md:w-[320px] h-[580px] bg-kurels-purple/10 rounded-3xl border border-kurels-purple/20 p-3 shadow-xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  <div className="h-14 bg-kurels-purple flex items-center justify-center">
                    <span className="text-white font-semibold">Kurels.com</span>
                  </div>
                  <div className="p-3">
                    <div className="w-full h-32 bg-kurels-soft-purple/50 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-sm font-medium text-kurels-dark-purple">Dashboard</span>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <div className="flex-1 h-24 bg-kurels-peach/50 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-kurels-dark-purple">Membres</span>
                      </div>
                      <div className="flex-1 h-24 bg-kurels-soft-purple/30 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-kurels-dark-purple">Événements</span>
                      </div>
                    </div>
                    <div className="w-full h-20 bg-kurels-light-gray rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-sm font-medium text-kurels-dark-purple">Finances</span>
                    </div>
                    <div className="w-full h-20 bg-kurels-peach/30 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-sm font-medium text-kurels-dark-purple">Fichiers</span>
                    </div>
                    <div className="w-full h-16 bg-kurels-soft-purple/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-medium text-kurels-dark-purple">Communications</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-10 top-20 animate-float">
                <div className="w-20 h-20 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
                  <div className="w-full h-full bg-kurels-peach/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">SMS</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-12 top-1/2 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-24 h-24 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
                  <div className="w-full h-full bg-kurels-soft-purple/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">Formulaires</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-14 bottom-24 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-28 h-28 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center">
                  <div className="w-full h-full bg-kurels-peach/40 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">Cartes Speciale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
