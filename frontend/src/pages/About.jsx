import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

export default function About() {
	return (
		<div>
			<div className="text-2xl text-center pt-8 border-t">
				<Title text1={"ABOUT"} text2={"US"} />
			</div>
			<div className="my-10 flex flex-col md:flex-row gap-16">
				<img
					className="w-full md:max-w-[450px]"
					src={assets.about_img}
					alt=""
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
						maxime adipisci atque non sunt aliquid laudantium similique officia
						sapiente dolores doloribus dicta, aperiam, dolorum dolorem quibusdam
						culpa id veritatis placeat!
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
						quidem cumque repellat animi recusandae magni iure dolore laborum
						tenetur, in soluta quibusdam reiciendis at voluptates ex eligendi?
						Sint, ducimus beatae.
					</p>
					<b className="text-gray-800">OUR MISSION</b>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
						provident similique facere vel rerum voluptatem, pariatur adipisci.
						Officia molestias temporibus perspiciatis error corporis recusandae
						voluptatum ullam cupiditate numquam ratione. Ullam?
					</p>
				</div>
			</div>
			<div className="text-xl py-4">
				<Title text1={"WHY"} text2={"CHOOSE US"} />
			</div>
			<div className="flex flex-col md:flex-row text-sm mb-20">
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Quality Assurance: </b>
					<p className="text-gray-600 text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
						doloremque veniam ipsa alias aliquid nisi nemo labore omnis quae
						dignissimos cupiditate reiciendis deserunt ratione, quo consequuntur
						laudantium enim doloribus quod.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Convenience: </b>
					<p className="text-gray-600 text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
						doloremque veniam ipsa alias aliquid nisi nemo labore omnis quae
						dignissimos cupiditate reiciendis deserunt ratione, quo consequuntur
						laudantium enim doloribus quod.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Exceptional Customer Service: </b>
					<p className="text-gray-600 text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
						doloremque veniam ipsa alias aliquid nisi nemo labore omnis quae
						dignissimos cupiditate reiciendis deserunt ratione, quo consequuntur
						laudantium enim doloribus quod.
					</p>
				</div>
			</div>
			<NewsLetterBox />
		</div>
	);
}
