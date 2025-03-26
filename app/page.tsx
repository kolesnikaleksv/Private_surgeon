import { Button } from '@/components/ui/button';
import Accordeon from './components/Accordeon';

export default function Home() {
  return (
    <>
      <div className="m-5">
        <h1 className="text-3xl">Hello Main Surgeon</h1>
        <Button className="bg-avocado-100">Click me</Button>
        <Button className="bg-avocado-200">Click me</Button>
        <hr />
        <Accordeon />
      </div>
    </>
  );
}
