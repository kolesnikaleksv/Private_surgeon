import { Button } from '@/components/ui/button';
import ManeAccordion from '@/components/Accordion';

export default function Home() {
  return (
    <>
      <div className="m-5 dark">
        <h1 className="text-3xl">Hello Main Surgeon</h1>
        <Button className="bg-avocado-100">Click me</Button>
        <Button className="bg-avocado-200">Click me</Button>
        <hr />
        <ManeAccordion />
      </div>
    </>
  );
}
