import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollVideoProps {
    videoFile: string;
    frameCount: number;
    frameRate: number;
    style?: React.CSSProperties;
    children?: ReactNode;
    overlayStyle?: React.CSSProperties;
}

/**
 * Scroll Video
 * A component that advances a video frame by frame as the user scrolls down the page
 */
export default function ScrollVideo(props: ScrollVideoProps) {
    const {
        videoFile,
        frameCount = 100,
        frameRate = 30,
        style,
        children,
        overlayStyle,
    } = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scrollY, setScrollY] = useState(0);

    // Calculate video duration
    const duration = frameCount / frameRate;

    // Scroll handler
    useEffect(() => {
        let ticking = false;
        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Set video currentTime based on scroll
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        // Get scroll progress (0-1) for the page
        const scrollProgress = Math.min(
            1,
            Math.max(
                0,
                window.scrollY /
                    (document.body.scrollHeight - window.innerHeight)
            )
        );
        const targetTime = duration * scrollProgress;
        // Use a smaller threshold for smoother playback
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
            video.currentTime = targetTime;
        }
    }, [scrollY, duration]);

    // Pause video always
    useEffect(() => {
        const video = videoRef.current;
        if (video) video.pause();
    }, [videoFile]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                ...style,
            }}
        >
            <video
                ref={videoRef}
                src={videoFile}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
                preload="auto"
                playsInline
                muted
                tabIndex={-1}
                aria-label="Scroll controlled video"
            />
            {children && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 10,
                        ...overlayStyle,
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
}