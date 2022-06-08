import FormData from "form-data";
import axios from "axios";
import { RECAPTCHA_KEY } from "../../utils/keys";

export default function handler(req, res) {
	try {
		if (req.method === "POST") {
			const bodyFormData = new FormData();
			bodyFormData.append("entry.48002773", req.body.name);
			bodyFormData.append("entry.1060212562", req.body.email);
			bodyFormData.append("entry.313725081", req.body.message);

			axios
				.get("https://www.google.com/recaptcha/api/siteverify", {
					params: {
						secret: RECAPTCHA_KEY,
						response: req.body.captcha,
					},
				})
				.then((response) => {
					if (!response.data.success) {
						console.log("Eror: ", response.data["error-codes"]);
						res.status(408).json({
							reCaptchaERROR: response.data["error-codes"],
						});
					} else {
						axios({
							method: "post",
							url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNBvO5tSRYzOGL7FXZsSIm3PLgXkatV4yWPbJjII2lZLyL6Q/formResponse",
							data: bodyFormData,
							headers: { "Content-Type": "multipart/form-data" },
						})
							.then((response) => {
								console.log(response.data);
								// res.status(203).json(response);
							})
							.catch(function (response) {
								//handle error
								console.log(response);
								// res.status(203).json(response);
							});
						res.status(200).json({ message: "Successfull" }); // Process a POST request
					}
				});
		} else {
			res.status(405).json({ message: "Method Not Allowed" }); // Process a PO
		}
	} catch (error) {
		res.status(500).json({ ServerError: JSON.stringify(error, null, 4) }); // Process a PO
	}
}
