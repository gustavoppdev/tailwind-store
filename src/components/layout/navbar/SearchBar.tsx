"use client";

// React
import { useState } from "react";

// Next-Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Lucide Icons
import { Search } from "lucide-react";

const SearchBar = () => {
  const t = useTranslations("Layout.Navbar.filters");
  const router = useRouter();
  const [query, setQuery] = useState("");

  // 🔎 Redireciona para /collection?search=query
  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/collection?search=${encodeURIComponent(query.trim())}`);
  };

  // Atalho para Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder={t("searchPlaceholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full"
      />
      <Button variant="secondary" size="icon" onClick={handleSearch}>
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SearchBar;
