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

const ImagesCarrousel = () => {
    const [currentImage,setCurrentImage] = React.useState(0)
    const galleryRef = useRef<HTMLDivElement>(null)
    const persons: PersonInterface[] = [
        {
          name: 'John Doe',
          age: 25,
          location: 'New York',
          image: '/images/1.jpg',
        },
        {
          name: 'Jane Doe',
          age: 30,
          location: 'Los Angeles',
          image: '/images/2.jpg',
        },
        {
          name: 'Bob Smith',
          age: 35,
          location: 'Chicago',
          image: '/images/3.jpg',
        },
        {
          name: 'Alice Johnson',
          age: 40,
          location: 'Houston',
          image: '/images/4.jpg',
        },
        {
          name: 'Mike Brown',
          age: 45,
          location: 'Miami',
          image: '/images/5.jpg',
        },
        {
          name: 'Sarah Lee',
          age: 50,
          location: 'New York',
          image: '/images/6.jpg',
        },
        {
          name: 'David Kim',
          age: 55,
          location: 'Los Angeles',
          image: '/images/7.jpg',
        },
        {
          name: 'Emily Davis',
          age: 60,
          location: 'Chicago',
          image: '/images/8.jpg',
        },
        {
          name: 'Daniel Wilson',
          age: 65,
          location: 'Houston',
          image: '/images/9.jpg',
        },
        {
          name: 'Olivia Martin',
          age: 70,
          location: 'Miami',
          image: '/images/10.jpg',
        },
        {
          name: 'William Taylor',
          age: 75,
          location: 'New York',
          image: '/images/11.jpg',
        },
        {
          name: 'Sophia Anderson',
          age: 80,
          location: 'Los Angeles',
          image: '/images/12.jpg',
        },
      ];
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
                <div className='flex flex-col gap-4 absolute bottom-0 bg-white p-2 rounded-xl blur-md group-hover:blur-0 '>
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