interface SectionLabelProps {
    text: string;
    light?: boolean;
  }
  
  const SectionLabel = ({ text, light = false }: SectionLabelProps) => {
    return (
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-0.5 bg-brand-blue"></span>
        <span className={`text-sm font-medium ${light ? "text-foreground" : "text-white"}`}>
          {text}
        </span>
      </div>
    );
  };
  
  export default SectionLabel;
  