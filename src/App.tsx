import React, { useState, ChangeEvent } from 'react';
import Header from './components/Header';
import './index.css';

// FC stands for Function Component
 
const App: React.FC = () => {
	const [task, setTask] = useState<string>('');
	const [list, setList] = useState<string[]>([]);

	function handleChange({ target }: ChangeEvent<HTMLInputElement>): void {
		setTask(target.value);
	}

	function addTask(): void {
		setList([...list, task]);
	}

	function removeTask({ target }: Event & { target: HTMLButtonElement }) {
		setList(list.filter(task => task !== target.parentElement?.firstChild?.textContent));
	}

	return (
		<div>
			<Header />
			<section>
				<input
					type='text'
					placeholder='set task'
					onChange={ handleChange }
				/>
				<button onClick={ addTask } type='submit'>add task</button>
			</section>
			<div>
				{list.map(item => (
					// eslint-disable-next-line react/jsx-key
					<div>
						<li>{ item }</li>
						<button onClick={ removeTask } type='submit'>X</button>
					</div>)
				)}
			</div>
		</div>
	);
};

export default App;
