interface Props {
    name: string,
    image: string
}

export default function PokemonCard({name, image}: Props) {
    return(
        <div className='bg-blue-300 h-[50vh]'>
            <h2 className="pt-5 text-[#fff] text-center capitalize">{name}</h2>
            <div className="w-[100vw] flex justify-center pt-4">
                <div className="w-[50px] h-[50px] rounded-[50%] bg-white">
                    <img src={image} alt={name} width={50} height={50} className="rounded-[50%]" />
                </div>
            </div>
        </div>
    )
}