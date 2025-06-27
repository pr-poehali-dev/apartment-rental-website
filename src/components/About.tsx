import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const stats = [
  { number: "10K+", label: "Довольных гостей" },
  { number: "500+", label: "Квартир в каталоге" },
  { number: "50+", label: "Городов" },
  { number: "4.9", label: "Средний рейтинг" },
];

const About = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat mb-6">
              О нашей компании
            </h2>
            <p className="text-xl mb-6 opacity-90 leading-relaxed">
              Мы помогаем путешественникам найти идеальное жилье уже более 5
              лет. Наша миссия — сделать каждую поездку незабываемой.
            </p>
            <p className="text-lg mb-8 opacity-80 leading-relaxed">
              Тщательно отбираем каждую квартиру, проверяем хозяев и следим за
              качеством. Ваш комфорт и безопасность — наша главная задача.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
