import "./../App.css";

export default function Clock ({clock, hours}) {
  clock = clock.split(":", 4);
  console.log(clock);
  clock.hours = Number(clock[0])+Number(hours)-2;
  clock.minutes = clock[1];
  clock[2] = clock[2].split(" ", 2);
  clock.seconds = clock[2][0];


  return (
    <article className="clock">
      <div
        className="clock"
        style={{
          "--hours": `${clock.hours}`,
          "--minutes": `${clock.minutes}`,
          "--seconds": `${clock.seconds}`,
        }}
      >
        <span className="clock__hours" />
        <span className="clock__minutes" />
        <span className="clock__seconds" />
      </div>
    </article>
  );
}
