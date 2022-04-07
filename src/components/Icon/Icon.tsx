import React, { useEffect, useRef } from "react";
import * as Icons from "assets/icons";

export type iconType = keyof typeof Icons;
export type iconSize = "sm" | "md" | "lg";

const sizesMap = new Map<iconSize, number>([
	["sm", 24],
	["md", 32],
	["lg", 48]
]);

interface IconProps {
	icon: iconType;
	size?: iconSize;
	color?: string;
}

const Icon = ({ icon, size = "md", color }: IconProps) => {
	// eslint-disable-next-line import/namespace
	const IconComponent = Icons[icon];
	const iconElement = useRef<SVGSVGElement>(null);

	const svgSize = sizesMap.get(size);

	useEffect(() => {
		if (iconElement.current) {
			const paths = iconElement.current.querySelectorAll("path");

			paths.forEach((path) => {
				if (color) {
					path.setAttribute("fill", color);
				}
			});
		}
	}, [color, icon]);

	return <IconComponent ref={iconElement} width={svgSize} height={svgSize} />;
};

export default Icon;
