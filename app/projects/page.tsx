import { Play } from "lucide-react";

export default function Projects() {
	return (
		<main className="flex flex-col bg-gradient-to-bl from-fuchsia-400 via-fuchsia-50 to-fuchsia-600  text-fuchsia-600 justify-around items-center h-screen w-screen">
			<div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-100 brightness-100 contrast-200" />
			<div className="flex-col flex justify-center items-center z-10">
				<p>Welcome to</p>
				<h1 className="text-5xl font-black">Buskik</h1>
			</div>
			<div className="z-10">
				<Play className="fill-current" />
			</div>
		</main>
	);
}
