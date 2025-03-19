import { useState } from 'react';
import{searchVin} from "../api/api.js"
const VinSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchVin(searchTerm);
      setResults(response.data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div className="tab-content">
      <h2>VIN Search</h2>
      <div className="search-container">
        <input type="text" 
          placeholder="Enter VIN..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display results */}
    </div>
  );
};
export default VinSearch;