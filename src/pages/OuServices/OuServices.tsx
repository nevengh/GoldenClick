import { useLanguage } from "../../LanguageContext";
import './OurSercies.css'
import en from "../../locales/en";
import ar from "../../locales/ar";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import video from '../../assets/videography.png'
import media from '../../assets/social-media.png'
import content from '../../assets/writer.png'
import coding from '../../assets/coding.png'

const OuServices = () => {
    const { language } = useLanguage();
    const translations = language === "en" ? en : ar;
  return (
    <div className="services" >
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
  )
}

export default OuServices