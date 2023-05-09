import { useState } from 'react';
import './Counter.scss'

export const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
            <h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Counter</button>
		</div>
	);
};
