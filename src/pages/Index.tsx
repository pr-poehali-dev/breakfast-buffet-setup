import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CheckItem {
  id: string;
  name: string;
  checked: boolean;
}

interface Zone {
  id: number;
  title: string;
  icon: string;
  items: CheckItem[];
}

const Index = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [currentDate] = useState(new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));
  
  const [zones, setZones] = useState<Zone[]>([
    {
      id: 1,
      title: 'Чайная станция',
      icon: 'Coffee',
      items: [
        { id: '1-1', name: 'Кофемашины чистые, протертые', checked: false },
        { id: '1-2', name: 'Чайные пары (чашка + блюдце)', checked: false },
        { id: '1-3', name: 'Водонагреватель чистый', checked: false },
        { id: '1-4', name: 'Корзинка с сахаром полная', checked: false },
        { id: '1-5', name: 'Чайные ложки (минимум 15 шт)', checked: false },
        { id: '1-6', name: '12 чайников на стойке', checked: false },
        { id: '1-7', name: '6 фруктов, подписаны, с ложками', checked: false },
        { id: '1-8', name: '6 смузи', checked: false },
        { id: '1-9', name: 'Лимон на черной панели', checked: false },
        { id: '1-10', name: 'Томатный сок с приправами', checked: false },
        { id: '1-11', name: '4 вида напитков (вода, морс, соки)', checked: false },
        { id: '1-12', name: 'Хайболы (минимум 30 шт)', checked: false },
      ],
    },
    {
      id: 2,
      title: 'Правая часть стола',
      icon: 'Utensils',
      items: [
        { id: '2-1', name: '4 соуса (соевый, ореховый, чили, масло)', checked: false },
        { id: '2-2', name: '12 видов консервов, подписаны', checked: false },
        { id: '2-3', name: '3 вида салатов на железных скобах', checked: false },
        { id: '2-4', name: 'Свежие овощи (огурцы, перец, томаты)', checked: false },
        { id: '2-5', name: 'Колбасы (сервелат, буженина)', checked: false },
      ],
    },
    {
      id: 3,
      title: 'Горячая зона',
      icon: 'Flame',
      items: [
        { id: '3-1', name: 'Скрембл и бекон на мармите', checked: false },
        { id: '3-2', name: 'Гарниры на мармите', checked: false },
        { id: '3-3', name: 'Сосиски на мармите', checked: false },
        { id: '3-4', name: 'Два горячих блюда дня', checked: false },
        { id: '3-5', name: 'Сырники/запеканка/овощи', checked: false },
        { id: '3-6', name: 'Блины с начинкой', checked: false },
        { id: '3-7', name: 'Бульон с поварешкой', checked: false },
        { id: '3-8', name: 'Щипцы и ложки направлены вправо', checked: false },
      ],
    },
    {
      id: 4,
      title: 'Десерты и хлеб',
      icon: 'Cake',
      items: [
        { id: '4-1', name: 'Пироги (брусничный, смородиновый, торфяной, датский)', checked: false },
        { id: '4-2', name: 'Сочни и пирожные на этажерке', checked: false },
        { id: '4-3', name: 'Джем перед тостером', checked: false },
        { id: '4-4', name: 'Тостер с хлебцами и гриссини', checked: false },
        { id: '4-5', name: 'Тостовый хлеб левее тостера', checked: false },
        { id: '4-6', name: 'Нутелла с тарелкой и ложкой', checked: false },
        { id: '4-7', name: 'Печенье на металлической этажерке', checked: false },
        { id: '4-8', name: '4 вида хлеба, масло, кремета', checked: false },
        { id: '4-9', name: 'Мед в сотах с тарелками и ножом', checked: false },
      ],
    },
    {
      id: 5,
      title: 'Кофе-машина и напитки',
      icon: 'Wine',
      items: [
        { id: '5-1', name: 'Чайные пары, ложки, блюдца', checked: false },
        { id: '5-2', name: 'Фруктовая корзина, подписана', checked: false },
        { id: '5-3', name: 'Вода газированная (минимум 10 бутылок)', checked: false },
        { id: '5-4', name: 'Вода негазированная (минимум 10 бутылок)', checked: false },
        { id: '5-5', name: 'Игристое вино брют (10 флейт)', checked: false },
        { id: '5-6', name: 'Игристое вино полусладкое (10 флейт)', checked: false },
      ],
    },
    {
      id: 6,
      title: 'Табличка загрузки',
      icon: 'ClipboardList',
      items: [
        { id: '6-1', name: 'Табличка взята у супервайзера', checked: false },
        { id: '6-2', name: 'Низкая загрузка (7:00-8:30)', checked: false },
        { id: '6-3', name: 'Средняя загрузка (8:30-9:30)', checked: false },
        { id: '6-4', name: 'Полная загрузка (9:30-11:00)', checked: false },
        { id: '6-5', name: 'Листок с количеством гостей на хосте', checked: false },
      ],
    },
    {
      id: 7,
      title: 'Открытие зала',
      icon: 'DoorOpen',
      items: [
        { id: '7-1', name: 'Шторы открыты к 7:00', checked: false },
        { id: '7-2', name: 'Двери открыты к 7:00', checked: false },
        { id: '7-3', name: 'Телевизоры включены к 7:00', checked: false },
        { id: '7-4', name: 'Свет в зале (4 выключателя справа)', checked: false },
        { id: '7-5', name: 'Светильники у столов 1 и 5', checked: false },
      ],
    },
    {
      id: 8,
      title: 'Чек-лист',
      icon: 'CheckSquare',
      items: [
        { id: '8-1', name: 'Проверены все зоны', checked: false },
        { id: '8-2', name: 'Чек-лист заполнен', checked: false },
        { id: '8-3', name: 'Чек-лист отдан супервайзеру', checked: false },
      ],
    },
  ]);

  const toggleItem = (zoneId: number, itemId: string) => {
    setZones(zones.map(zone => {
      if (zone.id === zoneId) {
        return {
          ...zone,
          items: zone.items.map(item =>
            item.id === itemId ? { ...item, checked: !item.checked } : item
          ),
        };
      }
      return zone;
    }));
  };

  const resetAll = () => {
    setZones(zones.map(zone => ({
      ...zone,
      items: zone.items.map(item => ({ ...item, checked: false })),
    })));
    setEmployeeName('');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    const report = `ОТЧЕТ ПО ШВЕДСКОМУ СТОЛУ\n\nДата: ${currentDate}\nОтветственный: ${employeeName || 'Не указан'}\n\nОбщая готовность: ${checkedItems}/${totalItems} (${Math.round(progressPercentage)}%)\n\n`;
    
    const zonesReport = zones.map(zone => {
      const completed = zone.items.filter(item => item.checked).length;
      const total = zone.items.length;
      let zoneText = `${zone.title} (${completed}/${total})\n`;
      zone.items.forEach(item => {
        zoneText += `  ${item.checked ? '✓' : '✗'} ${item.name}\n`;
      });
      return zoneText;
    }).join('\n');

    const fullReport = report + zonesReport;
    const blob = new Blob([fullReport], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `отчет_${new Date().toLocaleDateString('ru-RU').replace(/\./g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const totalItems = zones.reduce((acc, zone) => acc + zone.items.length, 0);
  const checkedItems = zones.reduce(
    (acc, zone) => acc + zone.items.filter(item => item.checked).length,
    0
  );
  const progressPercentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4 gap-4">
            <h1 className="text-4xl font-bold text-foreground">Шведский стол</h1>
            <div className="flex gap-2 print:hidden">
              <Button
                onClick={handlePrint}
                variant="default"
                className="hover-scale"
              >
                <Icon name="Printer" size={16} className="mr-2" />
                Печать
              </Button>
              <Button
                onClick={handleExport}
                variant="default"
                className="hover-scale"
              >
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
              <Button
                onClick={resetAll}
                variant="outline"
                className="hover-scale"
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить
              </Button>
            </div>
          </div>

          <Card className="p-6 bg-card shadow-sm mb-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="employee" className="text-sm font-medium mb-2 block">
                  Ответственный сотрудник
                </Label>
                <div className="flex items-center gap-2">
                  <Icon name="User" size={20} className="text-muted-foreground" />
                  <Input
                    id="employee"
                    placeholder="Введите ФИО"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Дата проверки
                </Label>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={20} className="text-muted-foreground" />
                  <div className="flex-1 px-3 py-2 bg-secondary/50 rounded-md text-sm">
                    {currentDate}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Общая готовность</p>
                <p className="text-3xl font-bold text-primary">
                  {checkedItems} / {totalItems}
                </p>
              </div>
              <Badge
                variant={progressPercentage === 100 ? 'default' : 'secondary'}
                className="text-lg px-4 py-2"
              >
                {Math.round(progressPercentage)}%
              </Badge>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 animate-fade-in">
          {zones.map((zone, index) => {
            const zoneProgress =
              zone.items.length > 0
                ? (zone.items.filter(item => item.checked).length / zone.items.length) * 100
                : 0;

            return (
              <Card
                key={zone.id}
                className="p-6 hover-scale transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={zone.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {zone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {zone.items.filter(item => item.checked).length} /{' '}
                        {zone.items.length}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={zoneProgress === 100 ? 'default' : 'secondary'}
                    className="px-3"
                  >
                    {Math.round(zoneProgress)}%
                  </Badge>
                </div>

                <Progress value={zoneProgress} className="mb-4 h-2" />

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="items" className="border-none">
                    <AccordionTrigger className="text-sm hover:no-underline py-2">
                      Показать задачи
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {zone.items.map(item => (
                          <div
                            key={item.id}
                            className="flex items-start gap-3 group"
                          >
                            <Checkbox
                              id={item.id}
                              checked={item.checked}
                              onCheckedChange={() => toggleItem(zone.id, item.id)}
                              className="mt-0.5"
                            />
                            <label
                              htmlFor={item.id}
                              className={`text-sm flex-1 cursor-pointer transition-all ${
                                item.checked
                                  ? 'line-through text-muted-foreground'
                                  : 'text-foreground group-hover:text-primary'
                              }`}
                            >
                              {item.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20 animate-fade-in">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-primary mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">Важная информация</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Все действия выполняются каждое утро</li>
                <li>• Чек-лист заполняется и отдается супервайзеру</li>
                <li>• Зал открывается к 7:00</li>
                <li>• Нумерация столов: первый у стены, далее змейкой (2-18)</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;