import Image from "next/image";

// Define the type for props
interface FeatureBlockProps {
    Title: string;
    Subtitle: string;
    Text: string;
    Icon: string; // Assuming this is a string representing the image URL
    IconAlt: string;
  }

export default function featureblock({Title,Subtitle,Text,Icon,IconAlt}: FeatureBlockProps){
    return(
         <div className="feature flex flex-col justify-between">
            <Image src={Icon} width="100" height="100" alt={IconAlt} />
            <h2 className="mt-8">{Title}</h2>
            <h4 className="mt-4">{Subtitle}</h4>
            <p className="mt-4 mb-4">{Text}</p>
            <div>
            <a href="#contact"><Image src="/featurebtn.png" width="70" height="70" alt="Lumo Feature"/></a>
            </div>
         </div>
    );
}
