export default function Marquee() {
  const clients = ["VOGUE", "FORBES", "WIRED", "GQ", "VANITY FAIR", "FAST COMPANY"];
  
  return (
    <div className="w-full py-12 border-y border-sky-100 overflow-hidden flex bg-white/40 backdrop-blur-sm">
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {clients.map((client, j) => (
              <span key={`${i}-${j}`} className="font-display text-xl md:text-2xl font-light text-slate-400 mx-12 whitespace-nowrap tracking-widest">
                {client}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
