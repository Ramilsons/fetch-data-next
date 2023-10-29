import WithRevalidate from "./withRevalidate";
import WithoutRevalidate from "./withoutRevalidate";

export default async function Home() {
  return (
    <>
      <WithoutRevalidate />
      <WithRevalidate />
    </>
  )
}
