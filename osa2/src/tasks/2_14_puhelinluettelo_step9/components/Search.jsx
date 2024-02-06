const Search = ({ handleSearchChange }) => {
   return (
     <div>
       <label>Filter by Name:</label>
       <input type="text" onChange={handleSearchChange} />
     </div>
   );
 };
 export default Search;
