import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/about/elorm-jerome");
	});
	return (
		<>
			<Head>
				<title>Who is Elorm Jerome?</title>
			</Head>
		</>
	);
};

export default Index;
