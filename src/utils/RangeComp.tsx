// components/Slider.tsx

import React from 'react';
import { Range, getTrackBackground, } from 'react-range';
type SliderProps = {
  values: number[];
  step: number;
  min: number;
  max: number;
  onChange: (newValues: number[]) => void;
};

const RangeComp: React.FC<SliderProps> = ({ values, step, min, max, onChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(newValues) => onChange(newValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#548BF4', '#ccc'],
                  min,
                  max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
          >
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '50%',
                transform: 'translateX(-50%)', 
                color: '#548BF4',
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'Arial,Helvetica,sans-serif',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: '#ebebeb82',
              }}
            >
              {values[index].toFixed(0)}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default RangeComp;
