import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-heading tracking-wider">КСЕНИЯ КУЛБАЦКАЯ</h1>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide">Обо мне</a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide">Услуги</a>
              <a href="#approach" className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide">Подход</a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide">Контакты</a>
              <Button asChild className="ml-4">
                <a href="#booking">ЗАПИСАТЬСЯ</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-7xl md:text-8xl font-heading leading-none tracking-tight">
                  ПСИХОЛОГИЯ<br />
                  БЕЗ<br />
                  <span className="text-accent">КОМПРОМИССОВ</span>
                </h2>
                <div className="w-24 h-1 bg-accent"></div>
              </div>
              <p className="text-xl leading-relaxed max-w-lg">
                Провокативная терапия для тех, кто готов к реальным изменениям. 
                Никаких пустых разговоров — только действия и результаты.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="px-8 py-6 text-base" asChild>
                  <a href="#booking">НАЧАТЬ РАБОТУ</a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base" asChild>
                  <a href="#approach">МОЙ ПОДХОД</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/3893b190-ff83-4035-a463-5b48f46ff2a8/files/e1c601c0-41db-4752-b3cc-eb1dc806bd78.jpg" 
                  alt="Ксения Кулбацкая" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent opacity-10 rounded-sm -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl md:text-6xl font-heading mb-8 leading-tight">
            Я НЕ РАБОТАЮ С ТЕМИ,<br />КТО ИЩЕТ УТЕШЕНИЯ
          </h3>
          <p className="text-xl opacity-90">
            Если вы готовы к честному разговору и реальным переменам — добро пожаловать
          </p>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-sm font-medium text-accent mb-4 tracking-wider uppercase">Обо мне</div>
                <h2 className="text-5xl md:text-6xl font-heading mb-8 leading-tight">ПРОВОКАЦИЯ КАК МЕТОД</h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  8 лет практики в психологии. Сертифицированный специалист по когнитивно-поведенческой 
                  терапии и провокативному подходу.
                </p>
                <p className="font-medium text-xl">
                  Мой метод — это не мягкие объятия и сочувствие. Это зеркало, которое показывает правду. 
                  Иногда неудобную. Всегда честную.
                </p>
                <p>
                  Работаю с теми, кто устал от бесконечной рефлексии и готов действовать. 
                  Результат важнее процесса. Изменения важнее комфорта.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-heading mb-2">200+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading mb-2">8</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading mb-2">5</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Сертификаций</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/3893b190-ff83-4035-a463-5b48f46ff2a8/files/f5ecf02c-5319-4681-8adc-27066c77ee55.jpg" 
                  alt="О методе" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-32 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-accent mb-4 tracking-wider uppercase">Мой подход</div>
            <h2 className="text-5xl md:text-6xl font-heading mb-6">КАК Я РАБОТАЮ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Провокативная терапия — это не про жалость, а про пробуждение
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-sm bg-accent flex items-center justify-center mb-6">
                  <Icon name="Target" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading">ПРЯМОТА</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Я говорю то, о чем другие молчат. Без обиняков и политкорректности. 
                  Правда может быть неудобной, но она освобождает.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-sm bg-accent flex items-center justify-center mb-6">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading">ДЕЙСТВИЕ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Меньше разговоров о проблеме — больше конкретных шагов к решению. 
                  Изменения начинаются с действий, а не с понимания.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-sm bg-accent flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading">РЕЗУЛЬТАТ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Моя задача — не поддержать вас в страданиях, а вывести из них. 
                  Каждая сессия должна приближать к цели, а не просто приносить облегчение.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-accent mb-4 tracking-wider uppercase">Услуги</div>
            <h2 className="text-5xl md:text-6xl font-heading mb-6">ФОРМАТЫ РАБОТЫ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-2xl transition-all">
              <CardHeader className="space-y-6">
                <CardTitle className="text-3xl font-heading">ОДНА СЕССИЯ</CardTitle>
                <CardDescription className="text-base">
                  Для точечного запроса или первого знакомства с методом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-accent" />
                    <span>60 минут интенсивной работы</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Video" size={20} className="text-accent" />
                    <span>Онлайн или очно</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" size={20} className="text-accent" />
                    <span>План действий после сессии</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-4xl font-heading mb-6">5 000 ₽</div>
                  <Button className="w-full py-6 text-base" asChild>
                    <a href="#booking">ЗАПИСАТЬСЯ</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-2xl transition-all bg-accent/5">
              <CardHeader className="space-y-6">
                <div className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded uppercase tracking-wide">
                  Популярный выбор
                </div>
                <CardTitle className="text-3xl font-heading">ПАКЕТ 5 СЕССИЙ</CardTitle>
                <CardDescription className="text-base">
                  Для системной работы и глубоких изменений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Package" size={20} className="text-accent" />
                    <span>5 встреч по 60 минут</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Calendar" size={20} className="text-accent" />
                    <span>Регулярная поддержка</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Target" size={20} className="text-accent" />
                    <span>Индивидуальная стратегия</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl line-through text-muted-foreground">25 000 ₽</span>
                    <span className="text-4xl font-heading">22 000 ₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">Экономия 3 000 ₽</p>
                  <Button className="w-full py-6 text-base" asChild>
                    <a href="#booking">НАЧАТЬ РАБОТУ</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            <blockquote className="text-3xl md:text-4xl font-heading leading-snug text-center">
              "Комфорт — это враг роста. Настоящие изменения начинаются там, 
              где заканчивается зона комфорта"
            </blockquote>
            <div className="text-center text-muted-foreground">— Ксения Кулбацкая</div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-accent mb-4 tracking-wider uppercase">Частые вопросы</div>
            <h2 className="text-5xl md:text-6xl font-heading">ЧЕСТНЫЕ ОТВЕТЫ</h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Подойдет ли мне ваш подход?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Если вы ищете жалость и утешение — нет. Если готовы к честному разговору и реальным 
                  изменениям — да. Мой метод подходит тем, кто устал от бесконечных разговоров без результата.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Что такое провокативная терапия?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Это метод, который использует провокацию и юмор для активизации внутренних ресурсов клиента. 
                  Я не буду гладить по голове — я буду бросать вам вызов, чтобы вы увидели свои возможности.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Сколько нужно сессий?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Зависит от запроса. Некоторым хватает одной встречи для толчка к изменениям. 
                  Для системной работы рекомендую пакет из 5 сессий. Я не заинтересована держать вас годами.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Как проходят сессии?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Онлайн через Zoom или лично в Москве. 60 минут интенсивной работы. После каждой сессии — 
                  конкретный план действий. Никаких пустых разговоров о чувствах.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading mb-6">ГОТОВЫ К ПЕРЕМЕНАМ?</h2>
            <p className="text-xl opacity-90">
              Запишитесь на первую консультацию — и начните действовать уже сегодня
            </p>
          </div>
          <Card className="border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Email или Telegram</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Для связи"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Опишите ваш запрос</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Кратко расскажите, что привело вас сюда"
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full py-6 text-base">
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Я отвечу в течение 24 часов и предложу удобное время для первой встречи
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-heading mb-8">КОНТАКТЫ</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Instagram" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium mb-1">Instagram</div>
                    <a href="https://www.instagram.com/k.kulbackaya" target="_blank" rel="noopener noreferrer" 
                       className="text-muted-foreground hover:text-accent transition-colors">
                      @k.kulbackaya
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:info@kulbackaya.ru" className="text-muted-foreground hover:text-accent transition-colors">
                      info@kulbackaya.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" size={24} className="text-accent mt-1" />
                  <div>
                    <div className="font-medium mb-1">Telegram</div>
                    <a href="https://t.me/kulbackaya" className="text-muted-foreground hover:text-accent transition-colors">
                      @kulbackaya
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/3893b190-ff83-4035-a463-5b48f46ff2a8/files/8fdfd6b8-897e-45b6-b35e-ebd9bd7b6539.jpg" 
                  alt="Контакты" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-heading tracking-wider">КСЕНИЯ КУЛБАЦКАЯ</div>
            <div className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/k.kulbackaya" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://t.me/kulbackaya" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
