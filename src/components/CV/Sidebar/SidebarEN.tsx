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

      <h3>PERSONAL INFORMATION</h3>
      <div className="row">
        Date of Birth <div>January 15, 1987</div>
      </div>
      <div className="row">
        Nationality <div>Ukrainian</div>
      </div>
      <div className="row">
        Visa Status <div>Residence under §24 AufenthG</div>
      </div>

      <h3>LANGUAGES</h3>
      <div className="progress">
        <div className="title">
          German <small>[A2, improving]</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "20%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          English <small>Fluent [C2]</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "80%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Ukrainian <small>Native</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Russian <small>Fluent</small>
        </div>
        <div className="progress_bar">
          <div className="progress_res" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="progress">
        <div className="title">
          Polish <small>Fluent [C2]</small>
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
              <li>Multitasking skills</li>
              <li>Adaptability</li>
              <li>Professionalism</li>
              <li>Teamwork & Mentoring</li>
              <li>Problem-Solving</li>
              <li>Analytical Thinking</li>
              <li>Initiative</li>
              <li>Sense of Responsibility</li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Interests</h3>
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
