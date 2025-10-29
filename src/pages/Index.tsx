import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">Ксения Кулбацкая</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">Обо мне</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#methods" className="text-sm hover:text-primary transition-colors">Методы</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button asChild>
              <a href="#booking">Записаться</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Психология, которая<br />
                <span className="text-primary">провоцирует изменения</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Работаю с теми, кто устал от бесконечных разговоров о чувствах без реального результата. 
                Мой подход — честный, прямой и эффективный.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <a href="#booking">Записаться на консультацию</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-secondary animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/3893b190-ff83-4035-a463-5b48f46ff2a8/files/b6eea503-69f3-4b64-ab0b-5c3dcc4bd2c4.jpg" 
                alt="Ксения Кулбацкая" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-accent">
              <img 
                src="https://cdn.poehali.dev/projects/3893b190-ff83-4035-a463-5b48f46ff2a8/files/eeb96782-dda0-4ad0-a607-c5ba52dbe5fc.jpg" 
                alt="О психологе" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Обо мне</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Психолог с 8-летним опытом работы. Сертифицированный специалист по когнитивно-поведенческой 
                  терапии и гештальт-подходу.
                </p>
                <p className="leading-relaxed">
                  Образование: МГУ им. Ломоносова, факультет психологии. Дополнительное обучение в Институте 
                  практической психологии и психоанализа.
                </p>
                <p className="leading-relaxed font-semibold text-foreground">
                  Моя философия: изменения происходят не от понимания, а от действий. Я помогаю не просто 
                  осознать проблему, а научиться действовать по-новому.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="text-sm">8+ лет практики</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="text-sm">200+ клиентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-primary" size={20} />
                  <span className="text-sm">5 сертификаций</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите формат работы, который подходит именно вам
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Индивидуальная консультация</CardTitle>
                <CardDescription>Онлайн или очно</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Персональная работа над вашим запросом. Глубокий анализ ситуации и конкретный план действий.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm">60 минут</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Video" size={16} className="text-primary" />
                    <span className="text-sm">Zoom или личная встреча</span>
                  </div>
                </div>
                <p className="text-2xl font-heading font-bold mb-4">5 000 ₽</p>
                <Button className="w-full" asChild>
                  <a href="#booking">Записаться</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Package" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Пакет из 5 сессий</CardTitle>
                <CardDescription>Для системной работы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Комплексная работа с проблемой. Идеально для глубоких изменений и формирования новых паттернов.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm">5 встреч по 60 минут</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingDown" size={16} className="text-primary" />
                    <span className="text-sm text-primary font-semibold">Экономия 4 000 ₽</span>
                  </div>
                </div>
                <p className="text-2xl font-heading font-bold mb-1">21 000 ₽</p>
                <p className="text-sm text-muted-foreground line-through mb-4">25 000 ₽</p>
                <Button className="w-full" asChild>
                  <a href="#booking">Записаться</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-heading">Парная терапия</CardTitle>
                <CardDescription>Для пар и партнёров</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Работа с отношениями, конфликтами и коммуникацией в паре. Помогаю найти общий язык.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm">90 минут</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Heart" size={16} className="text-primary" />
                    <span className="text-sm">Для двоих</span>
                  </div>
                </div>
                <p className="text-2xl font-heading font-bold mb-4">8 000 ₽</p>
                <Button className="w-full" asChild>
                  <a href="#booking">Записаться</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Методы работы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Интегративный подход, основанный на доказательных методах
          </p>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Brain" className="text-primary" size={20} />
                  </div>
                  Когнитивно-поведенческая терапия (КПТ)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работа с мыслями, убеждениями и поведенческими паттернами. Эффективна при тревоге, 
                  депрессии, фобиях. Фокус на конкретных изменениях здесь и сейчас.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Circle" className="text-primary" size={20} />
                  </div>
                  Гештальт-терапия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работа с актуальным опытом и осознанностью. Помогает завершить незавершённые ситуации, 
                  улучшить контакт с собой и другими, развить ответственность за свою жизнь.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Target" className="text-primary" size={20} />
                  </div>
                  Решение-фокусированная терапия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Концентрация на решениях, а не на проблемах. Поиск ресурсов и исключений из проблемы. 
                  Краткосрочный подход для быстрых результатов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">
            Что говорят те, кто уже прошёл путь изменений
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-secondary/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading text-xl text-primary">А</span>
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg">Анна, 32 года</CardTitle>
                    <p className="text-sm text-muted-foreground">Работа с тревогой</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Ксения помогла мне не просто понять причины моей тревоги, но и научила конкретным 
                  техникам работы с ней. Через 5 сессий я чувствую себя совершенно иначе — спокойнее 
                  и увереннее в своих решениях."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading text-xl text-primary">М</span>
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg">Михаил, 28 лет</CardTitle>
                    <p className="text-sm text-muted-foreground">Кризис в отношениях</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Мы с партнёршей были на грани расставания. Ксения помогла нам увидеть наши паттерны 
                  общения и научила разговаривать друг с другом по-новому. Сейчас наши отношения стали 
                  намного глубже и честнее."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading text-xl text-primary">Е</span>
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg">Елена, 41 год</CardTitle>
                    <p className="text-sm text-muted-foreground">Поиск себя</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "После развода чувствовала себя потерянной. Ксения не жалела меня, а провоцировала 
                  действовать и искать новые смыслы. Благодаря этому я не только пережила кризис, 
                  но и открыла для себя новые возможности."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading text-xl text-primary">Д</span>
                  </div>
                  <div>
                    <CardTitle className="font-heading text-lg">Дмитрий, 35 лет</CardTitle>
                    <p className="text-sm text-muted-foreground">Профессиональное выгорание</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Работа с Ксенией помогла мне разобраться в моих ценностях и понять, что для меня 
                  действительно важно. Её прямой подход сначала удивил, но именно это мне и нужно было. 
                  Теперь я принимаю решения осознанно."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Блог</h2>
          <p className="text-center text-muted-foreground mb-12">
            Статьи о психологии, отношениях и личностном росте
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
              <div className="h-48 bg-accent overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/3893b190-ff83-4035-a463-5b48f46ff2a8/files/b40da521-a74a-4255-9772-e38ae7359895.jpg" 
                  alt="Статья 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-primary mb-2">Психология отношений</p>
                <CardTitle className="font-heading">Почему конфликты — это нормально</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Разбираемся, почему споры и разногласия — естественная часть здоровых отношений и как 
                  научиться конфликтовать конструктивно.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>5 мин чтения</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
              <div className="h-48 bg-accent overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Статья 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-primary mb-2">Работа с тревогой</p>
                <CardTitle className="font-heading">Тревога: враг или союзник?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Как перестать бороться с тревогой и научиться использовать её сигналы для понимания 
                  своих истинных потребностей.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>7 мин чтения</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
              <div className="h-48 bg-accent overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Статья 3" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-primary mb-2">Личностный рост</p>
                <CardTitle className="font-heading">Границы: как сказать "нет" без вины</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Почему важно уметь отказывать и как научиться защищать свои границы, не разрушая 
                  отношения с близкими.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>6 мин чтения</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь со мной удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Способы связи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Instagram" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Instagram</p>
                    <a 
                      href="https://www.instagram.com/k.kulbackaya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @k.kulbackaya
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:k.kulbackaya@example.com" 
                      className="text-primary hover:underline"
                    >
                      k.kulbackaya@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageSquare" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telegram</p>
                    <a 
                      href="https://t.me/kkulbackaya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @kkulbackaya
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    <Icon name="Clock" className="inline mr-2" size={16} />
                    Отвечаю в течение 24 часов
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Как проходит онлайн-консультация?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Онлайн-консультация проходит через Zoom. После записи вы получите ссылку на встречу. 
                      Длительность сессии — 60 минут.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Сколько сессий нужно для результата?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Это индивидуально. Некоторым клиентам достаточно 3-5 встреч, другим требуется 
                      более длительная работа. Обычно первые изменения заметны уже после 2-3 сессий.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Можно ли отменить запись?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Да, но желательно предупредить минимум за 24 часа. При отмене менее чем за 24 часа 
                      сессия считается проведённой.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Гарантируете ли вы конфиденциальность?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Абсолютно. Вся информация, которую вы делитесь на сессиях, остаётся строго 
                      конфиденциальной. Это основа профессиональной этики психолога.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Записаться на консультацию</h2>
            <p className="text-muted-foreground">
              Заполните форму, и я свяжусь с вами в течение 24 часов для согласования времени встречи
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email или телефон *
                  </label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Как с вами связаться?"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Расскажите о вашем запросе
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Опишите кратко, с чем хотели бы поработать..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    required 
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground">
                    Я согласен(на) на обработку персональных данных и ознакомлен(а) с политикой 
                    конфиденциальности
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  После отправки формы я свяжусь с вами для уточнения деталей и согласования времени встречи
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary/30 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Ксения Кулбацкая</h3>
              <p className="text-sm text-muted-foreground">
                Психолог, специалист по КПТ и гештальт-терапии. Помогаю людям создавать реальные 
                изменения в жизни.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  Обо мне
                </a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
                <a href="#methods" className="block text-muted-foreground hover:text-primary transition-colors">
                  Методы работы
                </a>
                <a href="#reviews" className="block text-muted-foreground hover:text-primary transition-colors">
                  Отзывы
                </a>
                <a href="#blog" className="block text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: k.kulbackaya@example.com</p>
                <p>Instagram: @k.kulbackaya</p>
                <p>Telegram: @kkulbackaya</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Ксения Кулбацкая. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;