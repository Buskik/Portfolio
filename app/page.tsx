import { Play } from "lucide-react";

export default function Home() {
	return (
		<main className="flex flex-col bg-gradient-to-br from-rose-200 via-fuchsia-700 to-rose-300  text-fuchsia-50 justify-around items-center h-screen w-screen">
			<div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-30 brightness-50 contrast-150" />
			<div className="flex-col flex justify-center items-center z-10 drop-shadow-md ">
				<p>Welcome to</p>
				<h1 className="text-5xl font-black">Buskik</h1>
			</div>

			<div className="z-10">
				<Play className="fill-current drop-shadow-lg" />
			</div>
		</main>
	);
}
