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
        imageUrl="https://github.com/FelipeMMoraes.png"
        title="Felipe Moraes"
        subtitle="Fitness Trainer"
        exercise="Legs"
        dificulty="Begginer"
        workout="Lower Body"
      ></Card>
    </>
  )
}
