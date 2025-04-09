import { Button } from '@/components/ui/button';
import ManeAccordion from '@/components/Accordion';

export default function Home() {
  return (
    <>
      <div className="m-0">
        <h1 className="text-3xl">Hello Main Surgeon</h1>
        <Button className="bg-avocado-100">Click me</Button>
        <Button className="bg-avocado-200">Click me</Button>
        <hr />
        <ManeAccordion />
        <div className="w-full bg-avocado-300 h-0.5 mt-4 mb-4"></div>
      </div>
    </>
  );
}
