export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-white overflow-hidden" aria-hidden="true">
      {/* Subtle Creative Realm mineral light background gradients */}
      <div 
        className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f8f8fa] via-[#ffffff] to-transparent pointer-events-none"
      />
      <div 
        className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#eeece7]/50 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Atmospheric light gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white pointer-events-none z-[1]" />
    </div>
  );
}

