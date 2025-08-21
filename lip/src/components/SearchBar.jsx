// src/components/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowUp, ArrowDown, ArrowBigRightDash  } from 'lucide-react';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Base URLs
  const urls = [
    '/about',
    '/chairman-message',
    '/vision-mission',
    '/admission-process',
    '/courses',
    '/contact',
    '/placements'
  ];

  // Course-specific search terms mapping
  const courseSearchTerms = {
    'bachelor of pharmacy': '/courses',
    'b.pharm': '/courses',
    'bpharm': '/courses',
    'diploma in pharmacy': '/courses',
    'd.pharm': '/courses',
    'dpharm': '/courses',
    'pharmacy': '/courses',
    'bachelor': '/courses',
    'diploma': '/courses',
    'degree': '/courses',
    'course': '/courses',
    'programs': '/courses',
    'academics': '/courses'
  };

  const getFilteredResults = (term) => {
    const lowerTerm = term.toLowerCase().trim();
    
    // First check for exact course matches
    if (courseSearchTerms[lowerTerm]) {
      return [{
        url: `http://localhost:5173${courseSearchTerms[lowerTerm]}`,
        displayName: lowerTerm.includes('b.pharm') ? 'Bachelor of Pharmacy (B.Pharm)' : 
                    lowerTerm.includes('d.pharm') ? 'Diploma in Pharmacy (D.Pharm)' :
                    'Pharmacy Courses',
        type: 'course'
      }];
    }

    // Check for partial course matches
    const courseMatches = Object.entries(courseSearchTerms)
      .filter(([key]) => key.includes(lowerTerm) && lowerTerm.length > 2)
      .map(([key, path]) => ({
        url: `http://localhost:5173${path}`,
        displayName: key.includes('b.pharm') ? 'Bachelor of Pharmacy (B.Pharm)' : 
                    key.includes('d.pharm') ? 'Diploma in Pharmacy (D.Pharm)' :
                    'Pharmacy Courses',
        type: 'course'
      }));

    // Regular URL matches
    const urlMatches = urls
      .filter(url => {
        const urlPath = url.toLowerCase();
        const fileName = url.split('/').pop().toLowerCase();
        return urlPath.includes(lowerTerm) || fileName.includes(lowerTerm);
      })
      .map(url => ({
        url,
        displayName: url.split('/').pop().replace(/-/g, ' '),
        type: 'page'
      }));

    // Combine and deduplicate results
    const allResults = [...courseMatches, ...urlMatches];
    const uniqueResults = allResults.filter((result, index, self) =>
      index === self.findIndex(t => t.url === result.url)
    );

    return uniqueResults;
  };

  const filteredResults = getFilteredResults(searchTerm);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(-1);
    setIsOpen(true);
  };

  const handleSelect = (result) => {
    setSearchTerm(result.displayName);
    setIsOpen(false);
    setSelectedIndex(-1);
    // Navigate to the selected URL
    window.location.href = result.url;
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredResults.length) {
          handleSelect(filteredResults[selectedIndex]);
        } else if (filteredResults.length > 0) {
          handleSelect(filteredResults[0]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedIndex(-1);
    setIsOpen(false);
    searchRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder="Search pages or courses..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          <div ref={resultsRef}>
            {filteredResults.length > 0 ? (
              filteredResults.map((result, index) => (
                <div
                  key={`${result.url}-${index}`}
                  onClick={() => handleSelect(result)}
                  className={`p-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                    index === selectedIndex ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">
                      {result.displayName}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 capitalize">
                      {result.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500 truncate">
                      {result.url.replace('http://localhost:5173', '')}
                    </span>
                    <div className="flex items-center text-xs text-gray-400">
                      <ArrowBigRightDash  className="h-3 w-3 mr-1" />
                      Enter
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      {isOpen && filteredResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-gray-50 border border-gray-200 rounded-b-lg text-xs text-gray-500 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <ArrowUp className="h-3 w-3 mr-1" /> <ArrowDown className="h-3 w-3 mr-1" />
              Navigate
            </span>
            <span className="flex items-center">
              <ArrowBigRightDash  className="h-3 w-3 mr-1" />
              Select
            </span>
            <span>Esc to close</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;