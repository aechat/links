interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({searchQuery, setSearchQuery}) => {
  return (
    <input
      className="searchbar"
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Поиск..."
    />
  );
};

export default SearchBar;
