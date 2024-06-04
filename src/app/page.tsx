export default async function Home() {
  return (
    <>
      <h1>Hello there 👋</h1>
      <ul>
        <li>Env 1: {process.env.ENV_1}</li>
        <li>Env 2: {process.env.ENV_2}</li>
        <li>Env 3: {process.env.ENV_3}</li>
      </ul>
    </>
  );
}
