import Image from "next/image";

export interface Photos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
    }
const Photo = ({photo}) => {
    return (
        <div>
            Single Photo
            <h1>{photo.title}</h1>
            <Image src={photo.url} height={500} width={500} alt={photo.title} />
        </div>
    )
}
export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`, {method: "GET"});
    const data = await response.json();
    const paths: { params: { id: any; }; }[] = [];
    data.forEach((e:any) => {
        paths.push({params: {id: e.id.toString()}})
    })
    // console.log(paths)
    return {
        paths: paths,
        fallback: false
    }
}
export const getStaticProps = async ({params: {id}}) => {
    console.log("Props")
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {method: "GET"});
    const result = await data.json()
    return {
        props: {
            photo: result
        }
    }
}
export default Photo