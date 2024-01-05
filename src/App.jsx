import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    if (!localStorage.getItem("data")) {
        localStorage.setItem("data", JSON.stringify([]));
    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("data")));
    }, []);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        value !== "" && localStorage.setItem("data", JSON.stringify([...data, value]));
        setInputValue("");
        setData(JSON.parse(localStorage.getItem("data")));
    }

    const handleClick = (e) => {
        localStorage.setItem("data", JSON.stringify([]));
        setData(JSON.parse(localStorage.getItem("data")));
    }

    const handleDelete = (index) => {
        console.log(index);
        if (data !== 0) {
            data.splice(index, 1)
            localStorage.setItem("data", JSON.stringify(data));
            setData(JSON.parse(localStorage.getItem("data")));
        }
    }

    return (
        <div>
            <h1>Todo List </h1>
            <form onSubmit={handleSubmit}>
                <input id="input" value={inputValue} onChange={handleChange} />
                <button type='submit'>add</button>
            </form>
            <button id="allClear" onClick={handleClick}>Clear all</button>
            <ul id="">
                {
                    data.length !== 0 && data.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleDelete(index)}>X</button>
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;

/*import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState([]);
	const [inputValue, setInputValue] = useState("");

	if (!localStorage.getItem("data")) {
		localStorage.setItem("data", JSON.stringify([]));
	}


	useEffect(() => {
		setData(JSON.parse(localStorage.getItem("data")));
	}, []);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = inputValue.trim();
		value !== "" && localStorage.setItem("data", JSON.stringify([...data, value]));
		setInputValue("");
		setData(JSON.parse(localStorage.getItem("data")));
	}

	const handleClick = (e) => {
		localStorage.setItem("data", JSON.stringify([]));
		setData(JSON.parse(localStorage.getItem("data")));
	}

	const handleDelete = (index) => {
		console.log(index);
		if (data.length !== 0) {
			data.splice(index, 1)
			localStorage.setItem("data", JSON.stringify(data));
			setData(JSON.parse(localStorage.getItem("data")));
		}
	}

	return (
		<div>
			<h1 id='title'>Todo List </h1>
			<div className='flex column center'>
				<form onSubmit={handleSubmit}>
					<input id="input" value={inputValue} onChange={handleChange} placeholder="Please write something." />
					<button type='submit' >add</button>
				</form>
				<button id="allClear" onClick={handleClick}>Clear all</button>
				<ul id="">
					{
						data.length !== 0 && data.map((item, index) => (
							<li key={index}>
								<button onClick={() => handleDelete(index)}>X</button>
								<span>{item}</span>
							</li>
						))
					}
				</ul>
			</div>
		</div>

	);
}

export default App;*/