import mapIndia from "../../assets/home/map.png";

import { motion } from "framer-motion";

const locations = [
  { id: 1, name: "Bawal", x: 31, y: 29 },
  { id: 2, name: "Haridwar", x: 38, y: 24 },
  { id: 3, name: "Dharuhera", x: 33, y: 26 },
  { id: 4, name: "Vadodara", x: 20, y: 48 },
  { id: 5, name: "Chharodi", x: 15, y: 45 },
  { id: 6, name: "Meppedu", x: 40, y: 80 },
  { id: 7, name: "Nellore", x: 41, y: 71 },
];


const MapPin = ({ x, y, label }) => {
  return (
    <div
      className="absolute group cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Pulse */}
      <motion.span
        className="absolute w-3 h-3 rounded-full bg-red-500 opacity-40"
        animate={{ scale: [1, 1.8, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Center dot */}
      <span className="relative z-10 w-3 h-3 bg-red-600 rounded-full block" />

      {/* Tooltip */}
      <span
        className="
          absolute top-1/2 left-5 -translate-y-1/2
          opacity-0 scale-95
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200
          bg-red-600 text-white text-xs px-2 py-1 rounded
          whitespace-nowrap pointer-events-none
        "
      >
        {label}
      </span>
    </div>
  );
};


const Map = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Map Image */}
      <img
        src={mapIndia}
        alt="India Map"
        className="w-full h-auto"
      />

      {/* Pins */}
      {locations.map((loc) => (
        <MapPin
          key={loc.id}
          x={loc.x}
          y={loc.y}
          label={loc.name}
        />
      ))}
    </div>
  );
};

export default Map;
