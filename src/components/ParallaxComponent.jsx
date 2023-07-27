"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ link, image, title, text }) {
	return (
		<Link href={link}>
			<div className="grid grid-cols-2 gap-2 h-1/6">
				<Image src={image} alt="image" width={150} height={150} />
				<div className="self-end font-grotesk w-36">
					<h1 className="text-lg">{title}</h1>
					<p className="text-sm">{text}</p>
				</div>
			</div>
		</Link>
	);
}

export default function ParallaxComponent() {
	const ref = useRef();

	return (
		<Parallax pages={2} ref={ref} horizontal={true}>
			<ParallaxLayer
				offset={0.5}
				speed={0.1}
				factor={3}
				className="flex items-center text-5xl lg:text-9xl"
			>
				Charles Chen.
			</ParallaxLayer>
			<ParallaxLayer
				offset={1.25}
				speed={0.1}
				factor={3}
				className="flex items-center text-5xl lg:text-9xl"
			>
				SWE
			</ParallaxLayer>
			<ParallaxLayer
				offset={0.7}
				speed={0.7}
				factor={1}
				className="flex items-start text-5xl"
			>
				<Card
					link="/projects/elox"
					image="/path/to/image.jpg"
					title="Featured Project"
					text="Elox Company Website"
				/>
			</ParallaxLayer>
			<ParallaxLayer
				offset={1.5}
				speed={0.7}
				factor={1}
				className="flex text-5xl items-stert"
			>
				<Card
					link="/developer"
					image="/assets/vitruvianman.jpg"
					title="Developer Profile"
					text="Click here to go to my developer profile"
				/>
			</ParallaxLayer>
			<ParallaxLayer
				offset={1}
				speed={0.7}
				factor={1}
				className="flex items-end text-5xl"
			>
				<Card
					link="/page2"
					image="/path/to/image.jpg"
					title="Featured Project"
					text="Elaine Ma Art Portfolio"
				/>
			</ParallaxLayer>
		</Parallax>
	);
}
