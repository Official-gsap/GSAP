import React from "react";

interface SearchSuggestionsProps {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
}

export function SearchSuggestions({
  suggestions,
  onSelectSuggestion,
}: SearchSuggestionsProps) {
  return (
    <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="cursor-pointer p-2 hover:bg-gray-100"
          onClick={() => onSelectSuggestion(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
