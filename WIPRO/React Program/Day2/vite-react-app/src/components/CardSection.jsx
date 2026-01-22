import Card from './Card'
import data from '../data/db.json'

function CardSection() {
  return (
    <section className="w-full py-12 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.courses.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CardSection;

