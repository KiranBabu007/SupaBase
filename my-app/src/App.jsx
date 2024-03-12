import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://kpcrhsjarrahwmiprzrg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwY3Joc2phcnJhaHdtaXByenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNzAwODEsImV4cCI6MjAyNTg0NjA4MX0.lS64SUBKLH3DHxlkcOu62KIxqlMzqwk_LhWkMkcdL2Y");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;