import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
          Найдите идеальную
          <span className="block text-yellow-300">квартиру для отдыха</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
          Тысячи уютных квартир по всему миру ждут вас
        </p>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Локация
              </label>
              <Input
                placeholder="Куда едем?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                Заезд
              </label>
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                Выезд
              </label>
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Icon name="Users" size={16} />
                Гости
              </label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="text-gray-900">
                  <SelectValue placeholder="Количество" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 гость</SelectItem>
                  <SelectItem value="2">2 гостя</SelectItem>
                  <SelectItem value="3">3 гостя</SelectItem>
                  <SelectItem value="4">4+ гостей</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full md:w-auto px-12 py-3 bg-purple-600 hover:bg-purple-700 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <Icon name="Search" size={20} className="mr-2" />
            Найти квартиру
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
