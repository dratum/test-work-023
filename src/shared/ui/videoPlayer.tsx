import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  return (
    <ReactPlayer
      url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      controls
      width='100%'
      height='80%'
      style={{
        width: "80%",
        maxWidth: 400,
        height: 240,
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
};
