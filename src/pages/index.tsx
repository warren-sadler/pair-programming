import { useContext } from "react";
import { CareContext } from "@/modules/care/components/CareContext";

export default function IndexPage() {
  const { providers } = useContext(CareContext);
  return (
    <main>
      <h2>Hello World</h2>
      <>
        {providers.length ? (
          <pre>{JSON.stringify(providers)}</pre>
        ) : (
          "Nothing to see here"
        )}
      </>
    </main>
  );
}
