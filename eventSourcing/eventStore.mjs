import { log } from "console";


let eventList = [];

function addEvent(event) {
  eventList.push(event);
  console.log(event);
}

export const eventStore = {
    addEvent,
}