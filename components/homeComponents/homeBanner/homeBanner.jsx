import React from "react";
import { BannerWrap } from "./homeBannerStyles";
import { Gear } from "../../svg/gears_v2";

const HomeBanner = () => {
	return (
		<BannerWrap>
			<h1 style={{ position: "absolute", top: "-90px" }}>
				Jerome Cordjotse - Software Developer
			</h1>
			<Gear />
		</BannerWrap>
	);
};

export default HomeBanner;
