import { routeConstants } from "constants/routeConstants";
import { useRouter } from "node_modules/next/dist/client/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>Home</div>
      <button onClick={() => router.push(routeConstants.chooseSize)}>
        Root
      </button>
    </>
  );
}
