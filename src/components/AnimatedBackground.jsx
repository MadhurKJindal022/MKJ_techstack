export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, #3e1b10 0%, #0b1326 50%), radial-gradient(circle at 100% 100%, #4d3a0a 0%, #0b1326 50%)",
        }}
      />
    </div>
  );
}