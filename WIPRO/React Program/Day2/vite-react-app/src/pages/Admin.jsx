import useTheme from   '../hooks/useTheme'

function Admin() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full p-10 min-h-[70vh]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded border hover:bg-orange-500 hover:text-white transition"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <p className="mb-6 text-gray-500">
        Current Theme: <strong>{theme}</strong>
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Manage Courses</h3>
          <p className="text-gray-600">Add, update or delete courses.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">View Users</h3>
          <p className="text-gray-600">Check registered users.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Settings</h3>
          <p className="text-gray-600">Update platform settings.</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;

