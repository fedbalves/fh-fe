import React from 'react';
import { ISVGProps } from './types';

export const SvgComponent = (args: ISVGProps) => {
    const { paths, width, height, viewBox, fillAll, ...props } = args;

    const dimensions = viewBox ?
        { viewBox } :
        { height, width, viewBox: `0 0 ${width} ${height}` };

    return (
        <svg {...dimensions} {...props}>
            {paths.map((group, idx) => (
                <g key={idx}>
                    {group.map((path) => {
                        if (fillAll) {
                            path.fill = fillAll;
                        }

                        return <path key={path.d} {...path} />;
                    })}
                </g>
            ))}
        </svg>
    );
}