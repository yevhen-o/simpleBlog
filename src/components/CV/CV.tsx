import "./CV.scss";
import { Sidebar } from "./Sidebar/Sidebar";
export const CV = () => {
  return (
    <>
      <div className="page__wrapper">
        <Sidebar />
        <div className="main_area">
          <div>
            <div>
              <h3>Berufliche Zusammenfassung</h3>
              Frontend Software Engineer mit über 10 Jahren Erfahrung in der
              Entwicklung skalierbarer, effizienter und nutzerfreundlicher
              Anwendungen. Fundierte Kenntnisse moderner Frontend-Technologien
              und -Frameworks sowie eine solide Full-Stack-Grundlage.
              Nachweisliche Erfahrung in der Leitung von Projekten, Mentoring
              von Teams und Entwicklung hochwertiger, wartbarer Lösungen.
            </div>
          </div>
          <div className="name">
            <h1>Yevhen Oliynyk</h1>
            <div>Senior Web-Ingenieur</div>
          </div>
          <div>
            <h3>Technische Kenntnisse</h3>
            <ul>
              <li>Programmiersprachen: JavaScript, TypeScript, PHP</li>
              <li>
                Frontend-Technologien: React, Redux, Next.js, Svelte, Vue.js,
                Angular, Zustand, Storybook, Stencil.js, React Native
              </li>
              <li>
                Backend-Technologien: Node.js (Express, Sequelize ORM,
                Socket.io), REST APIs, GraphQL
              </li>
              <li>
                Testing & Qualitätssicherung: Jest, Cypress, Playwright,
                Chromatic
              </li>
              <li>
                Tools & DevOps: Postman, Swagger, GitHub Actions, GitLab CI/CD,
                Docker, Kubernetes
              </li>
              <li>
                Datenbanken & CMS: PostgreSQL, MongoDB, MySQL, SQLite, Firebase,
                Contentful, HyGraph, Hasura
              </li>
            </ul>
          </div>
          <div className="berufserfahrung">
            <h3>Berufserfahrung</h3>
            <div>
              <h4>Web-Ingenieur</h4>
              <b>QIT Software | Apr 2023 - Okt 2024 | Remote</b>
              <br />
              <br />
              <i>
                <i>
                  Projekt: <a href="https://www.klarify.app">Klarify</a>{" "}
                  Empfehlungen auf{" "}
                  <a href="https://www.linkedin.com/in/yevhen-oliynyk">
                    LinkedIn.
                  </a>
                </i>
              </i>
              <ul>
                <li>
                  Entwurf und Implementierung wiederverwendbarer UI-Komponenten
                  zur Verbesserung der Benutzerfreundlichkeit und
                  Skalierbarkeit.
                </li>
                <li>
                  Vereinfachung der Entwicklungsabläufe, Steigerung der
                  Teamproduktivität um 20 %.
                </li>
                <li>
                  Sicherstellung einer 100%igen Storybook-Abdeckung mit
                  automatisierten Chromatic-Tests, Beschleunigung von CI/CD.
                </li>
                <li>
                  Anpassung an häufige Projektänderungen bei gleichzeitiger
                  Aufrechterhaltung der Codequalität und termingerechter
                  Lieferung.
                </li>
                <li>
                  Tech stack: JavaScript/Typescript, SvelteKit, Express, Hasura,
                  Joint.js, Editor.js, Prosemirror, Vite
                </li>
              </ul>
            </div>
            <div>
              <h4>Web-Ingenieur</h4>
              <b>
                Wise Engineering | Mär 2021 - Jun 2023 | Ternopil, Ukraine
              </b>{" "}
              <br />
              <br />
              <i>
                Projekt: <a href="https://noodle.shop">Noodle</a>
              </i>
              <ul>
                <li>
                  Leitung von Verbesserungen der Anwendungsarchitektur,
                  Optimierung von Leistung und Skalierbarkeit.
                </li>
                <li>
                  Identifizierung und Behebung von Engpässen, um schnellere
                  Entwicklungszyklen zu ermöglichen.
                </li>
                <li>
                  Ich leitete die Migration auf eine skalierbare
                  Technologiearchitektur und gewährleistete eine nahtlose
                  Integration.
                </li>
                <li>
                  Verbesserung der Systemkapazität zur Bewältigung wachsender
                  Benutzeranforderungen ohne Leistungseinbußen.
                </li>
                <li>
                  Tech stack: JavaScript/Typescript, Next.js, Gatsby.js,
                  Express, HyGraph, Docker, Sentry, Jest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="page__wrapper">
        <Sidebar />
        <div className="main_area">
          <div className="berufserfahrung">
            <h3>Berufserfahrung fortgesetzt</h3>

            <div>
              <i>Projekt: Alpha Stock Price</i>
              <ul>
                <li>
                  Aufbau der zentralen Plattformarchitektur und der
                  SSR-Aktienchartdarstellung.
                </li>
                <li>
                  Lieferte ein MVP mit hoher Leistung und
                  Benutzerfreundlichkeit.
                </li>
                <li>
                  Tech Stack: JavaScript/Typescript, SvelteKit/Sapper,
                  Storybook, Docker, PostgreSQL
                </li>
              </ul>
              <i>Projekt: Core</i>
              <ul>
                <li>
                  Entwicklung einer skalierbaren UI-Architektur und eines
                  HLS-unterstützten Videoplayers.
                </li>
                <li>
                  Schnelles Beherrschen von Svelte/Sapper zur
                  Leistungsoptimierung.
                </li>
                <li>Mentor für jüngere Entwickler.</li>
                <li>
                  Tech Stack: JavaScript/Typescript, SvelteKit/Sapper,
                  Storybook, Docker, PostgreSQL, Elixir, Phenix
                </li>
              </ul>
              <h4>Frontend-Entwickler</h4>
              <b>
                <a href="https://crowdin.com/">Crowdin</a> | Mär 2018 - Mär 2021
                | Ternopil, Ukraine
              </b>
              <ul>
                <li>
                  Leitung der Front-End-Architektur, Gewährleistung der
                  Skalierbarkeit der Plattform.
                </li>
                <li>
                  Aufbau einer wiederverwendbaren Komponentenbibliothek, die die
                  Zeit für die Funktionsintegration verkürzt.
                </li>
                <li>
                  Entwicklung von RESTful APIs und Echtzeit-Updates
                  (Dateisynchronisation, Übersetzungsfortschritt).
                </li>
                <li>
                  Integration mit Mailchimp, Sendgrid, Contentful, Typeform
                  unter Beibehaltung der UI-Konsistenz.
                </li>
                <li>
                  Tech Stack: JavaScript, React/Redux, Stencil.js, Docker,
                  PostgreSQL, Express, Socket.io
                </li>
              </ul>
            </div>
            <div>
              <h4>Frontend-Entwickler</h4>
              <b>Freiberuflich | Jan 2011 - Mär 2018 | Remote</b>
              <ul>
                <li>
                  Mehr als 50 Weblösungen geliefert, von Landingpages bis zum
                  elektronischen Handel.
                </li>
                <li>
                  Spezialisiert auf WordPress, Joomla, PhpShop, Umi CMS
                  Anpassungen.
                </li>
                <li>
                  Entwicklung von kundenspezifischen Modulen, Plugins und
                  interaktiven UI-Elementen. Rezensionen unter dem Link:
                </li>
                <small>
                  <a href="https://www.upwork.com/freelancers/~0182f9bd21c4b98d49">
                    https://www.upwork.com/freelancers/~0182f9bd21c4b98d49
                  </a>
                </small>
              </ul>
            </div>
          </div>
          <h3>Ausbildung</h3>
          <div className="ausbildung">
            <div>
              <div className="date">
                2012 - <span>bis heute</span>
              </div>
              <div>
                Kontinuierliche Erweiterung des Fachwissens durch Selbststudium.{" "}
                <br />
                24 Kurse auf Udemy
                <small>
                  <a href="https://www.udemy.com/user/yevhen-oliynyk-2">
                    https://www.udemy.com/user/yevhen-oliynyk-2
                  </a>
                </small>
              </div>
            </div>
            <div>
              <div className="date">
                2009 - <span>2010</span>
              </div>
              <div>
                <strong>Master</strong> of Information Control Systems and
                Technologies. Computerinformationssysteme und Programmtechnik.
                <small>
                  Nationale Technische Universität Ternopil Iwan Puluj,
                  Ternopil, Ukraine
                </small>
              </div>
            </div>
            <div>
              <div className="date">
                2005 - <span>2009</span>
              </div>
              <div>
                <strong>Bachelor</strong> in Software für automatisierte
                Systeme. <br />
                Fakultät für Computertechnik.
                <small>V. Chornovol Halyckyj Institut, Ternopil, Ukraine</small>
              </div>
            </div>
            <div>
              <div className="date">
                2002 - <span>2005</span>
              </div>
              <div>
                Diplom eines Facharbeiters. <br />
                Automechaniker der dritten Kategorie.
                <small>V. Chornovol Halyckyj College, Ternopil, Ukraine</small>
              </div>
            </div>
            {/* <div>
            <div className="date">
              1994 - <span>2002</span>
            </div>
            <div>
              Weiterführende, allgemeinbildende Schule
              <small>Die Schule Nr. 13</small>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <br />
      <div className="page__wrapper">
        <Sidebar />
        <div className="main_area">
          <div className="berufserfahrung">
            <h3>Cover letter</h3>
            <div contentEditable></div>
          </div>
        </div>
      </div>
    </>
  );
};
