interface Observer {
  update: (data: any) => void;
}
interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}
