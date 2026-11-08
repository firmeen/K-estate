import type { PropertyType } from "@/types/property";

/**
 * Architectural illustrations are deliberately abstract, not property photos.
 * Replace with owner-provided photos in the real catalogue.
 */
export function PropertyArtwork({ type, className = "" }: { type: PropertyType; className?: string }) {
  return <div className={`property-artwork property-artwork--${type} ${className}`} aria-label="Architectural concept artwork, not a real listing photo" role="img">
    <div className="artwork-grain" aria-hidden="true"/>
    <svg className="artwork-scene" aria-hidden="true" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" fill="none">
      <circle cx="455" cy="89" r="63" fill="#FFF6DA" opacity=".44"/>
      {type === "condo" && <>
        <path d="M138 405V126l184-67v346" fill="#D9E3DE"/>
        <path d="M322 405V8l150 59v338" fill="#8FABAF"/>
        <path d="M322 8v397h26V20" fill="#C1D3D2" opacity=".7"/>
        {Array.from({length:6},(_,i)=>Array.from({length:4},(_,j)=><rect key={`a${i}-${j}`} x={163+j*36} y={141+i*43} width="18" height="26" rx="1" fill={j%2 ? "#668C8C":"#7B9D98"} opacity=".62"/>))}
        {Array.from({length:7},(_,i)=>Array.from({length:3},(_,j)=><rect key={`b${i}-${j}`} x={354+j*36} y={85+i*42} width="19" height="24" fill="#C3D7D0" opacity=".66"/>))}
      </>}
      {type === "apartment" && <>
        <path d="M58 403V136l228-69 228 72v264" fill="#CADDD6"/>
        <path d="M286 67v337h228V139" fill="#8FB5B1"/>
        <path d="M81 151 286 92" stroke="#E5EDE7" strokeWidth="11"/>
        {Array.from({length:4},(_,i)=>Array.from({length:4},(_,j)=><rect key={`c${i}-${j}`} x={95+j*46} y={174+i*50} width="27" height="31" fill="#659291" opacity=".65"/>))}
        {Array.from({length:4},(_,i)=>Array.from({length:4},(_,j)=><rect key={`d${i}-${j}`} x={309+j*46} y={174+i*50} width="27" height="31" fill="#E2E8DD" opacity=".70"/>))}
      </>}
      {type === "land" && <>
        <path d="M0 240c100-60 176-55 290-22s220 14 310-50v232H0Z" fill="#8EB5A9"/>
        <path d="M0 294c133-42 232-14 356-38 99-18 165-10 244 24v120H0Z" fill="#678E86"/>
        <path d="M0 365 178 279l157 47 120-39 145 45v68H0Z" fill="#B3C8AB" opacity=".85"/>
        <path d="m179 279 156 47 120-39" stroke="#E5E9CA" strokeWidth="4" strokeDasharray="12 10"/>
        <path d="M58 324c51-56 100-61 147-56" stroke="#E7EBD9" strokeWidth="7" opacity=".64"/>
      </>}
      {type === "house" && <>
        <path d="m75 199 223-136 228 137" fill="#D8E4DE"/>
        <path d="m118 178 180-110 188 110" fill="#A2C0BE"/>
        <path d="M120 194h357v211H120Z" fill="#CADCD6"/>
        <path d="M300 194h177v211H300Z" fill="#9ABAB5"/>
        <rect x="183" y="236" width="78" height="78" fill="#769B99"/>
        <rect x="343" y="236" width="81" height="78" fill="#DCE8E3"/>
        <rect x="264" y="312" width="81" height="93" fill="#6C908B"/>
        <path d="M82 404h436" stroke="#537E78" strokeWidth="10"/>
      </>}
      <path d="M0 397h600" stroke="#F7F6F2" opacity=".38" strokeWidth="2"/>
    </svg>
  </div>;
}
