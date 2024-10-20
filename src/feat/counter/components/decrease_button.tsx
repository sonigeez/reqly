import { useAtom } from "jotai";
import { countAtom } from "../../../lib/store";

export const DecrementButton = () => {
	const [_, setCount] = useAtom(countAtom);

	const decrement = () => setCount((prevCount) => prevCount - 1);

	return (
		<button
			type="button"
			onClick={decrement}
			className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
		>
			- Decrement
		</button>
	);
};
