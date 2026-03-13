

import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aditi Sharma',
    course: 'M.Pharma',
    feedback:
      'The faculty and placement support were excellent. I got placed in a top MNC with a great package!',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    course: 'M.Pharma',
    feedback:
      'The interactive sessions and real-world projects helped me gain confidence and skills to ace interviews.',
    rating: 4,
  },
  {
    name: 'Neha Yadav',
    course: 'B.Pharma',
    feedback:
      'The exposure and mentorship I received were unmatched. A wonderful learning journey.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Student Testimonials</h2>
      <div className="grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            {/* Rating Stars */}
            <div className="flex mb-4 text-yellow-400">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-700 text-base italic mb-6">&ldquo;{t.feedback}&rdquo;</p>

            {/* Student Info */}
            <div className="mt-auto">
              <p className="text-lg font-semibold text-blue-700">{t.name}</p>
              <p className="text-sm text-gray-500">{t.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
