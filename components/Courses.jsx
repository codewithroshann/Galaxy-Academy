"use client";
import Image from "next/image";
import { IndianRupee, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
}
const CourseCard = ({
  index,
  id,
  title,
  description,
  image,
  price,
  professor,
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  return (
    <Card
      ref={ref}
      className={`bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-100 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transitionDuration: "300ms",
      }}
    >
      <CardHeader className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="rounded-t-lg w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-4 w-4" />
            {price}
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {professor}
          </div>
        </div>

        <CardTitle className="text-white mb-3 text-xl leading-tight">
          {title}
        </CardTitle>

        <CardDescription className="text-gray-300 mb-4 line-clamp-3">
          {description}
        </CardDescription>

        <Button
          onClick={() => router.push(`/course/${id}`)}
          variant="outline"
          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full transition-all duration-300 hover:transform hover:scale-105"
        >
          Get Course
        </Button>
      </CardContent>
    </Card>
  );
};
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn to build modern web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
    price: 4999,
    professor: "Dr. Aryan Mehta",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description:
      "Master data analysis, visualization, and ML algorithms using Python and popular libraries.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8e203b16d3?auto=format&fit=crop&w=800&q=60",
    price: 6999,
    professor: "Dr. Kavya Rao",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description:
      "Design engaging and user-friendly interfaces with Figma, Adobe XD, and UX best practices.",
    image:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=60",
    price: 3499,
    professor: "Prof. Ishan Kapoor",
  },
  {
    id: 4,
    title: "Digital Marketing Masterclass",
    description:
      "Become a pro at SEO, content strategy, social media, Google Ads, and email marketing.",
    image:
      "https://images.unsplash.com/photo-1611175694984-45e05b56a16f?auto=format&fit=crop&w=800&q=60",
    price: 2999,
    professor: "Prof. Radhika Verma",
  },
  {
    id: 5,
    title: "Ethical Hacking & Cybersecurity",
    description:
      "Understand vulnerabilities, penetration testing, and network security essentials.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
    price: 5999,
    professor: "Mr. Arjun Malhotra",
  },
  {
    id: 6,
    title: "Photography & Editing",
    description:
      "Learn DSLR photography, composition, and photo editing using Lightroom and Photoshop.",
    image:
      "https://images.unsplash.com/photo-1504198266285-1659d3eccc87?auto=format&fit=crop&w=800&q=60",
    price: 1999,
    professor: "Ms. Sneha Pillai",
  },
  {
    id: 7,
    title: "Artificial Intelligence Basics",
    description:
      "Understand neural networks, NLP, and AI use cases through beginner-friendly projects.",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c1d63f6746c?auto=format&fit=crop&w=800&q=60",
    price: 6499,
    professor: "Dr. Nikhil Joshi",
  },
  {
    id: 8,
    title: "Android App Development",
    description:
      "Build real-world Android apps using Kotlin and Jetpack Compose.",
    image:
      "https://images.unsplash.com/photo-1611262588024-3e42e9c1dc8f?auto=format&fit=crop&w=800&q=60",
    price: 4299,
    professor: "Prof. Mitali Das",
  },
  {
    id: 9,
    title: "Financial Literacy for Beginners",
    description:
      "Learn how to budget, invest, and manage money smartly from an early age.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d4?auto=format&fit=crop&w=800&q=60",
    price: 1499,
    professor: "Mr. Ritesh Aggarwal",
  },
  {
    id: 10,
    title: "Creative Writing & Storytelling",
    description:
      "Unleash your imagination and master plot, characters, and narrative voice.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=60",
    price: 2499,
    professor: "Ms. Tanya Sharma",
  },
];
const Courses = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Courses
          </h2>
          <p className="text-gray-300 text-lg">
            Discover a wide range of courses to enhance your skills and
            knowledge.
          </p>
        </div> 
        <Swiper className=" cursor-pointer "
          modules={[ Autoplay]}
        
          spaceBetween={20}
          slidesPerView={1}
          loop={true} // ✅ explicitly enable loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1180: { slidesPerView: 4 },

         
          }}
        >
          {courses.map((post, index) => (
            <SwiperSlide key={post.id}>
              <CourseCard {...post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Courses;
