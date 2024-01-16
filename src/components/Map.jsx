import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Annotation
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      
      <Graticule stroke="black" />
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            // Check if the current geography corresponds to Uruguay
            const isUruguay = geo.properties.name === "Uruguay";

            return (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  fill={isUruguay ? "#007AB4" : "white"}
                  stroke="black"
                  strokeWidth={0.5}
                />
                {isUruguay && (
                  <Annotation
                    subject={[-56.1917, -34.9011]} // Coordinates for Montevideo, Uruguay
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                      stroke: "#007AB4",
                      strokeWidth: 3,
                      strokeLinecap: "round"
                    }}
                  >
                    <text
                      x="-8"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#007AB4"
                    >
                      {"Uruguay"}
                    </text>
                  </Annotation>
                )}
              </React.Fragment>
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
