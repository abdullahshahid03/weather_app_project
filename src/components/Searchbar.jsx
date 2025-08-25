import React from 'react'

function Searchbar({fetchWeather}) {
    const[city, setCity] = React.useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if(city.trim()) {
        fetchWeather(city);
        setCity('');
      }
    };
  return (
    <form className='flex w-full' onSubmit={handleSubmit}>
        <input
        className='flex-1 border border-gray-300 rounded-lg p-2 text-black'
        type='text'
        placeholder='City name'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit' className='bg-blue-500 text-white rounded-r-lg p-2 hover:bg-blue-600 border-l-0 '>Search</button>
    </form>
  );
}

export default Searchbar