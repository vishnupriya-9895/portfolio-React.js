import Antigravityy from "./Antigravityy";
const AntigravitySection = () => {
  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      <Antigravityy
        count={300}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#FF9FFC"
        autoAnimate={true}
        particleVariance={1}
      />
    </div>
  );
};

export default AntigravitySection;
