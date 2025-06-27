import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const paymentMethods = [
  {
    id: "card",
    name: "Банковская карта",
    icon: "CreditCard",
    fee: "Без комиссии",
    time: "Мгновенно",
    popular: true,
  },
  {
    id: "sbp",
    name: "СБП",
    icon: "Smartphone",
    fee: "Без комиссии",
    time: "До 1 минуты",
    popular: false,
  },
  {
    id: "wallet",
    name: "Электронный кошелек",
    icon: "Wallet",
    fee: "1%",
    time: "До 5 минут",
    popular: false,
  },
];

const quickAmounts = [500, 1000, 2500, 5000, 10000];

const TopUp = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setAmount("");
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Пополнение баланса
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ пополнения и забронируйте квартиру мечты
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Текущий баланс */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 mb-1">Текущий баланс</p>
                <p className="text-3xl font-bold">₽12,450</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <Icon name="Wallet" size={24} />
              </div>
            </div>
          </div>

          {/* Быстрые суммы */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Выберите сумму
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {quickAmounts.map((value) => (
                <Button
                  key={value}
                  variant={amount === value.toString() ? "default" : "outline"}
                  className={`h-12 ${
                    amount === value.toString()
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }`}
                  onClick={() => handleQuickAmount(value)}
                >
                  ₽{value.toLocaleString()}
                </Button>
              ))}
            </div>

            <div className="relative">
              <Input
                placeholder="Или введите свою сумму"
                value={customAmount}
                onChange={(e) => handleCustomAmount(e.target.value)}
                className="pl-8 h-12 text-lg"
                type="number"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ₽
              </span>
            </div>
          </div>

          {/* Способы оплаты */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Способ пополнения
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                    selectedMethod === method.id
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          selectedMethod === method.id
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon name={method.icon} size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">
                            {method.name}
                          </span>
                          {method.popular && (
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              Популярно
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={12} />
                            {method.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Percent" size={12} />
                            {method.fee}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        selectedMethod === method.id
                          ? "border-purple-600 bg-purple-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопка пополнения */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full md:w-auto px-12 py-4 bg-purple-600 hover:bg-purple-700 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Пополнить на ₽{amount || customAmount || "0"}
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Средства поступят на баланс согласно выбранному способу оплаты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUp;
