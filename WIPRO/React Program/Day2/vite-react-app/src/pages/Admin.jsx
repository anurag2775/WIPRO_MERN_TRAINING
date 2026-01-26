function Admin() {
  return (
    <div className="w-full p-10 min-h-[70vh] bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

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
