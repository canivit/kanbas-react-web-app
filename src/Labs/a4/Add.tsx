export function Add({ x, y }: { x: number; y: number }) {
  return (
    <div>
      <h2>Add</h2>
      <p>
        {x} + {y} = {x + y}
      </p>
    </div>
  );
}
