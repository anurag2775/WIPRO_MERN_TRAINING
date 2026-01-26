import useTheme from "../hooks/useTheme";

function Admin() {
  const { theme, toggleTheme } = useTheme();

  const pageBg = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800 text-white border border-gray-700"
      : "bg-white text-gray-800 border border-gray-200";
  const muted = theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`w-full p-10 min-h-[70vh] ${pageBg}`}>
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
          <p className={`mt-2 ${muted}`}>
            Current Theme: <strong>{theme}</strong>
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded border hover:bg-orange-500 hover:text-white transition"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        <div className={`${cardBg} p-6 rounded shadow`}>
          <h3 className="font-semibold mb-2">Manage Courses</h3>
          <p className={muted}>Add, update or delete courses.</p>
        </div>

        <div className={`${cardBg} p-6 rounded shadow`}>
          <h3 className="font-semibold mb-2">View Users</h3>
          <p className={muted}>Check registered users.</p>
        </div>

        <div className={`${cardBg} p-6 rounded shadow`}>
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className={muted}>Update platform settings.</p>
        </div>

      </div>
    </div>
  );
}

export default Admin;



