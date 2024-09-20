import CalButton from "./CalButton";

export default function Home() {
	// simple page with two <CalButton /> components
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<CalButton>Button 1</CalButton>
			<CalButton>Button 2</CalButton>
		</div>
	);
}
