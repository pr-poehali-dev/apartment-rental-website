import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    location: "Москва",
    rating: 5,
    text: "Отличный сервис! Нашла идеальную квартиру в центре Петербурга за 10 минут. Все было именно как на фотографиях, очень чисто и уютно.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    stayLocation: "Санкт-Петербург",
  },
  {
    id: 2,
    name: "Михаил Соколов",
    location: "Екатеринбург",
    rating: 5,
    text: "Путешествую по работе часто. Этот сервис стал моим спасением - всегда нахожу комфортное жилье по хорошей цене. Рекомендую!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    stayLocation: "Казань",
  },
  {
    id: 3,
    name: "Елена Иванова",
    location: "Сочи",
    rating: 4,
    text: "Семейный отдых удался на все 100%! Квартира была просторной, с отличным видом на море. Дети в восторге, обязательно вернемся.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&crop=face",
    stayLocation: "Анапа",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Отзывы наших гостей
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 50,000 довольных путешественников уже выбрали нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:bg-white border border-transparent hover:border-gray-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>

              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700"
              >
                <Icon name="MapPin" size={12} className="mr-1" />
                Отдыхал в {testimonial.stayLocation}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.9</div>
              <div className="text-sm text-gray-600">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600">Довольных гостей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15K+</div>
              <div className="text-sm text-gray-600">Проверенных квартир</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
