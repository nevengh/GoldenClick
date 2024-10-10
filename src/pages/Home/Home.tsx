import Form from "../../components/Form/Form";
import "./Home.css";
import { useLanguage } from "../../LanguageContext";
import en from "../../locales/en";
import ar from "../../locales/ar";
import about from "../../assets/WE-ARE-01-minsite-1-1-1246x800-1.png";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import video from '../../assets/videography.png'
import media from '../../assets/social-media.png'
import content from '../../assets/writer.png'
import coding from '../../assets/coding.png'

const Home = () => {
  const { language } = useLanguage();
  const translations = language === "en" ? en : ar;
  return (
    <div className="Home">
      <div className="hero">
        <div className="hero_form">
          <Form />
        </div>
      </div>
      <div className="about" id="about">
        <div className="about_img">
          <img src={about} alt="" />
        </div>
        <div className="about_content">
          <h1>{translations.About}</h1>
          <p className="about_text">{translations.about_text_1}</p>
          <p className="about_text_2">{translations.about_text_2}</p>
          <ul className="about_ul">
            <li>Paid Ads</li>
            <li>Content Creation</li>
            <li>Media Production</li>
          </ul>
        </div>
      </div>
      <div className="services" id="services">
        <h1 className="services_title"> {translations.OurServices} </h1>
        <div className="services_container">
          
          <ServicesCard
            card_number="01"
            title={translations.VideoProduction}
            description={translations.video_production_desc}
            icon={video}
          />
          <ServicesCard
            card_number="02"
            title={translations.mediabuying}
            description={translations.mediabuying_desc}
            icon={media}
          />
          <ServicesCard
            card_number="03"
            title={translations.ContentCreation}
            description={translations.ContentCreation_desc}
            icon={content}
          />
          <ServicesCard
            card_number="04"
            title={translations.webdevelopment}
            description={translations.webdevelopment_desc}
            icon={coding}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
