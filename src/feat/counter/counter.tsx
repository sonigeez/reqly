import { useAtom } from "jotai";
import { countAtom } from "../../lib/store";
import { AddButton } from "./components/add_button";
import { DecrementButton } from "./components/decrease_button";
import { useEffect } from "react";
import { fetchCount } from "./counter.repo";

const Counter = () => {
	const [count, setCount] = useAtom(countAtom);

	useEffect(() => {
		fetchCount().then((count) => setCount(count));
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center space-y-4">
				<div className="flex space-x-4">
					<AddButton />
					<DecrementButton />
				</div>
				<div className="text-center">
					<p>Count: {count}</p>
				</div>
			</div>
		</div>
	);
};

export default Counter;
