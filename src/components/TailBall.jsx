const BALLColor = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500"
]

export default function TailBall({n}) {
  return (
    <div className={`w-20 h-20 ${BALLColor[Math.floor(n/10)]} rounded-full flex items-center justify-center text-white font-bold m-2`}>
      {n}
    </div>
  )
}
