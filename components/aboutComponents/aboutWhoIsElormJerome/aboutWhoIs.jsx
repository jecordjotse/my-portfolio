import Image from "next/image";
import React from "react";
import {
	AboutText,
	AboutWhoIsComponentWrap,
	ImageWrap,
	WhoIsWrap,
} from "./aboutWhoIsStyles";

const WhoIs = () => {
	return (
		<AboutWhoIsComponentWrap>
			<WhoIsWrap>
				<AboutText>
					<h2>Born to Build</h2>
					<p>
						I am an electrical engineer and a software developer
						with over 4 years experience as a fullstack developer. I
						love MCU and I play the guitar. I also participate in
						kaggle competitions (very rarely). My dream is to build
						a fully automated house with an AI house keeper
					</p>
				</AboutText>
				<ImageWrap>
					<Image src="/Jerome.webp" alt="" layout="fill"/>
				</ImageWrap>
			</WhoIsWrap>
		</AboutWhoIsComponentWrap>
	);
};

export default WhoIs;
