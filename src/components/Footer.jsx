import React from 'react';

const HoverLink = ({ href, label, hoverText }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative grid overflow-hidden font-medium text-muted hover:text-foreground transition-colors duration-500"
  >
    <span className="col-start-1 row-start-1 place-self-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:-translate-y-[150%]">
      {label}
    </span>
    <span className="col-start-1 row-start-1 place-self-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] translate-y-[150%] group-hover:translate-y-0 text-foreground font-semibold">
      {hoverText || label}
    </span>
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-16 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="font-bold tracking-tight text-lg">
        PRINCE CHOUDHARY
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm tracking-widest">
        <HoverLink href="https://wa.me/919710003577" label="WHATSAPP" hoverText="+91 9710003577" />
        <HoverLink href="mailto:prince.1978choudhary@gmail.com" label="EMAIL" hoverText="SEND MESSAGE" />
        <HoverLink href="https://linkedin.com/in/choudharyprince03" label="LINKEDIN" hoverText="@CHOUDHARYPRINCE03" />
        <HoverLink href="https://github.com/choudharyprince03" label="GITHUB" hoverText="@CHOUDHARYPRINCE03" />
        <HoverLink href="https://instagram.com/princechoudharyy05" label="INSTAGRAM" hoverText="@PRINCECHOUDHARYY05" />
      </div>

      <div className="text-sm text-muted font-medium">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
