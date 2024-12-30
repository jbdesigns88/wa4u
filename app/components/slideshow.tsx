"use client"; // Ensure this is at the top of the file

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import styles from "./slideshow.module.css";

interface SlideShowProps {
    speed: number;
    images: string[];
}

const SlideShow = ({ speed = 1000, images = [] }: SlideShowProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    const size = useMemo(() => images.length - 1, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage >= size ? 0 : prevImage + 1
            );
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, [speed, size, currentImage]);

    return (
        <div className={styles.slideshow}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt=""
                    width={1920}
                    height={1080}
                    className={`${styles.image} ${currentImage === index ? styles.visible : styles.hidden}`}
                />
            ))}
        </div>
    );
};

export default SlideShow;
