function LanguageSelector({ selectedLanguage, setSelectedLanguage }) {
  console.log("🔹 Language Selector Rendered | Current:", selectedLanguage);

  return (
    <div className="language-selector">
      <label>Select Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => {
          const newLang = e.target.value;
          console.log("🟢 Language Changed:", newLang);
          setSelectedLanguage(newLang);
        }}
        className="language-dropdown"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
        <option value="csharp">C#</option>
        <option value="ruby">Ruby</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
