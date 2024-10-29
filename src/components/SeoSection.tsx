import React from 'react';

export const SeoSection: React.FC = () => {
  return (
    <section className="prose prose-invert max-w-none">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        Générateur de pseudo et noms en ligne - Pseudonymes aléatoires
      </h2>
      
      <div className="space-y-6 text-gray-300">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Comment fonctionne la génération de pseudos ?
          </h3>
          <p>
            La génération de pseudo stylé s'effectue avec un système de syllabation syntaxique. 
            C'est à dire que nous utilisons de multiples pseudonymes et nous effectuons un découpage 
            par syllabe pour vous fournir un nom unique et aléatoire.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Les pseudos stylé dans les jeux vidéo
          </h3>
          <p>
            L'utilisation de pseudos stylé est souvent primordiale lorsque l'on parle de jeux vidéo 
            online et de jeux multijoueur. Cela permet de différencier les différents joueurs et de 
            permettre une communication fluide au sein même du jeu.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Comment intégrer un générateur de pseudo sur son site ?
          </h3>
          <p>
            Si vous souhaitez intégrer un générateur de pseudo et noms depuis votre site web, 
            référez-vous à notre rubrique sur l'intégration d'un générateur de pseudo.
          </p>
        </div>
      </div>
    </section>
  );
};