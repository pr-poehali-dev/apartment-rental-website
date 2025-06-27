import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const apartments = [
  {
    id: 1,
    title: "Стильная студия в центре Москвы",
    location: "Москва, Центр",
    price: 4500,
    rating: 4.9,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop",
    amenities: ["Wi-Fi", "Кухня", "Стиральная машина"],
  },
  {
    id: 2,
    title: "Уютная квартира у моря",
    location: "Сочи, Центральный район",
    price: 3200,
    rating: 4.8,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop",
    amenities: ["Балкон", "Кондиционер", "Парковка"],
  },
  {
    id: 3,
    title: "Просторные апартаменты",
    location: "Санкт-Петербург, Невский",
    price: 5800,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop",
    amenities: ["2 спальни", "Терраса", "Джакузи"],
  },
];

const FeaturedApartments = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Популярные квартиры
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Самые востребованные и высоко оцененные варианты для вашего отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                    <Icon
                      name="Star"
                      size={12}
                      className="mr-1 text-yellow-500 fill-current"
                    />
                    {apartment.rating}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {apartment.title}
                </h3>
                <p className="text-gray-600 flex items-center mb-3">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  {apartment.location}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {apartment.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">
                      ₽{apartment.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">/ночь</span>
                    <p className="text-sm text-gray-500 mt-1">
                      {apartment.reviews} отзывов
                    </p>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Забронировать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Показать все квартиры
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApartments;
