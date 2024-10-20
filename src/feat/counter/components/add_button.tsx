import { useAtom } from "jotai";
import { countAtom } from "../../../lib/store";

export const AddButton = () => {
	const [_, setCount] = useAtom(countAtom);

	const increment = () => setCount((prevCount) => prevCount + 1);
	return (
		<button
			type="button"
			onClick={increment}
			className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
		>
			+ Increment
		</button>
	);
};
