function About() {
  return (
    <div className="w-full p-10 bg-gray-50 min-h-[70vh]">
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About LearnHub
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          LearnHub is a modern online learning platform designed to help students
          and professionals build in-demand technical skills. We provide
          high-quality courses in software development, cloud computing,
          cybersecurity, and data science.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Our mission is to make learning accessible, practical, and career-focused.
          Each course is carefully designed with real-world projects and hands-on
          exercises so that learners are job-ready from day one.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a global platform that empowers learners to achieve their
              career goals through quality education.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver industry-relevant courses with expert guidance and
              practical learning experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Why Choose Us</h3>
            <p className="text-gray-600">
              Expert instructors, updated curriculum, hands-on projects, and
              dedicated learner support.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About

