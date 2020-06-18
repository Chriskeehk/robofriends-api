import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield, searchChange2}) => {
	return (
		<div>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange2}
				
			/>
		</div>
	);
}

export default SearchBox;