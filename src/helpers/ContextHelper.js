import { createContext } from 'react';
import { fontSizeAdapter } from 'src/helpers/adapters';

export const ContextHelper = createContext({ fontSize: fontSizeAdapter.size });
