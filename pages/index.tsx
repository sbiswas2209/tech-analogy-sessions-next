import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
export interface Photos {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
  }
const Home = ({photos}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(photos)
  return (
    <div>
      <h1>Photos</h1>
      <Link href={"/bye"} passHref><h1>Bye</h1></Link>
    <div>
      {
      photos.map((e: any) => <div key={e.id}>
        <Image src={e.thumbnailUrl} width={100} height={100} alt={e.title}/>
        <h1>{e.title}</h1>
        <br />
      </div>)
    }
    </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos", {method: "GET"});
  const content = await data.json();
  console.log(content)
  return  {
    props: {
      photos: content
    }
  }
} 

export default Home;
