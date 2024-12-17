type NoteType = 'reset' | 'set' | 'get';

export default function manageNote(type: NoteType, newEvent?: any): any {
  if (typeof window !== 'undefined' && !!type) {
    switch (type) {
      case 'set':
        let oldEvents = manageNote('get');
        let events = [];
        events = oldEvents?.length ? [...oldEvents, newEvent] : [newEvent];
        return localStorage.setItem('events', JSON.stringify(events));
      case 'get':
        return JSON.parse(localStorage.getItem('events'));
      case 'reset':
        return localStorage.setItem('events', JSON.stringify([]));
      default:
        console.log('err: ', { type, newEvent });
    }
  }
}
