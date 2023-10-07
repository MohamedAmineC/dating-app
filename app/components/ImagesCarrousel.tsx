"use client"
import React, { useRef } from 'react'

import Image from "next/image"
import classes from './ImagesCarrousel.module.css'

export interface PersonInterface {
    name: string,
    age: number,
    location: string,
    image: string,
}

interface ImagesCarrouselProps {
    persons: PersonInterface[]
}

const ImagesCarrousel = ({persons}:ImagesCarrouselProps) => {
    const [currentImage,setCurrentImage] = React.useState(0)
    const galleryRef = useRef<HTMLDivElement>(null)
    
    const handleScroll = () => {
        if(galleryRef.current){
            const galleryWidth = galleryRef.current.offsetWidth;
            const scrollLeft = galleryRef.current.scrollLeft;
            const itemWidth = galleryRef.current.querySelector(`.${classes.GalleryItem}`)?.clientWidth || 0;
            const currentIndex = Math.round(scrollLeft / itemWidth);
            setCurrentImage(currentIndex);
        }
    }
  return (
    <div className={classes.Gallery} ref={galleryRef} onScroll={handleScroll}>
        {persons.map((person,i:number) => (
            <div key={i} className={`${classes.GalleryItem} group`}>
                <Image 
                src={person.image}
                alt="image"
                width={500}
                height={500}
                className="rounded-xl aspect-square"
                style={{objectFit: 'cover'}}
                />
                <div className='flex flex-col gap-4 absolute bottom-0 bg-white p-2 rounded-xl blur-md group-hover:blur-none '>
                    <div>
                        {person.name}, {person.age}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ImagesCarrousel