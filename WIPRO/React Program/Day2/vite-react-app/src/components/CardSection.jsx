import Card from  './Card'

function CardSection() {
  const items = [
    {
      title: "React Mastery",
      description: "Learn React from beginner to advanced level."
    },
    {
      title: "Java Programming",
      description: "Master core Java with hands-on projects."
    },
    {
      title: "Python for Data Science",
      description: "Analyze data and build ML models using Python."
    },
    {
      title: "Cyber Security",
      description: "Protect systems and networks from attacks."
    },
    {
      title: "AWS Cloud",
      description: "Deploy and manage apps on AWS."
    },
    {
      title: "Full Stack Dev",
      description: "Build real-world full stack applications."
    }
  ];

  return (
    <section className="w-full py-12 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
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
