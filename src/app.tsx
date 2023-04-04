import { createRoot } from 'react-dom/client';
import Application from 'components/Application';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(<Application />);
