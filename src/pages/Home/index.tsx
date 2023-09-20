import { Banner } from '../../components/Banner'
import { Card } from '../../components/Card'

import ImgBanner from '../../assets/img/Banner1.png'

export function Home() {
  return (
    <>
      <h1>Overview oi oi</h1>
      <Banner
        bgImage={ImgBanner}
        title="Plan Your Diet Plan This Week"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eligendi itaque quaerat voluptas quidem minus nihil quasi alias, officia delectus, recusandae rerum eum ea, iure non exercitationem temporibus nisi dicta."
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
