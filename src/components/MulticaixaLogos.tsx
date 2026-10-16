export function MulticaixaExpressLogo({ className = 'h-10' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center bg-gradient-to-br from-[#FF7A00] to-[#E55A00] text-white rounded-2xl p-2.5 shadow-md ${className}`}>
      <div className="flex items-center gap-2">
        {/* Multicaixa Geometric Flower Icon */}
        <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none shrink-0" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="18" fill="white" />
          {/* Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <path
              key={deg}
              d="M50 12 C55 22, 55 32, 50 40 C45 32, 45 22, 50 12 Z"
              fill="#990000"
              stroke="white"
              strokeWidth="3"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="11" fill="#FF7A00" />
        </svg>
        <span className="font-mono tracking-tight font-black text-xl text-[#8A0000] drop-shadow-xs lowercase">
          express
        </span>
      </div>
    </div>
  );
}

export function MulticaixaLogo({ className = 'h-10' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center bg-[#002D3D] text-white rounded-2xl p-2.5 px-4 shadow-md ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Multicaixa Petal Flower */}
        <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none shrink-0" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="18" fill="#FF9E00" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <path
              key={deg}
              d="M50 10 C57 22, 57 32, 50 40 C43 32, 43 22, 50 10 Z"
              fill="#CC0000"
              stroke="#FF9E00"
              strokeWidth="4"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="12" fill="#002D3D" />
        </svg>
        <span className="font-mono tracking-wider font-extrabold text-lg text-white lowercase">
          multicaixa
        </span>
      </div>
    </div>
  );
}
