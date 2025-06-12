"use client";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="w-full absolute scale-[1.5] pointer-events-none  h-[300px]  bg-transparent">
      <Spline
        scene="https://prod.spline.design/aKPz8a8IZwGLxHTa/scene.splinecode"
        options={{ renderMode: "offscreen" }}
      />
    </main>
  );
}

