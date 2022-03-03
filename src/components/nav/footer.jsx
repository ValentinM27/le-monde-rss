import React from 'react'

const footer = () => {
  return (
    <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
        <div class="container copy text-center w-50">
            <small>Copyright &copy; <a href="https://valentinmarguerie.fr">Valentin Marguerie</a></small>

            <p class="text-justify">
                L’utilisation des flux RSS du <a href="https://www.lemonde.fr/">Monde.fr</a> est réservée à un usage strictement personnel, non professionnel et non collectif.
                Ce site internet n'est pas destiné à une utilisation commerciale, il ne s'agit que d'un projet personnel à but pédagogique.
                L'intégralité des droits sur le contenu et les images revient à la société du journal <a href="https://www.lemonde.fr/">Le Monde </a>&copy; et ses collaborateurs.
            </p>
        </div>
    </footer>
  )
}

export default footer