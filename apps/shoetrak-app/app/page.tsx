import { Button } from "@repo/ui/components/ui/button";

export default function Page(): JSX.Element {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Web
      </h1>
      <Button variant="default">Click</Button>
    </>
  );
}
