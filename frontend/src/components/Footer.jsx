import { assets } from "../assets/assets";

export default function Footer() {
	return (
		<div>
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 mt-40 text-sm">
				<div>
					<img className="mb-5 w-32" src={assets.logo} alt="" />
					<p className="w-full md:w-2/3 text-gray-600">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
						illum quas similique eos saepe quo? Ipsam amet corrupti rerum
						sapiente, reiciendis error numquam itaque aperiam, consectetur dicta
						dolorem, distinctio sequi.
					</p>
				</div>

				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col gap-1 text-gray-600">
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex flex-col gap-1 text-gray-600">
						<li>+923 364 527 513</li>
						<li>hamzayounas256@gmail.com</li>
					</ul>
				</div>
			</div>
			<div>
				<hr />
				<p className="py-5 text-center text-gray-600 text-sm">
					&copy; 2024 E-COMMERCE. All rights reserved.
				</p>
			</div>
		</div>
	);
}
