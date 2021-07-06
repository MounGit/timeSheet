import React from "react";
import "./monHome.css";

function Home() {
  return (
    <div id="homeDiv">
      <section id="blue">
        <div>
          <h2>La gestion de votre temps </h2>
          <h2>pour et par VOUS !</h2>
          <p>
            Les avantages à savoir maîtriser son temps ont de multiples impacts
            et sont nombreux : gagner en efficacité et en productivité : un
            travail mieux structuré, des temps de pause, une vision plus
            éclairée des tâches et échéances, etc. se dégager du temps libre :
            que ce soit pour être mieux à l'écoute de vos collaborateurs, vous
            formez ou bien simplement pour souffler et prendre l'air. se libérer
            d'une dose de stress : un esprit libéré du poids des incertitudes,
            une charge mentale diminuée.
          </p>
          <button id="check" type="button" class="btn btn-light border-dark"><a href="/TodoList">Check de votre Timesheet</a></button>
        </div>

        <div id="texto">
          <h2>citation</h2>
          <p id="citation">
            Chaque temps a son importance. Voici quelques types de temps : le
            temps du corps, le temps des loisirs, le temps du plaisir, le temps
            de la consommation, le temps des voyages, le temps du repos, le
            temps de l'amour, le temps des autres, le temps de la famille, le
            temps de la lecture, le temps de développement, le temps de la
            création, le temps de la méditation, le temps de la régression, le
            temps de la solitude.
          </p>
          <p id="auteur">Jean-Louis Servan-Schreiber , L'Art du Temps (1983)</p>
        </div>
      </section>
      <section id="light"></section>
    </div>
  );
}

export default Home;
