import Image from "next/image";
import Link from "next/link";
import { GradientBackground } from "react-gradient-animation";

export const metadata = {
    title: 'Arsh Saxena',
};

export default function Home() {
    return (
        <>
            <div className='max-w-[980px] m-auto'>
                <div className="m-5 my-10 bg-[var(--surface)] dark:bg-[var(--surface)] rounded-[25px] p-5 md:p-7 md:text-[16px] text-md border-[1px] border-[var(--border-default)] md:dark:border-[var(--border-default)] space-x-4 md:space-x-10">
                    <div className="text-center">
                        <div className="font-black text-[40px] md:text-[70px]">Arsh Saxena</div>
                        <div>{2025 - 2005}, India</div>
                        <div className="mt-5 font-bold text-[17px] md:text-[22px] md:w-[60%] m-auto leading-7">
                            Student, developer, photographer, video editor, tech enthusiast, writer, and sneakerhead.
                        </div>
                        <div className="w-fit mx-auto mt-10 leading-10 text-[23px] md:text-[30px] flex flex-wrap justify-center gap-2">
                            <Image src="/emojis/books.png" width={27} height={27} alt="books"></Image>
                            <Image src="/emojis/boy-using-laptop.png" width={27} height={27} alt="boy-using-laptop"></Image>
                            <Image src="/emojis/camera.png" width={27} height={27} alt="camera"></Image>
                            <Image src="/emojis/movie-camera.png" width={27} height={27} alt="movie-camera"></Image>
                            <Image src="/emojis/laptop.png" width={27} height={27} alt="laptop"></Image>
                            <Image src="/emojis/pen.png" width={27} height={27} alt="pen"></Image>
                            <Image src="/emojis/shoes.png" width={27} height={27} alt="shoes"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
