import React, { useState, useRef, useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const vidRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [shouldLoad]);

  return (
    <div className="app__video" ref={containerRef}>
      <video
        ref={vidRef}
        src={shouldLoad ? meal : undefined}
        type="video/mp4"
        loop
        controls={false}
        muted
        preload="none"
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
