import {
  PhoneFilled,
  Email,
  LogoLinkedin,
  LogoGithub,
  LocationFilled,
  Cyclist,
  Mountain,
  Swim,
  TennisBall,
  Camera,
  Campsite,
} from "@carbon/icons-react";
import { BoardGames } from "../../Icons";
import { Inliners } from "../../Icons/Inliners";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="page__side-bar">
      <div className="image_wrapper">
        <Image
          src="/yevhen_dev-icon2.jpg"
          alt="dev image"
          width={283}
          height={378}
        />
      </div>
      <br />
      <div>
        <PhoneFilled size={24} />{" "}
        <a href="tel:+4915124116181">+49 151 2411 6181</a>
      </div>
      <div>
        <Email size={24} />{" "}
        <a href="mailto:i.yevhen.oliynyk@gmail.com">
          i.yevhen.oliynyk@gmail.com
        </a>
      </div>
      <div>
        <LogoLinkedin size={24} />{" "}
        <a href="https://www.linkedin.com/in/yevhen-oliynyk">
          linkedin.com/in/yevhen-oliynyk
        </a>
      </div>
      <div>
        <LogoGithub size={24} />{" "}
        <a href="https://www.github.com/yevhen-o">github.com/yevhen-o</a>
      </div>
      <div>
        <LocationFilled size={24} />{" "}
        <a href="https://g.co/kgs/f5rXDmb">
          An d. Schüttenhöhe 4, Gummersbach. 51643
        </a>
      </div>

      <h3>PERSÖNLICHE ANGABEN</h3>
      <div className="row">
        Geburtsdatum <div>Januar 15, 1987</div>
      </div>
      <div className="row">
        Staatsangehörigkeit <div>Ukrainisch</div>
      </div>
      <div className="row">
        Visastatus <div>Aufenthalt nach §24 AufenthG</div>
      </div>

      <h3>SPRACHEN</h3>
      <div className="progress">
        <div className="title">
          Deutsch <small>[A2, in Verbesserung]</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "20%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Englisch <small>Fließend [C2]</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "80%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Ukrainisch <small>Muttersprache</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Russisch <small>Fließend</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Polnisch <small>Fließend [C2]</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "80%" }} />
        </div>
      </div>

      <h3>Soft Skills</h3>
      <div>
        <div>
          <div>
            <ul>
              <li>Multitasking-Fähigkeiten</li>
              <li>Anpassungsfähigkeit</li>
              <li>Professionalität</li>
              <li>Teamarbeit & Mentoring</li>
              <li>Problem-Solving </li>
              <li>Analytisches Denken</li>
              <li>Eigeninitiative </li>
              <li>Verantwortungsbewusstsein</li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Interessen</h3>
      <div>
        <div className="interests">
          <Cyclist />
          <Mountain />
          <Campsite />
          <Swim />
          <BoardGames />
          <Inliners />
          <TennisBall />
          <Camera />
        </div>
      </div>
    </div>
  );
};
