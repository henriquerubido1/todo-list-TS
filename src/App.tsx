import React, { useState, ChangeEvent } from 'react';
import './index.css';

function App() {
	const [task, setTask] = useState<string>('');
	const [list, setList] = useState<Array<string>>([]);

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		setTask(e.target.value);
	}

	function addTask() {
		setList([...list, task]);
	}

	return (
		<div>
			<header>
				<h1>Todo List in TypeScript</h1>
			</header>
			<section>
				<input
					type='text'
					placeholder='set task'
					onChange={handleChange}
				/>
				<button onClick={addTask} type='submit'>add task</button>
			</section>
			{ list.length > 0 && list.map(item => <li>{ item }</li>)}
		</div>
	);
}

export default App;
