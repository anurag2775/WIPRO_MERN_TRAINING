export default function Card({ title, description }) {
  return (
    <div className="bg-white p-4 rounded shadow border border-gray-300 hover:shadow-lg transition">
      <h3 className="text-gray-900 text-lg font-semibold">
        {title}
      </h3>
      <p className="text-gray-600 mt-2">
        {description}
      </p>
      <button className="mt-4 text-orange-500 font-medium hover:underline">
        View Details
      </button>
    </div>
  );
}
