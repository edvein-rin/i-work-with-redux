import { faker } from '@faker-js/faker';

const CUSTOMER_QUOTES = [
  'Back in my day, apples cost a nickel — and they came with worms for free!',
  'I only trust cash. Plastic is too slippery.',
  'Do you take Monopoly money? No? Then we have a problem.',
  'My accountant will handle the rest. Johnson? Oh wait — I fired him.',
  'Sonny, I once paid for groceries with a handshake and a promise.',
  'Change? No need. I’ll tip you in wisdom.',
  'Just round it down. I won’t tell.',
  'If this takes longer than 5 seconds, I’m calling your manager.',
  'Make it quick, the pigeons are watching.',
  'Don’t look now, but I’m being followed by time-travelers.',
  'I only carry bills folded into origami horses.',
  'Technically, the value of cash is a social contract. But fine, here’s your paper.',
  'Keep the change. Or don’t. Just forget you saw me.',
  'You didn’t see me here. This transaction never happened.',
  'This money has never been touched by sunlight. Use it wisely.',
];

export const generateCustomerQuote = () =>
  faker.helpers.arrayElement(CUSTOMER_QUOTES);
