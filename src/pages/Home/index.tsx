import { Banner } from '../../components/Banner'
import { Card } from '../../components/Card'

import ImgBanner from '../../assets/img/Banner1.png'

export function Home() {
  return (
    <>
      <Banner
        bgImage={ImgBanner}
        title="Planeje seu plano de dieta esta semana"
        text="O caminho para uma vida mais saudável começa com um planejamento cuidadoso. Não há momento melhor do que agora para começar a moldar sua jornada de bem-estar. Com nosso aplicativo, você pode planejar sua dieta para a semana inteira com facilidade. Personalize suas refeições, defina metas realistas e acompanhe seu progresso. Junte-se a nós nessa jornada de transformação pessoal e conquiste uma vida mais saudável, um passo de cada vez!"
      ></Banner>
      <Card
        imageUrl="https://monkeybuzz.com.br/wp-content/uploads/2016/06/alex-turner-5775125610f7c-768x510.jpg"
        title="Alex Turner"
        subtitle="Fitness Trainer"
        exercise="Legs"
        dificulty="Begginer"
        workout="Lower Body"
      ></Card>
    </>
  )
}
