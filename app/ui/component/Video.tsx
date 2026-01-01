'use client'
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoCard() {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const timeRef = useRef(0);

    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let rafId;

        const updateProgress = () => {
            if (video.duration) {
                const progress =
                    (video.currentTime / video.duration) * 100;

                progressRef.current.style.width = `${progress}%`;
                timeRef.current = video.currentTime;
            }
            rafId = requestAnimationFrame(updateProgress);
        };

        if (playing) {
            rafId = requestAnimationFrame(updateProgress);
        }

        return () => cancelAnimationFrame(rafId);
    }, [playing]);

    return (
        <div className="relative overflow-hidden rounded-2xl bg-black">

            {/* VIDEO */}
            <video
                ref={videoRef}
                src="/video.mp4"
                className="w-full h-[300px] object-cover"
                onLoadedMetadata={(e) => setDuration(e.target.duration)}
            />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
                <button
                    onClick={togglePlay}
                    className="pointer-events-auto w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer"
                >
                    {playing ? <Pause className="w-8 h-8 text-black" />
                        : <Play className="w-8 h-8 text-black ml-1" />
                    }
                </button>
            </div>

            {/* PROGRESS BAR */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-3 text-xs">
                    <span>
                        {Math.floor(timeRef.current / 60)}:
                        {Math.floor(timeRef.current % 60)
                            .toString()
                            .padStart(2, "0")}
                    </span>

                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div
                            ref={progressRef}
                            className="h-full bg-white"
                            style={{ width: "0%" }}
                        />
                    </div>

                    <span>
                        {Math.floor(duration / 60)}:
                        {Math.floor(duration % 60)
                            .toString()
                            .padStart(2, "0")}
                    </span>
                </div>
            </div>
        </div>
    );
}
