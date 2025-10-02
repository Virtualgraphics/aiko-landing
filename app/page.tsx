import Image from "next/image";
import { CardCarousel } from "@/components/card-carousel"
import SocialLinks from "@/components/social-links";
import { Github, X, Linkedin } from "lucide-react";


    const images = [
        { src: "/assets/carousel_casual.jpg", alt: "Image 1" },
        { src: "/assets/carousel_fantasy.jpg", alt: "Image 2" },
        { src: "/assets/carousel_urban02.jpg", alt: "Image 3" },
        { src: "/assets/carousel_goth.jpg", alt: "Image 4" },
        { src: "/assets/carousel_exotic.jpg", alt: "Image 5" },
        { src: "/assets/carousel_business02.jpg", alt: "Image 6" },
     
    ]

    const socialLinks = [
  {  href: "https://x.com/Aiko_Companion", label: "X", icon: <X size={32}/> },
  { href: "https://www.linkedin.com/in/david-boller-38488465", label: "LinkedIn", icon: <Linkedin size={32}/> },
  { href: "https://github.com/Virtualgraphics", label: "GitHub", icon: <Github size={32} /> },
];

export default function Home() {
  return (

<div className="w-full h-full justify-center mx-auto space-y-2  bg-background">

<div className="max-w-8xl pt-12 px-8">
<div className=" sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 flex mx-auto p-4">
 <Image
        
          src="/assets/aiko_logo.png"
          alt="Ai-Ko Logo"
           width={1500}
           height={876}
          priority
        />
</div>

            <div className="flex w-full mx-auto justify-center">
<h1 className="sm:text-2xl md:text-3xl lg:text-4xl pt-8 pb-2 font-semibold font-display text-center">
YOUR AI COMPANION WITH HEART AND SOUL!
</h1> 
</div>

         <div className="flex w-full mx-auto justify-center">
<p className="sm:text-md md:text-xl lg:text-2xl pb-8 font-semibold font-roboto text-center text-muted-foreground">
More than a chat, an autonomous companion
</p> </div>



  <div className=" pb-4">

                <CardCarousel
                    images={images}
                    autoplayDelay={2000}
                    showPagination={true}
                    showNavigation={true}
                />
            </div>
 

    <div className="flex w-full mx-auto justify-center">
      <h1 className="sm:text-2xl md:text-3xl lg:text-3xl pt-4 pb-24 font-semibold font-display text-center text-muted-foreground">
COMING IN OCTOBER
</h1> 
</div>
</div>




 <div className="w-full flex flex-col items-center py-8  border-t border-primary/30">

            <div className="mb-4">
    <SocialLinks links={socialLinks} />
  </div>

           <p className="text-xs text-center">
             Aiko Companions and Ai-ko.chat is copyright © 2025 Virtual Graphics. All rights reserved.
           </p>
        </div>
     
    </div>
  );
}
