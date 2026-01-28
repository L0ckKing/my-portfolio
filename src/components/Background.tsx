import Aurora from './Aurora.tsx';
import '../App.css'

export default function Background() {

  return (
    <>
      <div className="fullscreen">
        <Aurora
        colorStops={["#7cff67","#B19EEF","#5227FF"]}
        amplitude={0.6}
        blend={0.45}
        />
      </div>
    </>
  )
}
