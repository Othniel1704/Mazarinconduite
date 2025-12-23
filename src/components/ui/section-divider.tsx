
import React from 'react';

interface SectionDividerProps {
    color: string;
    className?: string;
    direction?: 'up' | 'down';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ color, className, direction = 'down' }) => {
    return (
        <div className={`absolute left-0 w-full h-16 pointer-events-none transform ${direction === 'up' ? '-translate-y-full rotate-180' : 'translate-y-0'} ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="block w-full h-full fill-current"
                style={{ color }}
            >
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.32,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,34.74V0Z" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28,34-15.83,65.52-33.6,101.55-44.59,40.54-12.35,85.6-11.85,123.6,10.22,35,20.3,64,55,94,84.58V0Z" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,52.81,23.06,104.14,50.15,164,51.13,63,1,118.89-22.18,172.95-53.15C1138.58,31,1168,14.65,1200,0Z"></path>
            </svg>
        </div>
    );
};
