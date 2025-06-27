import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              🏠 ApartRent
            </h3>
            <p className="text-gray-300 mb-4">
              Лучший сервис аренды квартир для незабываемых путешествий.
            </p>
            <div className="flex gap-4">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                <Icon name="Facebook" size={20} />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                <Icon name="Twitter" size={20} />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                <Icon name="Instagram" size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Квартиры</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Москва
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Санкт-Петербург
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Сочи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Казань
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Пресса
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Безопасность
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Условия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Конфиденциальность
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ApartRent. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
