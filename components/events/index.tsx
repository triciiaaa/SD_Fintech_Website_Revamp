import { EventsProps } from '@interfaces/events/Events';
import dynamic from 'next/dynamic';
import OtherEvents from './OtherEvents';
import Landing from './Landing';

// need to disable SSR for this component cos we are using date object generated at client side
const CalendarComp = dynamic(() => import('@components/events/CalendarComp'), {
  ssr: false,
});

const Events = ({ events }: EventsProps) => {
  return (
    <>
      <Landing />
      <CalendarComp events={events} />
      <OtherEvents events={events} />
    </>
  );
};

export default Events;
