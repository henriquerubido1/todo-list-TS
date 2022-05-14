import React, { useState, ChangeEvent } from 'react';
import './index.css';
import './app.css';

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

	function removeTask({ target }: MouseEvent & { target: HTMLButtonElement }): void {
		setList(list.filter(task => task !== target.parentElement?.firstChild?.textContent));
	}

	function checkInput(): boolean {
		if (task === '') {
			return true;
		} {
			return false;
		}
	}

	return (
		<div>
			<header className='bg-blue'>
				<h1 className='text-gray-light text-4xl text-center p-5'>Todo List in TypeScript</h1>
			</header>
			<section className='flex justify-center mt-3'>
				<input
					type='text'
					placeholder='set task'
					onChange={ handleChange }
					className='rounded-l-lg bg-white p-3'
				/>
				<button
					onClick={ addTask }
					type='submit'
					className='rounded-r-lg p-3 bg-white'
					disabled={ checkInput() }
				>
					add task
				</button>
			</section>
			<div>
				{list.map(item => (
					// eslint-disable-next-line react/jsx-key
					<div className='flex justify-center m-3'>
						<li className='m-3 text-xl font-semibold'>{ item }</li>
						<button
							onClick={ removeTask }
							type='submit'
							className='text-red'
						>
							X
						</button>
					</div>
				)
				)}
			</div>
		</div>
	);
};

export default App;
