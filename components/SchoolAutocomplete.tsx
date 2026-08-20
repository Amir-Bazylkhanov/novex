import React, { useEffect, useMemo, useRef, useState } from 'react';
import { SCHOOLS } from '../constants/schools.ts';

interface SchoolAutocompleteProps {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  extraSchools?: string[];
  leadingIcon?: React.ReactNode;
  inputClassName: string;
  ariaInvalid?: boolean;
  ariaDescribedBy?: string;
}

interface Option {
  key: string;
  label: string;
  value: string;
}

const normalize = (s: string): string => s.trim().toLowerCase().replace(/ё/g, 'е');

/* Students search by the network abbreviations everyone actually uses, while
   the dataset stores official full names — so matching also runs against the
   well-known aliases of the big school networks. */
const aliasFor = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes('назарбаев интеллектуальная')) return ' ниш nis';
  if (n.includes('білім-инновация')) return ' бил bil ктл казахско-турецкий лицей';
  if (n.includes('физико-математическая школа')) return ' рфмш';
  return '';
};

const SchoolAutocomplete: React.FC<SchoolAutocompleteProps> = ({
  id,
  value,
  onChange,
  placeholder,
  extraSchools,
  leadingIcon,
  inputClassName,
  ariaInvalid,
  ariaDescribedBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = `${id}-listbox`;

  const options = useMemo<Option[]>(() => {
    const q = normalize(value);
    if (q.length < 2) return [];

    const seen = new Set<string>();
    const result: Option[] = [];

    for (const name of extraSchools ?? []) {
      const norm = normalize(name);
      if (seen.has(norm)) continue;
      if (norm.includes(q)) {
        seen.add(norm);
        result.push({ key: `extra:${name}`, label: name, value: name });
      }
    }

    for (const school of SCHOOLS) {
      if (result.length >= 8) break;
      // Network schools (НИШ, БИЛ) repeat the same official name in many
      // cities, so both the dedup key and the picked value carry the city.
      const norm = `${normalize(school.name)}|${normalize(school.city)}`;
      if (seen.has(norm)) continue;
      if (
        normalize(school.name).includes(q) ||
        normalize(school.city).includes(q) ||
        aliasFor(school.name).includes(q)
      ) {
        seen.add(norm);
        result.push({
          key: `school:${school.name}:${school.city}`,
          label: `${school.name} — ${school.city}`,
          value: `${school.name}, ${school.city}`,
        });
      }
    }

    return result.slice(0, 8);
  }, [value, extraSchools]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [value]);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  const showDropdown = isOpen && options.length > 0;

  const selectOption = (opt: Option) => {
    onChange(opt.value);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) {
      if (e.key === 'ArrowDown' && options.length > 0) {
        setIsOpen(true);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((i) => (i + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((i) => (i <= 0 ? options.length - 1 : i - 1));
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < options.length) {
        e.preventDefault();
        selectOption(options[highlightedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {leadingIcon}
      <input
        id={id}
        type="text"
        role="combobox"
        aria-expanded={showDropdown}
        aria-controls={showDropdown ? listboxId : undefined}
        aria-autocomplete="list"
        aria-activedescendant={
          showDropdown && highlightedIndex >= 0 ? `${id}-option-${highlightedIndex}` : undefined
        }
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        autoComplete="off"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => {
          if (options.length > 0) setIsOpen(true);
        }}
        onBlur={() => {
          window.setTimeout(() => setIsOpen(false), 120);
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={inputClassName}
      />
      {showDropdown && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1.5 max-h-64 overflow-y-auto rounded-xl border border-line bg-white py-1.5 shadow-[0_12px_32px_rgba(17,26,42,0.12)]"
        >
          {options.map((opt, index) => (
            <li key={opt.key} role="presentation">
              <button
                id={`${id}-option-${index}`}
                type="button"
                role="option"
                aria-selected={index === highlightedIndex}
                onMouseEnter={() => setHighlightedIndex(index)}
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => selectOption(opt)}
                className={`flex w-full items-center px-3.5 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                  index === highlightedIndex ? 'bg-mist/30 text-teal-dark' : 'text-ink hover:bg-mist/30'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SchoolAutocomplete;
