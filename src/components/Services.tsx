import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Shield",
    title: "Безопасность",
    description:
      "Все квартиры проверены и застрахованы. Ваша безопасность — наш приоритет.",
  },
  {
    icon: "Clock",
    title: "24/7 Поддержка",
    description:
      "Круглосуточная поддержка поможет решить любые вопросы в любое время.",
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description:
      "Принимаем все виды карт. Безопасные платежи через защищенные каналы.",
  },
  {
    icon: "MapPin",
    title: "Лучшие локации",
    description: "Квартиры в самых удобных и популярных районах городов.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали сервис, который делает аренду квартир простой и надежной
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:translateY(-2px) transition-all duration-300"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Icon
                  name={service.icon}
                  size={24}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
